---
title: Get a specification and turn it into user stories
author: MichaelHughes

date: 2014-04-20
url: /2014/04/19/get-a-specification-and-turn-it-into-user-stories/
categories:
  - Uncategorized
tags:
  - agile
  - philosophy
  - pm
  - tips

---
I just wrapped up working on a month long project planning phase with a new customer. We gathered user stories, made technology selections, built proofs of concept, and generally got to know the customer's business.

What was interesting about this planning phase was that we started with a detailed product specification and worked backwards to define user stories and acceptance criteria for the project. While at first this may seem like a waste of time, it was actually extremely valuable to all parties involved.

<!--more-->

It was initially a painful process. The first step involved close reading of the 150+ page specification to determine the themes of work that they thought were really valuable to their business. These themes served to organize the user story workshops and help ensure that during each workshop day we talked to the right customer stakeholders. We then took the themes and ran [user story work shops][1] to get a large number of 1 sentence stories describing how the customer would interact with the product. After gathering stories we cross referenced them with the existing specification to determine [acceptance criteria][2] and then finally went back to the customer to review the stories with the newly added acceptance criteria. In the case of this customer I was stepping outside of my prior business experience which has been in online marketing and into the space of building materials and wood products. During the review period I personally (and my collogues) asked a lot of questions that might have initially seemed silly to the customer and sometimes to ourselves.

Going back to an adage repeated by teachers: There are no bad questions.

I disagree with the statement when taken to logical extreme, but in principle it's much more important to ask about ambiguous statements than the let it go. For example, I recently learned about what &#8220;[blocking][3]&#8221; is and how our customer produces it. Asking someone from the building materials or framing business what blocking is may seem silly to him or her, but in our case knowing what blocking is turned out to be really important to ensuring that we are building a good software product. To further illustrate the importance of asking questions, while our customer had prepared a detailed product specification, it was written in **their** language. Our consultants were able to gain an understanding of the customer's language and 'lingo&#8221; by going through the process of developing user stories and acceptance criteria.

This blog post references agile methodologies and it wouldn't be complete if I didn't mention project scope. Everything I mentioned as having gotten out of the process of turning a spec into stories was to the benefit of us, the people building the system. We learned the customer's lingo, we got better definitions of customer requirements, and we got a handle on how the customer will use the product in their business. I strongly believe the customer got significant value too. The specification given to us contained descriptions giving equal weight(development priority if you will) to a number of features. The customer's managers discovered two things by going back to the high level business themes and creating user stories with us:

  1. New features, the scope of the project increased by 25% (which was okay since the point of this phase of work was to discover roughly how big the project was going to be)
  2. That the first deliverable of the product was very different than initially thought

The main discovery was that the initial development focus needed to be on a group of underserved users at the customer. This change caused whole sets of features that were originally equally weighted in the specification to be moved to later phases of development. Additionally the customer found new areas of functionality that they hadn't originally thought of when planning the product that will be added to future project phases.

In summary:

  * My employer initially received a customer specification for a product
  * Instead of taking the document at face value we used it to guide a conversation about the product via themed user story workshops and acceptance criteria
  * The customer worked with us by reviewing acceptance criteria we pulled from the specification
  * The customer got value from the process by discovering which areas of the initial specification were **really important **for initial release and by discovering new required functionality
  * We got value from the process by discovering much more about the customer's business and language than we could have by just reading a specification

At this point development will beginning soon and we're looking forward to continuing to talk to the customer using both the newly created user stories and their existing specification.

 [1]: http://www.scrumalliance.org/community/articles/2013/september/agile-user-stories
 [2]: http://www.scrumalliance.org/community/articles/2012/january/user-story-acceptance-criteria-the-art-of-satisfic
 [3]: https://www.decks.com/deckbuilding/Deck_Blocking_And_Bridging