+++
tags = ["using software","web services"]
categories = ["Software Design"]
description = "Discusses the nuances of single log out, what it means sign out and how"
author = "Michael Hughes"
date = "2021-08-09"
title = "How to log out"
draft = true
+++

It is more than mid-way through 2021. I should not be writing a technology essay about the nuances of single log out. Yet here I am writing one; it is still not a (well) solved problem and in some ways it is not even a well specified problem.

The post for digital identity engineers is more about the latter with a few technology suggestions for what to do about the former.

<!--more-->

The following is targeted to individuals that build and integrate identity systems, but may be of interest to anyone curious about the behavior of applications and authentication systems. First, let's cover some terminology that will be frequently used. SAML and OpenId Connect define different terminology for similar personas when it comes to users authenticating with a system. For the sake of clarity, we will use SAML-like terminology for the majority of this post. Please note that while the jargon is different the conceptual problems and solutions are the same.

# The problem

is best illustrated with diagram.


An identity system's primary goal is to correctly correlate a person in the real world to some kind of digital identity. There are a bunch of different mechanisms for that, ranging from just trusting a user to self-identity via a simple text box all the way to modern FIDO2 based authentication schemes. Before diving into the problem presented by the diagram, two more contextual thoughts,

- Separation of concerns is important, authentication is not authorization. The primary goal of authentication is determining _who_ is that human user in the physical world. This is distinct from determining what that person is permitted to do in a system. These two concerns can be mixed together in the same system or, and is often the case in complex enterprise scenarios, the two concerns are implemented by two different systems.
- Single Sign-On (SSO) is the concept that when implemented creates logical diagrams like the above. The idea is that a end user (again the human in the physical world) only need login once to establish who they are. 

what's the problem?
what to do about it?