---
title: Class hierarchy design
author: MichaelHughes
layout: post
date: 2016-02-20
url: /2016/02/20/class-hierarchy-design/
categories:
  - Software Design
tags:
  - design

---
For the love of all that is dear to software development avoid parallel but separate class hierarchies.

* * *

Today we’re going to talk a little bit about type hierarchy design and why composition is useful to consider in certain scenarios.

<!--more-->

Let&#8217;s talk about a use of Java interfaces and interface implementers I encountered recently.

The [Apache Storm][1] project implements a near real time message processing system. The project contains two type hierarchies for sending messages. Ostensibly the two type hierarchies are separate because one serves the needs of simple clients that do common operations and the other serves the needs of advance clients that do uncommon operations. This was interesting to me because it is the type of scenario where direct inheritance is often used.

  * Storm&#8217;s [basic output collector][2]
  * Storm&#8217;s [output collector][3]

In pictures:

<a href="http://codinginthetrenches.com/wp-content/uploads/2016/02/Storm-Interface-Inheritence.png" rel="attachment wp-att-457"><img class="aligncenter size-full wp-image-457" src="http://codinginthetrenches.com/wp-content/uploads/2016/02/Storm-Interface-Inheritence.png" alt="Storm Interface Inheritence" width="578" height="425" srcset="https://codinginthetrenches.com/wp-content/uploads/2016/02/Storm-Interface-Inheritence-300x221.png 300w, https://codinginthetrenches.com/wp-content/uploads/2016/02/Storm-Interface-Inheritence.png 578w" sizes="(max-width: 578px) 100vw, 578px" /></a>

On the left we have how Storm is currently implemented. Circled on the right we have another way of implementing basic and advanced client use scenarios. I am, admittedly, over simplify the Storm project’s “Collector” types here. The project instead of using inheritance has two separate Java package trees and type hierarchies for these different usages. The interesting thing about this though is that the two hierarchies are designed to provide the same fundamental functionality, an API for sending events. The two cannot be used together, however, because they sit in different type hierarchies.

There is, for example, no parent “Collector” type which can be handed to another type for use in sending events. For the sake of the argument let’s look at an example use case, an error handler.

![Emit errors](/images/2016-02-20-class-hierarchy/error-flow.svg "Decision tree for emitting errors to a handler")
 

Here is a simplistic logic tree for some component in storm that may emit events using one of the collectors’ interfaces. The error case is the interesting one since it&#8217;s often a scenario where we want to execute the same logic regardless of the contents of “thing” or “data”. We can’t though. In Storm a bolt, the “thing” in the diagram, may emit using two different interfaces which don’t share a type hierarchy. There are ways around using separate but not related types, method overloading is one path.

```java
public class FooErrorHandler {
  public void handleError(IOutputCollector outputer, Thing data) {
    SomeErrMessageType error = this.processError(data);
    outputer.emit(error);
  }
  public void handleError(IBasicOutputCollector outputer, Thing data) {
    SomeErrMessageType error = this.processError(data);
    outputer.emit(error);
  }
}
```

The solution works, it even seems somewhat elegant at first glance. My issue with it is that were the collectors to share a common hierarchy or be built out of a composition of parts we would not need this solution in the first place. The output collectors incidentally also suffer from the 1-1 interface type to class type coding pattern that has been [discussed here before][4]. The proliferation of interfaces used only in one location add to set of incompatible but related types.

##### An alternative?

I do not mean to be overly critical of Apache Storm, the project is actually a very cool piece of technology. It just happens to be a public example of a design that I&#8217;ve seen in several places. Having said all that, let’s look at what could be done differently.

[Composition over inheritance][5] is another approach to assembling logic across types. The Go programming language is one of the better examples of having [composition baked into the language][6]. The idea is that instead of building out fixed hierarchies of types we instead define the specific behavioral goals (the interface contract) first and then implement the behavior as needed in one or more base classes. In composition our interfaces remain small and focused on similarly related behaviors in order to promote reuse and flexibility.

Java’s support for compositional style design is more lacking than Go’s, but we can still show what this looks like based on our mini Storm example from above.

```java
import java.util.List;
public class OutputExample {
    public interface Error {
        void reportError(Throwable error);
    }
    public class ErrReporter implements Error {
        public void reportError(Throwable error) {
            //Do stuff
        }
    }
    public interface Emitter {
        void emit(List someAdvancedType);
        void emit(String someLessAdvancedType);
    }
    public class Outputter implements Emitter,Error {
        private ErrReporter myError;
        public void reportError(Throwable error) {
            this.myError.reportError(error);
        }
        public void emit(List&lt;String&gt; someAdvancedType) {
            //Do stuff
        }
        public void emit(String someAdvancedType) {
            //Do stuff
        }
    }
}
```

Behaviors are now collected as independent interfaces which can be implemented separately. We can now have an output class that reports errors, like the one in the example above, or we can chose to forgo that behavior. Our error handling example from above is now also resolved since the behavior of emitting data is collected in a single interface. Finally, there is only a single implementation of Error and it is composed into the Outputter class via a forwarding method. As mentioned earlier while implementation composition is relatively effortless in Go, it is somewhat awkward in Java due to lack of language support.

Awkwardness aside, composing implementations gives us more freedom to write other types that use these classes. I hope this brief article encourages the evaluation of an additional OOP technique in future projects.

 [1]: https://storm.apache.org/
 [2]: https://github.com/apache/storm/blob/a4f9f8bc5b4ca85de487a0a868e519ddcb94e852/storm-core/src/jvm/org/apache/storm/topology/IBasicOutputCollector.java
 [3]: https://github.com/apache/storm/blob/a4f9f8bc5b4ca85de487a0a868e519ddcb94e852/storm-core/src/jvm/org/apache/storm/task/IOutputCollector.java
 [4]: http://codinginthetrenches.com/2014/09/25/interface-mania-considering-when-to-add-an-interface-for-class/
 [5]: https://en.wikipedia.org/wiki/Composition_over_inheritance
 [6]: http://talks.golang.org/2012/splash.article#TOC_15.