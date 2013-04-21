---
title: Deadlines and goals in a software project
date: 19.04.2013
author: Michael Hughes
tags: [Philosophy,Design]
---

Summary
    I'm going to abuse an old addage--Every software project has it's day. Today's
    article is not about solving a specific technical problem. Instead I'm going
    to offer some thoughts on whether software projects are ever complete and what
    I should be striving for in a solution.

----

Let me open with a disclaimer. For the rest of this post I'll be referring
almost exclusively to non-hobby software projects. 

We'll start with the idea of being done. It's likely safe to say that many things have
a specific and ideal state that can be described as done, software and the problems that
it tends to solve is not among those things. For example, when I brew a
batch of brew there is a point where a particular batch is done. The batch has been cooked,
fermented, conditioned, bottled, distributed, and aged--at this point not calling it done
and then drinking it would be a crying shame. I've never felt this kind of completeness 
when working on a software solution. There's another addage (maybe, enough people refer to it),
software is never done, only abandoned. This is a somewhat dim view of the final stages
of a solution's lifecycle, but it's probably better picture of reality than other comparisons.

It's worth addressing systems that have been around for some time now which may be used
as counterpoint to the idea that software is never complete. During the late 90's COBOL
programmers made good money fixing date and time bugs in software--software that had
existed for some time prior to that decade. I'd like to imagine that for a time heads of
IT departments at some enterprises forgot that these pieces of software existed. A company
that I have had a project with in the past uses a inventory tracking system based on
technology introduced by IBM in the mid-80s. Does the inventory tracking system exist
as a static solution with other changes occurring around it? No. Developers still work
with the system today making minor modifications to it. 

Some software projects are still approached with a waterfall project management mentality.
For sake of humor let's compare some of the above situations to other projects that use
waterfall. Suppose I build you a house, no a warehouse (to make it more of an 'enterprisey'
situation). The warehouse is very modern--it has an automated robotic storage system, RFID
tagging of the goods it stores, and is meant to be operated 24/7/365. Then suppose that this 
warehouse works fine for a few years, but you discover come that when the date January 1, 2036 
rolls around suddenly your warehouse returns to operating like the early 1970s. This is
not exactly ideal. Continuing the goods distribution theme, suppose I build you a delivery
trunk in the early 80s. Now suppose that 30 years later you're still using the same basic
delivery truck but have changed the driver, increased payload by 200%, changed the wheels to treads, and
removed the doors (because they weighed too much). Sounds absurd, no?

The comparisons I'm making are silly without a doubt, but that's the point. It's silly to
approach the ideas of doneness and final delivery of software from the same perspective
as other business products.

If we just accept for the moment that the majority of software solutions are never
completed then we can start thinking about reasons why this might be.


.. _date and time bugs: http://en.wikipedia.org/wiki/Year_2000_problem#Background
.. _introduced by IBM: http://en.wikipedia.org/wiki/IBM_System_i
.. _updating Curiosity's code: http://www.nasa.gov/home/hqnews/2012/aug/HQ_12-276_Curiosity_Rover_Software_Update.html
.. _SABRE: http://en.wikipedia.org/wiki/Sabre_(computer_system)
.. _Programmed Airine Reservation System: http://en.wikipedia.org/wiki/Programmed_Airline_Reservation_System
.. _Transaction Processing Facility: http://en.wikipedia.org/wiki/Transaction_Processing_Facility
.. _evolving TPS: http://enterprisesystemsmedia.com/article/tpf-modernizing-the-other-operating-system
