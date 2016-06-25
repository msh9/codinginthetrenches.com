From dynamic to static to dynamic or why my blog is back on Wordpress
#####################################################################
:date: 2014-02-26 19:05
:author: MichaelHughes
:category: Uncategorized
:tags: tips, using software
:slug: from-dynamic-to-static-to-dynamic-or-why-my-blog-is-back-on-wordpress
:status: published

I recently migrated back to Wordpress as my blog platform of choice. The
change has been painful, in fact, many of my older posts haven't been
migrated to Wordpress. The change has been worth it though since it
makes publishing easier. Today's post is about the importance of
focusing on the core workflows of an application and ensuring that they
are as easy as possible to complete.

If I don't want to think about how to use an application then I
shouldn't have to.

Okay maybe that is not entirely true; every new system will have a
learning curve. Photoshop for example has a tremendous learning curve,
it's a professional application with a wide variety of features and
capabilities.  That said, it's still easy to open a photo, crop it, and
then save it. The difficultly in Photoshop arises from trying to
accomplish more complex tasks, in other words cropping a photo is easy
while touching up a model's eyelashes for a magazine print requires a
solid grasp of Photoshop's capabilities.

This post is not about Photoshop. It's about why I'm back to using
Wordpress.

I became enamored with static site generators for some time, my site was
generated with a tool called
`acrylamid <http://posativ.org/acrylamid/>`__. Arylamid is actually a
very good tool in the sense that it does exactly what it purports to do:
the fast, incremental generation of blogs from a variety of source
markup formats. For a simple blog, static site generators have some
nifty advantages:

-  The site source files usually remain in highly portable
   `markdown <http://daringfireball.net/projects/markdown/>`__\ or
   `rst. <http://docutils.sourceforge.net/rst.html>`__
-  The generated files (CSS, HTML, etc) are typically lightweight and
   can be served from anything ranging from S3 to IIS.
-  Creating new templates or blogs with static generators is generally
   very simple

That said, here I am back on Wordpress and why is something that's
important for many user facing applications.

**The core workflows of an application should not be hard to
accomplish.**

Wordpress is a writing tool. I click a handful of buttons (less than 4)
and write the content. Done. Static site generators, like acrylamid
(still my personal favorite) don't have the same level of ease of use. A
tool being hard to use **isn't** a knock against it in and of itself .
Again, Photoshop has a tremendous learning curve, but is still a great
tool for everything photo related. Instead the point is that tools
should make `simple things simple
and.... <https://www.google.com/search?q=simple+things+simple+complex+things+possible>`__\ You
get the idea. Again this isn't a knock against acrylamid or static site
generators in general, many people use them to great effect and
additionally acrylamid has a very specific target audience that wants
the above features more than it wants an easy to use GUI. I would posit
though that for an average user it is more challenging to use acrylamid
than it is to use Wordpress(.com).

Essentially I have moved my blog back to Wordpress because it doesn't
make me do this when writing a post:

[caption id="attachment\_57" align="aligncenter" width="400"]\ |image0|
Photo By `umjanedoan <http://www.flickr.com/photos/umjanedoan/>`__ / `CC
By 2.0 <http://creativecommons.org/licenses/by/2.0/>`__\ [/caption]

Is there a takeaway from this post? Why yes there is. A good user facing
application (that is really any application internally or externally
that has human users) must make the core purpose of the application at
least intelligible. I have poked at `this topic
before <http://codinginthetrenches.com/2014/01/07/ux-is-important-for-business-applications-too/>`__,
but it's so important that I'm going to mention it again from my own
perspective. I originally used static site generators because I placed
value on keeping my original text content in restructured text format
and acrylamid **made this easy**. Similarly I am back to Wordpress now
because I have (much) less time to write and therefore value ease of
post creation and publishing, something that Wordpress **makes really
easy. **\ Continuing this theme there are `other
examples <http://arstechnica.com/information-technology/2014/01/quarkxpress-the-demise-of-a-design-desk-darling/>`__
of `easier to
use <http://techland.time.com/2012/05/07/six-reasons-why-apple-is-successful/>`__
products and more `customer
centric <http://www.tibco.com/blog/2013/04/06/valves-steam-is-beloved-by-gamers-while-eas-origin-is-loathed-why/>`__
policies doing better with consumers. Admittedly the later two of those
linked articles are more opinion than fact, but you get the idea.

In short: If you're building a tool that solves a problem make sure that
the tool makes it easier (or just possible) to solve that problem.

.. |image0| image:: http://codinginthetrenches.com/wp-content/uploads/2014/02/497374910_9d8bfb7898_o-e1417402428878.jpg
   :class: wp-image-57 size-full
   :width: 400px
   :height: 300px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/02/497374910_9d8bfb7898_o-e1417402428878.jpg
