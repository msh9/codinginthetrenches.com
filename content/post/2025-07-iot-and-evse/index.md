+++
tags = ['nottechnology']
categories = ['personal']
description = "A story about IoT being customer hostile involving Enel Group, JuiceBox, and Voltie Group"
author = "Michael Hughes"
date = 2025-07-30
title = "Internet of annoyance and The 'JuiceBox'"
[params]
    math = false
+++

I have previously [written]({{<ref "2024-04-04-evs">}}) [about]({{<ref "2025-07-09-evs-update">}}) charging costs for an EV that we own. Today, we are going to learn a bit about how I charge the car at home. We bought a, at the time, Enel X JuiceBox 40 from Costco. The mobile app was pleasant enough to use at first, but the experience went downhill from there. Let's talk about why and annoyances with IoT.

<!--more-->

We bought a JuiceBox "charger" (more on the use of scare quotes in note 1 below) in 2022 in anticipation of buying an EV later in the year. It's like buying a crib before coming home from the hospital with the infant. Except not.

Regardless, the JuiceBox was available from Costco and came with an easy, app based, way of setting charging schedules and charge current. This is an internet of things device. IoT is not the hot new thing now, that's AI, but it is prevalent. I could put my LG clothes washer on my home network and start a wash load from my phone. I haven't and why is a story for another time. Like many other IoT devices, the JuiceBox gets connected to a wireless network with internet access and communicates with another piece of software, likely running in one of Google Cloud Platform, Amazon Web Services, or Microsoft Azure. At the time of our purchase this service was operated by Enel X ~~Way~~, a subsidiary of a large Italian energy firm, Enel Group.

The following are a series of reminders about why IoT can fail to live up to its connected and easy to use selling point.

#### Strike 1

Mid-way through 2022, 'Enel X' was merged with another service provider in Enel Group's portfolio of companies and renamed/launched/created/etc to 'Enel X Way' (press release: [Enel launches new global e-mobility business, Enel X Way](https://www.enelnorthamerica.com/about-us/newsroom/search-press/press/2022/06/enel-launches-global-e-mobility-business-enel-x-way)). While the corporate portfolio shuffling doesn't matter, the merge also resulted in a rebrand and relaunch of the app used to manage the JuiceBox with several changes that degraded previously available charge reports.

IoT integrated with a company's servers suffers from this, where the manufacturer can make significant functionality changes to the product post purchase. 

#### Strike 2

Despite a poor app relaunch, Enel X Way continued providing services until late 2024, when they abruptly announced that Enel X Way USA would cease to operate.

Enel X Way, or more accurately, Enel Group though performed this shutdown particularly ineptly. Enel X Way's former JuiceBox website, [Home \- Juicebox North America | Enel X Way USA](https://www.juiceboxnorthamerica.com/), as of today, August 1, 2025, proudly announces that device support will be maintained, reference [image](latest-enel-update-august-2025.avif). It does *not* show the original announcement from early October which instead announced the following ,

>* Residential charging hardware (JuiceBox) will maintain the physical operating ability to charge vehicles.  
>* All Enel X Way software will be discontinued. Commercial charging stations will lose functionality in the absence of software continuity.  
>* The Enel X Way App and all other Enel e-mobility apps in North America will be discontinued and removed from the App Store.  
>* Enel X Way customer support is no longer available, effective immediately. Any Enel X Way related questions and claims should be directed **in the coming days to the claims information page (available soon).**  
>* The decision to close Enel X Way USA, LLC and related impacts do not apply to Enel X Way customers in other countries outside of the U.S. and Canada.

