---
title: Building it wrong and wronger
author: MichaelHughes
layout: post
date: 2015-10-25
url: /2015/10/25/building-it-wrong-and-wronger/
categories:
  - Software Management
tags:
  - design
  - philosophy

---
A 1<sup>st</sup> generation software product will likely miss the mark. It might have missed being that best that it could be by costing too much, being too complex, or just not targeting the right market. In any case, a 1<sup>st</sup> product may lead to another, 2<sup>nd</sup>, product that is cheaper, simpler, or just hits the right notes with the intended customer. Today’s post is about building the wrong product (the 1<sup>st</sup> one) in the right way so that the 2<sup>nd</sup> product can be built better, faster.

<!--more-->The distribution for the 1

<sup>st</sup> system may vary between a full blown product (the original Xbox), to skunkworks like internal prototypes that are never consumed by the general public ([CD SNES consoles][1] produced by an unfruitful relationship between Nintendo and Sony Entertainment). In any case, the first generation of a large software product will be wrong.

A product being “wrong” doesn&#8217;t necessarily stop it from being a success. Amazon Web Services has seen continual growth and feature evolution over the last several years. Comparing the feature depth and breadth of AWS’ offerings now and from five years ago is an eye-opening study of how much a product can grow.

A good way to help a product go from wrong to right is to build it up from well tested, modularized components. Because I want to keep your attention let’s place the “How this helps me section” first then get into the prose argument.

## How?

  * Too many features / size is too large 
      * Modules and tests can be eliminated for specific blocks of functionality or features
  * Needs additional related features 
      * Feature growth can be supported by adding new modules to an existing componentized system. Existing tests help to certify that existing features were not broken by new additions.
  * Too slow 
      * Modularity and existing tests help make it easier to run pinpoint diagnostics against specific parts of the system that are slow instead of attempting to a diagnose an application in whole.
  * Need to build faster 
      * Surprisingly, on large projects test driven development approaches may lead to [<u><span style="color: #0066cc;">more productivity</span></u>][2] and [<u><span style="color: #0066cc;">more value </span></u>][3]delivered.
  * Some features are wrong or don’t fit the customer’s needs precisely. 
      * Rework the effected modules and update tests instead of the applications in whole. Again, the rest of the existing test suite helps to certify that changes to any particular module don’t break unrelated components.

Software development uses a very malleable medium which affords us the opportunity to prototype quickly, trash it, and build it again. Along these lines, let’s characterize a (common?) approach to 1<sup><span style="font-size: small;">st</span></sup> generation software product development as “produce the work as fast as possible in order to get to market.”

## Getting to market as fast as possible

I can appreciate this approach: slap something together, make it work, and ship it. This is a somewhat effective method of launching fast and capturing market share particularly in the domain of software delivery as a service. Recently, even more traditional shrink wrap mediums, such as console games, are updatable and fixable after the initial launch day of the physical product.

I don’t like this attitude.

It’s not that quickly written, slapped together prototypes are a bad thing—au contraire_—_prototypes are the bread and butter of creating things for the first time. The issues arrive when the quickly written prototype gets launched and must be supported and evolved into a 2<sup>nd</sup> generation product. I have been at a number of companies now that have taken this approach. Usually my position at those employers has been to trash the 1<sup>st</sup> generation product and build the 2<sup>nd</sup> generation software product from scratch. The approach of building and then throwing away is fantastically expensive given the cost of hiring and maintaining a team of developers.

This may seem like a critique of [agile][4] methodologies. It’s not. Broadly speaking agile methodologies focus on a iterative development that is responsive to change between short development–test–release cycles. Within each cycle, we, the developers should still be focused on producing, well maintained, componentized, tested code.

## Boring, componentized, tested code

Every iteration’s goal needs to be delivering code that is modularized, reviewed, and tested. Just because a product is the first of its kind doesn’t mean that quality can be reduced. In fact, it is even more important to write a quality system the first time around because the first in a successful series of products is likely to spawn subsequent feature requests and new products.

I am clearly creating a straw-man argument here—I am attacking the idea of quickly throwing a product together in order to get to market without regard for what happens after capturing market share. Software products _do_ get built this way though and while a working product in front of a customer is vital, the next step of adding features a customer may want is nearly as important.

We stand a better chance of being able to adapt to customer demands by componentizing and testing than by not. In other words, componentizing and testing set us up for the next product iteration by avoiding spaghetti code, untested monoliths, and highly coupled designs.

##  What about building the wrong thing?

That’s the point, that is what will happen. Dealing with a product that was ill-conceived from the beginning (i.e. there was no business case for it) is, bluntly, out of scope for this discussion. As developers, we should minimally assume that there is some point to the software we write. Forgoing the discussion of complete product failure, componentization and testing **help** where the basic product idea is valuable, but must be evolved to meet market and competitive demands.

I personally like seeing software I write to be in use and evolved over time instead of thrown away, hopefully other developers feel the same way. One way to ensure use and evolution is by writing code that is maintainable and evolvable which is the purpose of focusing on tested, componentized designs.

 [1]: https://en.wikipedia.org/wiki/PlayStation#Origins
 [2]: http://nparc.cisti-icist.nrc-cnrc.gc.ca/npsi/ctrl?action=shwart&index=an&req=5763742&lang=en
 [3]: http://www.ipd.kit.edu/KarHPFn/papers/edser03.pdf
 [4]: https://en.wikipedia.org/wiki/Agile_software_development