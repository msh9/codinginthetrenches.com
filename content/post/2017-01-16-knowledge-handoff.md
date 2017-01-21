+++
menu = ""
description = "Covers the pros and cons of a couple different methods of transfering technical knowledge of software projects"
categories = ["software-management"]
tags = ["tips", "pm", "philosophy"]
date = "2017-01-16"
title = "Software Development Knowledge Handoff"
author = "Michael Hughes"

+++

Today's post will cover a couple different approaches to transfering techinical knowledge of a software system between individuals
or teams. There are often transfers of ownership as a software product progresses from conception to feature development to ongoing maintainence.
Effective knowledge transfers between owning individuals or teams help to ensure that ongoing development of a product is not totally stalled whenever
ownership chagnes

<!--more-->

Individuals move on to other projects, jobs, and careers. It is important to avoid the danger that 
any given individual leaving a team potentially takes valuable knowledge about the project with him or her. In other scenarios, consultancies hand off complete products 
to clients; as great as it would be to hand off a software product which never needs maintenance that is rarely the case. 

Several of my past projects have involved knowledge transfers either because my team had become domain experts or we built the products from the ground up for the client.
The below are some collected notes on what worked well and what didn’t work well.

### Manuals and other documentation separated from the code

Manuals and written documentation are great when the team is given time to read them and write them. I have never been in that group. This is not to say that 
written documentation is bad. In fact, well written documentation including architecture diagrams, how to guides, setup guides, and styles guides all help developers ramp up quicker.

- What worked well: Architecture diagrams, they’re relatively quick to create post-fact and convey a lot meaning in a small amount of space. Development environment setup guides are 
  also good, they take more time to develop, but can save a lot of time as new developers are added to the project.
- What didn't work well: Development guides and low level component documentation take the most time to write, are the hardest to update (or conversely the most likely to be 
  out of date), and the least read due to time constraints. To some extent, out of date documentation is worse than no documentation because it's misleading and can misinform design decisions
  and estimates for new work.

### Hand off sessions

These are pre-arranged meetings between individuals or small groups of individials with the express goal of transferring knowledge. Even with extensive, well written, documentation there
tends to always been some amount of [institutional technical knowledge][1]. 

- What worked well: Pair development, just two developers sitting next to each talking through code and design changes necessary to implement a feature. Pair development works well because the new 
  developer can observe and learn all of the 'unwritten documentation' in a project. Put another way, the best way to learn the institutional knowledge for a product is to see that knowledge
  being used in person to solve problems.
- What didn't work well: Talking at someone over the phone. Working with expierenced remote teams can be challaneging. Trying to remotely onboard an inexperienced person is very challenging. Even
  with screen sharing and other modern presence technology, it is still hard to replicate the back and forth immediacy of being in person. For remote teams, I've found that it is best to spend
  the money needed to bring people physically together for a short period of time in order to facilitate transference of knowledge.

### Bug hunting

- What worked well: Time in code is one the most valuable ways to learn how to make code changes. Bugs tend to be close ended and (more) well specified tasks than new features, making them more approachable for beginners.
  Bug work also exposes new developer and teams to the prevailing code style and patterns used in a product. While bug work is not exciting or glamorous, it improves the product and we've seen success with onboarding new 
  developers using bug work on a number of projects.
- What didn't work well: Bugs don't help with understanding the overarching design of the system, this particularly true for micro-service based architecture. Because bugs are so focused it is hard to develop the system 
  level knowledge needed to easily approach new feature development.

No method is perfect and I have never seen a 'perfect' knowledge transfer (whatever that means). Historically, I have seen success with combining bug work and hand off sessions. Combining focused, well-defined, code work with
pair programming and whiteboarding seems to be the most effective way to cover both high level design concerns and low level patterns and practices.

I hope these notes come in handy to others when consider how to arrange knowledge transfers. If you have any thoughts or questions please drop me a line on my about me page.


[1]: https://en.wikipedia.org/wiki/Institutional_memory 'institutional memory'