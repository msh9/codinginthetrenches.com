---
title: 'Interface mania: Considering when to add an interface for class.'
author: MichaelHughes
layout: post
date: 2014-09-26
url: /2014/09/25/interface-mania-considering-when-to-add-an-interface-for-class/
categories:
  - Uncategorized
tags:
  - design
  - java
  - philosophy
  - rant

---
Something introduced fairly early in programming courses is the concept of an [interface][1]. In practice interfaces help to define the boundaries between components of a system, define the behavior of underlying implementors of the interface, and make it easier to switch implementations of said behavior down the road. Today’s post offers a few thoughts on where interfaces should and should not be used.

<!--more-->

Car analogies seems to come up a lot when giving introductory examples to interfaces, so let’s have another. A typical interface example might look like the following:<figure id="attachment_262" style="width: 304px" class="wp-caption aligncenter">

[<img class="wp-image-262 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Good-Interfaces.png" alt="An interface is implemented by two objects" width="304" height="475" />][2]<figcaption class="wp-caption-text">Using an interface</figcaption></figure> 

This diagram displays a couple useful features of an interface, it creates a contract defining what a ‘Car’ is and it hides (from client code) whether the implementation is a ‘Ford car’ or a ‘GM car.’ Were we to implement software following the above diagram it would be possible to switch out the ‘drivenCar’ with another implementer of the Car interface and the entire application would continue operate.

Conceptually this is all well and good. The reason for this post’s existence is that a number of Java [Spring][3] applications seem to end up looking like this:<figure id="attachment_263" style="width: 486px" class="wp-caption aligncenter">

[<img class="wp-image-263 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Interfaces.png" alt="Each interface has only one implementer" width="486" height="247" />][4]<figcaption class="wp-caption-text">A poor usage of the interface type</figcaption></figure> 

The problem with this is that the interfaces in this diagram don’t serve a purpose. They are not helping to encapsulate multiple implementers, helping to facilitate switching between providers in a client classes, nor helping to define the behavior of the implementing classes any more than the implementing classes have already.

Creating an interface without regard for whether one is needed creates extraneous project files that have to be tracked and modified throughout the life of the application. It is, arguably, easy to maintain extra interface definitions and of little effort to track extra files in a modern IDE. In a prior blog [post I made a point][5] to point out that minor time saving optimizations for the code or the developer are usually not worth it in monetary terms.

The point here, however, is that such extraneous interfaces should not be created in the first place. There are many instances of interfaces that make perfect sense in an application. Another canonical example is an interface for payment processors.<figure id="attachment_265" style="width: 482px" class="wp-caption aligncenter">

[<img class="wp-image-265 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Payment-Processors1.png" alt="2 or more credit card company classes implement the same interface" width="482" height="475" />][6]<figcaption class="wp-caption-text">Multiple classes implementing the same interface.</figcaption></figure> 

In this example we have multiple payment processors, all of which do the same thing. Each payment processor class implements the same interface and one is picked for use at run time based on a selection by an actor external to the application. An interface in this situation is helpful since it hides the details of the specific payment processor from the client code.

Another example:<figure id="attachment_267" style="width: 494px" class="wp-caption aligncenter">

[<img class="wp-image-267 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Spring-Application.png" alt="Several DAO interfaces implemented by exactly one DAO" width="494" height="247" />][7]<figcaption class="wp-caption-text">A single interface for each DAO</figcaption></figure> 

The above is something see often in Spring applications. An interface that is implemented by a single class which is always used as the implementation for that interface. Furthermore given that these are [data access layer][8] classes specific to the internals of the application it is unlikely that there will ever be additional implementations that implement the interface.

