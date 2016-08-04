+++
author = "Michael Hughes"
banner = ""
categories = ["software-design"]
date = "2016-07-30T09:24:00-06:00"
description = "Networks are unreliable and therefore it is vital to add error handlers and connection heartbeat messages to HTML5 WebSocket connections."
images = []
layout = "post"
menu = ""
tags = ["javascript", "tips", "web-services"]
title = "WebSocket connection closures or remember that networks are unreliable"

+++

Networks are unreliable. Put more precisely, [TCP networking can experience many different types of failures with resulting loss of connectivity.][1]
Do not let the linked post's title fool you, it goes on to list a number of real-world computer networking failures. [HTTP][2] is a great way to communicate over
the public internet, where failures may occur at any time, because the protocol itself is stateless and does not rely on a persistent connection. [HTML5 WebSockets][3],
however, do use a persistent TCP connection. A connection that can cut or closed without warning. Today's post is a short commentary on adding error handlers and
heartbeat messaging to WebSocket clients and servers.

[1]:http://queue.acm.org/detail.cfm?id=2655736 "ACM Communications"
[2]:https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"
[3]:http://www.websocket.org/aboutwebsocket.html "About WebSockets"

<!--more-->

When developing web applications, web sites, even just clients of web services it can be tempting to take a simple view of the network between client and server.

![An idealistic looking network](/images/2016-07-30-ws-conn/in-theory-network.svg "A client and server talking to each other")

It is very appealing to think in terms of "my application makes a call to the server and opens a connection." Unfortunately, reality is annoyingly
complex.

![A more realistic looking network](/images/2016-07-30-ws-conn/reality-network.svg "A client and server talking to each other")

A connection to a remote host likely traverses several networks, firewalls, routers, and reverse proxies. A break in a WebSocket connection can
occur at any point due to persistent connection timeouts, hardware failure, or even something like planned maintenance. All of this isn't to say that
as web application developers we shouldn't use WebSockets, but rather we need to be cognizant of the protocol being different from HTTP and that appropriate
connection failure mitigations are needed. Not appropriately handling network disconnects can lead to poor user experience and possible data
loss in web applications.

The [WebSocket standard][4] has some built in error detection capabilities and also defines the ability to add handlers which are called
when an error occurs. The most important thing we can do on either side of a WebSocket is to detect a loss of connection and, if needed, attempt to reconnect.
Detecting the loss of connection prevents the poor user experience of informing the user that the application is hypothetically connected and receiving
data, but under test is not actually connected. 

Ping and Pong frames are defined as part of the standard and can help with detecting connection loss.
They can be initiated by either end of the connection and once either end of the connection sends a 
Pong frame the receiving end should reply back with a Ping framework. This does two things for the application, it
helps to ensure that the socket is not closed due to inactivity, and it certifies that the replying end of the socket is still connected. **Unfortunately,** 
the browser JavaScript API for WebSockets does not expose the ability to send a frame or specifically a Ping frame. Server side NodeJS libraries, like [ws][6],
do have the capability though and fortunately ping frames may be sent from either end of the socket.

The bad news continues though, on the client side we don't have a built in way of detecting connection failures
 because the [browser JavaScript API][7] does not expose a way to directly work with ping or pong frames. 

![Bi-directional heartbeat](/images/2016-07-30-ws-conn/heartbeat.svg "A client and server sending heartbeats to each other")

One option would be to implement a heartbeat in the client and logic in the server to keep track of the last seen heartbeat from every client. The server
can then take appropriate action for connection failures based on whether it has or has not received a heartbeat message from a client after a certain
amount of time. This can become taxing or annoying to implement for WebSocket servers that handle a larger number of clients.

A simplistic alternative is shown above. The client sends a heartbeat message on a fixed interval, but doesn't expect a response. The server doesn't
attempt to validate that heartbeat messages arrive on any interval, but instead sends a ping frame on a fixed interval. Sending periodic, outbound messages
in both the client and server logic enables us to detect failures within a fixed amount of time.

It is also important to handle errors thrown from the socket. This involves adding an `onerror` handler in the client and implementing an [error event][10] 
handler in the server, [see here for a partial example for a ws based example.][8]

An error handler can be as simple as [noting the error and attempting to re-open][9]. Note in the linked example we also set up a simple heartbeat message
using the `setInterval` function:

```
socket.onopen = function (event) {
    sendMessage(socket);
    setInterval(function () { sendUnidirectionHeartbeat(socket) }, 30000);
```

Similarly the server application can be configured to send a heartbeat every so often.

```
wss.on('connection', function connection(ws) {
  setInterval(function () { ws.ping()}, 20000);
  ws.on('error', function (err) { console.log(err); ws.close(); })
});
```

My example above is simplistic, but the idea is to **do something** on error events, don't ignore them and at the very least record that
they occurred. 

I like the approach of sending messages from both the server and client due to its logical simplicity and because it can quickly detect connection
failures on either end of the socket. The method does send 1 additional message compared a more tradition heartbeat tracking approach, but in return it
relieves the server of tracking the last time a message was seen from a client.


I hope this post made clear the importance of handling connection errors in WebSocket connections and a couple ways of approaching the problem.

[4]:https://tools.ietf.org/html/rfc6455 "RFC 6455 - WebSocket"
[5]:https://tools.ietf.org/html/rfc6455#section-5.5.2 "RFC6455 - Ping and Pong Frames"
[6]:https://github.com/websockets/ws "Node ws library"
[7]:https://developer.mozilla.org/en-US/docs/Web/API/WebSocket "Mozilla Developer Network - WebSocket"
[8]:https://github.com/websockets/ws#error-handling-best-practices "ws error best practices"
[9]:https://gist.github.com/msh9/56d5d551680488e3f3c4283d50ab5aa9 "Simplistic WS client error handler" 
[10]:https://github.com/websockets/ws/blob/master/doc/ws.md#event-error-1 "WS Error event"