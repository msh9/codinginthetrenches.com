---
title: Time zone correct client side date and time display
author: MichaelHughes

date: 2014-05-26
url: /2014/05/26/time-zone-correct-client-side-date-and-time-display/
categories:
  - Projects
tags:
  - javascript
  - web services

---
Today's post one covers one approach for displaying the correct timezone adjusted date and time in a web application. A common example for the problem 
being addressed is user A located in London, UK uploads a file to a central server located in New York City, US and then user B located in Seoul, SK views the file. When user B attempts to download the file we would like show the user when the file was uploaded in his or her current time zone.

<!--more-->

To set up the problem we'll start with a couple assumptions about the environment.

  1. The server and client application communicate dates and times with each using [UTC.][1]
  2. The client application uses the [HTML5][2] document type.
  3. The server sends time data to the client using the date and time format described by [ISO8601.][3] 
      1. In other words dates and times sent to the client should look like **2014-05-24T22:09:13Z** when serialized. Please note the ending '**Z**' character which indicates that the time data is in UTC time.

Hopefully the above are not onerous assumptions about the application's operating environment. I will be writing a post soon with tips for date and time management with client-server web applications, but for now we will go forward with the above assumptions.

Given the above assumptions there are a couple approaches that could be used to display a time on a page. For pages that are rendered on the server 
(with a technology like JSP or Razor) we will need JavaScript to run on page load to read in UTC dates written into the page by the server and then 
to print out correct local times. Dates must be handled on-demand, however, when processing server responses in dynamic applications that asynchronously 
get data from the server .

We will discuss the server side rendering scenario first. The HTML5 standard introduced new [data attributes][4] on elements that allow us to store 
information directly on a tag. In the server side rendering scenario the server can write the date information directly into a page using a data 
attribute. A .NET Razor example of writing date information into the page is as follows:

```html
...
&lt;p class='make-time' data-time="@String.Format("{O:0}", ViewBag.MyDateProperty)"&gt;&lt;/p&gt;
...
```

We use the <a href="http://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.110).aspx" target="_blank"><strong>O</strong> date formatter</a> to format the date in a round trip format—essentially the **O** formatter gives us the standardized ISO8601 date time format mentioned earlier.

I added the CSS class ‘make-time'  in order to later identify and process elements with embedded time information. The following JavaScript (also provided in a <a href="https://gist.github.com/msh9/9dd264e833add51c038f" target="_blank">gist</a> for easy readability) finds and processes elements with the ‘make-time' class and a ‘data-time' attribute.

```javascript
if (window.addEventListener) // W3C standard
{
    window.addEventListener('load', function() {
        var timeElements = document.getElementsByClassName('make-time');
        for (var i = 0; i &lt; timeElements.length; i++) {
            var dateStr = timeElements[i].getAttribute('data-time');
            if (dateStr) {
                var utcDate = new Date(dateStr);
                timeElements[i].textContent = utcDate.toTimeString();
            }
        }
    }, false);
//include the following if you need to support below IE9
} else if (window.attachEvent) {
    window.attachEvent('onload', function () {
        var timeElements = document.getElementsByClassName('make-time');
        for (var i = 0; i &lt; timeElements.length; i++) {
            var dataStr = timeElements[i].getAttribute('data-time');
            if (dateStr) {
                var utcDate = new Date(dateStr);
                timeElements[i].textContent = utcDate.toTimeString();
            }
        }
    });
}
```

The output of `toTimeString();` will be a time zone correct date and time string. I recommend taking a look at <a href="http://blog.stevenlevithan.com/archives/date-time-format" target="_blank">Steven Levithan's formatter</a> for more advanced date formatting since JavaScript currently does not have a built-in date format function.

Handling dates from asynchronous requests is simpler than server side rendering since there is no trickery needed to embed the dates into the page sent to the clients. In fact there is very little illustrative code to show for handling dates received from asynchronous requests. I still do have a couple tips and snippets of advice though:

  1. The easiest way to ensure that the date is formatted in the client's time zone is to let the client handle the conversion from UTC to local time. As before it's just **simpler** to let the server communicate exclusively in UTC.
  2. Assuming dates from server are formatted as ISO8601 then getting a local time date object is as simple as creating a new date object.

```javascript
//assume the below came from a server
var myDateFromServer = { 
    'date' = '2014-05-24T22:09:13Z' 
};
//this date object will contain the
//time internally as UTC, but provides
//methods to get locally adjusted time
var myDateObj = new Date(myDateFromServer.date);
```

I hope the above was helpful with regard to displaying dates and times in whatever application you're currently working on.

 [1]: http://en.wikipedia.org/wiki/Coordinated_Universal_Time
 [2]: http://www.w3schools.com/tags/tag_doctype.asp
 [3]: http://en.wikipedia.org/wiki/ISO_8601
 [4]: http://html5doctor.com/html5-custom-data-attributes/