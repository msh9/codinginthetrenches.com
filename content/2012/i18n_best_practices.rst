---
author: Michael Hughes
title: Good components in internationalization
date: 27.07.2012
slug: 4_i18n_best_practices
tags: [Web Services, Tips, Dev Practices]
---

This is an article about four components which should be present in a software |i18n| 
framework. Before diving into the meat of the article we should define common terms:

- Internationalization_:  The practice of preparing an application to be localized.
  In other words, |i18n| is the design and development process that ensures that an application can be
  readily used in multiple cultures and regions.
- Globalization_: Globalization has a broader meaning that |i18n| and can include the combination of
  |i18n|, localization efforts, and business processes. I have linked the Microsoft definition, but
  others exist as well.
- Localization_: The practice of preparing an application for a particular culture and region.
  Localization tasks can include translating text, preparing region specific graphics, and defining
  text layout.
- Locale_: A way of identifying a particular language and potentially region. Locales are used within software
  to identify a language and region combination like English as spoken within the US. A locale
  can also define text layout, number formatting, and date formatting all in addition to defining a language
  region combination.
- IETF_: The Internet Engineering Task Force is a standards body comprised of academic and industry
  partners.

For more information regarding the above definitions please see `this post by the Adobe globalization team`_. 
The post by the Adobe engineers is one in a series about |i18n| and globalization in applications.

Finally, before continuing I also want to define one more term which is specific to this article:

- Point of sale (POS): While the concepts written about here are widely applicable, the goal of this 
  post is to influence business application development. Point of sale in this context of this article
  refers to a specific region (geographic or virtual) identified by business parties that a product will be
  sold in. Amazon.co.uk_ is a point of sale for Amazon, it defines specific contact information for customers
  to use, a pricing format (£ versus $), product availability, etc. On the other end of the size scale a point
  of sale may be a single checkout stand at a local farmers market.

Localizing an application, particularly a large complex application is more than just translating
text. Making a user feel at home in an application involves a number of different tasks
such as translating text, date formatting, number formatting, text alignment 
, local contact information, locale specific customization, etc. It is important to note
that a "locale" is much more than just a particular language. Take the "en-US", its name specifies
the English language as used in the United States, but the locale "en-US" also specifies things
like how ',' are used as separators in numbers, how the currency is denominated as USD or '$', and
how long form numeric dates are formatted as DD/MM/YYYY. Rather than only specifying a
language and region (which a locale such "en-US" certainly does), a locale specifies several 
elements of how information is represented *based* on a choice of language and region.


In this post I want to identify four |i18n| practices that will help make localization easier:

#. Treat different kinds of localizations differently.
#. Store localizations in appropriate formats
#. Handle multiple/standardized culture specifications
#. Encoding text sensibly

1.  Treat different kinds of localizations differently
------------------------------------------------------

Any sizable customer facing business application is going to have more 
than text based localizations. A good |i18n| framework needs to handle text, images, text direction,
different text layouts, number formatting, date formatting, and other considerations. Even within
the text category there can be different kinds of textual localizations. For example, while contact
information like phone numbers are specific to a region they are not translations handled by
translators and should not be treated as such. 

An example of the doing the above the wrong way is using .NET resource files to stores all text
based localization and links to external resources. Briefly: .NET resource files are an easy to use
.NET builtin XML format that can be used to store localizations. .NET automatically picks a resource 
to use based on the IETF language code in the file. For instance if the application locale is set to 
en_GB then it will search for a file of the name 'your-resource-name.en_GB.resx'. Resources file are 
a **great** |i18n| solution *component* for **simple** localization needs. If the application in 
question only needs translated text content on a per locale (not point of sale!) basis then .NET 
resources will fit the bill. 

.NET resources are a trap, however for more complex |i18n| needs. Possibly the biggest danger that
comes with exclusively using resources is the implied assumption that Microsoft's defined locales 
are equivalent to the required points of sale for the application. Going back to the contact information
example, using resources exclusively means that the en_GB locale will only even be associated with
one point of sale. If there is ever a need to use the en_GB text localizations elsewhere, say a new
English point of sale in Hong Kong, then the content must be copied and point of sale specific
information must be changed. In the case of .NET following point #1 requires a more comprehensive |i18n| 
strategy than just .NET resource files.

An better example of handling different localizations differently can be found in Google Web Toolkit's 
|i18n| framework. Like .NET, GWT includes a built in method of storing text localizations using Java
property files. GWT *also* can automatically localize images and even Java classes in the software
based on file naming conventions. Being able to localization images and classes is extremely
important. In GWT the views, or logical for the UI are defined in code. GWT |i18n| framework gives
the application developer the freedom to define view logic on locale basis meaning that text
direction and text layout can be easily localized.

