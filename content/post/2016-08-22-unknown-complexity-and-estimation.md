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

Accurately estimating the time to completion and budget requires that an estimator or group of estimators roughly capture both the breadth of work to be done and the longest series of serial tasks. Unfortunately, 
software development tends to be an enterprise fraught with unknown unknowns. In other words, the discipline contains many components of work which are unknown, ie they are not evident as required tasks to the project
team, and are, secondarily, unknown because even they contain an amount and type of work not familiar to the team. Many of the project overruns that I have seen or personally experienced have come to down to one or
both of these unknown factors influencing the project's real schedule.

![An estimate for three serial items with more unknowns](/images/2016-08-22-unknown-complexity/unknown-unknown.svg "Time estimates with unknowns")

The above diagram shows a near worst case scenario, known tasks take longer than estimated and there are a couple unknown tasks which also have to be completed. Above, several types of
unknown are on display, uncertainly in knowing the work involved in the project, uncertainly in the longest series of tasks, and uncertainly in the length of known tasks in the project. Together these kinds of 
unknowns make long term project planning challenging, perhaps impossible for large new projects. Returning to the opening point, a project is late or over budget only relative to some predetermined time or monetary value.
There are methodologies for project planning in the software estimation methods link above, they even including proprietary software that purports to use long tuned algorithms for accurately estimating projects. These 
methodologies all rely on the premise that future projects will resemble past projects and may, as a result, miss complexity present in new projects or features. 

Given unknown unknowns though, one approach, the approach I advocate for is to call a project finished when it's finished.

This is a rhetorical tautology. There is a relevant point here though.

The point is that at the beginning of a project it is vital to admit that the project is not finished (obviously) and that the finish date is essentially unknown. **Rough** estimates as provided by expert analysis or formal
methods are only useful a way determining if the project is worth executing at all. These estimates should not be used as sell by dates because we need to admit that our
ability to estimate new work is limited and any precise looking estimates will likely be wrong. Again there is nothing wrong with estimating a 6 month effort in order to guess what it might cost and weigh it against
other 6 month estimates. A *rough* estimate that says a project will cost $10 million dollars is very useful if that same project is only estimated to return $40,000 in annual revenue--that estimate will have saved valuable
development resources to be spent elsewhere. We get tripped up when we take what was a rough cost of project estimate (~$10 million dollars, ~6 months) and then tie explicit sales dates to that estimate, essentially
pinning the company's delivery reputation to a rough estimate of how long a project will take.

Seriously. Don't promise huge new features or new software 6 months or more in advance. Just don't do it.



[1]:https://en.wikipedia.org/wiki/Software_development_effort_estimation Estimation Methods
[2]:https://en.wikipedia.org/wiki/The_Mythical_Man-Month#The_mythical_man-month Mythical Man-Month