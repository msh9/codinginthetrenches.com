+++
tags = ["using-software"]
categories = ["commentary"]
description = "Commentary on whether we care about low code anymore; rest in peace development as a job role, long live development as a job role."
draft = false
author = "Michael Hughes"
date = 2023-04-13T20:09:21-06:00
title = "Is low code all that? AI???"
+++

Should organizations that need to build software care about low code? Should they ever have cared about low code? Will low code be the future of how software is built? Will large language models trained to write code based on text prompts replace all developers? Are these same questions applicable to AI? Do I have answers to these questions? 

Nope, but I can still editorialize.

<!--more-->

It's spring of 2023, it would be almost irresponsible for me to write post on a technology focused blog without mentioning the following phrases: large language model (LLM), generative AI, AI, or just 'ChatGPT'. The commercialization hype machine for AI is in full swing. One high profile company in the space, OpenAI, has even published a white paper about how the technology, like the ones they sell, will be used in 100s of millions of jobs. *News that company uses technology they sell to prove that it is tranformative and will be used by many at 11.* 

Let's chat first about something else, something older, that was predicted by to reduce the need for expensive developers for years now. Low/no code tools, hereafter referred to as low code.

First, what am I talking about,

- Tools advertised as allowing users to create applications using (possibly a web) user interface
- Tools advertised as allowing users to create applications without developer involvement
- Tools advertised as allowing users to create applications without code

Many low code help with defining workflows. It could be a workflow that replaced a paper based process like a project approval. Alternatively, it could be a workflow that integrates spreadsheets from multiple people to generate end of quarter financial statements. On a more technical level, it could bea workflow that controls how users log into a system. The handful of low code systems I've worked with have all been designed for creating one or more *workflows.* To the extent that low code tools work as advertised, they do help accelerate the initial development of systems. Sometimes this works over the long term, sometimes it doesn't. 

Where this seems to work well are applications designed for integrating data sets across existing applications. 'Airtable' and 'Zapier' are modern examples of this, but the concept and tooling have been around for well over a decade now, exemplified by earlier tools like 'Microsoft SQL Server Integration Services.' In both cases users can define source data sets, pick from integration rules (including the ability to define new ones) and define output (stored data, actions, reports). I'm not doing justice to modern tools since they do much more than extract-transform-load operations, Airtable can be used to build reporting web applications as well, but the scope is still integrating data across existing services and applications. The theme here is these are great tools for gluing other tools together. Low code enables users to create integrations between systems without professional developers. These kinds of applications of low code tools never eliminated professional development roles instead many of these tools solved problems for users that just plain went unsolved previously.  

Where I've seen these tools generally fail to live up to their advertised claims is in the creation of novel end to end applications. The failures I have experienced stemmed from the tools' inability to be extended to new cases. When I or my teams have set out to build something new, it is because existing tools or applications do not support some feature, way of storing, manipulating, or retrieving data. Low code tools tend to be envisioned to solve a particular type of integration or workflow problem, they work well in that domain, and then work very poorly outside of that domain. When we go to extend these two into new domains. When forced, the tools tend to perform poorly and create unmaintainable applications. 

I see parallels between this and in language models that translate text descriptions of functionality into application code.

Tools like CoPilot (and the to be generally available CoPilot X) are powerful aides that can write code, documentation, tests, and can even define infrastructure as code to execute said code. Many of these capabilities were previously reserved for humans. For these capabilities though, a technical human being is still needed to define what the generative model is to produce, validate its output, and, most importantly, ensure the outputs of the model over time form a cohesive working application. Today's models do well to generate applications or functions in constrained environments with specific well defined goals. This is not very far from low code tools helping to quickly automation application integrations. Both are within constrained problem domains, do not solve for ground up novel functionality or new use cases, and ultimately both are productivity boosting tools that still need significant operator input to work well.

Time for some assertions that will likely be found wrong at some point in the future,

1. Should any company that needs to build novel applications care about AI or low code? Not explicitly. Like many tools before them, lanauage models trained on code and low code tooling are tools for teams to make new things faster. They're not a useful end product themselves unless you're in the business of selling those tools.
2. Low code wasn't and isn't the future of novel application development. I don't expect generative AI to be either. I do expect that generative AI will be more widely deployed and used by technical people that low code tooling has been to date. 
3. Companies building products and services will still need to hire developers and other technical staff; system design and architecture will become an ever more important part of developers' professional roles.

I started out this post poking fun at OpenAI's whitepaper which estimated the impact of current LLMs on jobs. The paper attempts to articulate how much of many professional roles will be touched by LLMs. Development is a highly impacted category in their paper. The breathless and attention grabbing way of reading this is to conclude that the profession will go away. A more boring and, I'm venturing, more accurate prediction is that professional development is about to get a lot of new productivity enhancing tools. The bar for the complexity of system that requires technical staff to build *will* absolutely be raised. Perhaps in the near future non-technical users will be able to describe simple and useful applications in text and get a complete working system in return, but this is the sort of problem that low-code and no-code tools were already out in the market solving. 

For more complex services, the kinds of software that we use daily for messaging, social networking, banking, etc we will still need professional developers. LLMs will enable technical staff to do, more and faster; similar to yesterday's low code tools, LLMs will free up professional developer time to solve bigger and harder problems than before. 

Okay, so what's the punchline here? If there is one it's that low code tools are likely to be pushed out of the market in coming years by predictive ML models.