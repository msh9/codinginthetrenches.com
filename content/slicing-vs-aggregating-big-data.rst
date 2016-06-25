Slicing vs. aggregating big data
################################
:date: 2014-03-30 13:17
:author: MichaelHughes
:category: Data
:tags: databases, design
:slug: slicing-vs-aggregating-big-data
:status: published

So you have a lot of data from something.  What's happens next? Where
does the data go after point of capture? The data in question could be
analytics gathered from application performance, click logs from a
website, search data from a search engine, traffic flow data from a
state agency--the point being that there is a lot of it. The given
examples share use cases with some of the things covered by the much
abused phrase "`big data <https://www.google.com/search?q=big+data>`__",
this post will touch on that concept lightly. The main point of today's
post though is to briefly cover one approach to thinking about how to
store *a bunch of data* whatever it happens to be.

We will start with something that is almost a tautology: Broadly
determining how the data will be used is an important consideration that
should influence how the data is stored. The question we are trying to
answer then is are we trying to **slice** the data set into small chucks
that can be dynamically presented to an end client or are we trying to
**aggregate** the data set into categories for offline presentation.
Determining the choice between slicing and aggregating requires
determining what the end users of the system are trying to achieve. Take
search data for example, a broad aggregate might show an increased
interest in `meat free
foods <http://www.google.com/trends/explore#q=tofu%2C%20seitan%2C%20tempeh%2C%20hummus&geo=US&cmpt=q>`__
by aggregating counts of similar search terms over time. On the other
hand a more specific query might reveal what travel related terms users
in the Pacific Northwest are searching for after work. In the former
scenario my data system needs to trawl through the entire source data
set looking for a specific set of terms and counting them. In the other
use case my data system might need an index into the data set that
returns a small number of items very quickly.

[caption id="attachment\_82" align="aligncenter" width="350"]\ |A
cleaver -- Original photo by Mark Coggins / CC By 2.0| Slicing the data
as needed -- Original photo by `Mark
Coggins <http://www.flickr.com/photos/markcoggins/>`__ / `CC By
2.0 <http://creativecommons.org/licenses/by/2.0/>`__\ [/caption]

[caption id="attachment\_84" align="aligncenter" width="350"]\ |image1|
Photo by `Strange Ones <http://www.flickr.com/photos/strangeones>`__ `CC
By 2.0 <https://creativecommons.org/licenses/by/2.0/>`__\ [/caption]

Of course it would be a lie to say that there is really a solid,
distinct split between slicing data on the left and trawling through it
on the right. The real world is messy, for example a middle of the road
use case that blends the two examples above: A marketer is first
interested in the daily search trends of users for an entire year to
determine what time of day users most often purchase vacations, then the
marketer is secondarily interested in seeing top travel search term
reports for those times of day. So instead of more strained cleaver and
ocean trawler analogy pictures we have the following:

[caption id="attachment\_87" align="aligncenter" width="500"]\ |The is
no hard line separating the use cases of slicing data vs. aggregating|
The is no hard line separating the use cases of slicing data vs.
aggregating[/caption]

So what's the point of thinking about slicing versus aggregating?
Systems that can handle large quantities of data often come with
trade-offs that make them better at one kind of task than another. On
one of my more recent projects we found
`DynamoDB <http://aws.amazon.com/dynamodb/>`__ is great at slicing
into very large sets of data. Dynamo provides up to five global indices
that give quick access into data sets of (a reasonably) unrestricted
size. We also found that Dynamo was **not** the ideal storage location
to read the entire data set out of for aggregate operations because
scans across large Dynamo tables are relatively slow and expensive.
Dynamo worked well for the project though since the goal was to drive a
UI with small sets of records queried from a much larger source set.

On the other end of spectrum are\ `Map
Reduce <http://hadoop.apache.org/>`__ frameworks (we'll ignore projects
like `Apache
Drill <http://incubator.apache.org/drill/drill_overview.html>`__ for now
since they are still fairly new). The raison d'être for map reduce is to
process large volumes of data and often run aggregate queries against
that data set. In these frameworks the aggregate queries being run make
reading the entire data a requirement.

As a system implementer the best thing I can do is ask questions
to determine the correct trade offs to make
when selecting databases. Once I know the trade offs that need to be
made for an implementation then I can pick a good database. The
following questions can help to discriminate between slicing and
aggregating:

-  What level of granularity of information is useful to the user? Going
   to the clickstream example, does a end user of the proposed data
   system care that a user #1243 clicked the 'yes' button at 11:34AM or
   does the end user care that 600 more individuals clicked 'yes'
   between 11:00-12:00 than between 12:00-13:00?

   -  It is worth noting that regardless of the answer to the above
      question both given examples require storing information at the
      most granular level in the system. The only difference is how the
      information is presented to the user.

-  What kind of user experience is the data set driving? A tool that
   promotes information discovery (along predefined indices) has to be
   responsive to queries in order to be effective. Alternatively, a
   dashboard with a set predefined metrics does not require (as great)
   responsiveness as an information discovery tool.
-  How fast is the underlying data set changing? A slow to respond data
   system can be aided by caching results when the underlying data set
   has a slow rate of change. On the other hand queries against as
   faster changing data set will require a more frequently updated
   caching solution to return valid results.

.. |A cleaver -- Original photo by Mark Coggins / CC By 2.0| image:: http://codinginthetrenches.com/wp-content/uploads/2014/03/cleaver.png
   :class: wp-image-82
   :width: 350px
   :height: 261px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/03/cleaver.png
.. |image1| image:: http://codinginthetrenches.com/wp-content/uploads/2014/03/ocean_trawler.png
   :class: wp-image-84
   :width: 350px
   :height: 147px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/03/ocean_trawler.png
.. |The is no hard line separating the use cases of slicing data vs. aggregating| image:: http://codinginthetrenches.com/wp-content/uploads/2014/03/slice-aggregate.png
   :class: size-full wp-image-87
   :width: 500px
   :height: 39px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/03/slice-aggregate.png
