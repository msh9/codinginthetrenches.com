---
title: Brewing and development
author: MichaelHughes
layout: post
date: 2013-12-23
url: /2013/12/23/brewing-and-development/
categories:
  - Uncategorized
tags:
  - fun
  - philosophy

---
I&#8217;ve been brewing and developing systems for a few years now. Today&#8217;s post is about some similarities and differences I have noticed between brewing and developing and differences (this will make more sense later).

<!--more-->

## Similarities<figure id="attachment_25" style="width: 200px" class="wp-caption alignleft">

[<img class="    wp-image-25 size-full" style="border: 2px solid black; margin-right: 5px;" title="Merge the similarities!" src="http://codinginthetrenches.com/wp-content/uploads/2013/12/Danish_priority_road_sign_merge_ahead_svg-e1417402557144.png" alt="" width="200" height="266" />][1]<figcaption class="wp-caption-text">Merge the similarities!</figcaption></figure> 

There are a surprising number of similarities between good brewing practice and good development project practices. Why shouldn&#8217;t there be? Both brewing and professional development have the end goals of repeatability and quality products. So what can we learn from brewing?

**Keep notes:** Really. Documentation, keeping track of progress, user guides, and implementation notes are all valuable resources. In the case of projects targeting end users documentation may be even as valuable as the application itself. Remember nobody cares about all the cool things an application can do if they don&#8217;t know about the cool things in the first place. While brewing I keep notes on the original recipe including any changes or substitutions made to it. I also keep detailed notes from brew day through drinking the last bottle of every individual brew I create from a recipe. Similarly in the software world, being able to do something as a lone developer is useful, being able to teach several others that same useful thing is much more valuable.

**Patience and research make a better product:** I&#8217;m a capable developer (among other things), you&#8217;re a capable developer. Why don&#8217;t we just start cranking out code to solve the problem? (10 minutes later) Wait, what problem are we trying to solve? In brewing sometimes I can&#8217;t get the exact hop I need due to a bad crop or a large brewer purchasing the majority of the hop&#8217;s inventory. Hop substitutions can be made, but I don&#8217;t know the characteristics of every hop and some important qualities of a hop change from year to year. Thus to make effect brewing ingredient choices I have to research. Similarly with software development when starting with a set of business requirements I may find that my initial implementation plan won&#8217;t work. A solid system architecture and (logical) component design though will help me evaluate new ways of implementing a requirement without needing to start from scratch.

**Cleaning procedures are king:** I&#8217;m stretching with this one. A lot of the actual work in brewing reduces to cleaning. Cleaning hoses, cleaning kettles, cleaning storage tanks, cleaning the work environment, cleaning the cleaning equipment, I often feel that I spend more time cleaning than brewing. Of course cleaning is part of brewing not just a side task that I waste time on. I risk contaminating and ruining batches of beer every time I don&#8217;t clean something thoroughly prior to using it for brewing. In professional software development there are similar practices (to cleaning in brewing) that are sometimes overlooked, but when omitted can cause problems later. Code reviews, design reviews, pair programming, and user acceptance testing sessions are practices that when neglected can cause problems for IT projects. Sometimes best practice processes are skipped for expediency, but even the best developers make mistakes that could be caught by a simple code review. My favorite (least favorite?) omission are UAT sessions though. Foraging ahead on project that targets end users without verifying that the project is meeting end users needs is roughly similar to brewing by throwing random ingredients into a pot of boiling water, chilling, and then adding yeast. The end result of the process may make something that looks like what the customer needed, but turns out to be totally wrong when the customer actually uses it.

## Differences<figure id="attachment_26" style="width: 200px" class="wp-caption alignleft">

[<img class="wp-image-26 size-full" style="border: 2px solid black; margin-right: 2px;" title="or not" src="http://codinginthetrenches.com/wp-content/uploads/2013/12/New_Zealand_TW-35B_svg-e1417402571769.png" alt="or don't merge" width="200" height="200" />][2]<figcaption class="wp-caption-text">or not</figcaption></figure> 

Brewing and software development are not the same thing. Regardless of any instructive similarities the two practices have significant differences.

**Time & People**: The brewing process (fortunately?) has a fixed schedule for a number step. There are ways of pushing the yeast which ferments the beer to process sugars into alcohol more quickly, but doing so will likely ruin the flavor of the beer. Producing a certain style of beer requires certain ingredients **and** a certain schedule, no amount of people, money, or unhappy clients can change biology and chemistry. For better or worse development projects can be sped up. The variables of time of delivery, features, quality, and cost give more leeway when it comes to speeding up or slowing down the development process. Bluntly put a client may receive lower quality code by speeding up the development process, but he or she (unfortunately) may not care about code quality.

**Speed:** Brewing is fast, a basic ale can be prepped in four weeks. Four weeks is enough time to do initial project planning and set up a team of developers but not much more.

**Leverage:** The leverage (i.e. output per person) of a developer is lower than a brew master. I&#8217;m obviously fudging the numbers here since there is no way to directly compare liters of beer with implemented features. A single develop can implement a set number of features and tests for features in a day. Similarly a brew master can do a fixed number of tasks per day, but thanks to brewing&#8217;s fixed schedule and reliance on yeast to ferment beer a single brew master can actually be &#8216;making&#8217; several batches of beer simultaneously.

&nbsp;

 [1]: http://codinginthetrenches.com/wp-content/uploads/2013/12/Danish_priority_road_sign_merge_ahead_svg.png
 [2]: http://codinginthetrenches.com/wp-content/uploads/2013/12/New_Zealand_TW-35B_svg.png