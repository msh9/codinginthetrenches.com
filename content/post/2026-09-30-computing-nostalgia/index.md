+++
tags = ['nottechnology','philosophy']
categories = ['personal']
description = "Discussing privacy and ownership choices in software and media, and thinking how defaults for these have changed over time"
author = "Michael Hughes"
date = 2026-09-30
title = "A meandering walk of nostalgia and then three items of modern life to consider"
[params]
    math = false
+++

Modern life is supported by more complex processes than a single human can understand, from international logistics that let you buy pants made in Malaysia to chips made in Taiwan that power said recipe enhancing AI. Each of these complex systems creates choices that are sometimes obscure, but choices nonetheless about how we live.

<!--more-->

I am in my late 30s now, born in the late 80s, was a kid in the 90s, came of age (ish) in the 2000s, and then actually came of age in the 2010s. According to some fashionable models I am reaching the end of my time to "accept new ideas", or whatever that means. According to others it is time for me to have a crisis of some sort, midlife, masculinity, or other flavor of the day. Regardless, for various reasons I feel nostalgia for some things that *were* in my life but no longer *are*. Perhaps these reasons are boring, such as,

* Having kids  
* Pets passing away  
* Parents passing away

This essay is about technology though,

* AI-ification of my digital life for better (I can make more software myself) or worse (terrible Google search overviews and sloppy children focused videos on YouTube).  
* A supreme court decision affirming that location data handed to a third party is, in fact, subject to the 4th amendment.  
* Streaming media rugpulls

These are reasons for rose tinted thoughts about the 1990s and 2000s.

I was fortunate, I think, in terms of access to computers and related technology from an early age. We had multiple computers in the home in the 1990s. Buried in the corners of my memory are snippets of playing 'The Adventures of Captain Comic' and 'Commander Keen in Invasion of the Vorticons' on a hand-me-down computer. The expression, 'times were simpler then' applies; playing Captain Comic required turning the computer on and typing 'comic' on a command line. The game itself has, generously, five different keyboard inputs. A similar level of simplistic gameplay is present in many modern games; the sincerity of Captain Comic's developer offering his home phone number to those that paid for the shareware is certainly not.

