+++
author = "Michael Hughes"
banner = ""
categories = []
date = "2016-08-22T07:28:24-06:00"
description = "Developing software can involve unknown amounts of complexity, this post discusses implications of this and idealized methods for handling it"
draft = true
images = []
layout = "post"
menu = ""
tags = []
title = "Unknown complexity and estimation"

+++

Developing new software involves resolving a frequently unknown quantity of problems of unknown complexity. Even when working on existing projects, new initiatives and features
can contain a unknown total amount of complexity. SCRUM and other related methodologies focus on relative estimation which has limitations when starting brand new work. 
Today's post looks at some of our limitations when it comes to estimation and thoughts on what is implied by those limits.

<!--more-->

At this point it verges on cliché to remark how many commercial software projects run 'late' and over 'budget.' I find these kinds of statements odd, since, among other things, it implies that software
projects have accurately estimated finish dates and budgets in the first place--this is probably a dubious proposition in itself. Let us discuss the issue with long term due dates
before diving into the issue of unknown complexity and how to be 'okay' with it. 

Wikipedia has nice summary article listing a few [different software estimation methods.][1] It's an understatement to say that over the years there have been a variety of methods of generating
an estimate of how much a piece of software will cost. The range of methodologies is wide, ranging from those that claim to be based on long develop theories couched in mathematics to those
that rely on groups of experts giving a rough value off the top of their heads. In order of difficulty estimation of a software project, regardless of methodology, involves knowing the components
of work involved to complete the project and then actually developing an accurate estimate for the components of work.

![An estimate for three serial items to be completed](/images/2016-08-22-unknown-complexity/estimate-1.svg "Time Estimate")

Most non-toy software projects have components which are interdependent. In other words there is some amount of work which much be completed in order: part 1, part 2, part 3, and so on. The serial dependencies
can dominate a project's schedule because they cannot be completed faster by the application of larger teams ([though that has its own problems anyway][2]). A set of serial dependencies takes however long they will
take to get done regardless of team size. Other components of the project may be finished quickly, but the essential (and serial!) work remains regardless.

![An estimate for three serial items and other non-serial items](/images/2016-08-22-unknown-complexity/more-estimates.svg "Time estimates with other tasks")

Accurately estimating the time to completion and budget requires that an estimator or group of esimators roughly capture both the breadth of work to be done and the longest series of serial tasks. Unfortunately, 
software development tends to be an enterprise fraught with unknown unknowns. In other words, the discipline contains many components of work which are unknown, ie they are not evident as required tasks to the project
team, and are, secondarily, unknown because even they contain an amount and type of work not familiar to the team. Many of the project overruns that I have seen or personally experienced have come to down to one or
both of these unknown factors influencing the project's real schedule.

![An estimate for three serial items with more unknowns](/images/2016-08-22-unknown-complexity/unknown-unknown.svg "Time estimates with unknowns")

[1]:https://en.wikipedia.org/wiki/Software_development_effort_estimation Estimation Methods
[2]:https://en.wikipedia.org/wiki/The_Mythical_Man-Month#The_mythical_man-month Mythical Man-Month