+++
author = "Michael Hughes"
categories = ["uncategorized"]
date = "2013-04-21"
description = "Talks about different software engineering priorities in different contexts"
menu = ""
tags = ["design", "philosophy", "fun"]
title = " Engineering Priorities"

+++

A short post on the priorities of hobby projects, 1st draft projects, final production grade applications.

As per the post tag the below is only 1/4 serious and 3/4 for fun.

Hobby / 1st drafts:

1.  Novelty (Can I use this new shiny thing?)
2.  Performance (Can I make this new shiny thing go faster too??)
3.  Reliability (Oh yeah--it fails sometimes, but I just restart it.)
4.  Correctness (Wait you mean it was supposed to solve problem X and
    **not** problem Y???)

As in: *I want to try something new that's fast, usually works, and
normally returns me the right thing (for what I thought I was solving).*

A serious hobby application might look like the following:

1.  Correctness (My problem is solved!)
2.  Performance (Pretty fast too!)
3.  Novelty (I used this nifty new Python module)
4.  Reliability (It may only work on my desktop computer at home though)

As in: *I fixed my personal problem with this specific solution that
works pretty well--if you deviate even slightly outside my requirements
it will probably break.*

Final Production Grade:

1.  Correctness (Our sales force is better leveraged--sales went up 15%)
2.  Reliability (The app is important to business sales, give me 99%
    uptime--that's \~3.65 days / year of downtime by the way)
3.  Performance (It needs to go just fast enough to get the job done)
4.  Novelty (Your platform choices are Java 1.6, JBoss 6, Spring 3.1.0,
    and Hibernate 4--wait did we say 'choices'?)

Obviously not all applications follow this pattern. There are many hobby
applications that evolve into production grade applications used by
enterprises (the linux kernel for example). Similarly there are
production applications that value performance over reliability, witness
some of the issues in the last couple years with high frequency trading
software.