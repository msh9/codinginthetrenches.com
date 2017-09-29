+++
date = "2017-09-28"
author = "Michael Hughes"
title = "When to replace a service or system."
categories = ["software-design"]
tags = ["tips","agile","design"]
description = "Today we'll talk a bit about when it makes sense to replace services and valid approaches for doing so."
draft = true
+++

Have you ever considered a service or suite of services and thought, "boy it really looks like some yarn."

[!["World's Largest Ball of Yarn" by Kirk Olson is licensed under CC BY 2.0](/images/2017-09-28-when-to-replace/ball_of_yarn.jpg "A large ball of yarn")](https://www.flickr.com/photos/kirkols/4903201376/)

Or alternatively what about a scribble?

[!["Scribbles" by aehdeschaine is licensed under CC BY-ND 2.0](/images/2017-09-28-when-to-replace/scribbles.jpg "Scribbles")](https://www.flickr.com/photos/aehdeschaine/16909136481/in/photolist-rLcKaT-oSdj9V-5Rj8ob-4y7xFv-4dB8uh-3pGE8C-8Pp4Zx-a4G4Ur-8N89BM-4dnf4h-dsGw7z-8jBFuf-5JJMpy-5SG9B1-6VGEPU-4eMyog-3pGwhG-53K7N5-644Um5-psozDC-dxcdDP-k7pQiU-9HWsRj-3aEsKV-dgrBmY-3pBtZr-3pC6yF-dUjQJc-dq2qX-4dB6Cu-DoBbgi-7wyNuQ-f7bcFL-M5ChrA-TTroSk-XdK4cM-oCNPRH-8nyig6-5LWZRz-2SKpre-4prLPn-dmb7sW-qe7tXc-SLY9Pk-qma9U8-772peE-34Ydj3-nCKum-UTeecf-64ouCd)

There is a tendency amongst those of us who write software for a living to consider systems that are not understood as being garbage. Often, this suspicion of poorly understood systems turns out to be false or at least
partly so. Frequently, what look like obtuse decisions made for no apparent reason turn out to have solid foundation in rationality. Software that looks strange with weird functionality sometimes is that way because strange and weird things were asked of it.

This post is not about the above, it _is_ about the relative balls of yarn and figurative scribbles in code.

First some smells to consider,

- Non-idiomatic usage of language and tools: Sometimes frameworks and languages are used in strange ways due to corner user cases required by a customer in other cases the implementors may
have been ignorant of idiomatic usage patterns. Usage that is contrary to established norms is not a red flag itself, instead the red flags here are whether the usage makes sense in context.
- Rising extension costs: If the cost to extend the system rises linearly, or worse exponentially, with respect to the number of features added then the design and implementation of the system 
may no longer be appropriate for the use cases that it needs to support.