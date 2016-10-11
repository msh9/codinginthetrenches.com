+++
author = "Michael Hughes"
categories = []
date = "2016-10-09T16:30:36-06:00"
description = "Why I am back to using a static site generator and why hugo in particular"
draft = true
images = []
layout = "post"
menu = ""
tags = []
title = "On why I am back to using a static site generator like hugo"

+++

Today's post will go over some of the reasons for why I switched my personal blog back to being generated via
a static generation tool from Wordpress. [I have previously written about not using static content tools]({{<ref "2014-02-26-from-dynamic-to-static-to-dynamic-or-why-my-blog-is-back-on-wordpress.md" >}})
, we'll look at some of the things that have changed in the last couple years with regards to complaints I had in 2014.

<!--more-->

Using a static site generation tool can be [fraught with challenges]({{<ref "2016-09-24-screwing-up-my-site.md" >}}) for those that are not careful. Indeed, my personal blog has been broken in various ways for a portion of
 this last summer. In spite of the difficulties I have run into I will be staying with my static site based content tools for now.

Before going into the reasoning for using a static tools again, let's look at what tools and steps are involved in getting content onto the web:

1. The `hugo new` command creates posts on my local desktop with pre-filled boilerplate that can be modified as needed.
2. A [github repository][1] stores the source text, styling, and images for the site's content.
3. A push hook from GitHub to CircleCI kicks off builds of the site's content
4. The CircleCI build itself uses a [Docker container][2] with hugo installed in it in order to build the site.
5. After a successful content build, the CircleCI build updates the site's content to AWS S3
6. Finally, as the site's cached content in AWS CloudFront naturally expires (due to a max-age setting), new and updated content is pulled from S3.

## Why I am using a static site generator

The primary reason is that in the intervening years I have discovered solutions and better tools for static site generation. 

1. Having an automated build system. While setting up an open source build pipeline was certainly possible in 2014 (CircleCI was
   founded in 2011), it is easier to setup now than in the past. 


1: https://github.com/msh9/codinginthetrenches.com "GitHub codinginthetrenches.com"
2: https://hub.docker.com/r/msh9/hugo-builder/ "Hugo Builder"