# We've drifted a bit, now focus…
My memory of 'building' computers with dad was assembling parts like Lego bricks and, then aside from one or two dead on arrival components, having it immediately work. Soldering discrete components is a memory for folks older than I. Still–I loved to stare at components and imagine all the small integrated circuits and trace lines doing something. I even hacked together an Apple Macintosh in \~2004 from salvaged parts and (badly) wrote an essay about it. For the intrepid, I reposted it [here](https://michaelonrandom.com/articles/old-projects/build-a-mac/) 22 years later in its original glory. Incredibly, the site that I wrote it for, [Overclockers.com](http://Overclockers.com) is still around. Huge credit to my parents for indulging this project since I was a kid and they paid a few hundred dollars for salvaged Macintosh parts.

Windows 98SE and the much maligned Windows Millennium Edition (ME) also feature in these rosy memories. In particular, the [Microsoft Plus](https://en.wikipedia.org/wiki/Microsoft_Plus!#Microsoft_Plus!_98) content pack with the 'Mystery' and 'Leonardo Da Vinci' desktops were childhood fascinations. I can still hear the foot step and creak sounds included with the 'Mystery' desktop.

My experiences through the 90s and 2000s point to life being simpler and safer in some ways, but perhaps not in the manner that some might assume. Life was also more dangerous, more limited, and more expensive–paper maps for road navigation suck compared to freely available turn-by-turn directions from a phone and dedicated dashmount GPS units were comparatively expensive both then *and* now. I want to talk about, to be clear, small parts of these memories I wish could be plucked from history's rubbish bin and brought forward 20 plus years in time. 

## Inscrutable software and magic boxes.

Unfortunately computers have probably always been magic boxes to many but it *feels* like we have reached a new level of 'magic box' with the advent of language models with computer use training.

It's cool to have an agent that can monitor my email for me and auto-reply. The method by which this is accomplished is…bordering on magic. 

It's not of course–I have enough of a background in mathematics and computer science to understand the gist of machine learning. Even then it feels incredibly hard to inspect how the requested end result (email replies) is actually happening. In fairness, modern day-to-day computing has been this way for a while. Even the aforementioned Windows 98 was an incredibly complicated piece of software. 

Still having a discrete mail application that *I* use to write messages to other human beings feels more tractable to me than, say, asking Meta's Muse to tell my friend that "I'm running 10m late.". The former still uses complex software regardless of transport mode (email, SMS, RCS, iMessage, etc) but is relatively deterministic. The latter is probabilistic with an extremely high likelihood that it will do the right thing by interacting with some of the former components. More importantly though, will Meta let you (easily) see the series prompts and system messages executed to achieve the outcome? No, of course not. This probabilistic approach also requires a great deal of trust and access. Imagine the agent is your best buddy. Would you give your best buddy 24/7 access to read every message you receive and send messages for you? Maybe some of us would. I wouldn't, but that's just me.

I miss computing being less polished and more inspectable. It's important to be clear, I'm not advocating for a return to mid-90s computing. I am disappointed though that increasing system complexity has led to things like treating google AI search overviews like an [accurate oracle rather than what it's closer to, a search index summarization engine](https://arstechnica.com/google/2026/04/analysis-finds-google-ai-overviews-is-wrong-10-percent-of-the-time/) subject to web crawl bias. Or, in another example, complex software systems enable things like remote climate control in [cars and also happen to include location trackers](https://automatictransmission.khoury.northeastern.edu/) that push the car's and correspondingly your location to a wide array of third parties. I have no empirical psychological data to back this, but it really feels like the more inscrutable the computer, the more likely "we" are to trust it.

On a particularly egregious note regarding that email agent example–the contents of those emails are being carbon copied for training future models. There are ways to abate this concern with commercial API providers like Baseten and local models, however, with most of the consumer market being tools like Gemini and ChatGPT though that brings us to:

## By god is privacy harder to come by.

Consider, when is the last time you used a device (phone, tablet, laptop…) for any length of time without an internet connection? 

I do not mean to use an app with an *apparent lack of need* for the internet*.*There are many of those that *apparently* do not need network access, but will happily use network access on the device when available → See free-to-play mobile games.

I instead mean the underlying device had no network connectivity whatsoever.

The last time for me was using a standalone digital camera for photography. Coincidentally, I still had my phone with me which meant that Google location services were still periodically emitting data about where I was over a cellular network.

A safe assumption is that,

* Any brand name website and app like ChatGPT, Google (search, photos, gmail, etc), Microsoft 365, TikTok, Instagram, etc collect detailed telemetry on when, where, how it was used. At least in the US, apps tattletelling your every action is supposed to be a *caveat emptor* situation by way of terms of service and privacy policy acknowledgments.'Buyer beware' though is hard when most alternatives have similar lack of privacy.  
* Mobile applications attempt to gather as much as possible. While they range from benign (collecting just information about use of the app), many are data vacuums (Meta's apps and TikTok) that attempt to gather as much information about the end user as possible.


If you happen to carry a phone with you, the result is that one of Apple or Google has a reasonably high chance of having recent location data. Potentially many others, such as Meta, do as well. The Supreme Court's recent decision on the 4th amendment applying to 3rd party hosted location data is important for this reason.

Maybe this is fine? Maybe not. 

The point of my nostalgia is the **unknowing** shift from privacy by default to sharing by default. Long privacy disclosures written by legal teams are not an excuse for this shift. More simply, it's nice that I can trivially share my exact location with my partner, it's less nice that the same location is also available to other parties that I don't know personally.

## Ownership of media licenses

On the theme of online services that track every interaction…

Streaming music, TV, and movies are amazing with clear benefits for consumers and producers (except for companies of physical media, they lose out here, but that's OK). Want to watch your favorite, obscure, film at 3am in the morning at a hotel? Streaming from your service provider of choice has you covered.

Unless, of course, your service provider is in a licensing dispute with the owner of said movie. In which case, you cannot watch said movie at 3am in the morning at a hotel.

The average consumer never owned a commercially produced movie or song, even when purchased on physical media. The VHS tape, DVD, Bluray, or CD were a physical embodiment of a license grant to enjoy that media at home. True legal ownership would imply the authority to distribute copies; something that the FBI (or more realistically, the motion picture association of america) take care to inform that is *not* *a right you have*.

Regardless, owning a physical license grant has some distinct benefits over a digital license. Notably, it cannot be rug-pulled because your streaming platform of choice opted to not renew a contract with a Hollywood studio. Similarly, it is legal to make a backup of physical media for personal use. Something that streaming providers go to great lengths to prevent. 

Similarly, loaning your license of an item to another used to be a thing. Remember, the physical object is the license, no copies being made, just a different person using the license. Or what about reselling the item? For a time, part of Gamestop's core business model was reselling used console games. I am not aware of any streaming providers that have a 'resell' button.

The core issue here is that a physical object that is also a license, like a game disc, BluRay, etc is subject to the Uniform Commercial Code (UCC) in the US. Generally, this means that I can resell something once done with it.

The consumer voted with their wallet for where we are today with digital media. I think these votes though were cast based on the benefits (obscure film at a hotel at 3am) being clear while the issues (losing your entire music catalog because the provider went out of business) were obfuscated or not discussed. I'm also not blind here to the fact that \~\$20/month for a huge range of entertainment options is still a deal most would take even with a full discussion of the potential downsides.

I am most decidedly not nostalgic for VHS tapes; they are far inferior to a streamed 4K movie. I am nostalgic for a greater degree of control over media, grumpy about the general rent senking behavior of large media associations, and grumpy that, similarly to privacy, we made a choice without really understanding the underlying tradeoffs.

# THE FUTURE.

Honeywell ran an [advertisement in 1969](https://en.wikipedia.org/wiki/Honeywell_316#Kitchen_Computer) about a computer with a binary display being a handy kitchen companion. 57 years later, in 2026, we seem to have turned patronizing advertising fantasy into reality. We aren't living in cool spinning space colonies, but we can ask a computer for help with ingredient substitutions in the dry-rub for weeknight steak-n-potatos. I personally do this semi-regularly. It's cool and helpful, but not nearly as cool as space colonies. 

Our predictions for the future have a habit of being wrong because the most impactful things yet to come are the things we do not yet know. The mad advertisers that put together that Honeywell ad probably did not anticipate that we'd be talking via small glass tablets to generative AI running on remote servers over wireless networks (although the SciFi of the 80s, 10 years later, did start to anticipate such things). For most of us, in the US at least, modern life is supported by more complex processes than a single human can understand, from international logistics that let you buy pants made in Malaysia to chips made in Taiwan that power said recipe enhancing AI. Each of these complex systems creates choices that are sometimes obscure, but choices nonetheless about how we live. If the above things bother you then consider the following:

* If you really like a piece of media, try to get or create a physical version of it. It's not always possible, but when it is, try it. It will have a much greater degree of permanence in your life. This applies both to music you buy and printing photos you take.  
* Be a human when talking to another human. Let robots talk to robots. Companies that have turned their customer service into chatbots and voice driven automated call trees deserve nothing more than having your own personal robot (read: agent) handle interactions. But–if the other end of the line, email, message, chat interface, etc is a real human then be a human yourself.  
* If you really, really, want to keep something private be prepared to pay money for the privacy.  
* If you like something, be prepared to pay for it. Dumb, I know. 'Freemium' is a popular business model because while 'free' sometimes means 'free', often it just means 'the consumer pays in ways other than cash'.   
  * Alternatively, if you really like something, try building a tiny version of it. Like reading? Try writing. Like cooking? Try growing an herb or two. Like energy drinks? Try making your own simple syrups. Like using an agent like Meta Muse? Try building one (no, really, there are many guides on the internet).