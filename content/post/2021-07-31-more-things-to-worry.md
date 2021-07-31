+++
tags = ["tips"]
categories = ["Projects"]
description = "Another type of supply chain attack to worry about"
author = "Michael Hughes"
date = "2021-07-31"
title = "A brief discussion of CI/CD plugins"
draft = true
+++

Let's talk about some spooky things that can happen when using marketplaces like the GitHub Marketplace or the Visual Studio Marketplace. Much has been written
this year about about supply chain attacks. An attacker can gain access to target by looking for an easier to compromise dependency of the target. This is a 
simplification, but it captures what happened with both SolarWinds](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack) and [NPM package namespace](https://blog.sonatype.com/dependency-hijacking-software-supply-chain-attack-hits-more-than-35-organizations) attacks detailed earlier this year.

<!--more-->

With those problems covered, let's look at DevOps tasks and GitHub actions. Tasks and actions fullfil a similar purpose, componentizing and organizing work
that occurs during the process of building software. This is important because it means that a common steps can be shared across projects, for example, compressing 
a directory of JavaScript and uploading it to S3 for deployment to AWS Lambda. Preparing the software for deployment to Lambda involves a common set of steps that are
the same across projects. It makes sense to implement these steps once as a task.

Lambda deployment is also a great example of the step in creating common build and deployment tasks. AWS provides both prebuilt GitHub actions and Azure DevOps tasks.

The marketplace for the two tools includes tasks from large companies like AWS all the way to individual developers. 