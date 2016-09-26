+++
author = "Michael Hughes"
categories = ["uncategorized"]
date = "2016-09-24T12:11:47-06:00"
description = "Some things to not do when you are managing your own content"
images = []
layout = "post"
menu = ""
tags = ["tips", "using-software", "fun"]
title = "How I screwed up my website or how to not manage your content"

+++

I enjoy running my own blog at [codinginthetrenches.com][1] because I am a technologist that likes to write. Unfortunately,
sometimes my interests as a technologist get the better of my interests as a writer. This last week my competitive interests
resulted in my blog being visually broken for several days. Furthermore, the competition has resulted in a few select articles being
mis-formatted and visually broken for much longer than a week. 

Today's post is about what I'll be doing to avoid these problems and how they can apply to your own writing platform.

[1]: https://www.codinginthetrenches.com "Coding in the Trenches"
<!--more-->

My current and past employment has typically had me working in the area of web APIs and rich user applications (in the browser). I
typically work on back end, non-user facing code, but I also occasionally work on some front end systems as well. This background
is part of the reason why it is rather embarrassing to admit that my personal website, where I write about such topics, was very broken for a
week and party broken for a couple **months**. 

First, some background, [a while back I wrote]({{<ref "2014-02-26-from-dynamic-to-static-to-dynamic-or-why-my-blog-is-back-on-wordpress.md" >}}) about how I was switching *back* from a static site generator called Acrylamid to 
Wordpress. Fast forward roughly two and one-half years and now my blog is being published using another static site generation tool,
[Hugo][3] to be specific. I won't go into too much detail at this point in time but suffice to say that Hugo is a "good enough" writing tool to replace
Wordpress and allows me to take advantage of static site feature such as fast page load times (or so I thought, we'll come back to this in a moment)
 and minimal security risks.

I've tried to migrate as much content between platforms as possible; at least a few posts have been through three content transformations, 
from Wordpress to restructured text, back to Wordpress, and now to markdown. As it turns out, I have made some mistakes in the course of
changing platforms and migrating content.

### Broken links, broken styles, pretty much broken everything.

This is probably the biggest web development sin that I have committed in the last couple months. In the last few years I have both
broken links between my own content and broken links from the outside world.

In 2011 I intentionally, with full knowledge of what I was doing, removed the vast majority of the content from my website and rebooted my blog
as a website oriented towards technical content. I wanted to hit the reset button and make my written content useful to a wide technical audience instead of
being a personal log of social commentary.

Subsequent broken links were not thought out. In the first two content transitions there were articles that I didn't bother to
transfer because I didn't feel that they were relevant anymore. I only found out later that some of those older articles were quite popular. In other cases,
for articles that I did transition, I did not maintain consistent post [permalinks][4]. Perhaps unsurprisingly, from a perspective of a third party website
 making a permanent-link into a not-permanent-link is essentially the same thing as just not migrating the content.

Finally, in the most recent rendition of my site I went with a theme designed by a third party (ie I didn't assemble it myself). Unfortunately, as is common
in the open and sharing world of code, this third party theme had bugs. Bugs that when combined with how Hugo handles paging and content generation resulted
in the back and forward pagers being broken on my website.

Also this:

![Look ma, no CSS or JavaScript!](/images/2016-09-24-screwing-up/1_screen_doc.jpg "Look ma, no CSS or JavaScript!")

Eek! At least my content, the text, was still there but there was no styling and several images were missing. **Importantly** I don't blame the theme developer
for this, the blame falls to my feet because I didn't review the result.

#### Suggestions

- Use tools like Google [WebMaster][5] and [Analytics][6]. These tools can help inform you about what content (videos, pictures, articles, etc) are the most popular
  even for small sites with minimal traffic. As a general rule it is bad to break links, but take particular care when it comes to popular content.
- Be mindful of permalinks. Blogger, Wordpress, MovableType, Acrylamid (deprecated), Jekyll, and Hugo **all** support configurable permalinks. Be sure to either take
  advantage of customizable permalinks in order to maintain link structure across platforms *or* setup [HTTP 301][7] redirects from the old structure to the new structure.
- Review, review, and then review some more. I would have noticed a myriad of problems that needed to be fixed had I just clicked around a little bit after my 
  initial transition to Hugo

### Double vision, double content

Specifically regarding my transition to Hugo, I used an automated tool to extract content from Wordpress and then convert it into markdown. The tool worked great for most
pages. Unfortunately, the tool also broke a few pages in new and interesting ways. The export tool incorrectly handled links in article summary blocks (the blobs of text 
shown on the homepage article list) and in certain scenarios it rendered duplicate summary blocks into articles. As a result some of my posts had broken outbound
links and had duplicated, repetitive, text. 

Again, I don't blame the tool developer. Automated tools are great because it means that all content can be migrated with the same amount of effort as a small amount of the content.
In other words, automated tools help avoid the broken link issues mentioned above.

#### Suggestions

This is tough because the only way to catch the content issues here is through some clever tooling or manual review. I'm not personally aware of free, easy to use, automated tools
that will catch duplicated paragraphs and images in an article. If you know of some please [drop me line]({{ <  ref "about-me/index.md"> }})!

This means that we're left with manual review of content in order to catch issues. As before with broken links, this is key to a successful migration of content from one platform
to another. One thing that I can strongly recommend is creating an environment to view the website that is produced exactly like the public website, but is not
publicly available. Several content related issues on this blog were not evident while locally writing content and only became visible after publication.

### Hey, wait a second, my homepage takes over 2 seconds to render. I thought this was supposed to be fast.

<video controls>
 <source src="/images/2016-09-24-screwing-up/codinginthetrenches-com-load-filmstrip-post-compression.mp4" type="video/mp4">
</video>

Double eek!

[Web page test][9] is a great website for testing how fast websites load and for determining how to make them faster. Here's the [recent results list][10] for this website. The current (as of September, 2016) 
test results will expire after a year. For the sake of posterity it currently takes ~1.9 seconds to render *anything* to the page. A few days ago
it took nearly ~2.5 seconds to render anything. In the grand scheme of all websites, 2.5 seconds is not bad; 2.5 seconds is not very good at all though given the context that my 
website is entirely static and renders nothing on the backend server (there is no backend, really, just AWS CloudFront.)

_The really surprising part is that this is not much faster than when I used Wordpress_

There are a [plethora of ways to cache content][11] with Wordpress and in my case I was even caching the generated pages. Essentially, my Wordpress instance was already serving a
version of a static site and that any perceived slow-ness was due to how my pages were being rendered by browsers.

#### Suggestions

- Test, review, test, review, and... repeat. Performance optimization of any kind is not easy and it always starts with testing in order to determine the problem areas. There's a
  quote from [Donald Knuth][13] regarding [when to optimize][12]. If your site is rendering slowly then *now* is the time to optimize. Fortunately, the previously mentioned tool, 
  Web page test provides a wealth of information regarding possible sources of slow-ness. In my case, about half a second of delay was due to web fonts.
- Think carefully on artistic choices, particularly the use of web fonts. Web fonts are great because we can use them to display content with fonts other than those built into a
  user's operating system. In certain scenarios a good font choice can lead to a strong, memorable, brand. Web Fonts also have a dark side though. [Using them means that a site][14]
  will flash an unstyled font, hide text until the web font is loaded, or (in the least optimized case delay) rendering all content until the fonts are loaded. Another alternative
  is to consider if a custom font is needed. In my case, I don't consider the font to be part of the site's brand. Additionally in the last few years built-in system fonts
  have become a credible alternative. In order to save time, my site now renders using fonts like Cambria, Georgia, Segoe UI, and San Francisco.
- [optipng][15] and [imagemagick][16] are our friends. Un-optimized images can be considerable larger without any noticeable improvement in picture quality. In order to save space
  many of the diagrams in the newer posts in the blog are SVG documents that can be easily compressed since SVGs are described using a text format. For png and jpeg images
  optipng and imagemagick can be used to minimize the amount of space they consume. See [here][17] and [here][18] for some examples on how to use the two tools.
- [GZIP your content][19]. The link goes into a lot more detail on what gzip does for website content and how to enable it with Apache httpd. If the site is being served from
  a CDN like this one is, then enabling compression is likely as simple as checking a box in form configuring the CDN's behavior.

I am still working on improving the site in this regard. CloudFront is able to start delivering content to an end user's browser in under one half second, I would like
it if my site started rendering then too instead of waiting another 1.5 seconds.

### Not reading the manual

Effectively using cache control headers is vital to ensuring that a web site's contents are cached correctly both by end user clients and by content delivery networks.
Fortunately, the header is [standardized][20] with ample documentation indicating how it should be used to express the maximum time a cached document may be held before
the client should check back with the server. Unfortunately, being standardized does not prevent developers, such as myself, from putting an invalid character in the header
and then not reviewing their own work. The invalid character caused CloudFront to cache this website for an invalid amount of time, not the worst thing in world,
but very annoying to discover. 

#### Suggestions

- As before, reviewing the real site content is important. Also, reading the standard for cache control headers and not going from memory is advised.

I hope my misadventures with this blog and what I learned along the way help you avoid similar issues in the future.

[3]: https://gohugo.io/ "Hugo"
[4]: https://codex.wordpress.org/Glossary#Permalink "Permalink"
[5]: https://www.google.com/webmasters "Google WebMaster"
[6]: https://www.google.com/analytics "Google Analytics"
[7]: https://en.wikipedia.org/wiki/HTTP_301 "HTTP 301 Moved Permanently"
[9]: https://www.webpagetest.org "Web page test"
[10]: https://www.webpagetest.org/testlog.php?days=365&filter=codinginthetrenches "Recent results"
[11]: https://wordpress.org/plugins/w3-total-cache/ "W3 Total Cache"
[12]: https://www.bing.com/search?q=premature%20optimization%20is%20the%20root%20of%20all%20evil "Premature Optimization is the root of all evil"
[13]: https://en.wikipedia.org/wiki/Donald_Knuth "Donald Knuth"
[14]: http://www.html5rocks.com/en/tutorials/webfonts/quick/#toc-fout "Webfonts"
[15]: http://optipng.sourceforge.net/ "Optipng"
[16]: http://www.imagemagick.org/script/index.php "imagemagick"
[17]: https://github.com/msh9/codinginthetrenches.com/blob/master/utilities/optimize-jpg.ps1 "Optimize JPEG"
[18]: https://github.com/msh9/codinginthetrenches.com/blob/master/utilities/optimize-png.ps1 "Optimize PNG"
[19]: https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/ "GZIP"
[20]: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9 "Cache Control Header"