+++
banner = ""
categories = ["projects", "software-design"]
date = "2016-07-18T22:07:52-06:00"
description = "On why to not use DNS for round robin load balancing"
images = []
menu = ""
tags = ["tips", "design"]
title = "DNS Round Robin Failures"
layout = "post"
author = "Michael Hughes"
+++

Round robin DNS records are a technique for distributing load across public facing web servers. As an experiment we tried using them in
order to distribute load inside of a cluster. We found this approach didn't work. In this post I'll discuss round robin load balancing, how it works at 
a high level, what we did with DNS, why it didn't work, and what can be done instead.
<!--more-->

Round robin (RR) load balancing is a frequently used algorithm for distributing load across several servers. If I have a list of 4 servers and receive 5 requests then
I send each request to a server in the list, picking a new server in order from the list for every new request.

![A diagram of round robin load balancing](/images/2016-07-18-dns-round-robin/RoundRobin.svg "Round Robin")

The key point here is that the request distributor, the intermediary, never sends sequential requests to the same server. Round round load balancing is typically
done using reverse proxy software, [haproxy][1], [apache traffic][2], and [nginx][3] are all examples of applications that can fill this role. The intermediary application
receives all inbound connections from external clients, maintains a list of backend servers, and can keep track of where requests were last sent. We'll leave the discussion here since reverse proxy performance
and configuration are whole topics unto themselves. Let's finish the proxy discussion with a couple notes, one, that this type of load balancing requires intermediary software, and that, two,
clients must send all requests to the intermediary in order to receive the benefit of load balancing.

There exists another alternative to using an intermediary that is also frequently used. The alternative involves loading DNS [A (and AAAA?][4]) records with multiple
values. 

```
PS D:\src\hugo-builder> nslookup www.codinginthetrenches.com
Server:  google-public-dns-a.google.com
Address:  8.8.8.8

Non-authoritative answer:
Name:    codinginthetrenches.com
Addresses:  205.251.215.222
          205.251.215.122
          205.251.215.247
          205.251.215.129
          205.251.215.210
          205.251.215.213
          205.251.215.178
          205.251.215.136
Aliases:  www.codinginthetrenches.com
```

This website, at time of writing, is served via Amazon's [CloudFront][5] service. The console output shows how asking Windows to resolve the host name returns several IP addresses. Furthermore, 
executing `nslookup`, or `dig` for those with BIND utils installed, multiple times will result in *different or differently ordered* IP addresses being returned. It's possible to implement
rudimentary load balancing without an intermediary by using a DNS server which shuffles the order of addresses in response to A record queries. This technique can be used when it is not possible
to have a designated load balancing intermediary, such as load balancing requests from public clients (like me sitting at my desk) to the edge servers which handle queries against `www.google.com.`

![A diagram of DNS based round robin load balancing](/images/2016-07-18-dns-round-robin/DNSRoundRobin.svg "Round Robin")

As diagrammed above, each independent client of a service makes a separate DNS query. The DNS server responds to each query with a differently ordered list of A records. Since each client receives
a different name resolution list they go on to make calls to different hosts.

Load balancing is not just for handling public traffic though. It's also useful to load balance traffic inside a data center. Several of my recent projects for work have involved building sets of applications
which make calls to each other in order to return a response to an external request. These systems are typically designed to scale outwards, or in other words, are designed to handle more load by adding
additional instances of applications running. I won't go into details here, but let it suffice to say that my most recent project used an internal DNS service which shuffled IP address orders in order to provide DNS 
load balancing for calls
between services. The idea was to use rudimentary DNS based load balancing in order to avoid setting up an intermediary proxy server just for internal cluster API calls. Unfortunately things didn't work as intended and we ran into some problems.

1. Some of our applications are written using Node.js. Node.js' standard library, to the developer's credit, has [two ways of resolving names][7]. One uses the underlying operating system's name resolver 
    (specifically via `getaddrinfo` in glibc in our case) and the other directly queries DNS servers. The method which directly queries DNS servers returns round robin like results as expected, the other doesn't work for reasons
    listed in #3.
2. Some of our *other* applications are written using the Java programming language. The DNS resolution library in Java's virtual machine has a [security feature][6] which, by default, caches DNS name resolutions
    forever. This breaks cluster load balancing when it is based on DNS name resolution because Java applications would resolve a name to an IP address once and then never call the DNS server again. Unfortunately,
    if this feature is disabled then the JVM uses the same underlying operating system call used by Node.js.
3. Most problematically, we discovered that the GNU C library, glibc, re-orders DNS responses without regard for the order returned by the DNS server.
    The C library's DNS resolver imposes a ordering on returned records as part of its implementation of [RFC 6724][8]. The implementation does some useful things like
    prefer IPv6 addresses instead of IPv4 and prefer IPv4 addresses in subnets with more matching octets to the requesting host's IP address. Unfortunately, as documented in a long and winding Debian bug 
    [thread][9] the implementation also breaks DNS based round robin load balancing. 

In summary, don't try to use DNS based load balancing for distributing server to server traffic inside of a cluster. Any benefit from shuffling DNS record order
is negated by caching and the vagaries of resolver libraries. Let's discuss a few alternatives.

- SRV records: I've [previously written][10] about DNS SRV records. SRV records are convenient because they contain all of the servers which can be called
    along with priorities in case certain servers should be preferred. It is up to clients, however, to use the information returned by a SRV record and
    , currently, few applications implement appropriate logic.
- Using an intermediary: another solution is to add a dedicated proxy to the environment which routes internal traffic similarly to how public traffic
    would be load balanced. Adding an intermediary has its own drawbacks, in particular, management of the proxy itself and additional call latency due to
    the extra network hop imposed by routing via a proxy instead of directly.

For us the solution has been to use instances of haproxy already running in our application environments in order to load balance internal traffic. A SRV record based solution is attractive, but
requires that all service clients contain the logic required to request SRV records, parse them, and then distribute requests across the listed servers. The SRV record approach works well in 
scenarios where the number of different types of client and server software is limited, notably VoIP and IM systems which use it as part of [SIP][11]. In our case though, we're operating
a platform which hosts services from a few different groups. Forcing all of our users to implement custom name resolution and client side load balancing would be too much to ask.

[1]: http://www.haproxy.org/ "haproxy"
[2]: http://trafficserver.apache.org/ "Apache Traffic Server"
[3]: http://nginx.org "Nginx"
[4]: https://en.wikipedia.org/wiki/List_of_DNS_record_types "DNS Record Types"
[5]: https://aws.amazon.com/cloudfront/ "CloudFront"
[6]: http://docs.oracle.com/javase/8/docs/api/java/net/InetAddress.html "networkaddress.cache.ttl"
[7]: https://nodejs.org/api/dns.html#dns_implementation_considerations "node.js DNS module"
[8]: https://tools.ietf.org/html/rfc6724 "RFC 6724"
[9]: https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=438179 
[10]: https://codinginthetrenches.com/2015/05/02/srv-records-as-service-locators/ "SRV records as locators"
[11]: https://en.wikipedia.org/wiki/Session_Initiation_Protocol "Session Initiation Protocol"