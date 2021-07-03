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
website misconfigured for some time. 

Also, this is a somewhat long post for an issue fixed by two small settings. The short, short, summary is,

- The `crossorigin` attribute must also be specified when using the HTML `link` tag with the `integrity` attribute. 
- The CloudFront distribution must be configured to use CORS headers, such as `origin` as the cache key and pass those headers to the backend when hosting static resources that need to be served with CORS headers.

With that said, let's chat about details,

# What

CORS and the server side settings for it to work are as much as about the browser's security model as they are about sharing resources across origins. In the briefest 
of summaries, 'CORS' is a specification that defines a way for servers to indicate which remote resources may be downloaded by web applications loaded from
a domain other than the servers' domains. Sometimes defining what something is _not_ helps. CORS is not,

- applicable to native (non-web-browser based) applications making calls to remote services
- applicable to loading redirects or things that cause the browser location to change
- (intentional repeat here), **CORS is not** a way to secure resources stored on a server

CORS is,

- helpful in modern web application where an application may make calls to multiple, different, backend APIs
- sometimes configured dynamically when serving resources that require authenticated access
- a method to help prevent malicious javascript from surreptitiously loading resources across domains 

[Mozilla has a great page](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) that provides an overview of CORS and then goes into the technical details of the
HTTPs headers involved.

# Context

I've used various ways of hosting my personal blog over the years. In recent times I've [used the Hugo generator](https://gohugo.io/) to create static pages that are
then hosted on AWS S3 and Cloudfront. My site is available at two domains currently, `www.codinginthetenches.com` and `codinginthetrenches.com` with the latter being
the primary domain. The former domain is available via Cloudfront and loads resources like CSS and Javascript from the primary domain.

After recently updating a Hugo theme I noticed that the styling of the home page on `www.codinginthetrenches.com` was broken and Firefox was showing a new-to-me CORS
error in the browser console.

At this point I could have followed AWS' guide for using S3 buckets to create redirects between domains. Instead of hosting the entire homepage at `www.codinginthetrenches.com`, a visitor to that domain would receive a HTTP 301 Moved Permanent redirect to `codinginthetrenches.com`. I'm moderately allergic to mysteries though.

# My problem

Turns out two things were broken.

## First,

 Hugo is a static site generator that takes as input templates and content written in Markdown and emits as output HTML, CSS, and Javascript. Sometime recently support was for hashing minimized resources, like CSS, and linking to them using HTML link tags with the integrity attribute. More can be read about this [feature here](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity). It is a neat capability that helps to ensure that our web browser is receiving the content that was originally intended to be included with the page. This helps to prevent a scenario where a CDN like CloudFront manipulates hosted content and serves something other than what the author original intended.

The linked page mentions several times that configuring CORS headers is important for integrity checking. What is not mentioned obviously is that the web browser itself will not participate in sending CORS headers unless another attribute is added to the link tag.

In other words the head section of my website contained a link tag similar to this,

```
<head>
    <link href="{some url}" integrity="sha256-{some hash value}">
</head>
```

Loading this page when `{some url}` pointed to a domain other than the one which hosted the page resulted in an error similar to the following, "has an integrity attribute, but the resource requires the request to be CORS enabled to check the integrity, and it is not. The resource has been blocked because the integrity cannot be enforced."

This is not a server side error. The browser is telling us that the link tag must be configured to _tell the browser_ to send CORS headers as part of the request. Doing this is simple,

```
<head>
    <link href="{some url}" integrity="sha256-{some hash value}" crossorigin="anonymous">
</head>
```

Anonymous works for me since my website is public without any authentication. A different attribute value may be needed if the server requires an authorization header or some kind of authentication state.

This resolved issued number one.

## Second,

Hosting a static website on AWS S3 with CloudFront is not a new practice. AWS even have some guides how to make sure that CORS headers are appropriately handled by S3 and CloudFront. These guides are [here](https://aws.amazon.com/premiumsupport/knowledge-center/no-access-control-allow-origin-error/) and [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html).

As a CDN, CloudFront generally accepts requests from clients and either serves a cached response or retrieves a value from some backend, caches it, and then serves a 
response. The definition has become somewhat fuzzier recently because of capabilities like Lambda at edge. Still, in general CloudFront caches content and serves it. This is
important because part of is cached by CloudFront involves HTTP headers. The above guides note that CloudFront must be configured to forward CORS headers, such as `origin` to the backend. The above guides also show how to configure AWS S3 to respond with appropriate CORS headers given a request.

After fixing issue one, I was still seeing an error in the browser console indicating that this CSS file was being served without an appropriate CORS header.

My issue was not paying attention to CloudFront's caching configuration. Each CloudFront distribution can have one or more 'behaviors' that determine
how requests are handled. Among other settings, behaviors determine how many different versions of a response are stored by CloudFront and what header values
are passed to the backend. AWS' documentation covers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-the-cache-key.html) the how the behavior policy works in more detail.

I had configured my distribution to pass header values to the backend but only store responses based on the requested domain and path. This meant that CloudFront did not return different CORS headers regardless of what `origin` header was sent with the response. It instead sent back headers associated with whatever request it first handled. Since I have a simple public website adding the `origin` header to the cache set of keys resolved the issue.

Issued number two resolved.

If you got this first, thanks for reading and hopefully I covered something new.