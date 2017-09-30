+++
date = "2017-09-28"
author = "Michael Hughes"
title = "When to replace a service or system."
categories = ["software-design"]
tags = ["tips","agile","design"]
description = "In this post we will consider factors which indicate a system is not receiving enough maintenance."
draft = true
+++

Have you ever considered a service or suite of services and thought, "that looks like a ball of yarn."

[!["World's Largest Ball of Yarn" by Kirk Olson is licensed under CC BY 2.0](/images/2017-09-28-when-to-replace/ball_of_yarn.jpg "A large ball of yarn")](https://www.flickr.com/photos/kirkols/4903201376/)

There is a tendency amongst those of us who write software for a living to consider systems that are not understood as being garbage. Often, this suspicion of poorly understood systems turns out to be false or at least partly so. Frequently, what look like obtuse decisions made for no apparent reason turn out to have solid foundation in rationality. Software that looks strange with weird functionality sometimes is that way because strange and weird things were asked of it.

This post is not about rational decision making. It _is_ about the figurative balls of yarn. The systems that really do need help.

Often when considering a system we talk about the presence of things like the [the inner platform effect][1] or design anti-patterns. [Poor quality can lead to slow development]({{<ref "2017-02-18-quality.md">}}) and other issues, but may not be a problematic enough to warrant planned maintenance rework and refactoring. I like to use a couple other indicators:

- Rising extension costs: If the cost to extend the system rises linearly, or worse, exponentially, with respect to the number of features added then the design and implementation of the system may no longer be appropriate for the use cases that it needs to support. This is probably the most important indicator. 
- Ornate designs: Another indicator of a failed system is when architectural or design purity insists that long and unnecessarily complicated paths are taken to answers instead of simple straightforward approaches. We'll come back to this one because it's one that I have seen frequently and it often leads directly to rising extension costs.

Sometimes the system just looks like this,

[!["Scribbles" by aehdeschaine is licensed under CC BY-ND 2.0](/images/2017-09-28-when-to-replace/scribbles.jpg "Scribbles")](https://www.flickr.com/photos/aehdeschaine/16909136481/in/photolist-rLcKaT-oSdj9V-5Rj8ob-4y7xFv-4dB8uh-3pGE8C-8Pp4Zx-a4G4Ur-8N89BM-4dnf4h-dsGw7z-8jBFuf-5JJMpy-5SG9B1-6VGEPU-4eMyog-3pGwhG-53K7N5-644Um5-psozDC-dxcdDP-k7pQiU-9HWsRj-3aEsKV-dgrBmY-3pBtZr-3pC6yF-dUjQJc-dq2qX-4dB6Cu-DoBbgi-7wyNuQ-f7bcFL-M5ChrA-TTroSk-XdK4cM-oCNPRH-8nyig6-5LWZRz-2SKpre-4prLPn-dmb7sW-qe7tXc-SLY9Pk-qma9U8-772peE-34Ydj3-nCKum-UTeecf-64ouCd)

### Costs ###

Actual times to completion on new work can be indicative of growing problems in a code base.

### 'Ornateness' ###

Ornateness is a broader problem than implementation costs. When present in
sufficient quantity it can lead to high development costs, but time can be saved if it can be detected beforehand and rectified. The definition of dangerously ornate is also unfortunately harder to precisely define than high development costs so let's consider a couple examples.

#### [HATAOS][2] and [HAL][3] in extreme ####

HATAOS combined with HAL is design approach for enabling self-discovery in HTTP web API clients. An API enables clients by return response that container not just the data as requests but also links to other related data and services in the system. It's a neat idea that has some good uses.

On the other hand, a problematic application of the pattern involved a service making multiple HTTP calls to itself in order to retrieve data that it (the service) managed. This made performance of the design somewhat unpredictable since a single HTTP call may result in tens or possible hundreds of self referencing HTTP calls being made. This is HAL and HATAOS taken to a logical extreme; if a response can include discovery information, why not make the service that returns the response fully dynamic and use the response it sends to discover more information that it has in its own data store. The result was a service that could only handle one class of business use cases and no others (without exponential rising in cost of work).

Another example of ornateness is a service that took a non-idiomatic usage of a language and framework too far.

![This data flow should look really wierd to you](/images/2017-09-28-when-to-replace/self-ref-api.svg "Data flow diagram of a self-references API")

[1]: https://en.wikipedia.org/wiki/Inner-platform_effect 'Inner-platform Effect'
[2]: https://en.wikipedia.org/wiki/HATEOAS 'RESTful HATAOS'
[3]: http://stateless.co/hal_specification.html 'HAL'