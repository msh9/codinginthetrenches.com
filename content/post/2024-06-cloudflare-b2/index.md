+++
tags = []
categories = []
description = "Information on using Backblaze b2 and Cloudflare CDN for static website hosting"
draft = true
author = "Michael Hughes"
date = 2024-06-26T20:49:54-06:00
title = "Hosting a static site on Cloudflare CDN and Backblaze B2"
+++

I recently bought a new domain and wanted to host a couple new static pages on it. I decided to do this using some new-to-me tools as a learning exercise. This post is about a couple things I learned along the way to hosting [Michael On Random](https://www.michaelonrandom.com) with Cloudflare CDN and Backblaze B2.

<!--more-->

Currently, this blog, Coding in the Trenches, is hosted on AWS using a combination of AWS S3 and CloudFront CDN. Both being AWS services that are mature and well integrated, static site hosting is reasonably well documented and supported with out of the box defaults. I wanted to intentionally try something different for a new site, eventually landing on a combination of Backblaze B2 and Cluudflare CDN.

Some important reasons for why,

- B2 progress egress to CloudFlare CDN free of charge
- For hobbiest / personal projects CloudFlare CDN is free. For all intents and purposes there is not uptime SLA but that's okay for this particular personal site.
- I want give myself a reason to play around with CloudFlare's tools given their prevalence.

My starting point for how to make this integration work was Backblaze's [integration guide](https://www.backblaze.com/docs/cloud-storage-deliver-public-backblaze-b2-content-through-cloudflare-cdn). If you want to implement this style of hosting yourself, I recommend given the guide a thorough read. Critical highlights that are worth copying here are,

- Backblaze B2 uses shared domains for hosting different public bucket content. Buckets are segregated by URI path prefixes of the form `/file/{bucket name}`.
- Backblaze B2 does automatically route a request for a folder to an index file. For example, a request for `/file/my-bucket/some-folder` will return 404 if that exact name does not exist instead of returning the contents of `/file/my-bucket/some-folder/index.html`. This makes sense given that B2 is an object store, but means that static website hosting requires a workaround.
- For both of the above, B2's integration guide recommends using a CloudFlare CDN feature called 'Page Rules'.

After creating my site in Cloudflare though, I found that while [Page Rule](https://developers.cloudflare.com/rules/page-rules/) documentation still exists, [it's a deprecated feature.](https://developers.cloudflare.com/rules/reference/page-rules-migration/). Instead, transform rules and redirects serve a similar purpose to direct traffic from CloudFlare's edge to the Backblaze B2 bucket. In order to solve for the critical items above we need the following,

- *Two* transform rules per B2 bucket. The rules rewrite URI paths for directories and direct links to files separately.
- Appropriate DNS settings for hosting a domain