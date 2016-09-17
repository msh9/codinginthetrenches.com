+++
author = "Michael Hughes"
banner = ""
categories = []
date = "2016-09-11T11:41:50-06:00"
description = ""
draft = true
images = []
layout = "post"
menu = ""
tags = []
title = "AngularJS injectables and things to not do with them"

+++

We often think about best practices while developing software. Sometimes it is also instructive to contemplate what *not* to do when writing software. Today's post
covers some logic in AngularJS services which should be avoided save for rare exceptions.

<!--more-->

In particular, today we're going to look at Angular 1.x services and factories. Sorry folks on 2.0, fortunately because of broad similarities in Angular 1.x's and 2.x's dependency
injection systems much of the following will still apply. 

First, the difference between and Angular [factory][2] and [service][3]. In Angular code can and should be placed into separate [modules][1] based on some schema (business relationship, functionality, something).
Services and factories can be registered by name within a module. Other services, factories, controllers, and directives can subsequently use the registered service or factory by referencing it by name.
With all that said, the minor, but confusing difference between the two is that a function registered in a module as a service will be called with `new` whereas a function registered in a module as a
factory will be called as a normal function.

```javascript
var app = angular.module('app',[]);
app.factory('Thinger', ['$http', function thingerFactory($http) {
    var theThinger = {};

    theThinger.thingIt() {
        console.log('Thing-ed!');
    }

}]);

function Fooer($http) {
    this.http = $http;

    this.fooIt() {
        console.log('Foo-ed');
    }
}

app.service('Fooer', ['$http', Fooer]);
```

Factories return objects and services are `newed.` 

With that covered let us move on to things to not do.

### Using a **factory** to return an object constructor ###

This is a somewhat odd pattern that I've seen recently. 

```javascript
var app = angular.module('app',[]);
app.factory('Thinger', ['$http', 
  function thingerFactory($http) {
    function TheThinger(randomStuff) {
        this.randomStuff = randomStuff;
    } 

    TheThinger.prototype.thingIt = function () {
        console.log('thinged');
    }

    return TheThinger;

}]);

app.factory('OtherThing', ['Thinger', 
  function otherThingFactory(thinger) {
    var somethingInMyOtherThing = {}
    var theThinger = new thinger(somethingInMyOtherThing);
}]);
```

There's a couple things wrong here. The lessor of the two issues is that Angular already provides the service pattern 
if we need to create a new object with `new`. The greater issue is more insidious though and that is the code above breaks
dependency injection. One of the great things about Angular (1 and 2!) is that it provides a built-in DI system which instantiates
objects as needed and then injects them based on name. This great feature is both ignored and circumvented by using a factory
to inject a constructor. It means among other things that `var theThinger` in the above example cannot be used for sharing state. post
injection instantiation also means that the dependent controller / directive / service is knows more about the service than necessary (eg
how to build the service). Testing 'OtherThing' is just a little bit more difficult now because we cannot directly spy on or create mocks
of `theThinger` since it was instantiated in place.

All in all, while there may some times be valid reasons for injecting a constructor function, as a general rule this is best avoided.

This leads nicely into our next topic.

### Passing your directive's or controller's scope to a service.

The worst case I have seen with this is injecting a constructor function and then constructing a service with the scope as parameter. Less worse is
injecting a service and passing the scope to one of the service's methods. First a couple code samples to illustrate the description,

```javascript
var app = angular.module('app',[]);
app.factory('Thinger', ['$http', 
  function thingerFactory($http) {
    function TheThinger(randomStuff) {
        this.randomStuff = randomStuff;
    } 

    TheThinger.prototype.thingIt = function () {
        console.log('thinged');
    }

    TheThinger.prototype.scopeIt = function (scope) {
        scope.thing = 'thinged';
    }

    return TheThinger;

}]);

app.controller('MyController', ['$scope', 'Thinger', function($scope, TheThinger) {
  var theThinger = new TheThinger($scope);
  theThinger.thingIt();
}]);
app.controller('OtherController', ['$scope', 'Thinger', function($scope, TheThinger) {
  var theThinger = new TheThinger('SomeVariable');
  theThinger.scopeIt($scope)
}]);
```

[Scope in Angular][6] is analogous to the "model" found in [many][4] [mv*][5] design patterns for user interfaces. Depending on your reading
of what constitutes a models it may or may not be okay to pass model into a backend service.

I tend to fall on the side of not okay. The Angular framework provides both directives and controllers that are expressly for logic which
reacts to UI changes and in turn affect changes to the UI. Services created by either Angular's factory or service patterns on the other hand 
tend to be more focused on interacting with http services, sharing state, or non-UI related functionality within the application. The division
between functionality is visible in the frameworks provided services and the controller/directive examples. Given this context, passing a scope
object to service violates separation of concerns because by passing the scope in we give the service capability to modify the presentation
shown to the end user.

Instead of passing the scope object to a service consider having the service return promises (generated [by $q][7]) which can then be used by
the controller or directive to update the scope as necessary. Alternatively if you are passing the scope to service in order to broadcast and
listen to events then it is worth considering the [observer pattern][8] for the service and controller. Broad and hard to debug event broadcasts
can by making an injected service observable and then appropriately routing actions that need to be observed through the shared service 
instance. 

In other cases a less than ideal service pattern, like `new` of an injected constructor, arises not due to need to add something to the object, but
instead a bit of over-engineering.

## Over-engineering objects into services

First let us look a quick example that has been paraphrased from source application:


```javascript
var app = angular.module('app',[]);
app.factory('Stack', function Stack() {
    function Stack() {
        this.ary = [];
    } 

    Stack.prototype.push = function (val) {
        this.ary.push(val)
    }

    Stack.prototype.pop = function (val) {
        return this.ary.pop(val)
    }

    Stack.prototype.peek = function () {
        return this.ary[this.ary.length - 1]
    }

    return Stack;

});

app.controller('MyController', ['$scope', 'Stack', function($scope, Stack) {
  var stack = new stack($scope);
  stack.push(1);
  console.log(stack.peek())
}]);

```

The above code is OK, the problem with it is that if we really need broad Stack like, array based, data structures in our application
then we could also just do the following,

```javascript
Array.prototype.peek = function() { if (this.length > 0) { return this[this.length - 1]; } else { return undefined } }
```

That's it. Our arrays now have peek functionality without having to inject anything, create an Angular service, or unnecessarily wrap
the `Array` object's existing methods. To be clear, I'm personally normally against [monkey-patching][9] built-in library objects and is
broadly not considered a good idea. For a real project I would recommend creating an object that inherits from Array and is included as a
raw script like any other utility library.

```javascript
function Stack() {}
```


[1]:https://docs.angularjs.org/api/ng/type/angular.Module "Angular Module"
[2]:https://docs.angularjs.org/api/auto/service/$provide#factory "module.factory"
[3]:https://docs.angularjs.org/api/auto/service/$provide#service "module.service"
[4]:https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller "MVC"
[5]:https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel "MVVM"
[6]:https://docs.angularjs.org/guide/scope "Angular Scope"
[7]:https://docs.angularjs.org/api/ng/service/$q "Angular $q"
[8]:https://en.wikipedia.org/wiki/Observer_pattern "Observer Pattern"
[9]:https://en.wikipedia.org/wiki/Monkey_patch