---
title: On the use of AWS DynamoDB
date: 17.08.2013
author: Michael Hughes
tags: [AWS, DynamoDB, Dev Practices]
---

Summary
  In today's post I'll cover some of the potential
  use cases for `AWS DynamoDB`_, why you might want
  to use it or not.

---

DynamoDB is fast, highly scalable database service offered
by Amazon Web Services. DynamoDB provides table oriented
storage of records with variable attributes on each record.

Like any other data storage system DynamoDB has tradeoffs between
its features and capabilities which makes is more appropriate for some
applications than others. The point of this post is cover some reasons
why (and why not) to use DynamoDB as the database for a project. A way
of evaluating the appropriateness of DynamoDB for a project is to first
consider **could I use it** then consider **can I use it**. The ordering
used is to first consider if the system is of any use the project, if it's
not then move on to another techology, SQL Server perhaps? The second
consideration is necessary to take into account that in some cases
the tradeoffs that DynamoDB makes may make it inappropriate for applications
that it would otherwise work well for.

Essentially uses for DynamoDB end up looking like the following:

.. image:: /images/dynamodb-choice.png
  :align: center
  :alt: Abstract choices leading to use of DynamoDB or not
 
#. First we'll look at some of things DynamoDB does well and scenarios where
   DynamoDB's capabilities would help a project. Things that DynamoDB is good
   at:
 
   - **Predictable speeds**: For the most part the potential throughput for a data layer 
     based on DynamoDB is reliable and predictable. Although the pricing
     and throughput calculations may be hard to figure out initially, once you have
     the rules you can predict the general throughput cost of an operation and determine
     the overall IO potential of the system.
   - **Size scability**: Scaling a other data storage systems involves adding
     volumes, copying data, or adding whole new data node to a cluster (think of
     SQL Server or Hadoop). Scaling DynamoDB (with one *very* important exception) just
     involves adding more data to the sytem. This bullit point could really be rewritten
     as the advantage of DynamoDB being a PaaS_.
   - **A hash based query interface**: I mention this item here because it's the reasonmy current
     project uses the service. The query interface gives bulk and single record CRUD access to
     data stored in DynamoDB. A good analogy that I have often used for DynamoDB is that the
     query interface gives the client CRUD access to a very large remote hashmap (or dictionary). The
     query end point takes advantage of DynamoDB's data structure requirements (covered later) to
     provide very fast access to stored data.
   
   To sum it up DynamoDB is good for situations where fast CRUD performance is required over
   large and growing data sets. Sounds like:
   
   - Click stream trackers
   - Database driven (non-financial) web sites
   - 


.. _AWS DynamoDB: http://aws.amazon.com/dynamodb/
.. _PaaS: http://en.wikipedia.org/wiki/Platform_as_a_service