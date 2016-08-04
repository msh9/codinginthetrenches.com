---
title: NodeJS counter implementation
author: MichaelHughes
layout: post
date: 2016-02-20
url: /2016/02/20/nodejs-counter-implementation/
categories:
  - Software Design
tags:
  - javascript
  - tips

---
Performance counters can be implemented in applications to help operators determine where bottlenecks are in the design. Microsoft has a decent page, that’s somewhat Windows centric, about [performance counters][1]. This post is about implementing the most basic type of counter, a value which monotonically increases, in JavaScript for NodeJS and the performance implications of different designs.


 [1]: https://msdn.microsoft.com/en-us/library/windows/desktop/aa371643(v=vs.85).aspx

<!--more-->

Normally I take [issue with being][2] overly [worried about][3] performance before finishing a piece of logic, [particularly so if it means using less than normal coding][4] conventions.

Counters are a little bit different and deserve an exception. The point of a counter is to be placed in critical areas of an application in order to measure operational statistics. For example a high throughput transactional system (high frequency trading system?) might use a counter to track the number of equity bids made since the application started. Another example might be of a system that counts the number of messages passing through a enterprise message bus. Although as we will see in a bit almost any method of incrementing an integer value is fast, there are some cases were we want to implement the fastest possible method. With all of that in mind, the following are the results of testing different ways of incrementing a number.

All of the following timing information was done on a desktop PC with an Intel Core i5-2400 CPU using NodeJS 4.3.0. All of the timings are rounded to the nearest <sup>1</sup>/<sub>10000</sub>th and the times here are for a total of 10000000 calls.

In order to cast a wide net the following methods for incrementing an integer were tested:

  1. Calling a method on a “Counter” object that adds an argument value or 1 if the argument was falsey. 
      * `this.val += incrVal || 1;`
  2. Calling a method on a “Counter” object that adds an argument value or 1 if the argument was falsey. 
      * `if(incrVal) { this.val += incrVal; } else { this.val += 1; }`
  3. Calling a method on a “Counter” object that always adds 1 
      * `this.val += 1;`
  4. Calling a method on a “Counter” object that always adds 1 
      * `this.val++;`
  5. Always add 1 to a bare number 
      * `myVal++;`
  6. Always add 1 to a bare number 
      * `myVal += 1;<code>`</code>

See [the full source][5] for the tests in a Gist.

| Type of code | Time           |
| ------------ | -------------- |
| #1           | 0.0264 seconds |
| #2           | 0.0221 seconds |
| #3           | 0.0202 seconds |
| #4           | 0.0199 seconds |
| #5           | 0.0135 seconds |
| #6           | 0.0134 seconds |

The results are not particularly surprising. The indirection of calling an object’s method adds time to the overall total, roughly about double in the worst case between #1 and #6. While using an object adds overhead, individually maintaining numerous objects throughout a JS application is asking for pain. Please don’t use methods #5 and #6 throughout a production application.

Something else interesting to note, at least with NodeJS 4.3.0 the [KISS][6] method of using an If statement instead of a 1-liner is faster (see #1 vs. #2).

In conclusion, if you don&#8217;t need variable increments method #4 looks the best, otherwise method #2 looks good. As with all benchmarking please do not take these numbers out of context and remember that these are timing values for **10 million total** operations. In other words, every method presented here is very fast in all but the most extreme of circumstances.

 [2]: https://codinginthetrenches.com/2014/09/10/java-arraylist-resize-costs/
 [3]: https://codinginthetrenches.com/2014/09/01/how-long-it-takes-to-throw-an-exception-in-java/
 [4]: https://codinginthetrenches.com/2015/03/15/loops-in-nodejs/
 [5]: https://gist.github.com/msh9/16e43bbb28d8237c648c
 [6]: https://en.wikipedia.org/wiki/KISS_principle