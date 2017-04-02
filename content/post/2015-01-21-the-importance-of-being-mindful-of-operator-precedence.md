---
title: The importance of being mindful of operator precedence
author: MichaelHughes

date: 2015-01-21
url: /2015/01/21/the-importance-of-being-mindful-of-operator-precedence/
categories:
  - Projects
tags:
  - javascript
  - tips

---
[Operator][1] precedence determines the order [[Operator][1] precedence determines the order][2] and binary operators are executed. In many situations, knowing basic mathematical operator precedence (for +,-,*, etc) is enough. In other situations not knowing the specifics of language can lead to hard to find errors. Quickly, in JavaScript what does `'the boogeyman ' + false ? 'is scary' : 'is not scary'` evaluate to?

 [1]: http://en.wikipedia.org/wiki/Operator_%28computer_programming%29
 [2]: http://en.wikipedia.org/wiki/Unary_operation
 
<!--more-->

At first glance this statement might appear to produce the phrase &#8216;the boogeyman is not scary&#8217;. Unfortunately, executing in a JavaScript interpreter—try it [here][3]—reveals that the actual result is &#8216;is scary&#8217;.

We get a different result from the expression due to JavaScript&#8217;s operator precedence rules. In our case the binary &#8216;+&#8217; operator has a higher precedence than &#8216;?&#8217; and is executed first. Knowing that &#8216;+&#8217; goes first we can break down the execution of the above statement into a couple steps:

  1. `'the boogeyman ' + false` which yields `'the boogeyman false'` thanks JavaScript’s [type coercion][4] rules for the &#8216;+&#8217; operator.
  2. `'the boogeyman false' ? 'is scary' : 'is not scary'` which yields `'is scary'` due to JavaScript’s [truthiness][5] rules declaring &#8216;the boogeyman false&#8217; as a true/truthy value.

Resolving the bug and getting the answer we want is accomplished by using parenthesis to force the ternary to be executed before the addition,
  
`'the boogeyman ' + (false ? 'is scary' : 'is not scary')`.

In many languages the first expression we wrote wouldn’t be possible to write due to lack of support for automatic type conversion between the relevant types. JavaScript, however, gives us the means to introduce subtle and hard to find bugs in web applications. This kind of bug is hard to find since a quick glance at the line won’t reveal an issue unless the reviewer is specifically looking for the issue.

For experienced developers the above may have been self-evident. Operator precedence is worth keeping in mind though because of its importance and the subtly of the bugs caused by it.

(For a [reference Mozilla has a table][6] describing JavaScript’s operator precedence rules.)


 [3]: http://repl.it/languages/JavaScript
 [4]: http://en.wikipedia.org/wiki/Type_conversion
 [5]: http://11heavens.com/falsy-and-truthy-in-javascript
 [6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FOperators%2FOperator_Precedence