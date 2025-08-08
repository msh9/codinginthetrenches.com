+++
tags = ['nottechnology']
categories = ['personal']
description = "Changing the wifi module and control board in a juicebox evse to use a openevse control board"
author = "Michael Hughes"
date = 2025-08-08
title = "JuiceBox and an OpenEVSE control board"
[params]
    math = false
+++

This is the follow up to [the prior post on a terrible internet of things experience with the JuiceBox](/post/2025-07-iot-and-evse "JuiceBox and Internet of Annoyance"). I got annoyed by Enel Group's business decisions. Instead of buying a new EVSE, I bought a new control board for my JuiceBox made by the folks at the OpenEVSE project.

<!-- more -->

The [OpenEVSE project](https://www.openevse.com/) started work on a replacement control board for the Enel X JuiceBox shortly after Enel Group started making business decisions that would leave customers without recourse. The board is available for sale [here](https://store.openevse.com/collections/all-products/products/replacement-electronics-for-juicebox-v2-plastic-grey-and-white) and costs less than a quality, complete, new EVSE.

Why not just buy a Grizz-E? Because I don't have to.

This is not an install guide, there is already one on the [OpenEVSE wiki](https://openevse.dozuki.com/Guide/Replace+Controller+in+Juicebox+v2/53?lang=en). The following is a few comments on the contents of the JuiceBox and what OpenEVSE does correctly.

## New control board

Two unordered thoughts,
* The OpenEVSE control board has far fewer components than the original. Some of this could be due to increased use of microcontrollers and integrated circuits; I am guessing on the topic though. The original Enel X North America board has two DC power supplies whereas the OpenEVSE only has one. Regardless, I am not an electrical engineer by trade, but found the contrast interesting.
* The original contactor switch, which provides A/C power to the car, remains the same.

Before

{{<figure src="before.avif" caption="Original control board and contactor" alt="Original Enel X Way Control Board inside of JuiceBox">}}

After

{{<figure src="after.avif" caption="New OpenEVSE control board and original contactor" alt="Replaced OpenEVSE control board and wifi module inside of JuiceBox">}}

## The control interface

More unordered thoughts,

* Enel X (Way) had, depending on time, three different mobile applications with varying feature sets. Generally, they performed poorer with each successive release.
* OpenEVSE by nature is a self-hosted system. The control board has, somewhere on it, a microcontroller of some flavor with a HTTP server. The feature set is just as complete as Enel X Way's mobile app feature set, save for the lack of ability to access when outside of my home's local network. In other words, I cannot dynamically adjust my charge schedule while I am out of the house. I am unbothered by this limitation.
* OpenEVSE has the ability to integrate with other software and systems via MQTT, HTTP, and other integrations.

{{<figure src="openevse-screenshot.avif" caption="The OpenEVSE locally hosted interface" alt="The OpenEVSE locally hosted interface">}}

## Just a local thing instead of an internet of thing

* Mobile apps as control interfaces are a wonderful thing. Android and iOS are ubiquitous and enable easy touch friendly control of everything from EVSE, to home automation (lights, switches, blinds, and much more), to entertainment (like televisions), to apparently even clothes washers. 
* Unfortunately, in many cases this ties the ability to interact with, sometimes expensive, physical objects to the whims of companies that sometimes make decisions which are unaligned with consumer interest. Sonos' ongoing challenges in 2024 and 2025 are an example of this.
* None of this advocates for "no IOT". The advice of this and the prior post is to carefully consider when being able to quickly and easily remotely control something is valuable. If a little bit of convenience comes with big headaches, perhaps it's not really worth it (I'm looking at you IoT garage door openers, refrigerators, clothes washers, humidifiers, baby monitors, and more).

That's all folks.