While GWT's |i18n| framework is more comprehensive that .NET resources it does not present a builtin 
solution to the problem I raised with the .NET resource example.  In fact GWT's
localization property files present the same trap that .NET resource based localizations does.  
Unfortunately there is no magic bullet here, how to store region specific versus language specific 
localizations is a project specific decision. 

2. Store localizations in appropriate formats
---------------------------------------------

#2 is important for applications where the developer(s) and localizers(s) are not the same people.
In other words #2 applies to most large applications where |i18n| is being considered. The primary
question under consideration here is how to store localizations for use by a production system and
to make them available to localizers.

Application |i18n| design should be part of a larger globalization effort that involves multiple 
teams. In the context of the application, localizations need to be easily converted between the 
format used for the application, such as .NET resource files and the format used by the localization 
software such as `World Server`_, a translation memory. Talking about translation memories is out of 
scope of this
article, but in brief a TM speeds delivery of content translations by storing previous text
translations. To make full use of the capabilities offered by an organizations TM the application
designer needs to be aware of any steps that are necessary to convert between the new application's
native resource format and how translations are stored in the TM.

In some cases (like .NET resources and World Server) there is no need to convert storage formats 
between the application and TM. Even when no format conversion is necessary though it is important 
to be aware of how localizations are transferred between the development team and the TM, ask the 
following questions:

- How will localization changes be tracked and backed up?
- Will translators and developers use the same interface to retrieve localizations? (Hint: Telling
  translators to access localizations via a source control system like SVN may not be the right 
  answer.)
- Who has authorization to change content and how will that authorization be controlled?
- Will localized content such as text be updated outside of regular releases, if so, how will 
  that process be managed?

3. Handle multiple/standardized culture specifications
------------------------------------------------------

An application's needs a standardized way of referencing locale information. Even if
the defined vocabulary is 'fr-FR' = the French language point of sale in France, at least the
vocabulary is standardized. Since applications rarely exist in confinement, a standardized way of
identify a locale is necessary to enable application integration.

As a publicly available service the application might need to interface with other applications
and users who need to programmatically access data. A client of an application may specify its
preferred culture in several different ways. A web browser might send an accepted locales header, a
user might select a locale in a drop down box, a connection to the .com.hk top level domain might 
expect a different set of localizations than those presented at .com, etc. A standardized locale 
vocabulary will save developer time by simplifying conflicts with how applications identify locales.

An example of doing the above badly is the following: A application, call it X internally mapped 
Microsoft language codes to IETF language tags (e.g. Language ID 1033 maps en-US). The MS language 
code was used internally to assign available locales to points of sale. It is important to note for 
this example the locales, like fr-FR are tied to a point of sale. Externally, a service that was
added on top of application X used IETF language tags to specify locales. Finally the
new(er) service integrated over HTTP to a 3rd party application, Y which externally used IETF 
languages tags to specify a locale. The 3rd party application *did not* not tie points of sale to
locales.

The two applications integrated poorly for a few reasons:

- Application Y used locales in multiple points of sale while X used one locale per point of sale.

  - To resolve this issue multiple new locales needed to be generated in X to replicate the multiple
    reused locales in Y. Generating the new locales should not have been an issue except for...

- Application X did not have a standardized locale vocabulary. Internally both IETF language tags and
  Microsoft Langids were used to identify locales. Furthermore Microsoft's platform has varying
  support for new, custom cultures depending on whether they are identified by IETF tags versus
  langIDs (full support vs. almost none respectively). As a result a quick 1 week integration turned
  into 3 weeks of research and development.

How could we make the above example right by using a standardized vocabulary? Use one method of
identifying cultures in application X. Application X should exclusively use IETF language tags to
represent point of sale tied cultures. The integration of application X and Y would still take work
due to the differences in how locales are used, but the work would be much simpler and would consist
of only adding custom locales.

4. Encoding Text Sensibly
-------------------------

The last point I want to make could be a subpoint of #2. Correct `text encoding`_ is
so important for a good globalization strategy that it bears a separate section. In #1 I made a
point of recognizing localizations aside from translated text. Localization aside from translated
text is important, but it is also important to store and communicate text correctly. 

In short the generally correct answer is that text should be stored in Unicode_ and encoded with 
UTF-8_.

Now for details:

The importance Unicode can be lost when an application is only (initially) targeted at an English 
speaking American audience. Using a framework, or developing to support
Unicode will pay dividends in developer time whenever an application is used in an environment where 
there are characters outside of the standard Latin ASCII set. Choosing to not use Unicode is asking
for the following otherwise easily resolvable issues:

