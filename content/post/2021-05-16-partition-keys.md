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

