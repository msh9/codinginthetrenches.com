Loops in NodeJS
###############
:date: 2015-03-15 16:06
:author: MichaelHughes
:category: Software Design
:tags: fun, javascript, rant
:slug: loops-in-nodejs
:status: published

’re going to look at loop performance. Specifically, we’re going to look
at the time performance (as opposed to memory cost) of different styles
of loops as \ **executed on NodeJS v0.12.0** using a 1.4 GHz Intel Core
I5 (I5-4260U). We’ll be using a fairly trivial task inside of the loop
(adding two integers) so as to focus on the effect that different styles
of loop definitions. The test involves a few different loop styles, a
basic for loop, a basic while loop, loops with pre–computed end lengths,
a couple more exotic loops styles for flavor.

Before getting to the results, a couple notes on the test itself. Each
loop test uses a fresh copy of an array of integers. For the test
results listed below the array had 1 million integers. Additionally, the
runtime of each loop is the average of 100 trails of against the 1
million element array. For a detailed look at the code used to execute
the test take a look at the linked `GitHub
Gist <https://gist.github.com/msh9/cd26957480635f7aa076>`__.

.. raw:: html

   <table>
   <thead>
   <tr>
   <th>

#

.. raw:: html

   </th>
   <th>

Loop Type

.. raw:: html

   </th>
   <th>

Runtime

.. raw:: html

   </th>
   <th>

Time relative to basic for-loop

.. raw:: html

   </th>
   </tr>
   <tr>
   <td>

1

.. raw:: html

   </td>
   <td>

while(++idx < precomputedLength)

.. raw:: html

   </td>
   <td>

1.23 ms

.. raw:: html

   </td>
   <td>

-0.03

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

2

.. raw:: html

   </td>
   <td>

for(idx = 0; idx < array.length; idx++)

.. raw:: html

   </td>
   <td>

1.26 ms

.. raw:: html

   </td>
   <td>

N/A

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

3

.. raw:: html

   </td>
   <td>

for(idx = 0; idx < precomputedLength; idx++)

.. raw:: html

   </td>
   <td>

1.25 ms

.. raw:: html

   </td>
   <td>

-0.01

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

4

.. raw:: html

   </td>
   <td>

for(idx = length -1; idx >= 0; idx--)

.. raw:: html

   </td>
   <td>

1.27 ms

.. raw:: html

   </td>
   <td>

-0.01

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

5

.. raw:: html

   </td>
   <td>

while (idx < preComputedLength) { ...; idx++ }

.. raw:: html

   </td>
   <td>

1.26 ms

.. raw:: html

   </td>
   <td>

0.00

.. raw:: html

   </td>
   </tr>
   <tr>
   <td>

6

.. raw:: html

   </td>
   <td>

while (idx--)

.. raw:: html

   </td>
   <td>

1.26 ms

.. raw:: html

   </td>
   <td>

0.00

.. raw:: html

   </td>
   </tr>
   </thead>
   </table>

Before moving onto a discussion of the results it is worth noting that
the results from this test were variable enough and close enough between
different loop types that the "fastest" loop type changed every time I
ran the test! It just happened that the results that ended up recorded
here show a while loop with a prefix incrementer as the fastest.

`As
before <http://codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/>`__,
the salient point here is the miniscule difference between all of the
loop types; we are looking at hundredths of a **millisecond** as the
differentiator between the loop types. I have to give kudos to the
`Google V8 <http://code.google.com/p/v8/>`__ team for creating a
`JIT <http://en.wikipedia.org/wiki/Just-in-time_compilation>`__ compiler
that is able to emit nearly performance equivalent native code for 6
different ways of defining a loop. What's great about this is that in
NodeJS I can always use the most straightforward way of iterating
through an array (the second loop type above) without really worrying
about any performance implications.

It's great to use the most basic kind of for–loop because it makes the
code much less likely of needing to be explained. A loop structure that
starts with something like ``while(++idx < precomputedLength)``,
however, may need explanation and may cause the reader to get districted
from what the loop is accomplishing. Since code is often written, and
then read, and maybe rewritten, then read, and read, and read, etc it is
important to make code easy to read. One way of accomplishing
readability is to use common control flow structures, like our basic
for–loop above. It is then very nice to see that the most basic of array
iteration is on par in terms of executing time with other, more esoteric
means of iterating through an array.

**Addendum:**

I want to emphasize that the above results are relevant to NodeJS
running on a server. The performance of these different loop types may
vary when run in web browsers. As always, when performance testing be
sure to test in the environment in which the application will run.
