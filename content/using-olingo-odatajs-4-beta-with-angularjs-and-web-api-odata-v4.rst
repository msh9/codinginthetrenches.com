Using Olingo ODataJS 4 Beta with AngularJS and Web API OData V4
###############################################################
:date: 2015-01-05 14:57
:author: MichaelHughes
:category: Projects
:tags: javascript, tips, web services
:slug: using-olingo-odatajs-4-beta-with-angularjs-and-web-api-odata-v4
:status: published

Recently I started writing a new web application which uses
`OData <http://www.odata.org/>`__ V4 as the protocol for passing data to
back and forth between the JavaScript client and ASP.Net server. The
client is written using AngularJS which doesn't have any built-in
facilities for working in OData APIs. In order to avoid writing my own
OData message handler I used the `Apache
Olingo <http://olingo.apache.org/doc/javascript/index.html>`__ library
to handle the grunt work of sending requests and receiving responses. I
wanted to encapsulate the Olingo library in an AngularJS service in
order to make using it easier, the following post details how this was
done.

**Updated 2015-02-01:** I realized that my Olingo service wrapper
described in this post did not notify AngularJS' `root
scope <https://docs.angularjs.org/api/ng/type/$rootScope.Scope>`__ of
changes after making a service call. This can lead to some weird or hard
to find errors. The link to the GitHub Gist at the bottom of the post
have been updated to include an appropriate call into the Angular
framework to resolve this.

Before getting to the wrapping code, one further thing should be
mentioned. My client code uses a token in order to authenticate with
the backend API (thanks to Taiseer for `showing the
way <http://bitoftech.net/2014/06/01/token-based-authentication-asp-net-web-api-2-owin-asp-net-identity/>`__).
Encapsulating the Olingo library inside of a service also makes it easy
to extend Taiseer's examples to include token authentication with a
OData V4 API.

A link to the complete service is included at the bottom of the post.
The rest of the post covers a couple key details of the service.

First, to handle auth we need to create a custom Olingo HTTP client that
adds the bearer token to requests sent to the API.

::

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

A nice feature of the Olingo library is that HTTP clients can be chained
together. In the above code a reference to the library's default HTTP
client is maintained. Our new client code modifies incoming requests to
the include the bearer token header and then passes the request on to
the default HTTP client. Another thing worth noting here is that we're
using `grevory's local storage
module <https://github.com/grevory/angular-local-storage>`__ for
AngularJS to store the authentication data on the client between
requests. The call to ``localStorageService.get()`` attempts to retrieve
a previously stored object that was created when the user authenticated
with the service.

Another important component in the service is the ability to push the
user to the application's login page if the backend returns a 401
response. This could stand to be cleaned up slightly since changing the
page location shouldn't necessarily be a component of a low level
request service, but for now it shows how the service creates response
handler functions.

::

    function _getErrorInterceptorWrapper(deferred) {
        return function (errorObj) {
            if (errorObj && errorObj.statusCode && errorObj.statusCode == 401) {
                $location.path('/login');
            } else {
                deferred.reject(errorObj);
            }
        }
    }

The ``_getErrorInterceptorWrapper`` function creates a
`closure <http://www.javascriptkit.com/javatutors/closures.shtml>`__ and
returns a function that uses Angular's `location
service <https://docs.angularjs.org/api/ng/service/$location>`__ to
change the user's page to the login page when a 401 is returned by the
service. The function returned by ``_getErrorInterceptorWrapper`` is
passed to the Olingo library which expects to be able to pass a status
object to it. Also note that an AngularJS promise object is stored in
the closure and is rejected when a request made by Olingo fails. A
similar method of storing a promise in a closure and calling it is used
when handling successful responses from the library as well.

The rest of the code is fairly self explanatory and exists to simplify
interactions with the Olingo library. You can see the service in its
entirely `in this
gist <https://gist.github.com/msh9/1bed9a7bb0effd7171df>`__ on GitHub. I
hope this was help in creating AngularJS based OData API client
applications.
