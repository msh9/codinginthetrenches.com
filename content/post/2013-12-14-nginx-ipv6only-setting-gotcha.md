---
title: Nginx ipv6only setting gotcha
author: MichaelHughes
layout: post
date: 2013-12-14
url: /2013/12/14/nginx-ipv6only-setting-gotcha/
categories:
  - Uncategorized
tags:
  - nginx
  - tips

---
Summary

A brief tip on the symptoms of con­fig­u­ra­tion gotcha I ran into when binding Nginx on IPv4 and IPv6 networks. The fix was to set ipv6only=off in the listen directive.

* * *

Recently I upgraded to Nginx 1.4.0 on my the host for this website from an older version of Nginx. After the upgrade I found that con­nec­tions to port 80 from [IPv4][1] hosts were refused. Con­nec­tions from [IPv6][2] enabled hosts worked fine.

The host has both IPv4 and IPv6 addresses and normally should serve content to both clients.

In an Nginx con­fig­u­ra­tion file the [listen directive][3] sets how Nginx listens for con­nec­tions. My old setting which worked fine was as follows:

<pre>listen [::]:80;</pre>

The above set Nginx to listen on port 80 with a wildcard ipv6 address. There are other con­fig­u­ra­tion parameters for the listen directive. In particular the ipv6only setting indicates whether to **only** accept IPv6 con­nec­tions.

What I found was that in Nginx version 1.3.4 a change to socket settings defaults occurred for the ipv6only parameter:

> “Prior to version 1.3.4, if this parameter was omitted then the operating system’s settings were in effect for the socket.”

In my case, running on Arch linux the OS default was to accept such con­nec­tions. Post Nginx version 1.3.4 the default for ipv6only is set to **‘on’** meaning that **only** IPv6 con­nec­tions will be handled. Resolving the issue on my host involed changing the con­fig­u­ra­tion line to the following:

<pre>listen [::]:80 ipv6only=off;</pre>

A simple fix–note though that the ipv6only parameter can only be set once. If there are other vhosts con­fig­u­ra­tions they cannot specify the ipv6only parameter.

 [1]: https://en.wikipedia.org/wiki/IPv4
 [2]: https://en.wikipedia.org/wiki/IPv6
 [3]: http://nginx.org/en/docs/http/ngx_http_core_module.html#listen