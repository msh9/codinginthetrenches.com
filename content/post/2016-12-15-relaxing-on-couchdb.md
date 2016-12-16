+++
menu = ""
images = [
]
author = "Michael Hughes"
title = "Relaxing on CouchDB"
description = ""
date = "2016-12-15T20:10:46-07:00"
draft = true
layout = "post"
tags = ["tips", "using-software","databases"]
categories = ["data"]

+++

[Apache CouchDB 2.0][1] was recently released and has some compelling features for those looking for clustered document store databases. We've recently
been using it as part of a event processing pipeline and learned a few things along the way. In today's post I want to share a few of things that we've
learned since the sine documentation on how to use CouchDB's newer features can be lacking in places.

[1]: http://couchdb.apache.org/ "Apache CouchDB"

<!--more-->

- [Mango indices][3] are magic.

The [release notes for 2.0][2] makes a brief note about improved index performance when using Mango indices instead of views. What an understatement! We found, as the document notes,
a roughly 10x improvement in write and subsequent read latencies in a scenario where a 0.5 kB document was written and then a short time later (several hundred milliseconds) queried from the database.

I have been surprised the database documentation doesn't make more of this improvement and more obviously note that Mango indices should be preferred going forward.

- Mango indices are not actually magic

CouchDB has, like it has for everything else, a [straightforward HTTP API][4] for creating new Mango indices on an existing collection. One of the things that we learned the hard way and is obvious in 
hindsight is that both a index's sort direction and the order of fields in the index document are really important. In the case of the former, we found that matching sort direction between the index and the
client's query made a significant (5x - 10x) change in query latency. In the case of the latter, the field definition order can make the index un-usuable for certain queries that the index might otherwise be
expected to support.

...more detail here...

- Have a retry method in place before going to production

...more detail here...

- 


[2]: http://docs.couchdb.org/en/2.0.0/whatsnew/2.0.html#id2 "Apache CouchDB 2.0 Release Notes"
[3]: https://blog.couchdb.org/2016/08/03/feature-mango-query/ "Mango indices"
[4]: http://docs.couchdb.org/en/2.0.0/api/database/find.html#db-index "Create a mango index"