### Objections

  * It’s easier to add implementers to the interface should new ones ever be needed in the future. 
      * True—but it’s also extremely easy to extract an interface from an existing concrete class by hand and even easier by using a tool
  * It makes testing easier in a dependency injection environment 
      * Not true, using setter injection or constructor injection makes unit testing classes easier. Modern mocking frameworks like EasyMock and [Something introduced fairly early in programming courses is the concept of an [interface][1]. In practice interfaces help to define the boundaries between components of a system, define the behavior of underlying implementors of the interface, and make it easier to switch implementations of said behavior down the road. Today’s post offers a few thoughts on where interfaces should and should not be used.

<!--more-->

Car analogies seems to come up a lot when giving introductory examples to interfaces, so let’s have another. A typical interface example might look like the following:<figure id="attachment_262" style="width: 304px" class="wp-caption aligncenter">

[<img class="wp-image-262 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Good-Interfaces.png" alt="An interface is implemented by two objects" width="304" height="475" />][2]<figcaption class="wp-caption-text">Using an interface</figcaption></figure> 

This diagram displays a couple useful features of an interface, it creates a contract defining what a ‘Car’ is and it hides (from client code) whether the implementation is a ‘Ford car’ or a ‘GM car.’ Were we to implement software following the above diagram it would be possible to switch out the ‘drivenCar’ with another implementer of the Car interface and the entire application would continue operate.

Conceptually this is all well and good. The reason for this post’s existence is that a number of Java [Spring][3] applications seem to end up looking like this:<figure id="attachment_263" style="width: 486px" class="wp-caption aligncenter">

[<img class="wp-image-263 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Interfaces.png" alt="Each interface has only one implementer" width="486" height="247" />][4]<figcaption class="wp-caption-text">A poor usage of the interface type</figcaption></figure> 

The problem with this is that the interfaces in this diagram don’t serve a purpose. They are not helping to encapsulate multiple implementers, helping to facilitate switching between providers in a client classes, nor helping to define the behavior of the implementing classes any more than the implementing classes have already.

Creating an interface without regard for whether one is needed creates extraneous project files that have to be tracked and modified throughout the life of the application. It is, arguably, easy to maintain extra interface definitions and of little effort to track extra files in a modern IDE. In a prior blog [post I made a point][5] to point out that minor time saving optimizations for the code or the developer are usually not worth it in monetary terms.

The point here, however, is that such extraneous interfaces should not be created in the first place. There are many instances of interfaces that make perfect sense in an application. Another canonical example is an interface for payment processors.<figure id="attachment_265" style="width: 482px" class="wp-caption aligncenter">

[<img class="wp-image-265 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Payment-Processors1.png" alt="2 or more credit card company classes implement the same interface" width="482" height="475" />][6]<figcaption class="wp-caption-text">Multiple classes implementing the same interface.</figcaption></figure> 

In this example we have multiple payment processors, all of which do the same thing. Each payment processor class implements the same interface and one is picked for use at run time based on a selection by an actor external to the application. An interface in this situation is helpful since it hides the details of the specific payment processor from the client code.

Another example:<figure id="attachment_267" style="width: 494px" class="wp-caption aligncenter">

[<img class="wp-image-267 size-full" src="http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Spring-Application.png" alt="Several DAO interfaces implemented by exactly one DAO" width="494" height="247" />][7]<figcaption class="wp-caption-text">A single interface for each DAO</figcaption></figure> 

The above is something see often in Spring applications. An interface that is implemented by a single class which is always used as the implementation for that interface. Furthermore given that these are [data access layer][8] classes specific to the internals of the application it is unlikely that there will ever be additional implementations that implement the interface.

### Objections

  * It’s easier to add implementers to the interface should new ones ever be needed in the future. 
      * True—but it’s also extremely easy to extract an interface from an existing concrete class by hand and even easier by using a tool
  * It makes testing easier in a dependency injection environment 
      * Not true, using setter injection or constructor injection makes unit testing classes easier. Modern mocking frameworks like EasyMock and][9] a concrete implementation class as they are at mocking interfaces.
  * That’s how I have always done it… 
      * There is definitely some credence to not changing the status quo. Having common practices makes it easier for new developers to get ramped up on frameworks and applications. The point of this post, however, is that using interfaces everywhere just doesn’t make sense.

Let’s try using interfaces in the following situations where they are needed.

  * Multiple classes with similar external behavior, but dissimilar internal behavior; this is the payment processor example.
  * Component boundaries where a defined external behavior is exposed to an unknown set of clients; this is an example of a SDK or API in a library intended for distribution.
  * Shared behavior where multiple classes implement similar external functionality that can be standardized. This case is a refactoring example. Over time, as an application grows I may develop similar functionality in multiple components and eventually chose to extract a common interface.

 [1]: http://en.wikipedia.org/wiki/Interface_(computing)
 [2]: http://codinginthetrenches.com/wp-content/uploads/2014/09/Good-Interfaces.png
 [3]: http://projects.spring.io/spring-framework/
 [4]: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Interfaces.png
 [5]: http://codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/ "Java ArrayList resize costs"
 [6]: http://codinginthetrenches.com/wp-content/uploads/2014/09/Payment-Processors1.png
 [7]: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Spring-Application.png
 [8]: http://www.oracle.com/technetwork/java/dataaccessobject-138824.html
 [9]: http://docs.mockito.googlecode.com/hg/latest/org/mockito/Mockito.html#2