+++
tags = []
categories = []
description = "A quick post on creating sleeps in JavaScript"
draft = true
author = "Michael Hughes"
date = "2017-10-02"
title = "Creating a sleep loop in JavaScript" 
+++

Today's post is a quick tip on how to easily create a sleep-delay loop in JavaScript.

<!--more-->

JavaScript exposed APIs tend to be asynchronous, expecting call back parameters which accept function references instead of blocking and then returning. The new [async](1) and [await](2) keywords in the language that build on top of promises can largely hide the asynchronous nature of the language.

For example, it is not possible to easily write several functions calls in order and expect them to execute more or less as written:

```javascript
async function doAThing() {
    await thing1();
    await thing2();
    return thing3();
}
```

For something like the humble sleep loop though setting up functions for syntactic sugar like async and await is more effort than it's worth. As reminder a sleep loop is used to create deliberate delay between repeated actions. For example,

```java
// some function body...
for (int i = 0; i < foo.length; i++) {
    Thinger.thingIt(foo[i]);
    Thread.sleep(2000);
}
```

The `Thread.sleep()` call blocks the executing for 2000 milliseconds, the introduces a delay between calls to `thingIt`. In JavaScript we have the `setTimeout()` and `setInterval()` functions both of which are asynchronous and accept call back parameters. To be clear, the following will not work:

```javascript
// doesn't work...
for (let i = 0; i < foo.length; i++) {
    Thinger.thingIt(foo[i]);
    setTimeout(/* what goes here? */ () => { console.log('timeout call back called' ) }, 2000);
}
```

Since setTimeout calls a function we can use it to schedule itself:

```javascript
function thingIt() {
    console.log('hello!');
    setTimeout(thingIt, 2000);
}
```

The last thing we need is the ability to iterate over the item of items (`foo` in our examples). Traditionally this would be done using a `for...of` loop or a call to `#forEach`. Recursion can also be used for iteration though. `setTimeout` expects 
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "Async Functions"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await "Await Operator"