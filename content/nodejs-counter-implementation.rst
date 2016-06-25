NodeJS counter implementation
#############################
:date: 2016-02-20 15:29
:author: MichaelHughes
:category: Software Design
:tags: javascript, tips
:slug: nodejs-counter-implementation
:status: published

Performance counters can be implemented in applications to help
operators determine where bottlenecks are in the design. Microsoft has a
decent page, that’s somewhat Windows centric, about `performance
counters <https://msdn.microsoft.com/en-us/library/windows/desktop/aa371643(v=vs.85).aspx>`__.
This post is about implementing the most basic type of counter, a value
which monotonically increases, in JavaScript for NodeJS and the
performance implications of different designs.

Normally I take\ `issue with
being <https://codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/>`__
overly `worried
about <https://codinginthetrenches.com/2014/09/01/how-long-it-takes-to-throw-an-exception-in-java/>`__
performance before finishing a piece of logic, `particularly so if it
means using less than normal
coding <https://codinginthetrenches.com/2015/03/15/loops-in-nodejs/>`__
conventions.

Counters are a little bit different and deserve an exception. The point
of a counter is to be placed in critical areas of an application in
order to measure operational statistics. For example a high throughput
transactional system (high frequency trading system?) might use a
counter to track the number of equity bids made since the application
started. Another example might be of a system that counts the number of
messages passing through a enterprise message bus. Although as we will
see in a bit almost any method of incrementing an integer value is fast,
there are some cases were we want to implement the fastest possible
method. With all of that in mind, the following are the results of
testing different ways of incrementing a number.

All of the following timing information was done on a desktop PC with an
Intel Core i5-2400 CPU using NodeJS 4.3.0. All of the timings are
rounded to the nearest :sup:`1`/:sub:`10000`\ th and the times here are
for a total of 10000000 calls.

In order to cast a wide net the following methods for incrementing an
integer were tested:

#. Calling a method on a “Counter” object that adds an argument value or
   1 if the argument was falsey.

   -  ``this.val += incrVal || 1;``

#. Calling a method on a “Counter” object that adds an argument value or
   1 if the argument was falsey.

   -  ``if(incrVal) { this.val += incrVal; } else { this.val += 1; }``

#. Calling a method on a “Counter” object that always adds 1

   -  ``this.val += 1;``

#. Calling a method on a “Counter” object that always adds 1

   -  ``this.val++;``

#. Always add 1 to a bare number

   -  ``myVal++;``

#. Always add 1 to a bare number

   -  ``myVal += 1;``\ 

See `the full
source <https://gist.github.com/msh9/16e43bbb28d8237c648c>`__ for the
tests in a Gist.

+----------------+------------------+
| Type of code   | Time             |
+================+==================+
| #1             | 0.0264 seconds   |
+----------------+------------------+
| #2             | 0.0221 seconds   |
+----------------+------------------+
| #3             | 0.0202 seconds   |
+----------------+------------------+
| #4             | 0.0199 seconds   |
+----------------+------------------+
| #5             | 0.0135 seconds   |
+----------------+------------------+
| #6             | 0.0134 seconds   |
+----------------+------------------+

The results are not particularly surprising. The indirection of calling
an object’s method adds time to the overall total, roughly about double
in the worst case between #1 and #6. While using an object adds
overhead, individually maintaining numerous objects throughout a JS
application is asking for pain. Please don’t use methods #5 and #6
throughout a production application.

Something else interesting to note, at least with NodeJS 4.3.0 the
`KISS <https://en.wikipedia.org/wiki/KISS_principle>`__ method of using
an If statement instead of a 1-liner is faster (see #1 vs. #2).

In conclusion, if you don't need variable increments method #4 looks the
best, otherwise method #2 looks good. As with all benchmarking please do
not take these numbers out of context and remember that these are timing
values for **10 million total** operations. In other words, every method
presented here is very fast in all but the most extreme of
circumstances.
