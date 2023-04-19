---
title: 'Agilefall: gracefully delivering (some part of) a project on a fixed deadline'
author: MichaelHughes

date: 2014-11-30
url: /2014/11/30/agilefall-gracefully-delivering-some-part-of-a-project-on-a-fixed-deadline/
categories:
  - Uncategorized
tags:
  - philosophy
  - pm

---
IT consulting is an odd place to be when it comes to software engineering practices. We often end up writing software for business groups that have fixed budgets and more importantly fixed deadlines. We also try to follow an agile methodology for software development that roughly [follows scrum][1] (warning: PDF), but with defined roles for a project manager and a development lead. Today's post discusses some of the difficulties seen in using Agile to deliver business software and how we can mitigate those difficulties, basically things that worked and things that didn't.

[1]: https://www.scrum.org/Portals/0/Documents/Scrum%20Guides/2013/Scrum-Guide.pdf

<!--more-->

Certain agile (many?) methodologies lay importance on decreasing the resolution of goals that are further into the future.<figure id="attachment_66" style="width: 178px" class="wp-caption aligncenter">

[<img class="size-full wp-image-66" src="//codinginthetrenches.com/wp-content/uploads/2014/03/blurry-steps.png" alt="Increasingly Blurry" width="178" height="226" />][2]<figcaption class="wp-caption-text">Increasingly blurry, you get the idea.</figcaption></figure> 

In other words the next sprint will delivery a specific set of features to the business (although there is no guarantee on what order the developers will work on the tasks). All that may be known about the next month's sprints though is that they will broadly address certain requests or architectural components (possibly [epics][3]). The business managers we work with often want the following though:<figure id="attachment_67" style="width: 178px" class="wp-caption aligncenter">

[<img class="size-full wp-image-67" src="//codinginthetrenches.com/wp-content/uploads/2014/03/clear-steps.png" alt="Clear steps with no blurriness" width="178" height="226" />][4]<figcaption class="wp-caption-text">Clear steps with no blurriness</figcaption></figure> 

This is not an unreasonable ask, consulting is often an expensive service and typically we've been asked to solve a severe pain point (or several severe pain points) in the business. The stake holder's perspective is that he or she needs to know when specific components will be completed. Additionally, contracts often have end dates by which all functionality must be delivered. 

Unfortunately, executing in this manner, with a specific focus on a goal that must be achieved is akin to the [opening scene present in every James Bond movie made of staring][5] down the barrel of a gun. It represents an unchanging focus on the long distance goal, James Bond in this terrible analogy, without regard for issues and goals in the near future. A [waterfall][6] style project model tries to account for near-term goals and problems with detailed planning and preparation—this approach has been seen to fail a number of times in large software projects.

An approach with strict upfront planning and preparation does, however, provide a detailed schedule and delivery date (however realistic this may be) to the owners of the project.  This seems to be a core conflict in the area of software project planning. How can we provide visibility into a project's long term deliverables while at the same time ensure that _something_ is actually delivered in a **working state** on a deadline.

The best projects I have been on have started with _almost_ waterfall like planning, but in a manner that sets priorities for the deliverables which are due by a certain date.

[<img class="aligncenter wp-image-284 size-full" src="//codinginthetrenches.com/wp-content/uploads/2014/11/should-could-must.png" alt="Could Have, Should Have, Must Have" width="557" height="503" />][7]

The concept of could have, should have, must have is not original nor all that new. It bears to be repeated though because it was highly relevant to the success of the projects whose planning and execution went well. A stratification of the needs for a project across priority levels helped to identify what the team would focus on as a long term goal that had to be completed versus what could be worked on opportunistically. Things that are required for a project to launch, "must haves,"  are transformed into epics that describe the steps necessary to accomplish them. During initial planning an architect's input is also consulted to help form the overall plan for how the software implementation would support a client's needs.

It is important to stress that I have seen this go well when the planning is not too detailed. There is a goldilocks like middle ground that straddles a complete lack of forward planning and an absolutely rigid architecture and project plan. Actually achieving this balance and convincing a client that some of their feature requirements may be not 100% required is challenging and specific to the project.

Another aspect seen in successful projects is the willingness to adapt as new information is received. If the pre-planning mentioned in the prior paragraphs was quasi-waterfall project modeling then this recommendation is quasi-agile. Even when a project is on a fixed schedule it's useful to be able to move work around—on more than a few occasions I have seen "should haves" get implemented because it was found that it was much more trivial to implement than originally anticipated. Similarly, it is important to be able to move a "should have" feature back in the overall project schedule, or even completely out, to ensure that a "must have" feature is properly tested. Software development, unlike other disciplines such as construction or manufacturing, is relatively new and possibly as a result even small projects can encounter many unforeseen obstacles. Being flexible in scheduling on a intra-[sprint][8] level enables the project manager to respond better to issues that occur in the short term.

I offer something somewhat self-evident for a final piece of hopefully useful advice: it is important to determine who the project's stakeholders are. More than once on internal business application projects I have been caught in surprise by finding that the project's end users were not who we originally thought they were. The fallout of not properly identifying a project's stakeholders can be severe, including building the [completely wrong application][9]. Ultimately, finding a project's stakeholders (owner, end users, etc) can only be done by spending time talking to the client, asking questions, and noting who seems to answer with the most authority (and then repeat many times.) It can be done, it just takes time and an appropriate level of project pre-planning.

The best projects use some blend of agile and waterfall techniques. Above we've talked about a combination of both being helpful to ensure that the end result of a software project _does at least_ the minimum required and potentially more.

To summarize

  1. Make sure that a project has a list of features/requirements/asks . A feature could be as simple as "displays a pre-computed price in two currencies"  or as vague as "signs individuals up for insurance". The goal is to have **starting** point to **ask questions and develop a more detailed plan of work**. Please note, I did not write start work, but instead that these "asks" are a starting point for project work. "Signs individuals up for insurance," should appear like a complex requirement worthy of several epics itself even to a layman who has only minimal experience with the insurance industry.
  2. It is useful to have the list of asks prioritized by need. Does a US focused insurance website need to support Danish? No, Danish should probably be in the as yet unmentioned not have pile, but (Mexican) Spanish support would probably be in the should have list. Having a prioritized list like this means that developers can do things like implement functionality in a localizable way while only spending the time to do the final Spanish localization if it is possible within the project's scope.
  3. Avoiding rigid, gold plated architectures and project plans is important in order to ensure that failures and problems can be overcome.
  4. Find the [stakeholders][10] by asking questions and looking for answers. If a project is not planned in conjunction with the owners and end users all of the prior advice will be of much less use.

 
 [2]: //codinginthetrenches.com/wp-content/uploads/2014/03/blurry-steps.png
 [3]: http://www.solutionsiq.com/agile-glossary/epic/
 [4]: //codinginthetrenches.com/wp-content/uploads/2014/03/clear-steps.png
 [5]: https://www.youtube.com/watch?v=tyUkIjDO1-E
 [6]: http://en.wikipedia.org/wiki/Waterfall_model
 [7]: //codinginthetrenches.com/wp-content/uploads/2014/11/should-could-must.png
 [8]: http://scrummethodology.com/scrum-sprint/
 [9]: http://www.projectcartoon.com/cartoon/2
 [10]: http://en.wikipedia.org/wiki/Project_stakeholder
