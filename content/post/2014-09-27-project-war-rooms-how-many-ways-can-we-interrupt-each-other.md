---
title: 'Project War Rooms: How many ways can we interrupt each other?'
author: MichaelHughes

date: 2014-09-27
url: /2014/09/27/project-war-rooms-how-many-ways-can-we-interrupt-each-other/
categories:
  - Uncategorized
tags:
  - philosophy
  - pm

---
Being an IT consultant has occasionally had me working in unusual or cramped quarters at client offices, the result of being hired help instead of a full time employee. One type of psychical situation I have ended up working in a few times is something we called “the project war room.”

<!--more-->


  
Let’s consider the characteristics of such a workspace; it is different from some of the open office floor plans seen in modern office configurations. The project war room is a conference room that has been re-purposed for a project. Imagine a conference room where every member of a 5 person team could have a seat at the table, but there is no extra room. Now add laptops and secondary monitors in additional to the people and desks. Each developer sits close or facing his or her fellow colleague.
  
The configuration of workstations is similar to the workstation configuration of adherents to the [XP methodology][1], in particular, pair programming colleagues in open bays. This gives us a starting point for discussion since a relatively recent observational study contrasted workers in an XP development environment with those in a more transitional set of cubes¹. There are some conclusions we can draw from the paper and my own experience with these rooms that are, perhaps, clear in retrospect.

  * It’s easy to, in an instant, distract a team that are all closely sitting together. Even a passing individual who comes to say “hello” to one person on the team may end up distracting the entire group.
  * Conversations between two people on the team become team discussions with relative ease.
  * Questions are easy to ask to the group as a whole and are quickly answered (by getting the attention of the group as a whole).

The XP programming environment also led to more interruptions of shorter length than the cube environment which experienced fewer, longer interruptions. The observational study is also interesting because they found that the amount of time spent in any given interruption was lower on the XP team, even though the interruption rate was higher. This observation leads into another study on the effects of interruption². A surprising take away was that the wasn’t always a correlation between interruptions and tasks taking longer than they would have otherwise. The observers found that individuals would (unawares?) work at a quicker pace to make up for the time lost to the interruption.

Two studies alone which found that interruptions, even in high interruption environments like a project war room didn’t lead to tasks taking longer do not imply that project war rooms are a good thing. Indeed, the latter study also found that while individuals worked faster to make up for lost time, they did so at the cost of greater stress. There is also some evidence showing that interruptions with content similar to the interruptee’s work cause more difficultly in resuming the original task once resumed³. As a result the XP programming environment’s interruptions may lead to more mistakes (something that XP programming’s pair programming model is intended to reduce.)

Unfortunately, it’s possible to go on like this ad nauseam because the causes and effects of interruptions on individuals are difficult to isolate in a war room environment. Even by ignoring the semi-objective observational studies and instead directly asking for the highly subjective opinions of my colleague’s led to disagreeing views on the practice of project war rooms. Some people loved the experience, they found it easy to get help and be motivated, others did not appreciate the herd effect, that every interruption became a team interruption. Never mind whether a project war room is objectively better for a team’s effectiveness there wasn’t even clear consensus on whether individual’s liked to work in such an environment.

All of this discussion leaves us in a place where I am making recommendations based on a small sample of personal experience and a handful of research studies. It’s too easy—and dismissive—to conclude that project war rooms are bad for teams simply because of high interruption rates. Indeed, one way of learning is to create opportunities for interruptions that cause individuals to recognize dissonance between their internal mental models and the “real” world⁴. In other words, a group of developers working together are less likely to all misread a requirement in the same way, leading to a discussion and hopefully the correct software being written. At the very least interruptions are also good because they help individuals relax and continue working⁴.

These project war rooms do seem to have a positive effect in setting up a team for a project. Colleagues getting to know each other, misconceptions about the project or requirements are easier to clear, and low barriers to asking for help are all things that every project start could use. The potential long term effects on individuals of higher stress due to interruptions might be deleterious to a team’s long term project effectiveness.

Maybe the right thing for project teams is to form a project room for the few couple weeks of a project and then disband back to sitting separately. It may be a weak conclusion to arrive at—the best option is to combine work approaches—but it may also be the best that balances the need for consulting teams to ramp up quickly together, but then also later get a lot done.

A few references:

  1. Chong, Jan, Social Behaviors on XP and non-XP teams: A Comparative Study, Proceedings of the Agile Development Conference, 2005. <span class="small-link-text">IEEE Computer Society</span>
  2. Gloria Mark, Daniela Gudith, Ulrich Klock, The Cost of Interrupted Work: More Speed and Stress, Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, April 5-10, 2008, Florence, Italy
  3. Czerwinski M., Chrisman S., Schumacher B. (1991) The effects of warnings and display similarities on interruptions in multitasking environments, _ACM SIGCHI Bulletin_, 23 (4), 38-39
  4. <div id="gs_cit0" class="gs_citr">
      Jett, Quintus R., and Jennifer M. George. &#8220;Work interrupted: A closer look at the role of interruptions in organizational life.&#8221; <i>Academy of Management Review</i> 28.3 (2003): 494-507.
    </div>

  5. Adamczyk, Piotr D., and Brian P. Bailey. &#8220;If not now, when?: the effects of interruption at different moments within task execution.&#8221; _Proceedings of the SIGCHI conference on Human factors in computing systems_. ACM, 2004.

 [1]: http://www.extremeprogramming.org/