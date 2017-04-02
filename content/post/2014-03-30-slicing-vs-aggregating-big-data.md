---
title: Slicing vs. aggregating big data
author: MichaelHughes

date: 2014-03-30
url: /2014/03/30/slicing-vs-aggregating-big-data/
categories:
  - Data
tags:
  - databases
  - design

---
So you have a lot of data from something.  What&#8217;s happens next? Where does the data go after point of capture? The data in question could be analytics gathered from application performance, click logs from a website, search data from a search engine, traffic flow data from a state agency&#8211;the point being that there is a lot of it. The given examples share use cases with some of the things covered by the much abused phrase &#8220;[big data][1]&#8220;, this post will touch on that concept lightly. The main point of today&#8217;s post though is to briefly cover one approach to thinking about how to store _a bunch of data_ whatever it happens to be.

<!--more-->We will start with something that is almost a tautology: Broadly determining how the data will be used is an important consideration that should influence how the data is stored. The question we are trying to answer then is are we trying to 

**slice** the data set into small chucks that can be dynamically presented to an end client or are we trying to **aggregate** the data set into categories for offline presentation. Determining the choice between slicing and aggregating requires determining what the end users of the system are trying to achieve. Take search data for example, a broad aggregate might show an increased interest in [meat free foods][2] by aggregating counts of similar search terms over time. On the other hand a more specific query might reveal what travel related terms users in the Pacific Northwest are searching for after work. In the former scenario my data system needs to trawl through the entire source data set looking for a specific set of terms and counting them. In the other use case my data system might need an index into the data set that returns a small number of items very quickly.<figure id="attachment_82" style="width: 350px" class="wp-caption aligncenter">

[<img class="wp-image-82" title="Slicing the data" src="//codinginthetrenches.com/wp-content/uploads/2014/03/cleaver.png" alt="A cleaver -- Original photo by Mark Coggins / CC By 2.0" width="350" height="261" />][3]<figcaption class="wp-caption-text">Slicing the data as needed &#8212; Original photo by [Mark Coggins][4] / [CC By 2.0][5]</figcaption></figure> <figure id="attachment_84" style="width: 350px" class="wp-caption aligncenter">[<img class="   wp-image-84" title="A ocean trawler, cutting through data or something like that" src="//codinginthetrenches.com/wp-content/uploads/2014/03/ocean_trawler.png" alt="" width="350" height="147" />][6]<figcaption class="wp-caption-text">Photo by [Strange Ones][7] [CC By 2.0][8]</figcaption></figure> 

Of course it would be a lie to say that there is really a solid, distinct split between slicing data on the left and trawling through it on the right. The real world is messy, for example a middle of the road use case that blends the two examples above: A marketer is first interested in the daily search trends of users for an entire year to determine what time of day users most often purchase vacations, then the marketer is secondarily interested in seeing top travel search term reports for those times of day. So instead of more strained cleaver and ocean trawler analogy pictures we have the following:<figure id="attachment_87" style="width: 500px" class="wp-caption aligncenter">

[<img class="size-full wp-image-87 " src="//codinginthetrenches.com/wp-content/uploads/2014/03/slice-aggregate.png" alt="The is no hard line separating the use cases of slicing data vs. aggregating" width="500" height="39" />][9]<figcaption class="wp-caption-text">The is no hard line separating the use cases of slicing data vs. aggregating</figcaption></figure> 

So what&#8217;s the point of thinking about slicing versus aggregating? Systems that can handle large quantities of data often come with trade-offs that make them better at one kind of task than another. On one of my more recent projects we found [DynamoDB][10] is great at slicing into very large sets of data. Dynamo provides up to five global indices that give quick access into data sets of (a reasonably) unrestricted size. We also found that Dynamo was **not** the ideal storage location to read the entire data set out of for aggregate operations because scans across large Dynamo tables are relatively slow and expensive. Dynamo worked well for the project though since the goal was to drive a UI with small sets of records queried from a much larger source set.

On the other end of spectrum are [Map Reduce][11] frameworks (we&#8217;ll ignore projects like [Apache Drill][12] for now since they are still fairly new). The raison d&#8217;être for map reduce is to process large volumes of data and often run aggregate queries against that data set. In these frameworks the aggregate queries being run make reading the entire data a requirement.

As a system implementer the best thing I can do is ask questions to determine the correct trade offs to make when selecting databases. Once I know the trade offs that need to be made for an implementation then I can pick a good database. The following questions can help to discriminate between slicing and aggregating:

  * What level of granularity of information is useful to the user? Going to the clickstream example, does a end user of the proposed data system care that a user #1243 clicked the &#8216;yes&#8217; button at 11:34AM or does the end user care that 600 more individuals clicked &#8216;yes&#8217; between 11:00-12:00 than between 12:00-13:00? 
      * It is worth noting that regardless of the answer to the above question both given examples require storing information at the most granular level in the system. The only difference is how the information is presented to the user.
  * What kind of user experience is the data set driving? A tool that promotes information discovery (along predefined indices) has to be responsive to queries in order to be effective. Alternatively, a dashboard with a set predefined metrics does not require (as great) responsiveness as an information discovery tool.
  * How fast is the underlying data set changing? A slow to respond data system can be aided by caching results when the underlying data set has a slow rate of change. On the other hand queries against as faster changing data set will require a more frequently updated caching solution to return valid results.

 [1]: https://www.google.com/search?q=big+data
 [2]: http://www.google.com/trends/explore#q=tofu%2C%20seitan%2C%20tempeh%2C%20hummus&geo=US&cmpt=q
 [3]: //codinginthetrenches.com/wp-content/uploads/2014/03/cleaver.png
 [4]: http://www.flickr.com/photos/markcoggins/
 [5]: http://creativecommons.org/licenses/by/2.0/
 [6]: //codinginthetrenches.com/wp-content/uploads/2014/03/ocean_trawler.png
 [7]: http://www.flickr.com/photos/strangeones
 [8]: https://creativecommons.org/licenses/by/2.0/
 [9]: //codinginthetrenches.com/wp-content/uploads/2014/03/slice-aggregate.png
 [10]: http://aws.amazon.com/dynamodb/
 [11]: http://hadoop.apache.org/
 [12]: http://incubator.apache.org/drill/drill_overview.html