---
title: NodeJS modules should export object constructors
author: MichaelHughes
layout: post
date: 2015-10-03
url: /2015/10/03/nodejs-modules-should-export-object-constructors/
categories:
  - Software Design
tags:
  - design
  - javascript

---
Note I didn’t say _always_ should export objects, but for the sanity of everyone involved, in many cases a required module should return a constructor and not a fully instantiated object. Today’s post is about why your NodeJS modules should look like this:

<pre>/**
 * @constructor
 */
function myConstructor(someDependency) {
   //setup my object here
}
module.exports = myConstructor;
</pre>

and **not** this:

<pre>var myObj = {
   myService: new MyService()
};
myObj.myFunction = function(foo) { //do stuff with foo here };
module.exports = myObj;
</pre>

<!--more-->

The reason for preferring the former over the latter goes back to principals of [object oriented programming][1]. Just because we are in the land of JavaScript does not mean that we get to throw out the last ~40 years of practice in regards to building reusable object models. This is not to say that the latter example (the thing we shouldn&#8217;t be doing) doesn’t involve objects. Rather that instead NodeJS’ module system makes it very easy to unintentionally create a network of singleton objects.

When `require()` is used the file being loaded from a path is [Note I didn’t say _always_ should export objects, but for the sanity of everyone involved, in many cases a required module should return a constructor and not a fully instantiated object. Today’s post is about why your NodeJS modules should look like this:

<pre>/**
 * @constructor
 */
function myConstructor(someDependency) {
   //setup my object here
}
module.exports = myConstructor;
</pre>

and **not** this:

<pre>var myObj = {
   myService: new MyService()
};
myObj.myFunction = function(foo) { //do stuff with foo here };
module.exports = myObj;
</pre>

<!--more-->

The reason for preferring the former over the latter goes back to principals of [object oriented programming][1]. Just because we are in the land of JavaScript does not mean that we get to throw out the last ~40 years of practice in regards to building reusable object models. This is not to say that the latter example (the thing we shouldn&#8217;t be doing) doesn’t involve objects. Rather that instead NodeJS’ module system makes it very easy to unintentionally create a network of singleton objects.

When `require()` is used the file being loaded from a path is][2] during the lifetime of a node process. This means that I will always get the same code regardless of how many times something like `require('my-npm-installed-module')` is executed. Back to objects, if the `module.exports` property in &#8216;my-npm-installed-module&#8217; is set to a fixed object then that same object is given to all of the different callers. In other words &#8216;my-npm-installed-module&#8217;—intentionally or not—implements the [Singleton Pattern][3].

I won’t go into general issues with broad usage of the singleton pattern other than it is something which should only be used intentionally and with deliberation. In terms of NodeJS based applications the unintentional usage of the singleton pattern is problematic because it complicates testing and makes the application’s design brittle. Let’s compare the two following snippets of code.

File a.js is a module written using `module.exports` to directly return an object.

<pre>/* file: a.js */
var databaseDriver = require('some-driver');
var configuration = require('../config.json');
var connection;
var $ = {};
module.exports = $;
$.initialize = function() {
  connection = new databaseDriver.Connection(configuration.dbUrl);
}
$.get = function(id, callback) {
  connection.getSomeData(id, callback);
}
...
</pre>

File b.js is written using `module.exports` to return a constructor which accepts arguments.

<pre>/* file: b.js */
function myRepository(databaseDriver, configuration) {
  this.connection = new databaseDriver.Connection(configuration.dbUrl);
}
module.exports = myRepository;

myRepository.prototype.get = function(id, callback) {
  connection.getSomeData(id, callback);
}
...
</pre>

There are several differences between a.js and b.js. The most important difference between them is that b.js is **easily configurable**. a.js forces us to create new configuration files or do [ugly node module mocking][4] when writing unit tests against it. On the other hand b.js allows us to pass new configuration when unit testing, no additional files or module mocks required. b.js is also **easily reusable** due to being configurable; connections to multiple databases can be created using b.js.

More generally speaking the differences between a.js and b.js are summarized by a couple object oriented programming principles. b.js (more) closely follows the [single responsibility principle][5]. The logic contained in b.js is specifically for accessing a database whereas a.js also includes initialization and retrieval of configuration values. b.js also enables [dependencies to injected][6] into the object which decouples the object from a specific driver and configuration.

It is still good practice to follow object oriented design practices like SOLID when writing applications in NodeJS. Not every module has to be an object, sometimes a module can just export a function, but when defining objects, use constructors. Please treat JavaScript like the object oriented language that it is when creating objects for the sake of future authors (or even just your future self) and testability.

 [1]: https://en.wikipedia.org/wiki/Object-oriented_programming
 [2]: https://nodejs.org/api/modules.html#modules_caching
 [3]: https://en.wikipedia.org/wiki/Singleton_pattern
 [4]: https://github.com/mfncooper/mockery
 [5]: https://en.wikipedia.org/wiki/Single_responsibility_principle
 [6]: https://en.wikipedia.org/wiki/Dependency_inversion_principle