+++
author = "Michael Hughes"
banner = ""
categories = ['software-management']
date = "2016-08-22T07:28:24-06:00"
description = "Developing software can involve unknown amounts of complexity; this looks at some of our limitations when it comes to estimation and what is implied by those limits."
draft = true
images = []
layout = "post"
menu = ""
tags = [pm, philosophy, agile]
title = "Unknown complexity and estimation"

+++

Developing new software involves resolving a frequently unknown quantity of problems of unknown complexity. Even when working on existing projects, new initiatives and features
can contain a unknown total amount of complexity. While being appealing modern product management methods, scrum and other related methodologies focus on relative estimation which has limitations when starting brand new work. 
Today's post looks at some of our limitations when it comes to estimation and what is implied by those limits.

<!--more-->

At this point it verges on cliché to remark on how many commercial software projects run 'late' or are over 'budget.' I find these kinds of statements odd, since, among other things, it implies that software
projects have accurately estimated finish dates and budgets in the first place--this is probably a dubious proposition in itself. Let us discuss the issue with long term due dates
before diving into the issue of unknown complexity and how to be 'okay' with it. 

Wikipedia has a nice summary article listing [different software estimation methods.][1] It is an understatement to say that over the years there have been a variety of methods of generating
an estimate of how much a piece of software will cost. The range of methodologies is wide, going from those that claim to be based on long develop theories couched in mathematics to those
that rely on groups of experts giving a rough value off the top of their heads. Regardless of methodology estimation of a software project involves, in order of difficulty, knowing the components
of work involved to complete the project and then actually developing an accurate estimate for the components of work.

![An estimate for three serial items to be completed](/images/2016-08-22-unknown-complexity/estimate-1.svg "Time Estimate")

Most non-toy software projects have components which are interdependent. In other words there is some amount of work which much be completed in order: part 1, part 2, part 3, and so on. The serial dependencies
can dominate a project's schedule because they cannot be completed faster by a larger teams, ([and that has its own problems anyway][2]). A set of serial dependencies takes however long they will
take to get done regardless of team size. Other components of the project may be finished quickly, but the essential (and serial!) work remains.

![An estimate for three serial items and other non-serial items](/images/2016-08-22-unknown-complexity/more-estimates.svg "Time estimates with other tasks")

Accurately estimating the time to completion and budget requires that an estimator or group of estimators roughly capture both the breadth of work to be done and the longest series of serial tasks. Unfortunately, 
software development tends to be an enterprise fraught with unknown unknowns. In other words, the discipline contains many components of work which are unknown because they are not evident as required tasks to the project
team, and are, secondarily, unknown because even if they were known they still contain an amount and type of work not familiar to the team. Many of the project overruns that I have seen or personally experienced have 
come to down to one or both of these unknown factors influencing the project's schedule.

![An estimate for three serial items with more unknowns](/images/2016-08-22-unknown-complexity/unknown-unknown.svg "Time estimates with unknowns")

The above diagram shows a near worst case scenario, known tasks take longer than estimated and there are also unknown tasks which have to be completed. Above, several types of
unknown are on display, uncertainly in knowing the work involved in the project, uncertainly in the longest series of tasks, and uncertainly in the length of known tasks in the project. Together these kinds of 
unknowns make long term project planning challenging, perhaps impossible for large new projects. Returning to the opening point, a project is late or over budget only relative to some predetermined time or monetary value.
There are methodologies for project planning in the software estimation methods link above, they even including proprietary software that purports to use long tuned algorithms for accurately estimating projects. These 
methodologies all rely on the premise that future projects will resemble past projects and may, as a result, miss complexity present in new projects or features. 

Given unknown unknowns though, one approach, the approach I advocate for is to call a project finished when it's finished.

This is a rhetorical tautology. There is a relevant point here though.

The point is that at the beginning of a project it is vital to admit that the project is not finished and that the finish date is essentially unknown. *Rough* estimates as provided by expert analysis or formal
methods are only useful as a way determining if the project is worth executing at all. These estimates should not be used as sell by dates because we need to admit that our
ability to estimate new work is limited and any precise looking estimates will likely be wrong. Again there is nothing wrong with estimating a 6 month effort in order to guess what it might cost and weigh it against
other 6 month estimates. A *rough* estimate that says a project will cost $10 million dollars is very useful if that same project is only estimated to return $40,000 in annual revenue--that estimate *may* save valuable
development resources. We get tripped up when we take what was a rough cost of project estimate (~$10 million dollars, ~6 months) and then tie explicit sales dates to that estimate, essentially
pinning the company's delivery reputation to a rough estimate of how long a project will take.

