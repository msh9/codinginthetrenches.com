+++
tags = ["design", "philosophy"]
categories = ["Software Design"]
description = "User inactivity and forced logout in single-sign-on scenarios"
author = "Michael Hughes"
date = "2021-01-02"
title = "User inactivity and forced logout in single-sign-on scenarios" 
+++

A couple incomplete thoughts and questions for those that need to automatically log end users out of web applications.

<!--more-->

# Session

The word session is overloaded. Adding some qualifiers to the term will help disambiguate the following discussion,
-	Authentication Server: A service that a user may use to identify themselves.
-	Authentication session: A user with an authentication session has previously authenticated via password, FIDO2, etc. with an authentication server and can acquire tokens indicating that they have done so.
-	Application: A service and user interface that does something valuable for an end user and requires that the user has an existing authentication session.
-	Application session: A user with an application session usually has (but not always) an authentication session and has a relationship with a particular user facing application.

In fully integrated monolithic applications, the distinction between these two session types is minimal: they are often the same. See security frameworks included in ASP.net and Spring for examples of this. 

The distinction between session types becomes important in multi-application single-sign-on architectures. For example,
!["Session Diagram"](/images/2021-01-02/on-sessions.svg "A diagram depicting multiple applications")

In the above, the user has one authentication session and three different application sessions, for a total of four sessions.

# Inactivity Difficulties

Online banking is a commonly encountered example of inactivity timeouts. The user is forcibly logged out after a predetermined period where no application activity has occurred. For this to work the product needs a precise definition of ‘activity’ (ex: does mouse movement count or does the user need to click on things?) 
Given a precise definition of ‘activity’, inactivity timeouts are straightforward to implement in a monolithic application. The authentication session and the application session are frequently tied together and ending the user’s relationship with the application is equivalent to, and easily achieved, by ending the user’s relationship with the authentication server.

It is less clear what ‘activity’ means and what happens due to inactivity in the multi-application scenario. For illustrative purposes take a user that has a web browser with two tabs open and has authenticated with our example system above. One tab contains ‘application 1’ and the other tab contains ‘application 3’. In this scenario our user has up to three possible sessions, one of which controls whether they are authenticated and therefore authorized to use the applications.

Some design questions and comments that arise in this scenario,
-	If our primary method of making an application inaccessible after timeout is logout then every application participating in single-sign-on will become inaccessible after the most restrictive application’s activity timer has expired.
-	Do applications share an activity timer? In other words, if the user has two applications open, but only interacts with one, does the other expire and force a logout?
-	Which system has the primary responsibility of tracking user activity?
-	What happens if the design of the authentication server relies on bearer-type tokens, such as JsonWebTokens, where the holder of the token retains authenticated status until token expiry regardless of the state of the authentication session?
-	How can a single page application that runs in the user’s browser reliably force that client to start a logout process when an activity timer expires?

# Thoughts, not answers

Anyone looking for a single solution to these questions will be disappointed. The system design for how to solve this will be significantly impacted by the desired end user experience, regulatory compliance needs, and the current system implementation. 

My thoughts on how to approach this are influenced by work in a more heavily regulated environment.
1)	Logout and revocation of the user’s authentication session is used to centrally remove the user’s access to applications at the end of any inactivity timer.
2)	Bearer tokens, such as JWTs, are an acceptable implementation in this environment but must be combined with mitigating factors to ensure compliance with inactivity limits. Examples of mitigating factors include strict requirements to validate the bearer tokens frequently with authentication server or issuing the tokens with time to live values that are smaller than the smallest common inactivity limit.
3)	Activity must be centrally tracked server side. The does not imply that the implementation must be entirely centralized. It does mean that there is a single authoritative last active time store for all applications participating in single-sign-on. The last active time for the user could be qualified by application or other dimensions, but it must be stored centrally for consistent decisions to be made about when to force a user logout.
4)	The best way to uniformly track user activity is by monitoring client to backend API traffic. This assumes that calls are typically make with the user’s credentials, perhaps a bearer token, instead of on-behalf of a user. Call tracking is an easy place for a service like that mentioned in (3) to gather last active times. Call tracking does require individual applications, such as single page web applications, to implement their own interpretation of activity and periodically emit network calls if no other traffic is taking place.
5)	A user’s inactivity timer is determined by the most restrictive application they have opened and are using since the current authentication session was established.
6)	Certain applications could be partially exempted from activity timeout by granting the user tokens with extended time to live values. The tokens would need to be valid for those applications only.

# Conclusions

My personal experience has been that implementing inactivity timeout in complex environments requires both teams building the authentication experience and applications to participate in the solution. There is no silver bullet that the authentication server or application teams can create to provide a consistent user experience.

Finally, it is useful to look at what the rest of the industry does to solve these problems. Current major players like Okta and Auth0 offer solutions in this space. Both services offer APIs to manage the authentication session (Auth0 occasionally calls this concept the “SSO Session” in their documents). Inactivity timeout in both is handled by logging the user out. Applications teams participating in Okta or Auth0 single-sign-on ecosystems need to implement short bearer token timeouts and use the provided APIs to clear the user’s authentication session as appropriate.
