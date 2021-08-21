+++
tags = ["using software","web services"]
categories = ["Software Design"]
description = "Discusses the nuances of log out, what it means sign out and how"
author = "Michael Hughes"
date = "2021-08-09"
title = "How to log out and related topics"
+++

It is more than mid-way through 2021. I should not be writing an essay about the nuances of log out. Yet here I am writing one; it is still an area that can be confusing.

Today we'll explain some simple and some complex sign-on and sign-out integrations with examples.

<!--more-->

The following is targeted at individuals that build and integrate identity systems, but may be of interest to anyone curious about the behavior of applications and authentication systems. First, some terminology that will be frequently used. SAML and OpenId Connect define different terminology for similar system components. For the sake of clarity, we will use SAML-like terminology for the majority of this post. Please note that while the jargon is different the conceptual problems and solutions are the same. The terms 'authenticate', 'log in', and 'sign-on' are used interchangeably throughout the post. Similarly, 'sign-out', 'logoff', 'logout', etc will also be used interchangeably.

# Lots of context, single sign-on and trust relationships

An identity system's primary goal is to correctly correlate a person in the real world to some kind of digital identity.

- Separation of concerns is important, authentication is not authorization. The primary goal of authentication is determining the human user in the physical world. This is distinct from determining what that person is permitted to do in a system. These two concerns can be mixed together in the same system or, and is often the case in complex enterprise scenarios, the two concerns are implemented by two different systems.
- Single Sign-On (SSO) is a concept that when implemented creates logical diagrams like the image immediately below. The idea is that an end user (again the human in the physical world) only need login once to establish who they are. For this discussion, the important part of SSO is its reliance on trust relationships between identity providers. For example, service provider (SP) **A** has trust relationships to identity providers (IdP) **M**,**P**, and **Q**. **A** trusts those IdPs to assert the identity of a user without **A** needing to take further verification steps. This is the concept behind "Login with Google" or "Login with Facebook" buttons.

!["SSO dataflow"](/images/2021-08-09/sso-flow.svg "Identity assertions flow from IdPs to SPs")

The diagram shows identity information flowing from left to right. For the sake of example, this could be authenticating with Google using a username, password, and push notification on a smartphone. After authenticating, the user visits The New York (NY) Times' website and signs in. During sign in the user is prompted to 'Continue with Google'. The NY Times website is behaving in the role of SP **A** or **B** above and trusts the assertions provided Google's IdP. In turn, the NY Times website is likely made up of several backend services that need to know the end user's identity in order to function. Instead of each of those services individually trusting Google, they will trust an identity provider that the NY Times operates; this is IdP **A** or **B** in the diagram. Finally, the individual backend services are represented by the boxes SP **Set A** or **Set B**. In short, NY Times' backend services trust the NY Times' IdP which in turn trusts Google.

# What does it even mean to sign-out?

Logoff, sign-out, sign-off...single sign out???

> When I have signed off from an application I expect to no longer be able to use the application's functionality and expect to prove my identity again prior to being able to use that application again.

I _think_ this is intuitively what is in our heads as engineers when building applications that rely on knowing a person's identity.

## Devices

Is a user prevented from accessing functionality on all devices after log out or only some devices?

!["Login with multiple devices"](/images/2021-08-09/multiple-devices.svg "A user logs into multiple devices")

What was once a detail of implementation, how to reliably and safely track authentication status, has become something that determines the experience of using a service. Authentication occurs on a device by device basis; it occurs on my smartphone, my tablet, my laptop, etc because applications must locally store an identifier in memory that proves I logged in recently. For example, in a web application this might be a cookie stored by the web browser.

If I login separately everywhere should I get to sign out separately everywhere? Traditionally (and intuitively?) log out is separate, except for when it isn't. A great example of an exception is enterprise managed work accounts on iOS and Android smartphones. Managed accounts can be configured to globally force users to re-authenticate after certain critical operations like password change.

!["Logging out from devices"](/images/2021-08-09/multi-device-logout.svg "Logging out from devices")

The component of logout is about user experience. Many applications today default to separate log out across devices because of the typical implementation of tracking authentication status. There are, however, government defined compliance standards and commercially reasonably scenarios where it makes sense to logout a user everywhere after logout from a single location.

## SSO

During authentication identity assertions flow in one direction based on trust relationships between IdPs and SPs.

In this context what does it mean for the user to sign out of an application? It depends on the relation of the SP to the IdP and whether the system's implementors wanted _single_ sign out to occur (or not).

!["SSO and SLO dataflows"](/images/2021-08-09/slo-flow.svg "Sign-in creates assertions, sign-out are requests")

