---
title: Using Olingo ODataJS 4 Beta with AngularJS and Web API OData V4
author: MichaelHughes

date: 2015-01-05
url: /2015/01/05/using-olingo-odatajs-4-beta-with-angularjs-and-web-api-odata-v4/
categories:
  - Projects
tags:
  - javascript
  - tips
  - web services

---
Recently I started writing a new web application which uses [OData][1] V4 as the protocol for passing data to back and forth between the JavaScript client and ASP.Net server. The client is written using AngularJS which doesn&#8217;t have any built-in facilities for working in OData APIs. In order to avoid writing my own OData message handler I used the [Apache Olingo][2] library to handle the grunt work of sending requests and receiving responses. I wanted to encapsulate the Olingo library in an AngularJS service in order to make using it easier, the following post details how this was done.

 [1]: http://www.odata.org/
 [2]: http://olingo.apache.org/doc/javascript/index.html

<!--more-->

**Updated 2015-02-01:** I realized that my Olingo service wrapper described in this post did not notify AngularJS&#8217; [root scope][3] of changes after making a service call. This can lead to some weird or hard to find errors. The link to the GitHub Gist at the bottom of the post have been updated to include an appropriate call into the Angular framework to resolve this.

Before getting to the wrapping code, one further thing should be mentioned. My client code uses a token in order to authenticate with the backend API (thanks to Taiseer for [showing the way][4]). Encapsulating the Olingo library inside of a service also makes it easy to extend Taiseer&#8217;s examples to include token authentication with a OData V4 API.

A link to the complete service is included at the bottom of the post. The rest of the post covers a couple key details of the service.

First, to handle auth we need to create a custom Olingo HTTP client that adds the bearer token to requests sent to the API.

```javascript
var _oldOlingoODataClient = odatajs.oData.net.defaultHttpClient;
var _authSensitiveOlingoClient = {
    request: function (request, success, error) {
        request.headers = request.headers || {};
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            request.headers.Authorization = 'Bearer ' + authData.token;
        }
        return _oldOlingoODataClient.request(request, success, error);
    }
}
```

A nice feature of the Olingo library is that HTTP clients can be chained together. In the above code a reference to the library&#8217;s default HTTP client is maintained. Our new client code modifies incoming requests to the include the bearer token header and then passes the request on to the default HTTP client. Another thing worth noting here is that we&#8217;re using [grevory&#8217;s local storage module][5] for AngularJS to store the authentication data on the client between requests. The call to `localStorageService.get()` attempts to retrieve a previously stored object that was created when the user authenticated with the service.

Another important component in the service is the ability to push the user to the application&#8217;s login page if the backend returns a 401 response. This could stand to be cleaned up slightly since changing the page location shouldn&#8217;t necessarily be a component of a low level request service, but for now it shows how the service creates response handler functions.

```javascript
function _getErrorInterceptorWrapper(deferred) {
    return function (errorObj) {
        if (errorObj && errorObj.statusCode && errorObj.statusCode == 401) {
            $location.path('/login');
        } else {
            deferred.reject(errorObj);
        }
    }
}
```

The `_getErrorInterceptorWrapper` function creates a [closure][6] and returns a function that uses Angular&#8217;s [location service][7] to change the user&#8217;s page to the login page when a 401 is returned by the service. The function returned by `_getErrorInterceptorWrapper` is passed to the Olingo library which expects to be able to pass a status object to it. Also note that an AngularJS promise object is stored in the closure and is rejected when a request made by Olingo fails. A similar method of storing a promise in a closure and calling it is used when handling successful responses from the library as well.

The rest of the code is fairly self explanatory and exists to simplify interactions with the Olingo library. You can see the service in its entirely [in this gist][8] on GitHub. I hope this was help in creating AngularJS based OData API client applications.

 [3]: https://docs.angularjs.org/api/ng/type/$rootScope.Scope
 [4]: http://bitoftech.net/2014/06/01/token-based-authentication-asp-net-web-api-2-owin-asp-net-identity/
 [5]: https://github.com/grevory/angular-local-storage
 [6]: http://www.javascriptkit.com/javatutors/closures.shtml
 [7]: https://docs.angularjs.org/api/ng/service/$location
 [8]: https://gist.github.com/msh9/1bed9a7bb0effd7171df