Don't promise large new features or new software 6 months or more in advance. Just don't do it.

I've previously written about agile [methodologies, and loss of fidelity in long term estimates][3], and some thoughts on dealing with estimate fidelity. As a very quick summary, if there is some
fixed date in the future then the delivered product must become fungible. 

![Balancing time cost versus getting things done](/images/2016-08-22-unknown-complexity/time-versus-components.svg "Time versus Getting Things Done")

My diagram again verges on being a rhetorical tautology. The point that getting more done takes more time can be lost in the midst of a project though. Encountering unexpected difficulties (unknowns as noted above)
or incorporating feature changes (more unknowns from the perspective of the development team) all mean more work; we then still maintain a fixed sales deadline in spite of accepting that more work will be done. Attempting
to borrow agile style estimates will not help with longer term planning. I repeat, story points and other relative complexity estimates *do not* help resolve the unknowns which can dominate a six month project schedule. 

This is where we have to [learn to love the bomb.][4]

Uncertainty means that at best we can construct a rough guideline by attempting to plan far into the future and at worst waste time, money, and effort developing a farce of reality whose cognitive dissonance with said reality damages
the enterprise involved. In the prior post related to agile I noted that only near term goals can be well defined and executed upon. Instead of trying to develop longer term plans we should be creating plans we can be
reasonably executed. Don Wells, who published one of the original guides to extreme programming, has a take on 
["honest planning."][5] A honest plan being a plan that can reasonably be expected to be followed. Wells' honest planning hits on something very relevant to project uncertainties, that plans have expiration dates and notably
that those dates are measured in a small number of weeks. In scrum the [backlog grooming meeting][6] is for understanding and estimating work for the next few weeks (the next sprint or two) using estimates derived from how large the next set of work is relative to prior work. 
These estimation techniques *are not* for figuring out the size of some task to be worked six months in the future. All is not lost though.

Once a project is greenlit because the **rough** long term estimates say it will net profit then it is possible to apply agile techniques. All of the familiar guidelines from agile are still valuable: releasing frequently, 
emphasizing communication with the project stakeholders, and using relative estimates. By focusing on frequent releases, near term estimates, and constant communication in order to determine value we avoid some of the pitfuls
created by long term plans. It is not as if unknown unknowns do not exist in agile projects rather they are less of an issue because far fewer assumptions are made about the long term project effort. Finally, the project is 
(initially) done when the product owners feel it is ready which may be sooner rather than later for some projects and later rather than sooner for others; the point being that flexible feature delivery makes the delivery
date movable to later or sooner than originally thought.

In short we should be humble about estimation, particularly with regard to long term estimates. To summarize a few of the more salient points that are implied by accepting uncertainly,

- Long term software project estimates can contain multiple types of unknowns
- Project level estimates can be useful for determining whether a company's program should do X or Y (should I make a speculative investment in a new market or a speculative investment in advancing my current offerings)
- Project level estimates are not the same thing as the date a customer can expect to purchase a product
- Delivery estimates are only made for the purpose of short term planning (over the next few weeks)
- Delivery dates at the beginning of a project should be considered unknown since when a project is done will be determined iteratively by both project owners and the development teams

I hope this was a helpful when considering how to approach planning a new project.

[1]:https://en.wikipedia.org/wiki/Software_development_effort_estimation Estimation Methods
[2]:https://en.wikipedia.org/wiki/The_Mythical_Man-Month#The_mythical_man-month Mythical Man-Month
[3]:/2014/11/30/agilefall-gracefully-delivering-some-part-of-a-project-on-a-fixed-deadline/ Agilefall
[4]:https://en.wikipedia.org/wiki/Dr._Strangelove Dr. Strangelove
[5]:http://www.agile-process.org/honest.html Honest plans
[6]:https://www.scruminc.com/product-backlog-refinement/ Backlog Grooming