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

CORS 