Let's suppose our example service is Twitch now instead of the NY Times. When someone logs out I have an interest in ensuring that he or she is fully logged out in order to prevent account abuse. Twitch likely has many backend SPs that need the user's identity, Twitch has their own intermediary IdP, and Twitch users can, optionally, use a Facebook account to authenticate. 

During sign out, the user logs out of the Twitch application (exemplified by SP **Set B** again) which in turn requests that the Twitch identity provider log the user out (IdP **B**). If the user directly authenticated with Twitch then the process is done and the goal of preventing access until re-authentication occurs is achieved. If the user authenticated with Facebook then a couple different things we can happen,

1. Nothing, the is logged out of _Twitch_ at this point. That the user might be able to immediately regain access if they are still logged into Facebook does not detract from this fact.
1. The Twitch IdP, IdP **B**, can redirect to Facebook (IdP **Q** in our example) and request that the user log out there. It is between Facebook and the end user if logout occurs at this point, Twitch has no control over this. If logout does not occur then the overall system matches #1 where the user _can_ potentially immediately regain access without re-authenticating. Although somewhat tangential an earlier [post on this blog deals with this scenario]({{<ref "2021-01-02-on-user-inactivity.md">}}). It may be completely legitimate for the user to not re-authenticate because his or her Facebook session is still active.

On one hand, it would be annoying if logging out of Twitch automatically logged out of Facebook despite logging into Facebook providing identity assertions to Twitch. On the other hand, an example, Google runs a centralized identity provider for both their own services (Gmail, YouTube, etc) and other companies such as the NY Times. Today, if I logout out of my Google profile on YouTube I am also logged out of Gmail; this example is not only not annoying, but expected.

Thw difference between examples seems intuitive, however, there is little implementation difference between the two with protocols like SAML or OpenId Connect. The differences are found in the relationships of the entities and the desired perceived relationships that an end user observes during login and logout.

## SLO

Referring to our example diagrams again, suppose that when a user logs out of IdP **Q**, we also want to ensure that the user is logged out of every downstream application that trusted IdP **Q** for log in previously. This is single log out. Earlier, we gave an example of using 'Login in with Google' on the NY Times website. Depending on implementation, Google's IdP could send a logout indication to the NY Time's SP and IdP to also logout the user there during a logout originating at Google's IdP. Similarly to SSO, the user logging out in one place causes logout to occur in multiple, other, locations.

SAML2 more or less provides a standardized way of performing this action out of the box whereas OpenId Connect, at time of writing, only has a draft specification for single logout with mixed implementation support.

# Summarizing all these words into meaning and 'problems'

## Meanings

1. SPs trust IdP assertions during login. SPs make requests to IdPs during logout. Trust is not bidirectional, the SP must trust the IdP for login but the IdP does not have to comply with the request for logout. Specifications like OIDC and SAML do not treat login and logout equally either. Both define different sub-specifications for login and logout and vendors implement the two unequally. 
1. Web applications built with support for local accounts (no "single sign on" nor social login) are the simplest to reason about. Login and logout occur on a per-user-client basis and logging out of the application results in what we intuitively expect logout to mean. With that said, for those building consumer facing web applications or mobile applications, I do not recommend this. Please do not make users remember yet another account username and password. Leverage the generally high quality login and account management experience offered by companies like Google, Microsoft, Facebook, and others.
1. Applications that rely on assertions from an upstream IdP for user identity do give up some modicum of control of when the user is completely logged out. **This is probably okay,** unless the application must comply with certain security standards which require explicit control over when and how a user can access the service. In these specific cases, I still do not recommend building a custom identity service. Please leverage tools from vendors such as Auth0, Okta, OneLogin, Microsoft AAD B2C, and many others. 

## Problems

1. OpenId Connect (OIDC) is a wonderful specification and in my opinion simpler to work with than SAML2 for implementing single log _in_. Unfortunately, OIDC only has draft specifications for logout with mixed support. SAML2 based profiles are still more widely supported when more control over log out is needed.
1. Logout is as much about user experience as it is about security. Who, when, and how login is allowed creates relationships between services in users' minds. Think about the user's journey through an application starting with login and ending with logout instead of just the core flows that occur after login.
1. When security really does matter (bank accounts) log out really does need to mean logged out. There are still ways to do this while leveraging SSO and SLO. In our Facebook<->Twitch SSO example, Twitch can request additional authentication factors such as an OTP or a push notification to a smartphone app. These factors can occur even if the user is still authenticated with Facebook and is re-entering Twitch.

If you got this far, thank you for reading. I hope that this provided some valuable information about logout that can be used for building intuitive, secure, authentication flows.
