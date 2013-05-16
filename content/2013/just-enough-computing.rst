---
title: Just enough computing
date: 12.05.2013
author: Michael Hughes
tags: [Web Services,Tips,Philosophy]
---

Summary
    The history of end user computing appears to consist mostly of a 
    slow push of more and more computing power out to end users. Even
    a modestly old desktop can run circles around the workstations of
    the 1980s. At this point is all that power really needed? The point
    of this post is to discuss past (and maybe a near future?) ways that
    desktop users could get along without even a laptop.

A collegue of mine recently replaced his work laptop with a `Lenovo Tablet 2` plus
a variety of cloud services. I've seen non-technical
users replace laptops with Windows tablets previous, but my collegue still does his
fair share of software development. My collegue's approach has been to combine his
tablet with `AWS EC2` instances for development, `Dropbox` for file sharing, and `Office365`
for document editing and management.

The thing that intrigues me the most and prompted this post is the approach of using EC2
instances as development hosts. If he needs to do Windows based .Net development his
spins up a prepared Windows Server instance from a previously created `AMI.` Similarly he
has prepared AMIs for Linux and Java development. When not actively developing in a
particular enviornment that instances are shutdown to reduce costs. My collegue's tablet
acts as essentially a 'smart' terminal--he could and sometimes does tasks locally on the
tablet's hardware, but otherwise uses it as an access device to other more powerful systems.

The idea of giving users a `terminal that access a remote system is not exactly new.` In the
last 40 years we've see computing start out on `large centralized systems` and then `slowly`, but
`surely` spread out to `end users.` There have been other, recent attempts at giving users
access to a terminal only, but they `have not been particularly successful.`
