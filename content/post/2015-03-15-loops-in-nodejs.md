---
title: Loops in NodeJS
author: MichaelHughes

date: 2015-03-15
url: /2015/03/15/loops-in-nodejs/
categories:
  - Software Design
tags:
  - fun
  - javascript
  - rant

---
I’ve written before about how it’s better to write straightforward code than trying to be clever and pre-optimize. Another example of where this rule is true is the cost of iteration between different styles of array loops in JavaScript when executed within NodeJS.

<!--more-->

Today we’re going to look at loop performance. Specifically, we’re going to look at the time performance (as opposed to memory cost) of different styles of loops as **executed on NodeJS v0.12.0** using a 1.4 GHz Intel Core I5 (I5-4260U). We’ll be using a fairly trivial task inside of the loop (adding two integers) so as to focus on the effect that different styles of loop definitions. The test involves a few different loop styles, a basic for loop, a basic while loop, loops with pre–computed end lengths, a couple more exotic loops styles for flavor.

Before getting to the results, a couple notes on the test itself. Each loop test uses a fresh copy of an array of integers. For the test results listed below the array had 1 million integers. Additionally, the runtime of each loop is the average of 100 trails of against the 1 million element array. For a detailed look at the code used to execute the test take a look at the linked [<span style="text-decoration: underline;"><span style="color: #0066cc;">GitHub Gist</span></span>][1].

<table>
  <tr>
    <th>
      #
    </th>
    
    <th>
      Loop Type
    </th>
    
    <th>
      Runtime
    </th>
    
    <th>
      Time relative to basic for-loop
    </th>
  </tr>
  
  <tr>
    <td>
      1
    </td>
    
    <td>
      while(++idx < precomputedLength)
    </td>
    
    <td>
      1.23 ms
    </td>
    
    <td>
      -0.03
    </td>
  </tr>
  
  <tr>
    <td>
      2
    </td>
    
    <td>
      for(idx = 0; idx < array.length; idx++)
    </td>
    
    <td>
      1.26 ms
    </td>
    
    <td>
      N/A
    </td>
  </tr>
  
  <tr>
    <td>
      3
    </td>
    
    <td>
      for(idx = 0; idx < precomputedLength; idx++)
    </td>
    
    <td>
      1.25 ms
    </td>
    
    <td>
      -0.01
    </td>
  </tr>
  
  <tr>
    <td>
      4
    </td>
    
    <td>
      for(idx = length -1; idx >= 0; idx&#8211;)
    </td>
    
    <td>
      1.27 ms
    </td>
    
    <td>
      -0.01
    </td>
  </tr>
  
  <tr>
    <td>
      5
    </td>
    
    <td>
      while (idx < preComputedLength) { &#8230;; idx++ }
    </td>
    
    <td>
      1.26 ms
    </td>
    
    <td>
      0.00
    </td>
  </tr>
  
  <tr>
    <td>
      6
    </td>
    
    <td>
      while (idx&#8211;)
    </td>
    
    <td>
      1.26 ms
    </td>
    
    <td>
      0.00
    </td>
  </tr>
</table>

Before moving onto a discussion of the results it is worth noting that the results from this test were variable enough and close enough between different loop types that the &#8220;fastest&#8221; loop type changed every time I ran the test! It just happened that the results that ended up recorded here show a while loop with a prefix incrementer as the fastest.

[As before][2], the salient point here is the miniscule difference between all of the loop types; we are looking at hundredths of a **millisecond** as the differentiator between the loop types. I have to give kudos to the [Google V8][3] team for creating a [JIT][4] compiler that is able to emit nearly performance equivalent native code for 6 different ways of defining a loop. What&#8217;s great about this is that in NodeJS I can always use the most straightforward way of iterating through an array (the second loop type above) without really worrying about any performance implications.

It&#8217;s great to use the most basic kind of for–loop because it makes the code much less likely of needing to be explained. A loop structure that starts with something like `while(++idx < precomputedLength)`, however, may need explanation and may cause the reader to get districted from what the loop is accomplishing. Since code is often written, and then read, and maybe rewritten, then read, and read, and read, etc it is important to make code easy to read. One way of accomplishing readability is to use common control flow structures, like our basic for–loop above. It is then very nice to see that the most basic of array iteration is on par in terms of executing time with other, more esoteric means of iterating through an array.

**Addendum:**

I want to emphasize that the above results are relevant to NodeJS running on a server. The performance of these different loop types may vary when run in web browsers. As always, when performance testing be sure to test in the environment in which the application will run.

 [1]: https://gist.github.com/msh9/cd26957480635f7aa076
 [2]: //codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/ "Java ArrayList resize costs"
 [3]: http://code.google.com/p/v8/
 [4]: http://en.wikipedia.org/wiki/Just-in-time_compilation