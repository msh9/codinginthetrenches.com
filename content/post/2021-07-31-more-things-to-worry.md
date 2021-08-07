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
simplification, but it captures what happened with both SolarWinds](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack) and [NPM package namespace](https://blog.sonatype.com/dependency-hijacking-software-supply-chain-attack-hits-more-than-35-organizations) and [Maven](https://blog.sonatype.com/malware-removed-from-maven-central) attacks detailed earlier this year.

<!--more-->

# First, Context

With those problems covered, let's look at DevOps tasks and GitHub actions. Tasks and actions fullfil a similar purpose, componentizing and organizing work
that occurs during the process of building software. This is important because it means that common steps can be shared across projects, for example, compressing 
a directory of JavaScript and uploading it to S3 for deployment to AWS Lambda. Preparing the software for deployment to Lambda involves a common set of steps that are
the same across projects. It makes sense to implement these steps once as a task.

Lambda deployment is also a great example of the step in creating common build and deployment tasks. AWS provides both prebuilt GitHub actions and Azure DevOps tasks.

The marketplace for the two services includes tasks from large companies like AWS all the way to individual developers.

# The Issue

The problem is similar to the security issues present in the ubiquitous use of open source packages from NPM in JavaScript problems,

- Not always obvious mechanisms for controlling what code is being executed
- High(er) levels of privilege granted to packages executing against source code and resources
- High(er) levels of effort required to audit and validate packages

Put another way, a tasks and actions are pieces of 3rd party software that are explicitly granted permissions to run and read source code or, in some cases, write to protected deployment environments. Security conscious organizations will have policies that govern access to source code and production environments (eg an AWS account). What we have noticed is that developer tooling like plugins that help with build and deployment process get a pass or are not as closely monitored.

An example scenario involves an attacker creating a package name similar to the Sonarqube which has a copy of the current source of the actual [Azure DevOps extension](https://github.com/SonarSource/sonar-scanner-vsts) with a couple extra modifications to send results, or even, copies of source files scanned to an additional host operated by an attacker. This attack is similar the NPM package namespace attacks demonstrated earlier this year on NPM with the same end result, exfiltration of source code. Success of the
attack does require that an project administrator in Azure DevOps approve a misnamed extension for use, but stranger things have happened.

Another scenarios involves a DevOps extensions or GitHub actions that accept credentials to service providers like Azure or AWS. Similar to our Sonarqube example, a malicious extension can mimic an existing extension performing a useful intended action, perhaps deploying a function to AWS lambda, and a malicious action like opening a port in EC2 security group. A nightmare scenario here would involve an attacker compromising a trusted developers account and publishing a patch update to a widely used package.

# Not hyperbole

I do not like security hyperbole. So, it is important to note that attacks involving pipeline extensions like GitHub Actions and DevOps do require multiple elements to align in order to be successful.

- A package maintainer must be compromised on both GitHub and Azure's extension marketplace _or_ in the case of namespace confusing the maintainer or project must miss that an incorrect package has been approved for use.
- Attacks against resources like cloud infrastructure require high(er) privilege secrets to be issued and given to the extensions
- 