- Lack of support for any language that *does not* use the latin alphabet

  - Certainly there are a number of other character encodings that separately handle East Asian 
    languages, such as Japanese. There are also other separate character encodings for Korean, Thai, 
    and Chinese too.  Or alternatively the application can be developed with support for Unicode 
    from the outset and all of the aforementioned languages will be fully supported.

- Incorrectly storing user input

  - Did the user enter an 'å' in his or her user name? As application developers we should respect
    that and be able to store is correctly, Unicode gives us this ability.

- Increased software complexity

  - Unicode can either be baked into the globalization strategy from the start or be added later
    painfully. 


Where next?
-----------

The points outlined here are useful for evaluating an existing or custom software |i18n|
framework. For an |i18n| strategy to succeed though business and technical sign off are necessary. 
Decisions made during the inception of product such as, "Are we going to expand globally?" will 
influence the difficultly of maintaining an international application.

Hopefully without becoming too cliché it is easier to say:"In today's world we should assume
customer facing applications **are** global applications." Yes internationalizing an application
upfront costs more in terms of development, but that cost will be lower than retrofitting
localization capabilities at a later date. I have spent some time now working on a few different
application with global audiences—some of them were designed for global audiences at the outset and
others were not. The applications that were not designed for a global audience have had growing
pains as they were inevitably deployed to global points of sale. In other words I think we are in a
place it should be assumed that global deployment is the norm and application design should reflect
that fact.

Below I have included some references used for this article and references for further reading on
|i18n|. Normally my preference would be for published book references but those do not appear to
prevalent, maybe if they were I would have needed to write this article.


Collected references and further reading:
+++++++++++++++++++++++++++++++++++++++++

#. A good for standards information is W3C, they help to develop and curate internet standards. One
   article I read through while think about application integration was on `web service i18n`_. The
   linked W3C document, like this blog post, is not about how to execute but is instead about what
   needs to be thought about and research before execution on a project can begin.
#. `This newsletter post`_ from Adam Asnes, a CEO of a localization company highlights (in less detail) some of
   the same points that I made above. More importantly than any detail, Asnes indicates that a lack of
   clear |i18n| design will damage a company's internal or external efforts to localization a product for
   new points of sale.
#. One piece of research that can help determine how to store localizations (point #2 above) is
   looking at what `tools localizers use`_ to do their jobs. 
#. With regard to the examples given, there is also lots of information online on `GWT localization`_ and
   `.NET localization`_ and `ASP.NET localization`_ practices.
#. I linked to the beginning of an Adobe globalization series earlier, but it bears repeating because
   the posts complement and strengthen the importance of the points here. 

   #. `Post 1`_
   #. `Post 2`_
   #. `Post 3`_

.. _web service i18n: http://www.w3.org/TR/ws-i18n/
.. _This newsletter post: http://www.gala-global.org/articles/internationalization-primer-how-helping-your-client-solve-coding-issues-can-give-you-compet
.. _tools localizers use: http://www.crtl.ca/publications_LTRC
.. _GWT localization: https://developers.google.com/web-toolkit/doc/latest/DevGuideI18n
.. _.NET localization: http://msdn.microsoft.com/en-us/library/h6270d0z%28v=vs.100%
.. _Internationalization: http://en.wikipedia.org/wiki/Internationalization_and_localization 
.. _ASP.NET localization: http://msdn.microsoft.com/en-us/library/aa478974.aspx
.. _Localization: http://en.wikipedia.org/wiki/Internationalization_and_localization
.. _Globalization: http://msdn.microsoft.com/en-us/library/c08a467e%28v=vs.100%29.aspx
.. _this post by the Adobe globalization team: http://blogs.adobe.com/globalization/en/globalization-myth-series-myth-1-software-globalization-internationalization-localization-translation/
.. _Post 1: http://blogs.adobe.com/globalization/en/globalization-myth-series-myth-1-software-globalization-internationalization-localization-translation/
.. _Post 2: http://blogs.adobe.com/globalization/globalization-myth-series-myth-2-this-product-is-only-for-the-u-s/
.. _post 3: http://blogs.adobe.com/globalization/globalization-myth-3/
.. _World Server: http://www.sdl.com/products/sdl-worldserver/
.. _Unicode: http://en.wikipedia.org/wiki/Unicode
.. _UTF-8: http://en.wikipedia.org/wiki/UTF-8
.. _Amazon.co.uk: http://www.amazon.co.uk
.. _Locale: http://en.wikipedia.org/wiki/Locale
.. _text encoding: http://en.wikipedia.org/wiki/Character_encoding
.. _IETF: http://www.ietf.org/

.. |i18n| replace:: internationalization
