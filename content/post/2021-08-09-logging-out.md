+++
tags = ["using software","web services"]
categories = ["Software Design"]
description = "Discusses the nuances of log out, what it means sign out and how"
author = "Michael Hughes"
date = "2021-08-09"
title = "How to log out and related topics"
draft = true
+++

It is more than mid-way through 2021. I should not be writing an essay about the nuances of log out. Yet here I am writing one; it is still not a (well) solved problem and in some ways it is not even a well specified problem.

The post for digital identity engineers is more about the latter with a few technology suggestions for what to do about the former.

<!--more-->

The following is targeted to individuals that build and integrate identity systems, but may be of interest to anyone curious about the behavior of applications and authentication systems. First, let's cover some terminology that will be frequently used. SAML and OpenId Connect define different terminology for similar personas when it comes to users authenticating with a system. For the sake of clarity, we will use SAML-like terminology for the majority of this post. Please note that while the jargon is different the conceptual problems and solutions are the same. The terms 'authenticate', 'log in', and 'sign-on' are used interchangeably throughout the post. Similarly, 'sign-out', 'logoff', 'logout', etc will also be used interchangeably.

# Lots of context, single sign-on and trust relationships

Best to start with a picture,

!["SSO dataflow"](/images/2021-08-09/sso-flow.svg "Identity assertions flow from IdPs to SPs")

An identity system's primary goal is to correctly correlate a person in the real world to some kind of digital identity. There are a bunch of different mechanisms for that, ranging from just trusting a user to self-identity via a simple text box all the way to modern FIDO2 based authentication schemes. Before diving into the problem presented by the diagram, two more contextual thoughts,

- Separation of concerns is important, authentication is not authorization. The primary goal of authentication is determining _who_ is that human user in the physical world. This is distinct from determining what that person is permitted to do in a system. These two concerns can be mixed together in the same system or, and is often the case in complex enterprise scenarios, the two concerns are implemented by two different systems.
- Single Sign-On (SSO) is the concept that when implemented creates logical diagrams like the above. The idea is that a end user (again the human in the physical world) only need login once to establish who they are. For this discussion, the important part of SSO is its reliance on trust relationships between identity providers. For example, service provider (SP) **A** has trust relationships to identity providers (IdP) **M**,**P**, and **Q**. **A** trusts those IdPs to assert then identity of a user without **A** needing to take further verification steps. This is the concept behind websites that provide "Login with Google" or "Login with Facebook" buttons.

The diagram shows identity information flowing from left to right. For the sake of example, this could be authenticating with Google using a username, password, and push notification on a smartphone. After authenticating the user visits The New York Times' website and signs in. On sign in the user is prompted to 'Continue with Google'. The NY Times website is behaving in the role of SP **A** or **B** above and trusts the assertions provided Google's IdP. In turn, the NY Times website is likely made up of several backend services that need to know the end user's identity in order to function. Instead of each of those services individually trusting Google, they will trust an identity provider that the NY Times operates; this is IdP **A** or **B** in the diagram. Finally, the individual backend services are represented by the boxes SP **Set A** or **Set B**. In short, NY Times' backend services trust the NY Times' IdP which in turn trusts Google.

Everything about this work fine uni-directionally.

# What does it even mean to sign-out?

Logoff, sign-out, sign-off...single sign out???

> When I have signed off from an application I expect to no longer be able to use the application's functionality and expect to prove my identity again prior to being able to use that application again.

I _think_ this is intuitively what is in our heads as engineers when building applications that rely on knowing a person's identity. It is also weird in the context of SSO and users that access services from multiple devices.

## Devices

!["Login with multiple devices"](/images/2021-08-09/multiple-devices.svg "A user logs into multiple devices")

What was once a detail of implementation, how to reliably and safely track authentication status, has become something that determines the experience of using a service. Authentication is not really a matter of showing up and proving who I am to a service. It occurs on a device by device basis on my smartphone, my tablet, my laptop, etc. This is probably the category of experience that makes sense to users that grew up with it but to others seems annoying and strange. On the logoff side, is a user prevented from accessing functionality on all devices after log out or only some devices?

If I login separately everywhere should I get to sign out separately everywhere? Or, in other words, does logging out of an app on my tablet also log me out on my phone? Traditionally (and intuitively?) log out is separate, except for when it isn't. A great example of the exception to this are enterprise managed work accounts on iOS and Android smartphones. Managed accounts can be configured to globally force users to re-authenticate after certain critical operations like password change.

!["Logging out from devices"](/images/2021-08-09/multi-device-logout.svg "Logging out from devices")

The component of single logout is about user experience. Many applications today default to separate log out across devices because of the typical implementation of tracking authentication status. There are government defined compliance standards and
commercially reasonably standards where it may make sense logout a user everywhere after logout from a single location.

## SSO

Back to trust relationships, during authentication identity asserts flow in one direction based on trust relationships between IdPs and SPs.

In this context what does it mean for the user to sign out of an application? It depends on the relation of the SP to the IdP and whether the system's implemented wanted _single_ sign out to occur (or not).

!["SSO and SLO dataflows"](/images/2021-08-09/slo-flow.svg "Sign-in creates assertions, sign-out are requests")

Let's suppose my services are Twitch now instead of NY Times. When someone logs out I have an interest in ensuring that he or she is fully logged out in order to prevent account abuse. Otherwise, Twitch trust relationships are largely the same. Twitch likely has many backend SPs that need the user's identity, Twitch has their own intermediary IdP, and Twitch users can, optionally, use a Facebook account to authenticate. 

On the logout side something odd happens. The user logs out of the Twitch application (exemplified by SP **Set B** again) which in turn requests that the Twitch identity provider log the user out (IdP **B**). If the user directly authenticated with Twitch then the process is done and the goal of preventing access until re-authentication occurs is achieved. If the user authenticated with Facebook then a couple different things we can happen,

1. Nothing, the is logged out of _Twitch_ a this point. That the user might be able to immediately regain access if they are still logged into Facebook does not detract from this fact.
1. The Twitch IdP, IdP **B**, can redirect to Facebook (IdP **Q** in our example) and request that the user log out there. It is between Facebook and the end user if logout occurs at this point, Twitch has no control over this. If logout does not occur then the overall system matches #1 where the user can potentially immediately regain access without re-authenticating.



what's the problem?
what to do about it?