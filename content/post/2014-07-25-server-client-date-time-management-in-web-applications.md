---
title: Server-client date time management in web applications
author: MichaelHughes

date: 2014-07-25
url: /2014/07/25/server-client-date-time-management-in-web-applications/
categories:
  - Projects
tags:
  - design
  - javascript
  - tips

---
Previously we have [discussed one approach]({{<ref "2014-05-26-time-zone-correct-client-side-date-and-time-display.md" >}}) and gave some implementing code for providing time zone adjusted date times to client web applications. Within the space of user facing web applications there are few different approaches to handling the storage and transmission of date time information. Today we will look at a couple broader themes for delivery of date times to client applications from servers and some thoughts on how to do it well.

<!--more-->

Date and time have been historically problematic domains for system and application programmers alike. My favorite example of the difficultly with managing dates and times in applications is that now Java 8 has been released the JRE contains no less than <a href="https://jcp.org/en/jsr/detail?id=310" target="_blank">3 date and time APIs</a>, two of which are deprecated. Additionally searching StackOverflow for questions about <a href="https://www.bing.com/search?q=javascript+dates+site%3Astackoverflow.com" target="_blank">date and time in JavaScript</a> reveals a lot of confusion concerning EMCA script designers' decisions.<figure id="attachment_218" style="width: 780px" class="wp-caption alignnone">

[<img class="wp-image-218 size-full" src="//codinginthetrenches.com/wp-content/uploads/2014/07/2743877537_2f5a3c7d02_o.jpg" alt="Paris Clocks" width="780" height="800" />][1]<figcaption class="wp-caption-text">Date-time APIs feel like this &#8212; Photo by <a href="https://www.flickr.com/photos/34517490@N00/" target="_blank">Nick</a> / <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank">CC By 2.0</a></figcaption></figure> 

We'll look at two problems for now that capture a lot of what an application needs to do with dates and times, date and time capture and date and time display.

**Time Capture**

Before talking about the how let's state at the outset that storing time information using <a href="http://en.wikipedia.org/wiki/Coordinated_Universal_Time" target="_blank">UTC</a> is the best way to go when building a multi-time-zone system. UTC has several advantages compared to using a specific time zone, one of the most important being that it is the international standard time for civil usage. Additionally, it is easy to convert from a time stored as UTC to any time zone since time zones are defined as offsets of hours and minutes from UTC. There are other difficulties presented by trying to store dates and times centrally using a time zone other than UTC, but we won't delve into them. Instead let it suffice to say that for normal, plain web applications time should be stored using UTC (and definitely **not** the server's time zone.)

An application often captures the time an event occurred for later retrieval. The event could be a purchase in a store, when a bill is due in the future, or when a blog post is created. In the environment of a web applications there are two approaches to capturing the time an event occurred. One is to capture the time of an event, such as file upload, on the server itself. The other is to capture the time on the client of the web application and then pass that time back to the server to be recorded.

There are benefits and problems with both methods of capturing time. Server side capture is simple and in a managed datacenter potentially more [precise and true][2], but it is limited to application events that immediately cause the client application to interact with the central server. Client side capture is more complicated since it involves determining the correct UTC time from the client's local time. Client side capture is also problematic if the client's measurement of time is not as accurate as the central server's time. Capturing event times on the client, however, can track the time of events that may not directly interact with the server.

**Time Delivery**

Like time capture, sending time back to a web client breaks down into server side handling and client side handling. Server side handling, depending on implementation technology will usually be the simpler of the two. In the case of something like ASP.Net server side time delivery consists of figuratively writing the date and time directly into the HTML sent back to the client browser. Other popular web frameworks and template systems have similar features to Razor in .Net and should make it equally simple to return a time and date to a client. Just as a quick example for the simplicity of the server side method look at the following <a href="http://www.asp.net/web-pages/tutorials/basics/2-introduction-to-asp-net-web-programming-using-the-razor-syntax" target="_blank">Razor</a> code block:

<pre>&lt;p&gt;@String.Format("{0:yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fffK}", Model.ModifiedDate)&lt;/p&gt;
</pre>

In the example we take a modified date provided to the Razor template and use the [`String.Format`][3] function to return an ISO8601 like date time string.

Server side time delivery is not perfect for every situation though. Often an application needs to display a time zone adjusted date and time based on the viewing user's location. One way of approaching this problem is to have the client application send the client's time zone to the server. Another solution is to have a preference system that users can specify a preferred time zone. In either case the server needs to keep tracks of multiple time zones in order to correctly render dates and times for different users.

The other, slightly more complication option is to send UTC dates and times to clients and let the them do the time conversion. Date and time information can be sent to a client using the method described 
in a [prior post]({{<ref "2014-05-26-time-zone-correct-client-side-date-and-time-display.md">}}) — in summary, the old post used a server side template to write hidden UTC date and time information into a page that could then be converted to local time by the client. Finally, date and time information is often returned when a client make asynchronous requests for data from the server .

When using client side date and time management one of the most important things that can be done is to ensure that time information being sent to the client is formatted correctly. The correct formatting of dates and times helps to ensure that clients correctly interpret time information since serialized data sent from the server to the client is often just plain strings. The recommendation is to follow the ISO8601 standard including the time offset flag. By formatting the response using ISO8601 we can ensure that client code which executes JavaScript like `new Date(myServerTimeStr)` will work as intended (except for one [important exception]({{<ref "2014-06-10-gotchas-associated-with-client-side-date-handling.md">}})).

I hope the above information was useful in making decisions about to store, format, and transmit date and information when creating user facing web applications.

 [1]: //codinginthetrenches.com/wp-content/uploads/2014/07/2743877537_2f5a3c7d02_o.jpg
 [2]: http://en.wikipedia.org/wiki/Accuracy_and_precision
 [3]: http://msdn.microsoft.com/en-us/library/fht0f5be(v=vs.110).aspx