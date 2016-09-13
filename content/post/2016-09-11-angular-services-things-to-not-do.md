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

First, the difference between and Angular factory and service. In Angular code can and should be placed into separate [modules][1] based on some schema (business relationship, functionality, something).
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
    var theThinger = new thinger();
}]);
```

[1]:https://docs.angularjs.org/api/ng/type/angular.Module "Angular Module"