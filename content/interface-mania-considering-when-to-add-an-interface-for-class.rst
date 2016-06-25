Interface mania: Considering when to add an interface for class.
################################################################
:date: 2014-09-25 19:10
:author: MichaelHughes
:category: Uncategorized
:tags: design, java, philosophy, rant
:slug: interface-mania-considering-when-to-add-an-interface-for-class
:status: published

Something introduced fairly early in programming courses is the concept
of an
`interface <http://en.wikipedia.org/wiki/Interface_(computing)>`__. In
practice interfaces help to define the boundaries between components of
a system, define the behavior of underlying implementors of the
interface, and make it easier to switch implementations of said behavior
down the road. Today’s post offers a few thoughts on where interfaces
should and should not be used.

Car analogies seems to come up a lot when giving introductory examples
to interfaces, so let’s have another. A typical interface example might
look like the following:

[caption id="attachment\_262" align="aligncenter" width="304"]\ |An
interface is implemented by two objects| Using an interface[/caption]

This diagram displays a couple useful features of an interface, it
creates a contract defining what a ‘Car’ is and it hides (from client
code) whether the implementation is a ‘Ford car’ or a ‘GM car.’ Were we
to implement software following the above diagram it would be possible
to switch out the ‘drivenCar’ with another implementer of the Car
interface and the entire application would continue operate.

Conceptually this is all well and good. The reason for this post’s
existence is that a number of Java
`Spring <http://projects.spring.io/spring-framework/>`__ applications
seem to end up looking like this:

[caption id="attachment\_263" align="aligncenter" width="486"]\ |Each
interface has only one implementer| A poor usage of the interface
type[/caption]

The problem with this is that the interfaces in this diagram don’t serve
a purpose. They are not helping to encapsulate multiple implementers,
helping to facilitate switching between providers in a client classes,
nor helping to define the behavior of the implementing classes any more
than the implementing classes have already.

Creating an interface without regard for whether one is needed creates
extraneous project files that have to be tracked and modified throughout
the life of the application. It is, arguably, easy to maintain extra
interface definitions and of little effort to track extra files in a
modern IDE. In a prior blog `post I made a
point <http://codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/>`__
to point out that minor time saving optimizations for the code or
the developer are usually not worth it in monetary terms.

The point here, however, is that such extraneous interfaces should not
be created in the first place. There are many instances of interfaces
that make perfect sense in an application. Another canonical example is
an interface for payment processors.

[caption id="attachment\_265" align="aligncenter" width="482"]\ |2 or
more credit card company classes implement the same interface| Multiple
classes implementing the same interface.[/caption]

In this example we have multiple payment processors, all of which do the
same thing. Each payment processor class implements the same interface
and one is picked for use at run time based on a selection by an actor
external to the application. An interface in this situation is helpful
since it hides the details of the specific payment processor from the
client code.

Another example:

[caption id="attachment\_267" align="aligncenter" width="494"]\ |Several
DAO interfaces implemented by exactly one DAO| A single interface for
each DAO[/caption]

The above is something see often in Spring applications. An interface
that is implemented by a single class which is always used as the
implementation for that interface. Furthermore given that these are
`data access
layer <http://www.oracle.com/technetwork/java/dataaccessobject-138824.html>`__
classes specific to the internals of the application it is unlikely that
there will ever be additional implementations that implement the
interface.

Objections
~~~~~~~~~~

-  It’s easier to add implementers to the interface should new ones ever
   be needed in the future.

   -  True—but it’s also extremely easy to extract an interface from an
      existing concrete class by hand and even easier by using a tool

-  It makes testing easier in a dependency injection environment

   -  Not true, using setter injection or constructor injection makes
      unit testing classes easier. Modern mocking frameworks like
      EasyMock and `Mockito are just as capable of
      mocking <http://docs.mockito.googlecode.com/hg/latest/org/mockito/Mockito.html#2>`__\ a
      concrete implementation class as they are at mocking interfaces.

-  That’s how I have always done it…

   -  There is definitely some credence to not changing the status quo.
      Having common practices makes it easier for new developers to get
      ramped up on frameworks and applications. The point of this post,
      however, is that using interfaces everywhere just doesn’t make
      sense.

Let’s try using interfaces in the following situations where they are
needed.

-  Multiple classes with similar external behavior, but dissimilar
   internal behavior; this is the payment processor example.
-  Component boundaries where a defined external behavior is exposed to
   an unknown set of clients; this is an example of a SDK or API in a
   library intended for distribution.
-  Shared behavior where multiple classes implement similar external
   functionality that can be standardized. This case is a refactoring
   example. Over time, as an application grows I may develop similar
   functionality in multiple components and eventually chose to extract
   a common interface.

.. |An interface is implemented by two objects| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Good-Interfaces.png
   :class: wp-image-262 size-full
   :width: 304px
   :height: 475px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Good-Interfaces.png
.. |Each interface has only one implementer| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Interfaces.png
   :class: wp-image-263 size-full
   :width: 486px
   :height: 247px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Interfaces.png
.. |2 or more credit card company classes implement the same interface| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Payment-Processors1.png
   :class: wp-image-265 size-full
   :width: 482px
   :height: 475px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Payment-Processors1.png
.. |Several DAO interfaces implemented by exactly one DAO| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Spring-Application.png
   :class: wp-image-267 size-full
   :width: 494px
   :height: 247px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Bad-Spring-Application.png
