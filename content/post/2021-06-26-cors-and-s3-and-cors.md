+++
tags = ["tips"]
categories = ["Projects"]
description = "About cross origin headers, what they're for, and using them with AWS S3"
author = "Michael Hughes"
date = "2021-06-26"
title = "Cross Origin Headers (CORS) and S3 and CORS"
draft = "true"
+++

Let's talk about cross origin resource sharing (referred to as CORS from here on), what it is, where it is used, and some mistakes I made when configuring this website's hosting.
After reading this you will hopefully never wonder again why that little error about not being 'CORS-enabled' shows up in the browser console.

<!--more-->

The personal irony of the post is that I have written education materials and taught engineers at work about CORS. Yet here I am admitting that I had my own personal
website misconfigured for some time. In any case, we will start with a primer,

# What

CORS and the server side settings for it to work are as much as about the browser's security model as they are about sharing resources across origins. In the briefest 
of summaries, 'CORS' is a specification that defines a way for servers to indicate which remote resources may be loaded by web applications loaded from
a domain other than the servers' domains. Sometimes defining what something is _not_ helps. CORS is not,

- applicable to native applications making calls to remote services
- applicable to loading redirects or things that cause the browser location to change
- (intentional repeat here), **CORS is not** a way to secure resources stored on a server

CORS is,

- helpful in modern web application where an application may make calls to multiple, different, backend APIs
- is sometimes configured dynamically when serving resources that require authenticated access

[Mozilla has a great page](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) that provides an overview of CORS and then goes into the technical details of the
HTTPs headers involved.

# My problem

In order to 

# My problem