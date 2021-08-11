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

The following is targeted to individuals that build and integration identity systems, but may be of interest to anyone curious about the behavior of applications and authentication systems. First, let's cover some terminology that will be frequently used. SAML and OpenId Connect define different terminology for similar personas when it comes to users authenticating with a system. For the sake of clarity, we will use SAML-like terminology for the majority of this post. Please note that while the jargon is different the conceptual problems and solutions are the same.

# The 
what's the problem?
what to do about it?