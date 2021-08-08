+++
tags = ["tips"]
categories = ["Projects"]
description = "Another type of supply chain attack to worry about"
author = "Michael Hughes"
date = "2021-07-31"
title = "A brief discussion of CI/CD plugins"
+++

Let's talk about spooky things that can happen while using the GitHub Marketplace or the Visual Studio Marketplace for build pipeline extensions. Much has been written
this year about about supply chain attacks. In short, an attacker can gain access to a target by looking for an easier to compromise dependency of the target. This is a 
simplification, but it captures what happened with the [SolarWinds incident](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack), [NPM package namespace incidents](https://blog.sonatype.com/dependency-hijacking-software-supply-chain-attack-hits-more-than-35-organizations), and earlier [Maven based attacks.](https://blog.sonatype.com/malware-removed-from-maven-central)

<!--more-->

# First, Context

Azure DevOps pipeline extensions and GitHub Actions (hereafter extensions will refer to either) fullfil a similar purpose, componentizing and organizing work
that occurs during the process of building software. This is important because it means that common steps can be shared across projects, for example, compressing 
a directory of JavaScript and uploading it to S3 for deployment to AWS Lambda. In this example, preparing the software for deployment to Lambda involves a common set of steps that are the same across projects. It makes sense to implement these steps once as a task and share them.

Lambda deployment is also a great example of 3rd parties creating common build and deployment tasks. AWS provides both prebuilt extensions for both Azure DevOps and GitHub Actions. The marketplace for the two services includes tasks from large companies like AWS all the way to individual developers.

# The Issue

The problem is similar to the security issues present in the ubiquitous use of open source packages from NPM in JavaScript,

- Not always obvious mechanisms for controlling what code is being executed
- High(er) levels of privilege granted to packages executing against source code and resources
- High(er) levels of effort required to audit and validate packages

Put another way, these extensions are pieces of 3rd party software that are explicitly granted permissions to run, read source code and, in some cases, write to protected deployment environments. Security conscious organizations will have policies that govern access to source code and production environments (eg an AWS account). What we have noticed is that developer tooling like plugins that help with build and deployment process get a pass or are not as closely monitored.

An example scenario involves an attacker creating an extension named similarly to the legitimate Sonarqube extension. The malicious extension would have a copy of the current source of the actual [Azure DevOps extension](https://github.com/SonarSource/sonar-scanner-vsts) with a couple extra modifications to send results, or even, copies of source files scanned to an additional host operated by an attacker. This attack is similar the NPM package namespace attacks demonstrated earlier this year with the same end result, exfiltration of source code. Success of the attack requires that the project administrator in Azure DevOps approve a misnamed extension for use, but stranger things have happened.

Another scenario involves an extension that accepts credentials to service providers like Azure or AWS. Similar to our Sonarqube example, a malicious extension can mimic an existing extension performing a useful intended action, perhaps deploying a function to AWS lambda, and a malicious action, like opening a port in an EC2 security group. 

A 'nightmare' version of either these scenarios would be where an attacker compromises a trusted developer's account in both GitHub (where the extension source is) and the marketplace (where plugin is hosted). An attacker can use the compromised accounts to publish a patch update to a widely used extension that, again, contains existing behavior plus some kind of malicious activity.

# Not hyperbole

I do not like security hyperbole. So, it is important to note that attacks involving pipeline extensions like GitHub Actions and DevOps do require multiple elements to align in order to be successful.

For example,

- A package maintainer must be compromised on both GitHub and Azure's extension marketplace _or_ in the case of namespace confusion the maintainer or project must miss that an incorrect package has been approved for use. These attack vectors are not hypothetical, they have occurred, but they are also possible to catch with sufficient auditing of extension updates and approvals.
- Attacks against resources like cloud infrastructure require high(er) privilege secrets to be issued and given to the extensions
- Azure DevOps Pipeline extensions state what permissions (read source code, write, etc) will be used before it can be approved for use in the project

# What now

3rd party extensions to GitHub Actions and Azure DevOps pipeline simplify automating both continuous integration and deployment. A little care must be taken though when taking 3rd party code, granting it access to read source code, granting it access to critical infrastructure, and then running it.

This takes some of the shine off the ease of use of extensions. Using them safely requires some care to be taken. Some thoughts,

- The vast majority of these extensions are open source. Review the code, understand what it does. This will take time but less than writing the extension from nothing.
- Never pass broadly authorized credentials to extensions. Extensions that manipulate resources like cloud infrastructure only need credentials authorized for the intended use of the extension. This helps minimize damage in case of either the extension *or* the credentials being compromised.
- Do not blindly accept version updates. Unfortunately, Azure DevOps makes this hard because patch version updates to extensions are automatically distributed and installed once an extension in approved in a project. GitHub Actions provide more flexibility and allows pinning specific releases or even specific commit hashes of extensions.
- Finally, read the documentation. Microsoft has a good starting place for evaluating [third party extensions](https://docs.microsoft.com/en-us/azure/devops/marketplace/trust?view=azure-devops) and GitHub provides guidance as part of there [developer guide here](https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions).

I hopes this helps teams become more conscious of the implications of using 3rd party extensions in build and deploy pipelines.