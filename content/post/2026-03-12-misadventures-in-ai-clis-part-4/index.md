+++
tags = ['design', 'using software', 'cloud computing']
categories = ['commentary']
description = "I wrote a mapping web applications without looking at the code using Codex. Advice base on therein"
author = "Michael Hughes"
date = 2026-03-12
title = "(Mis)adventures in AI CLIs Part 4: Building the wrong thing, again, but still succeeding"
[params]
    math = false
+++

Airplanes are fun. Maps are fun. Aviation adjacent maps are fun squared? [Terrain Flying](https://terrainflying.michaelonrandom.com/) is the result of a couple months of working \~2–4 hours a day for 2–3 days a week. It's a barebones prototype, but there is enough there to write about it now. During this time there have been moments where Codex enabled me to do something I never would have bothered to do and there have been moments where I thought this was an incredible waste of time.

## Conclusions and advice upfront.

The procedures and pitfalls of bootstrapping a small project with a team of professionals work well and apply equally to a small project built by an LLM. 

That's it. The rest of this essay expands that sentence into more detail with miscellaneous commentary along the way.
{{<figure src="2026-03-Misadventures in AI CLIs Part 4-over-workflow.svg"  caption="An overview of my planning and development process with Codex" alt="Write tickets and then generate code">}} 

* Specification driven development works well enough *if* a lot of the specification is written in an easily consumable form:  
  * Design decisions: Guiding decisions regarding tool, framework, and data handling approaches  
  * Feature descriptions: User or use case oriented descriptions of functionality  
  * Project setup: readmes, agent file, etc that describe purpose, tools, and layout  
* You, the human, need to drive key development and product decisions like architecture and data flow  
  * Not participating in this can yield software that kind of works, but won't support your end product goal  
* Be prepared to throw out a lot, more than when working on a proof of concept with a regularly staffed development team  
  * This is particularly true in unfamiliar subject areas.

## A familiar emotional roller coaster.

Terrain Flying is a new application, standing apart from my writings about personal finance and technology. It is also my first attempt at putting blinders on and letting a LLM write all the code for me. In my prior (mis)adventures with CLI tools I oft fixed bugs, hand wrote tests, and in some cases did teardown rebuilds of LLM generated code. Terrain flying, however, is built largely by a specification driven process that should look familiar to software developers save for a LLM is reading the ticket queue and writing the implementation code.

The project has READMEs, design decision records, feature description READMEs, "epics" or "milestones", etc. Most of which I, the human, write, edit, and update. The code? Not so much.

The spec. driven approach has worked reasonably well. Earlier in the project it enabled me to build different parts of the application in parallel with multiple agents. The output from Codex has remained consistent across multiple model releases as well.

### Where's the but

Despite the praise, I must also note [the issue discussed here](/post/2025-10-03-misadventures-in-ai-clis-part-2 "(Mis)adventures in AI CLIs Part 2: Confidently Building the Wrong Thing"). We built the wrong thing and threw it away. The issue has two causes,

* I am new to GIS and therefore am ignorant of how to best solve simple problems.  
* LLMs are not software development oracles, yet anyway.

For the GIS aware audience, a concrete example was writing custom python code for raster operations like clipping, reprojecting, and mosaicing instead of using gdal with a set of python bindings. My data processing pipeline became both significantly faster and simpler once switched to the latter from the former. Making the switch required me having a light bulb moment after realizing how long it would take my custom code to process FAA chart geotiffs of the continental US.

I am not, intentionally anyway, portraying myself as the victim of bad LLMs. The point is that the primary actor in development, i.e. the human with a product idea, needs to know enough about the subject area in order to make what and how decisions.

## Regardless of the issue, here's the process
{{<figure src="2026-03-Misadventures in AI CLIs Part 4-bootstrapping.svg"  caption="An overview of starting a project from scratch with Codex" alt="More writing and code generation">}} 

### 0\. Genesis

The initial bootstrap required writing more up front in readme files, long-form prose specifications of near term outcomes, and guiding the initial development towards a project structure. I used a set of agent files across the project's repositories to codify decisions after these elements were in place. The quality of feedback was initially poor; I suspect this was due to not enough context about the project's goals. Poor quality here meaning off topic suggestions or few to no questions that further developed the work definition. Once past the initial setup, however, the feedback was good–comments highlighted potential issues across applications, questions focused on vague definitions, etc.

I had a few false starts where I threw out the implementation after learning more about GIS. This felt okay since one-shot prompts to working prototypes and then from there to me learning what I needed to learn only took a few hours. An example from terrain flying is an early prototype that used [openlayers](http://openlayers.org/) to display a single [geotiff](https://en.wikipedia.org/wiki/GeoTIFF) in the browser. I quickly threw away that prototype and replaced it with another prototype that preprocessed the geotiff into [static webp XYZ tile images](https://en.wikipedia.org/wiki/Tiled_web_map#Defining_a_tiled_web_map) and an openlayers implementation that read from the tile pyramid. I eventually also threw that away too and replaced it with tools that generate [pmtile archives](https://docs.protomaps.com/pmtiles/) for both raster and vector map data. Pmtile generation became the basis for the current implementation.

### 1\. and 2\. PoC → Development

The process became more regular once I had major building blocks in place, generally:

* Write a milestone, epic, rollup, whatever you want to call it.  
  1. Like any good epic or milestone, these capture a small set of related work that make sense to be done around the same time. I've found myself in the cadence of doing this every couple weeks which may sound eerily familiar to some.  
  2. Include the scope of work as bullet points  
* Use a non-coding LLM model to interrogate the bullet points, suggest issues, and generate clarifying questions  
  1. *I* answer the clarifying questions with my own reasoning, decisions, and research  
  2. Repeat until I am satisfied–note well this step may take time and require writing decision records that guide design, updating readmes, and even changing the project structure  
  3. Use the LLM to write tickets linked to the original milestone  
* Use a coding LLM to implement the individual tickets one-by-one  
  1. Early on, in step 1\. above, I usually had the agent propose an implementation plan for review. I'd take that opportunity to make corrections as needed. Now, I let the agent run from start to finish on individual features.

## In practice

I alluded to the evolution of the project above but it is perhaps instructive to illustrate the development to date of terrain flyer. We'll use a picture aligned with the steps above.
{{<figure src="2026-03-Misadventures in AI CLIs Part 4-march-12-arch-evo.svg"  caption="An overview of starting my project with a single geotiff viewer and ending with a multi-part data pipeline and map viewer" alt="Design change over two months">}} 

Some notes,

* I am aware that rasterio is ultimately just another binding to gdal libraries  
  * My difficulties with getting gdal setup with the capabilities I wanted is a subject for another brief rant post.  
* A key evolution of the project has been focusing custom code on the things unique to the project or source data like processing the FAA's proprietary text format for obstacles. Additionally, the project is able to process data from new sources like the USGS easily because we broke the data pipeline apart into steps with materialized reusable artifacts.  
* Breaking data processing tools out into separate git repositories made it easier to run agents in parallel. Git worktrees might yield the same capability for coding agents, but I've found it easier for myself to reason about the project with discrete repositories.

The project's data pipeline evolution is critical. *I,* the human, needed to recognize that the overall architecture was not working and that it would take many days to process the project's targeted data volumes. Once I had that realization I could use an agent to analyze the project, suggest alternative paths, and even research canonical GIS methods for achieving my goals. I could resume writing code with an agent after identifying the correct alternative, in this case, preprocessing FAA geotiffs into projected, clipped, RGBA, jpeg-xl compressed intermediate geotiffs. 

## Additional Conclusions

Repeating the above, the procedures and pitfalls of bootstrapping a small project with a team of professionals work well and apply equally to a small project built by an LLM. 

The above is obviously also a far cry from the [halting broken implementations I encountered in my first post in this series](/post/2025-09-23-misadventures-in-ai-clis-part-1 "(Mis)adventures in AI CLIs: Part 1 (?)"). The 1986 Brook's essay, 'No Silver Bullet…' still applies though.

I have found that I need to remain the decision maker determining where and how. Just like development with teams, once a 'where and how' decision is made, it needs to be written down, preferably very near the application code it impacts. I still need to read the code, prompt the agent into refactoring, and determine how data gets processed.

That's all for now. I plan to continue developing Terrain Flying for fun into something that has a unique combination of publicly available data.  