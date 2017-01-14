+++
author = "Michael Hughes"
title = "Relaxing on CouchDB"
description = ""
date = "2016-12-15T20:10:46-07:00"
draft = true
layout = "post"
tags = ["tips", "using-software","databases"]
categories = ["data"]

+++

[Apache CouchDB 2.0][1] was recently released and has some compelling features for those looking for clustered document store databases. In today's post I want to share a few of things that I've
learned on how to use CouchDB's new features and how to avoid some new user mistakes that we made along the way.

[1]: http://couchdb.apache.org/ "Apache CouchDB"

<!--more-->

- [Mango indices][3] are magic.

The [release notes for 2.0][2] makes a brief note about improved index performance when using Mango indices instead of views. What an understatement! We found, as the document notes,
a roughly 10x improvement in the latency required for couchdb to index documents written to a collection. The main improvement appears to come from the fact the mango indices are
internally defined as native erlang views, a featured not enabled for clients of the database by default.

It is worth noting that our testing of the improved performance centered around an odd use case. We would write and subsequently read back a 0.5 kB document several hundred milliseconds later. In other words,
a process would write a document to a collection and the shortly later a different process would need to read that document back by a different key. The improved view processing time of Mango indices
greatly helped with this specific scenario.

I have been surprised the database documentation doesn't make more of this improvement and more obviously note that Mango indices should be preferred going forward.

All that said...

- Mango indices are not actually magic

CouchDB has, like it has for everything else, a [straightforward HTTP API][4] for creating new Mango indices on an existing collection. One of the things that we learned the hard way and is obvious in 
hindsight is that both a index's sort direction and the order of fields in the index document are really important. In the case of the former, we found that matching sort direction between the index and the
client's query made a significant (5x - 10x) change in query latency. In the case of the latter, the field definition order can make the index un-usuable for certain queries that the index might otherwise be
expected to support.

Coming from other systems, like MongoDB, this behavior can be both odd and surprising. We found that the Mango index documentation didn't spell out some of these limitations. Index field 
ordering of a Mango index is not just **like** a [composite index][6] in SQL, when it comes to index utilization, it is exactly like a relation composite index in that the beginning fields
of the multi-field mango index must be present in the query. Additionally, the storage mechamism for indices in CouchDB favor in-order traversal. Attempting to use an index a reverse sort will not work.

We didn't initiatally understand these limitations because, being new to CouchDB, we didn't know that...

- Mango indices are still fundamentally views in couchdb

Mango indices index at a faster rate partly due to be implemented in native erlang instead of JavaScript. Under the covers though they are still implemented as [views][5] which means a couple things. Views
are lazily indexed and provide a single key to search on. This means that while mango indices can index quickly, the first query to an index after a large numnber of writes can still take some time while
the collection re-indexes. Additionally, it is important to note that there is only a single key. While the mango query engine allows the specification of complex query selectors, the 'fast' filtering done
via CouchDB's B+ tree indices only applies to one key in a provided selector. That key (using clever logic?) can contain multiple fields from the source document, per the above notes, but fundamentally query
executation is still working against *some* indexed key.

- Have a retry method in place before going to production

One of the [known issues][7] for CouchDB is that it can sometimes return 500s when multiple clients are simultaneously writing or deleting documents in the same collection. We ran into this particular issue with
an [Apache Storm][8] based system that made a large number of simultaneous HTTP PUTs to a CouchDB collection in our systems. The issue is not as bad as it initiatally sounds. The most important thing to keep in mind
is that there **must be** failure handling and retry code in whatever client is writing to CouchDB. This is less an issue with couchdb and more just general programming practice. All too often newly written networked software
just assumes that the [network is reliable and the server will always respond correctly.][9]

- Beware of couchdb's space consumption

Finally, the last word is warning is that capacity planning is important. CouchDB's space consumption is highly dependant on the collections defined, secondary indices (views) defined, *and* usage patterns.


[2]: http://docs.couchdb.org/en/2.0.0/whatsnew/2.0.html#id2 "Apache CouchDB 2.0 Release Notes"
[3]: https://blog.couchdb.org/2016/08/03/feature-mango-query/ "Mango indices"
[4]: http://docs.couchdb.org/en/2.0.0/api/database/find.html#db-index "Create a mango index"
[5]: http://docs.couchdb.org/en/2.0.0/couchapp/views/intro.html "CouchDB views"
[6]: http://stackoverflow.com/questions/795031/how-do-composite-indexes-work "stackoverflow"
[7]: http://docs.couchdb.org/en/2.0.0/whatsnew/2.0.html#id4 "CouchDB 2.0 Release Notes"
[8]: https://storm.apache.org/ "Apache Storm"
[9]: https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing "Fallacies of distributed computing"