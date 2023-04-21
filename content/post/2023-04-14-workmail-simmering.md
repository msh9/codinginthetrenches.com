+++
tags = ["tips"]
categories = ["review?"]
description = "Commentary on why I stopped using AWS WorkMail for email hosting."
author = "Michael Hughes"
date = 2023-04-14T19:03:37-06:00
title = "AWS WorkMail is meh."
+++

A quick review of: AWS WorkMail. It's 'meh', more after the break.

<!--more-->

I've used AWS WorkMail for hosting my primary email address on a custom domain for a few years now. Previously, I've used Rackspace hosting, Microsoft Office365, Zoho, and even self-hosted on a server at home for a time. I've now switched from WorkMail to another service provider due to some limitations in the product and slow feature releases.

The target audience of the following commentary are technical *individuals* looking to host email for a custom domain. My use case,

- I still like to use a local desktop mail client which means IMAP integration is important to me.
- I have a custom domain for my email address(es)
- I don't mind paying money for a service that works well
- Security and privacy are reasonably important to me, but not to the point of totally inconveniencing me

With that out of the way, AWS WorkMail is convenient for technical minded folks that already use AWS services, but there are better and cheaper options.

I started using WorkMail after finding Office365 too focused on multi-user organizations. 

WorkMail supports IMAP and Exchange protocols with a built-in contact book and calendar. It has a webmail interface. It also supports standard anti-spam and spoofing functionality. In other words, it does what it says on the box and not much else.

WorkMail is straightforward to setup compared to other AWS services and, although it includes creating a user directory, it's simplified by a wizard in the AWS Console. If you have a custom domain and DNS for it is hosted on AWS Route53 then WorkMail has a nearly 1-click button workflow for configuring SPF, DKIM, and DMARC. Setup of SPF, DKIM, and DMARC for most other DNS and email hosting providers involves copy pasting multiple values. While nice most of this setup is a one-time action so the integration between WorkMail and Route53 does not outweigh WorkMail's issues.

Issues.

- WorkMail does *not* support two factor authentication on the webmail interface. If an account's password is compromised then an attacker can access the email for that account via the webmail interface without any further barriers. 
- WorkMail's IMAP integration only supports password authentication and not more flexible, arguably more secure, approaches like OpenId Connect/OAuth2. 
- WorkMail's outbound servers seem to use IP addresses that periodically get placed on anti-SPAM lists. I can only speculate that it is because, perhaps, the IPs are shared with AWS Simple Email Service. Either way though, it's frustrating to have emails I send blackholed because someone else on AWS' was sending abusive emails.
- WorkMail's development is slow. I know hosted email is not an exciting product, but WorkMail has several missing features compared to, for example, Microsoft Office365. Yet WorkMail has had very few updates since 2021 despite missing critical security features like two factor authentication for the webmail client.

Conclusion.

For my personal use case, AWS WorkMail is not good enough anymore. Also, priced at $4/mo/inbox, it is not so radically cheaper than its competitors that it justifies its many missing features. For now, I have decided to move to Proton Mail, it fits my use case better. I will see if Proton Mail is still working well for me a year or two from now.

Thanks for reading!