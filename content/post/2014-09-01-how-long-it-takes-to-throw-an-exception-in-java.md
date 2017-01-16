---
title: How long it takes to throw an exception in Java
author: MichaelHughes
layout: post
date: 2014-09-01
url: /2014/09/01/how-long-it-takes-to-throw-an-exception-in-java/
categories:
  - Uncategorized
tags:
  - design
  - java
  - tips

---
Today post is exceptional, we&#8217;ll take a brief look at the time cost of throwing and re-throwing exceptions and put that time cost in context. To be specific, we&#8217;ll look at the timing information for a set of exceptions which might be found in a typical 3-tier business application. In our example the exceptions are thrown and caught in hierarchical order in order to promote separation between the tiers of the application.

<!--more-->

**[Please note all of the following information was gathered using JDK8 Update 20 running on an Intel Core i5-2400]**

I don’t want to jump into the debate about the “Best Practice” for exception and error handling in Java, many other writers have already covered the topic in detail. Today we will just look at how long a couple different exception scenarios take to run in code and provide discussion based on the those results.

To following along with the code I used to derive the following results please see the Java files in the [WrappedExceptions][1] archive.

The first case we look at consist of 3 tiers with a very strong separation between tiers, including wrapped exceptions. The picture for this looks like the following image.<figure id="attachment_232" style="width: 346px" class="wp-caption aligncenter">

[<img class="wp-image-232 size-full" src="//codinginthetrenches.com/wp-content/uploads/2014/09/Fully-Wrapped-Exceptions.png" alt="A full exception hierarchy" width="346" height="265" />][2]<figcaption class="wp-caption-text">A full exception hierarchy</figcaption></figure> 

Each level’s associated exception inherits from `java.lang.Exception` creating a simple checked exception. An application exception thrown by a lower tier is caught and re-thrown at each tier with the _current_ tier’s exception. The full stack of errors took **1770** nanoseconds (on average) to execute. Nanoseconds. 1800 nanoseconds is still admittedly a relatively long time in the context of the speed of modern computer hardware. 1800 nanoseconds in the context of business applications, however, is next to nothing. We will come back to the “next to nothing comment” in a bit though, next we will look at whether this timing scales linearly with the number of exceptions thrown.

In this example the LowLevelClass throws a single LowLevelException which is caught _and not_ re-thrown by the MidLevelClass. In short, this example throws only 1 exception while the prior example threw 3 exceptions. The following is the diagram from above updated for this example.<figure id="attachment_235" style="width: 346px" class="wp-caption aligncenter">

[<img class="wp-image-235 size-full" src="//codinginthetrenches.com/wp-content/uploads/2014/09/Single-Exception.png" alt="A single exception is thrown" width="346" height="265" />][3]<figcaption class="wp-caption-text">A single exception is thrown</figcaption></figure> 

In this case the average runtime for the example was 590 nanoseconds. Incidentally, 590 is also one third of 1770, not a particularly surprising result given that lack of application logic beside exception handling in the demo application.

Finally, to show either how good the Java JIT is at optimizing away redundant code or alternatively how little actual logic is in this application. The last exception related example throws no exceptions. The measured run time for throwing no exceptions is **0 nanoseconds**.

At this point it’s worth noting that all application benchmarking is subjective and the linked code is trivial in that sense that it doesn&#8217;t do anything useful apart from measuring how long it takes to throw an exception. In some applications ~1800 nanoseconds may be a really long time, as an example applications that run weather simulations come to mind. 1800 nanoseconds is also really hard to visualize though, to help put that number in context the linked example also measures how long it takes to open a HTTPS connection to https://www.google.com and get the results of a search. The timing to call Google was on average 5173110936. To summarize:

<table>
  <tr>
    <td>
      Case
    </td>
    
    <td>
      Absolute time
    </td>
    
    <td>
      Order of mesurement
    </td>
  </tr>
  
  <tr>
    <td>
      3 Exceptions
    </td>
    
    <td>
      1780ns
    </td>
    
    <td>
      microseconds (e.g. 1.7 µs)
    </td>
  </tr>
  
  <tr>
    <td>
      1 Exception
    </td>
    
    <td>
      590ns
    </td>
    
    <td>
      nanoseconds
    </td>
  </tr>
  
  <tr>
    <td>
      0 Exceptions
    </td>
    
    <td>
      0ns
    </td>
    
    <td>
      nanoseconds
    </td>
  </tr>
  
  <tr>
    <td>
      Open internet call
    </td>
    
    <td>
      5173110936ns
    </td>
    
    <td>
      seconds (e.g. 5.17 seconds)
    </td>
  </tr>
</table>

The network time is useful reference point for myself since several business applications I have worked on in the last few years have depended on both internal corporate resources and external public resources, all of which were accessed over a network connection. The above is not to say that developers should go crazy with exceptions and use them for control flow ([please, please don’t do this][4]), but it does indicate that it is **very incorrect** to say an exception should not be thrown because it’s “too expensive.” In short, in Java at least, figure out an error handling strategy and if it includes exceptions, don&#8217;t worry about the performance impact (too much).

 [1]: //codinginthetrenches.com/wp-content/uploads/2014/09/WrappedExceptions.zip
 [2]: //codinginthetrenches.com/wp-content/uploads/2014/09/Fully-Wrapped-Exceptions.png
 [3]: //codinginthetrenches.com/wp-content/uploads/2014/09/Single-Exception.png
 [4]: http://en.wikipedia.org/wiki/Spaghetti_code