reference link: [Juicebox North America | Enel X Way USA \- Creditor Claims Information](https://web.archive.org/web/20241004000624/http://juiceboxnorthamerica.com/) and reference [image](full-original-wayback-machine.avif)

In short, along with the company ceasing to operate, all backend services would be disabled thus breaking remote and mobile app functions for all commercial, residential (like mine), and utility integrations.   

A very short time after this was announced, the story changed,

>Enel X Way USA continues to engage with a third-party firm to manage the closure of the business on October 11, 2024. After further technical evaluation, the firm has entered into an agreement with the current provider to continue to operate the EV charging software in the US and Canada for an extended period. This interim measure will enable the firm to seek a long-term solution for the EV charging platform, with the ultimate goal of maintaining operational continuity for Enel X Way USA customers.

reference link: [Juicebox North America | Enel X Way USA \- Creditor Claims Information](https://web.archive.org/web/20241015061958/http://juiceboxnorthamerica.com/) and reference [image](original-update1-wayback-machine.avif)

The change from no support to continued operation of backend services suggests either the search for an interim provider was ongoing prior to shutdown notice or, perhaps, one was quickly found after commercial and/or utility customers complained to Enel X Way's parent company which still operates in the US.

#### Strike 3

A corporate liquidation firm held an auction at the end of October, 2024 to purchase the assets for the now defunct Enel X Way USA, among the things available for purchase was ,

>\- Transfer of Customer Management & Implement a new SaaS for Residential Customers (120,000 \+/- currently).
>
>\- Transfer of Customer Management & Implement a new SaaS for Commercial Customers (25,000 \+/- currently).

reference link: [Enel X Way USA \- EV Charger Liquidation — Liquid Asset Partners](https://liquidap.com/currentproject/juicebox) and reference [image](company-liquidation-listing.avif)

Interesting aside (1), that there were only 120k residential and 25k commercial units at time of sale indicates poor sales and extremely poor ROI as possibly the reason for Enel North America and Enel Group getting out of the commercial and residential charger business. Interesting aside (2), Enel Group's public filings towards the end of 2024 make much note about optimization of the business. Interesting aside (3) relegated to note 2 below.

Enel X Way's third and final update told us who won the auction. Voltie Group, LLC.

Voltie Group as a company is murky. They are a Florida registered corporation established in 2023, ([Detail by Entity Name](https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=Initial&searchNameOrder=VOLTIEGROUP%20P230000288670&aggregateId=domp-p23000028867-6ee5349e-aa7d-4677-8789-5f4ece661012&searchTerm=voltie&listNameOrder=VOLTIEGROUP%20P230000288670)). The company did not really do much of anything of note until 2024 where it agreed to provide charging equipment and services to another company, Mullen Automotive. The nature of this deal is strange and there is some form of relationship between Mullen Automotive, Voltie, and another firm, VIP Systems. Learning more here and forming an opinion is left as an exercise to the reader. Voltie Group shares little information about itself and only began operating the backend services for JuiceBox chargers earlier this year in 2025. 

#### What's next?

At that point, I was done with using 3rd party providers. For lack of evidence, Voltie Group did not give me the impression of a reliable company so I did not transition my JuiceBox to them. Instead I purchased a replacement control board and wifi module from the OpenEVSE project. The next post will be a brief about installing that and some wrap up thoughts.

Notes
1. The box on the wall, ie the JuiceBox 'charger', does not actually charge anything. The EV uses an onboard rectifier and charge controller to charge its battery when plugged into regular household power. The JuiceBox is more accurately described as supply equipment, EVSE for the extremely pedantic. In short, it's a box with an A/C contactor, hardware with embedded software that communicates with a connected EV, and optionally hardware & software enabling smart management of the supply equipment. It is ultimately, and most simply though, a switch.  
2. Enel Group is publicly traded in Europe, their investor relations documents are short on details, but the end of year 2024 [results presentation pdf](https://www.enel.com/content/dam/enel-com/documenti/investitori/informazioni-finanziarie/2024/trimestrali/fy-2024-risultati.pdf) has a few highlights. Notably a strong emphasis on cash and spend management and highlighting that Enel X was and has been for several years a net-money-losing business in North America.