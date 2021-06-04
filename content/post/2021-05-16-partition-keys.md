+++
tags = ["design"]
categories = ["Software Design"]
description = "Reasoning about partition keys (and Azure CosmosDB)"
author = "Michael Hughes"
date = "2021-05-16"
title = "Reasoning about partition keys (and Azure CosmosDB)" 
+++

Partition keys are a common concept among distributed software from databases like CouchDB and Azure CosmosDB to other systems like Kafka and AWS Kinesis. They are a key
input into the system that has consequences on how well the system can be used to solve different end user problems and how well the system performs under load.

<!--more-->

Forget about partition keys briefly. Instead, picture a system that has an infinite supply of buckets to store data, but each bucket has a limited size. They _key_ question
is, how is data divided among the buckets. This is Azure CosmosDB.

CosmosDB is a neat product. It has,

- Georeplication **with** support for multiple write regions
- Support for multi-modal interaction
- Tunable transactions

It also, for reasonably large datasets, requires that a partition be chosen in order to distribute data. [Microsoft does a better job](https://docs.microsoft.com/en-us/azure/cosmos-db/partitioning-overview) than I will of addressing of the nuances of how partition keys are used in CosmosDB. The concept is similar to many other distributed systems
though, in order to process lots of stuff or store lots of stuff (or both!), the "stuff" needs to be divided up and worked on by separate physical hardware in parallel. The
choice of how data and computation is split up determines how well the system performs for the end user. For CosmosDB specifically our choice of partitioning key determines
how much data we can store (each logical partition is limited to 20GB), how much our system costs (CosmosDB charges by provisioned request units that are split across logical partitions), and how fast our application can execute queries.

For distributed databases there is often an additional wrinkle to the choice of partition key. It cannot be changed after database creation. This is at least the case with
DynamoDB, CosmosDB, and CouchDB. There are ways around this by migrating data between databases when the partition key needs to be changed, but this can be expensive and
slow. So what's developer to do when faced with making a choice of key for new system?

## The dataset (probably) is not as big as it looks

First, should we care about the choice of partition key in the first place? In the case of building an application which stores data in in a CosmosDB collection, it may
be that case that the entire data set is less than 20GB. Congratulations, choice of partition key is not the most important part of the application's design now.

Size limits can be deceptive. 20GB of 4K video isn't that much video. 20GB of user records including passwords is a lot of users. 

## The examples are not always useful

This is more of compliant about vendors underplaying the importance of key choice. 

CosmosDB's document on key choice uses user identifier or first name as examples. This is great for building a identity and access management system but little else. AWS' DynamoDB [blog post on partition keys](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/) is better, address

## Customer id (probably) is not the right choice

We're now at the point that the dataset is big enough to need partitioning. For those of us that enterprise or small and medium business applications (ie stuff for other businesses), one possibility is to divide data by tenant. A tenant or customer id is an identifier for each customer organization using the application. For example, Slack very likely maintains a unique identifier for each new Slack organization created. Partitioning data by customer identifier can be appealing since the customer concept likely
already is well represented in the system for the purpose of authorization. Again, think of the example of Slack where separate customer organizations cannot, by default, interact with each other.

Unfortunately storing data this is probably the wrong choice. It's tempting and it has a certain cognitive ease to it (particularly in multi-tenant SaaS solutions, customer id is almost too easy of a choice.)

The issue with using a customer identifier alone is that there can be significant variability in size. Yet again, Slack, one 'customer' be on a free account with four people, the other might be an enterprise with 50000 employees with integrated file sharing. 

## Sometimes the use case itself is problematic

I once worked on a project that had an architecture team mandate the choice of technology. The technology choice was made independently of the product requirements.

This created some problems for us. We were using CouchDB v2+ at the time and had some pretty significant performance issues that were not the fault of the technology, but
rather what we wanted to choice. Our product team wanted to enable highly flexible search across a variety of fields in the dataset and needed all of the fields to be
optional. We compromised on a partition key choice that enabled each search query to be roughly evenly distributed across the hosts in the cluster. This wasn't idea though
because it meant that *every* query was distributed to *every* host. Microsoft's CosmosDB guidance on choosing partition keys even mentions that ideally the partition identifier
should help scope which physical hosts handle queries.

Several years later the system has evolved significant and these "search" use cases are now handled by an elasticsearch based system; one designed for the use case in mind
enabling end users to search across events.

