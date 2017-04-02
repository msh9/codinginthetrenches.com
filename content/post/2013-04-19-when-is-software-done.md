+++
author = "Michael Hughes"
categories = ["uncategorized"]
date = "2013-04-19"
description = "Some things to not do when you are managing your own content"
menu = ""
tags = ["design", "philosophy", "fun"]
title = "When is software done and implications therein"

+++

In this post we'll discuss what it means for a piece of software to be done (if ever) and some of the implications of that.

<!--more-->

Let me open with a disclaimer. For the rest of this post I'll be
referring almost exclusively to non-hobby software projects.

We'll start with the idea of being done. It's likely safe to say that
some things have a specific and ideal state that can be described as
done, software and the problems that it tends to solve are not among
those things. For example, when I brew beer there is a point where a
particular batch is done. The batch has been cooked, fermented,
conditioned, bottled, distributed, and aged--at this point not calling
it done and then drinking it would be a crying shame. I've never felt
this kind of completeness when working on a software solution. There's
an adage (maybe, enough people refer to it) that software is never done,
only abandoned. This is a somewhat dim view of the final stages of the
development life cycle, but it's probably a better picture of reality
than other comparisons.

It's worth addressing systems that have been around for some time now
which may be used as counterpoint to the idea that software is never
complete. During the late 90's COBOL programmers made good money fixing
[date and time
bugs](http://en.wikipedia.org/wiki/Year_2000_problem#Background) in
software--software that had existed for some time prior to that decade.
I'd like to imagine that for a time heads of IT departments at some
enterprises forgot that these pieces of software existed. Another
example, a company that I have worked with in the past uses an
inventory tracking system based on technology [introduced by
IBM](http://en.wikipedia.org/wiki/IBM_System_i) in the mid-80s. Does the
inventory tracking system exist as a static solution with other changes
occurring around it? No. Developers still work with the system today
making modifications to it.

For the sake of humor let's compare some of the above situations to some
physical things that an enterprise might use. Suppose I build a warehouse.
The warehouse is very modern--it has an automated robotic storage
system, RFID tagging of the goods it stores, and is meant to be operated
24/7/365. Then suppose that this warehouse works fine for a few years,
but you discover that when [January 19,
2038](http://en.wikipedia.org/wiki/Year_2038_problem) rolls around
suddenly your warehouse returns to operating like the early 1900s. This
is not exactly ideal. Continuing the goods distribution theme, suppose I
build you a delivery trunk in the early 80s. Now suppose that 30 years
later you're still using the same basic delivery truck but have changed
the driver, increased payload by 1000%, changed the wheels to treads,
and removed the doors (because they weighed too much). Sounds absurd,
no?

The comparisons I'm making are silly without a doubt, but that's the
point. It's silly to approach the ideas of done-ness and final delivery
of software from the same perspective as other business products.
Warehouses don't come with date and time bugs (although the embedded
systems running them might). Similarly UPS buys a delivery truck and
uses it--they don't modify the **same** truck over the course of 2
decades.

With all of the above said it's worth throwing down a definition for
when a project is done: software is 'done' when the usage threshold
fails below what is required to get engineers to develop it. In other
words, the project is done when no one thinks that it's worth
maintaining. There's a flip side to this rule that appears when
evaluating open source projects. Whether a project is active or not can
count for or against it's use respectively. This may be a "duh"
statement, particularly for business applications since it effectively
says that a stakeholder must find some thing useful enough to pay for it.

Why is software not a finished product? A number of reasons come to
mind:

-   Bad assumptions
-   Human error
-   Changing requirements
-   Regressions
-   ...

3 items on the above list require software to be maintained in terms of
patches over time. The other item, changing requirements can cause small
feature changes or drastic re-architectures over time. A great example
of a couple items on the above list is airline reservations.
[SABRE](http://en.wikipedia.org/wiki/Sabre_(computer_system)),
introduced by American Airlines and IBM wa,s at the time of introduction, a revolutionary
product--it automated the process of booking flights and assigning seats
to travelers. It was a good product for the time, but eventually newer
faster hardware (also introduced by IBM) came onto the market and
airlines grew larger and demanded greater booking capacity. The
reservation product named SABRE eventually became the [Programmed
Airline Reservation
System](http://en.wikipedia.org/wiki/Programmed_Airline_Reservation_System)
which itself [evolved into
TPS](http://enterprisesystemsmedia.com/article/tpf-modernizing-the-other-operating-system).

Reasons for why software is never complete aside, to me the
implications of this definition of 'done' are more interesting than the
definition itself:

-   An implication of the above is for the life of a project *someone
    somewhere* will be working on it. Probably the best example of
    this is the inventory tracking system mentioned above, a system that
    has been maintained by an organization for the last couple
    **decades.** This may be yet another "duh" point, but if nothing
    else it hits on the issue that good practices such as solid
    application design and documentation are still as important as ever.
-   Zombie software will exist. That is software which was built to
    solve a problem, but due to requirement changes and bug fixes over time
    has mutated into a piece of code which munches through the minds of
    poor unsuspecting software teams. Zombie software may still solve a
    good problem, but it is a candidate for a large scale
    refactoring effort. It's up to team leads and eventually project
    managers to make sure that appropriate actions are taken.
-   It's worth spending time thinking about when a project will
    be finished. A piece of software that will only be used for a couple
    years does not deserve that same level of rigour as a big iron ERP
    system meant to last a decade.
-   Ghost software will exist. This is probably the most unfortunate
    implication of the above definition of done. Some problems don't
    exist for enough people to meet the threshold that yields well
    maintained solutions. It's incredibly frustrating to find a
    potential solution to problem only to discover that it hasn't been
    maintained actively for the last 7 years.

