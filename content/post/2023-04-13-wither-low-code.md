+++
tags = ["using-software"]
categories = ["commentary"]
description = "Commentary on whether we care about low code anymore; rest in peace development as a job role, long live development as a job role."
draft = true
author = "Michael Hughes"
date = 2023-04-13T20:09:21-06:00
title = "Is low code all that?"
+++

Should organizations that need to build software care about low code? Should they ever have cared about low code? Will low code be the future of how software is built? Will large language models trained to write code based on text prompts replace all developers? Are these same questions applicable to AI? Do I have answers to these questions? 

Nope, but I can still editorialize.

<!--more-->

It's spring of 2023, it would be almost irresponsible for me to write post on a technology focused blog without mentioning the following phrases: large language model (LLM), generative AI, AI, or just 'ChatGPT'. The commercialization hype machine for AI is in full swing. One of the high profile companies, OpenAI, has even published a white paper about how technology, like the ones they sell, will be used in 100s of millions of jobs. *News that company uses technology they sell to prove that it is tranformative and will be used by many at 11.* 

Let's chat first about something that was predicted by purveyers of said technologies to reduce need for expensive developers for years now. Low/no code.

First, what am I talking about,

- Tools advertised as allowing users to create applications using (possibly a web) user interface
- Tools advertised as allowing users to create applications without developer involvement
- Tools advertised as allowing users to create applications without code
- Tools generally advertised to help users easily define workflows

I want to focus on the word "wordflow" momentarily. It could be a workflow that replaced a paper based process like a project approval. We could alternatively be talking about a workflow that integrates spreadsheets from multiple people as part of an end of quarter financial statement workflow. Perhaps on a more technical level, we need to define a workflow that controls how users are allowed to log into a system. The handful of low code systems I've worked with have been designed for creating one or more *workflows.* To the extent that low code tools work as advertised, they do help accelerate the initial development of systems. Sometimes this works over the long term, sometimes it doesn't. 

Where this seems to work well are simple applications designed for integrating data sets across existing applications. 'Airtable' and 'Zapier' is a modern example of this, but the concept and tooling have been around for well over a decade now, examplified by earlier tools like 'Microsoft SQL Server Integration Services.' In both cases users can define source data sets, pick from integration rules (including the ability to define new ones), and define output (stored data, actions, reports). I'm not doing full just to modern tools since they do much more than extract-transform-loan operations, Airtable can be used to build reporting web applications as well, but the scope is still integrating data across existing services and applications. The theme is good tools for gluing other tools together.

Where I've seen these tools generally fail to live up to their advertised claims is in the creation of novel end to end applications. The failures I have experienced stemmed from the tools' inability to be extended to use new cases. When I or my teams have set out to build something new, it is because existing tools or applications do not support some feature, way of storing, manipulating, or retrieving data. This sounds generic because it is but it also address the core reason for new development activity, existing software lacked the ability to support some functionality and it could not be extended to do so. Low code and no code tools tend to be envisioned to solve a particular type of integration or workflow problem, they work well in that domain, and then work very poorly outside of that domain.

I see parallels between this and in language models that translate text descriptions of functionality into application code.

Tools like CoPilot (and the to be generally available CoPilot X) are powerful aides that can write code, documentation, tests, and given sufficient direction can even define infrastructure as code which executes said code. Must of these capabilities were previously for humans. For these capabilities though, a technical human being is needed to define what the generative model is to produce, validate its output, and, most importantly, ensure the outputs of the model over time form a cohesive working application. Examples where models do well to generate applications or functions in constrainted environments with specific well defined goals. This is not very far from low code or no code tools helping to quickly automation application integrations. Both are within constrainted problem domains, do not solve for ground up novel functionality or new use cases, and ultimately both are productivity boosting tools that still need significant operator input to work well.

Time for some assertions that will likely be found wrong at some point in the future,

1. Should any company that needs to build novel applications care about AI or low code? Not explicitly. Like many tools before them, lanauage models training on code and low code tooling are tools for teams to make new things faster. They're not a useful end product themselves unless you're in the business of selling those tools.
2. Low code wasn't and isn't the future of novel application development. I don't expect generative AI to be either. I do expect that generative AI will be more widely deployed and used by technical people that low code tooling has been to date. 
3. Companies building products and services will still need to hire developers and other technical staff; system design and architecture will become an ever more important part of developer's professional roles.

I started out this post poking fun as OpenAI's white paper estimating the impact of current LLMs on jobs. Their paper attempts to articulate how much of many professional roles will be touched by LLMs. Development is a highly impacted category in their paper. The breathless and attention grabbing way of reading this is to conclude that the profession will go away. A more boring and, I'm venturing, more accurate prediction is that professional development is about to get a lot of new producitivity enhancing tools. The bar for the complexity of system that requires technical staff to build *will* absolutely be raised. Perhaps in the near future non-technical users will be able to describe simple and useful applications in text and get a complete working system in return, but this is the sort of problem that low-code and no-code tools were already out in the market solving. For more complex services, professional developers will be able to do more faster.