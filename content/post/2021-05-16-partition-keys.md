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