Java ArrayList resize costs
###########################
:date: 2014-09-10 19:06
:author: MichaelHughes
:category: Uncategorized
:tags: design, java, rant, tips
:slug: java-arraylist-resize-costs
:status: published

Today we will look at whether it’s worth developer time to pre-size
ArrayList objects in Java application code. We will take a similar
approach to the one taken in a prior post on how long it takes to handle
an `exception in
Java <http://codinginthetrenches.com/2014/09/01/how-long-it-takes-to-throw-an-exception-in-java/>`__.

Java has two convenient generic List implementations,
`LinkedList <http://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html>`__ and
`ArrayList <http://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html>`__.
As the name implies, ArrayList is an array backed implementation of a
generic list which means that indexed based access to the list is
quick, iterative read back is quick, and at any given point in time the
object has a reference to a backing array of a fixed size. LinkedList in
Java are actually implemented using a `doubly linked
list <http://en.wikipedia.org/wiki/Doubly_linked_list>`__ data structure
and are convenient because adding one additional element to them is a
constant time operation (exceptfor exceptional circumstances like the
JVM running out of heap space, but that has nothing to do with the list
implementation.)

ArrayLists **don’t** support guaranteed constant time element insertion
because of the following situation:

[caption id="attachment\_251" align="aligncenter"
width="350"]\ |Inserting into an array which doesn't have enough in
space.| Insert "uh oh" from `Kid
Pix <http://en.wikipedia.org/wiki/Kid_Pix>`__ here[/caption]

Attempting to insert a pointer into an array like this in C would cause
a segfault (or at least that is what you hope for as opposed to
it silently failing and then crashing at some later date in time.) This
is a post about Java though so we have objects, object references, and
clever code in the library ArrayList implementation. Prior to
each \ `add <http://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html#add-E->`__
operation the ArrayList will ensure that there is sufficient capacity in
its backing array for one more element. If there is not sufficient
capacity a new array is allocated, the contents of the original backing
array are replicated into the new array, and then the insert continues.
**Alternatively,** an application can specify the required backing array
size when the ArrayList object is instantiated. Pre-sizing the ArrayList
avoids unnecessarily object allocations and time spent copying array
contents from one array to another on each sizing expansion.

As the post title and summary hints at, today we have some sample test
code and numbers showing whether it's actually worth spending time
worrying about pre-sizing array lists. As usual measurements are done
with a somewhat contrived testing harness,
`YMMV, <http://en.wiktionary.org/wiki/your_mileage_may_vary>`__ and all
commentary is made from the perspective of building reliable,
maintainable enterprise applications, not HPC applications, etc.

[**Spoiler alert**: The optimization is not worth it for run of the mill
business applications.]

The test method is to prefill an array with 100000 random strings and
then iterate over that array first filling an ArrayList without size
initialization, then with size initialization, and then a LinkedList
just for comparison. The code that ran the test is located `here on
GitHub <https://github.com/msh9/codinginthetrenches-examples/blob/master/ArrayListSizing/src/com/mihughes/examples/arraysize/Arraysize.java>`__

.. raw:: html

   <table>
   <thead>
   <tr>
   <td>

Case

.. raw:: html

   </td>
   <td>

Absolute Time

.. raw:: html

   </td>
   <td>

Order of measurement

.. raw:: html

   </td>
   <td>

Δ with pre-sized array time

.. raw:: html

   </td>
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>

ArrayList without pre-sizing

.. raw:: html

   </td>
   <td>

1130883 ns

.. raw:: html

   </td>
   <td>

milliseconds (i.e. 1.1ms)

.. raw:: html

   </td>
   <td>

279032 ns

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

ArrayList with pre-sizing

.. raw:: html

   </td>
   <td>

851851 ns

.. raw:: html

   </td>
   <td>

microseconds (i.e. 851µs)

.. raw:: html

   </td>
   <td>

0 ns

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

LinkedList

.. raw:: html

   </td>
   <td>

1098617 ns

.. raw:: html

   </td>
   <td>

milliseconds (i.e. 1ms)

.. raw:: html

   </td>
   <td>

246766 ns

.. raw:: html

   </td>
   </tr>
   </tbody>
   </table>

The numbers are **only** valid for relative comparison because they
include time spent reading data out of the source array. The salient
number here is the time difference between pre-sizing and not pre-sizing
which came in at 279032 ns. This sounds like a lot, it’s not—it’s
slightly less than .00028 seconds. In other words I would have to
execute this piece of code ~3500 times in order to have wasted 1 second
resizing the ArrayList. Let us assume that we’re returning 100000 items
at a time from a web service for some reason and are actually populating
5 ArrayList per request (1 for every tier in a classic 3-tier design
plus 2 more for fun). 5 ArrayLists mean that we have wasted 1 second for
every 700 requests, or ~1.4 ms per request.

At this point I should point out that I am not against optimization. I
don’t think applications should be written without regard for hardware
resources. Nor do I believe that performance does not matter in business
applications. What *is* important though is a rational approach to
optimization that balances cost against benefit. Put another way, if a
developer writes his or her code with ArrayList pre-sizing to start with
then by all means keep it in there, it *is faster.* If the code is not
originally written that way, however, spending even a moment to refactor
it for ArrayList pre-sizing should be at the very bottom of the bucket
when it comes to optimization.

That's all for today. In short, use pre-sized ArrayLists if it is
convenient and/or it happens to be a very performance sensitive
application.  Otherwise, in terms of performance it is probably more
important to make sure that the application’s data layer interactions
(SQL queries??) are well written than worrying about pre-sized lists.

.. |Inserting into an array which doesn't have enough in space.| image:: http://codinginthetrenches.com/wp-content/uploads/2014/09/ArrayListOutOfSpace.png
   :class: wp-image-251 size-full
   :width: 350px
   :height: 197px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/09/ArrayListOutOfSpace.png
