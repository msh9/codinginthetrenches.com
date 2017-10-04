+++
tags = ["javascript", "tips"]
categories = ["projects"]
description = "A quick post on creating sleeps in JavaScript"
draft = true
author = "Michael Hughes"
date = "2017-10-02"
title = "Creating a sleep loop in JavaScript" 
+++

Today's post is a quick tip on how to easily create a sleep-delay loop in JavaScript.

<!--more-->

JavaScript's exposed APIs tend to be asynchronous, expecting call back parameters which accept function references instead of blocking and then returning. The new [async][1] and [await][2] keywords that build on promises can largely hide the asynchronous nature of the language.

For example, it is now possible to easily write several functions calls in order and expect them to execute more or less as written:

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

In Java the `Thread.sleep()` call blocks the executing thread for 2000 milliseconds, this introduces a delay between calls to `thingIt`. In JavaScript we have the [`setTimeout()`][4] function which is asynchronous and accepts a call back parameter. To be clear, the following will not work:

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

The last thing we need is the ability to iterate over the items (`foo` in our examples). In JavaScript this could be done using a `for...of` loop or a call to `#forEach`. Recursion can also be used for iteration though. `setTimeout` expects to be handled a parameter-less function, and we can make one by [binding][3] parameters to a function that accepts the array of items and the current index.

```javascript
function delayedIteration(index, iterableArray) {
    if (index >= iterableArray.length) {
        return;
    }

    console.log(iterableArray[index]);
    index += 1;
    setTimeout(delayedIteration.bind({}, index, iterableArray), 2000);
}

delayedIteration(0, foo);
```

I hope this helps when a quick delay loop is needed in a JavaScript project.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 'Async Functions'
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await 'Await Operator'
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind 'Function.bind'
[4]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout 'setTimeout'