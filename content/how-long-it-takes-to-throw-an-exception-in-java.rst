How long it takes to throw an exception in Java
###############################################
:date: 2014-09-01 08:52
:author: MichaelHughes
:category: Uncategorized
:tags: design, java, tips
:slug: how-long-it-takes-to-throw-an-exception-in-java
:status: published

Today post is exceptional, we'll take a brief look at the time cost of
throwing and re-throwing exceptions and put that time cost in context.
To be specific, we'll look at the timing information for a set of
exceptions which might be found in a typical 3-tier business
application. In our example the exceptions are thrown and caught in
hierarchical order in order to promote separation between the tiers of
the application.

**[Please note all of the following information was gathered using JDK8
Update 20 running on an Intel Core i5-2400]**

I don’t want to jump into the debate about the “Best Practice” for
exception and error handling in Java, many other writers have already
covered the topic in detail. Today we will just look at how long a
couple different exception scenarios take to run in code and provide
discussion based on the those results.

To following along with the code I used to derive the following results
please see the Java files in
the \ `WrappedExceptions <http://codinginthetrenches.com/wp-content/uploads/2014/09/WrappedExceptions.zip>`__ archive.

The first case we look at consist of 3 tiers with a very strong
separation between tiers, including wrapped exceptions. The picture for
this looks like the following image.

[caption id="attachment\_232" align="aligncenter" width="346"]\ |A full
exception hierarchy| A full exception hierarchy[/caption]

Each level’s associated exception inherits from ``java.lang.Exception``
creating a simple checked exception. An application exception thrown by
a lower tier is caught and re-thrown at each tier with the *current*
tier’s exception. The full stack of errors took **1770** nanoseconds (on
average) to execute. Nanoseconds. 1800 nanoseconds is still admittedly a
relatively long time in the context of the speed of modern computer
hardware. 1800 nanoseconds in the context of business applications,
however, is next to nothing. We will come back to the “next to nothing
comment” in a bit though, next we will look at whether this timing
scales linearly with the number of exceptions thrown.

In this example the LowLevelClass throws a single
LowLevelException which is caught *and not* re-thrown by the
MidLevelClass. In short, this example throws only 1 exception while the
prior example threw 3 exceptions. The following is the diagram from
above updated for this example.

[caption id="attachment\_235" align="aligncenter" width="346"]\ |A
single exception is thrown| A single exception is thrown[/caption]

In this case the average runtime for the example was 590 nanoseconds.
Incidentally, 590 is also one third of 1770, not a particularly
surprising result given that lack of application logic beside exception
handling in the demo application.

Finally, to show either how good the Java JIT is at optimizing away
redundant code or alternatively how little actual logic is in this
application. The last exception related example throws no exceptions.
The measured run time for throwing no exceptions is **0 nanoseconds**.

At this point it’s worth noting that all application benchmarking is
subjective and the linked code is trivial in that sense that it doesn't
do anything useful apart from measuring how long it takes to throw an
exception. In some applications ~1800 nanoseconds may be a really long
time, as an example applications that run weather simulations come to
mind. 1800 nanoseconds is also really hard to visualize though, to help
put that number in context the linked example also measures how long it
takes to open a HTTPS connection to https://www.google.com and get the
results of a search. The timing to call Google was on average
5173110936. To summarize:

.. raw:: html

   <table>
   <thead>
   <tr>
   <td>

Case

.. raw:: html

   </td>
   <td>

Absolute time

.. raw:: html

   </td>
   <td>

Order of mesurement

.. raw:: html

   </td>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>

3 Exceptions

.. raw:: html

   </td>
   <td>

1780ns

.. raw:: html

   </td>
   <td>

microseconds (e.g. 1.7 µs)

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

1 Exception

.. raw:: html

   </td>
   <td>

590ns

.. raw:: html

   </td>
   <td>

nanoseconds

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

0 Exceptions

.. raw:: html

   </td>
   <td>

0ns

.. raw:: html

   </td>
   <td>

nanoseconds

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

Open internet call

.. raw:: html

   </td>
   <td>

5173110936ns

.. raw:: html

   </td>
   <td>

seconds (e.g. 5.17 seconds)

.. raw:: html

   </td>
   </tr>
   </tbody>
   </table>

The network time is useful reference point for myself since
several business applications I have worked on in the last few years
have depended on both internal corporate resources and external public
resources, all of which were accessed over a network connection. The
above is not to say that developers should go crazy with exceptions and
use them for control flow (`please, please don’t do
this <http://en.wikipedia.org/wiki/Spaghetti_code>`__), but it does
indicate that it is **very incorrect** to say an exception should not be
thrown because it’s “too expensive.” In short, in Java at least, figure
out an error handling strategy and if it includes exceptions, don't
worry about the performance impact (too much).

.. |A full exception hierarchy| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Fully-Wrapped-Exceptions.png
   :class: wp-image-232 size-full
   :width: 346px
   :height: 265px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Fully-Wrapped-Exceptions.png
.. |A single exception is thrown| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/Single-Exception.png
   :class: wp-image-235 size-full
   :width: 346px
   :height: 265px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/Single-Exception.png
