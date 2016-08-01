+++
author = "Michael Hughes"
banner = ""
categories = ["software-design"]
date = "2016-07-30T09:24:00-06:00"
description = "Networks are unreliable and therefore it is vital to add error handlers and connection heartbeat messages to HTML5 WebSocket connections."
draft = true
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

<!--more-->

When developing web applications, web sites, even just clients of web services it kind be very tempting to take a simple view of the network between client and server.

![An idealistic looking network](/images/2016-07-30-ws-conn/in-theory-network.svg "A client and server talking to each other")


[1]:http://queue.acm.org/detail.cfm?id=2655736
[2]:https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
[3]:http://www.websocket.org/aboutwebsocket.html