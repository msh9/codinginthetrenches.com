---
title: Nginx ipv6only setting gotcha
date: 27.04.2013
author: Michael Hughes
tags: [Linux, Web Services, Tips]
---

Summary
    A brief tip on the symptoms of configuration gotcha I ran into
    when binding Nginx on IPv4 and IPv6 networks. The fix was to set
    ipv6only=off in the listen directive.

----

Recently I upgraded to Nginx 1.4.0 on my the host for this website from an
older version of Nginx. After the upgrade I found that connections to port
80 from IPv4_ hosts were refused. Connections from IPv6_ enabled hosts worked
fine.

The host has both IPv4 and IPv6 addresses and normally should serve content to both clients.

In an Nginx configuration file the `listen directive`_ sets how Nginx listens for connections.
My old setting which worked fine was as follows::

    listen [::]:80;

The above set Nginx to listen on port 80 with a wildcard ipv6 address. There are other configuration
parameters for the listen directive. In particular the ipv6only setting indicates whether to **only**
accept IPv6 connections. 

What I found was that in Nginx version 1.3.4 a change to socket settings defaults occurred for the ipv6only parameter:

    "Prior to version 1.3.4, if this parameter was omitted then the operating system’s settings were in effect for the socket."

In my case, running on Arch linux the OS default was to accept such connections. Post Nginx version 1.3.4 the default
for ipv6only is set to **'on'** meaning that **only** IPv6 connections will be handled. Resolving the issue on my
host involed changing the configuration line to the following::

    listen [::]:80 ipv6only=off;

A simple fix--note though that the ipv6only parameter can only be set once. If there are other vhosts configurations they cannot
specify the ipv6only parameter.

.. _listen directive: http://nginx.org/en/docs/http/ngx_http_core_module.html#listen
.. _IPv4: https://en.wikipedia.org/wiki/IPv4
.. _IPv6: https://en.wikipedia.org/wiki/IPv6
