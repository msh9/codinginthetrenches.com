---
title: Gotchas associated with client side date handling
author: MichaelHughes

date: 2014-06-11
url: /2014/06/10/gotchas-associated-with-client-side-date-handling/
categories:
  - Projects
tags:
  - javascript
  - tips

---
This is short post about a couple issues that end users might run into when using a method of displaying dates I described in
a [prior post.]({{<ref "2014-05-26-time-zone-correct-client-side-date-and-time-display.md" >}}) In short, Microsoft Internet Explorer 9 cannot parse certain types of ISO8601 dates correctly and Google Chrome does not track the system's time zone correctly.

<!--more-->

In a [prior post]({{<ref "2014-05-26-time-zone-correct-client-side-date-and-time-display.md" >}}) I recommended using client side JavaScript to handle time zone conversion from UTC dates to local dates. I won't go into detail on the how the solution worked, but there was client side date parsing and formatting involved using the JavaScript `Date` prototype. Unfortunately, like other areas of JavaScript there are some browser specific gotchas that can break the method I posted.

  1. In Internet Explorer 9 <a href="https://connect.microsoft.com/IE/feedback/details/723740/date-parse-and-new-date-fail-on-valid-formats" target="_blank">there is a bug</a> that causes scripts to not  recognize ISO8061 formatted dates with millisecond time components. The symptom of this issue in IE9 when using local time conversion is some (apparently) random dates will not be written on the page while other dates are processed correctly. Fortunately (or unfortunately?) the linked Microsoft connect post has a work around posted which I recommend using and the bug is resolved in Internet Explorer 10+.
  2. Chrome does not update the time zone used for JavaScript date objects in each tab after it is opened. In other words, <a href="https://code.google.com/p/chromium/issues/detail?id=43293" target="_blank">Chrome reads</a> the system's time zone once on each tab creation and then never again. Generally this is not an issue since it's a fairly rare occurrence that a user changes his or her device's time zone and immediately expects a web page to update. It is an annoying issue, however, to run into when trying to test client side local time conversion. The symptom of the issue is that changing the system time zone followed by refreshing the page results in no change to the displayed date. A work around for the issue is to open a new tab in the same Chrome window since the time zone is read on tab creation.

Hopefully the above helps anyone who runs into similar issues when adding locally adjusted dates to a web page.