+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "Some light arithmetic demonstrating EV efficiency and updating a post from last year and this year about the same"
author = "Michael Hughes"
date = 2025-12-03
title = "EV Energy Cost and Consumption Part III: More updates"
[params]
    math = true
+++

An update to a prior post about electric car efficiency using my relatively inefficient EV, a 2022 Audi Etron. We'll include further updated numbers and discuss DC fast charging prices as of November, 2025. See the prior post [here]({{<ref "2024-04-04-evs">}}) and [here]({{<ref "2025-07-09-evs-update">}}) for more context.

<!--more-->

For the rest of this post, I will make three assumptions to simplify the math. The net effect of these assumptions is to make the numbers for EVs look worse than they are in reality.

1. My power utility uses tiered billing. For simplicity sake, I'm going to use the most expensive tier we regularly hit. This is their 'summer block 2' at ~0.1197 cents per kWh.
2. I'm going to compute DC fast charging costs using Tesla's supercharger discounted membership price because we have a NACS adaptor and can use Tesla superchargers now with the Etron. Supercharge prices vary by location and time of day so I'm going to pick one of the higher rates we saw and use that, 0.36 cents per kWh
3. For comparison we'll use premium grade gasoline prices from a couple places, one, Utah because I live here, and two, Colorado because this post is based on a road trip we took there. AAA claims the current average at time of writing for Utah is $3.568 per gallon and in Colorado it is $3.316 per gallon. **Aside**: AAA has average cost per kWh EV charging costs now too. I did not use it because it did not reflect our real experience.

## The Update

Okay! First the high level averages based on our most recent driving.

$$
21383.25 miles \times {40.23 kWh \over 100 miles} \approx 8602 kWh
$$

We charge mostly at home, so we'll use our electricity rate to determine the cost,

$$
7058kWh \times {$0.1197 \over 1 kWh} \approx $1030
$$

It's interesting to consider what we would have paid for gas during this time period. We purchased a 2022 model year Audi ETron. It does not have a direct gas equivalent, but it is roughly equivalent to the Audi Q7 45 in size. The base model Q7 45 engine is a turbocharged four cylinder engine with an EPA combined city/highway rating of 22 mpg. Now we do some multiplication to get a total cost for all those miles that we drove,

$$
21383.25 miles \div {22 miles \over 1 gallon} = \approx 972 gallons
$$

Utah
$$
972 gallons \times {$3.568 \over 1 gallon} \approx $3468
$$

Colorado 
$$
972 gallons \times {$3.316 \over 1 gallon} \approx $3223
$$

## DC Fast Charging is expensive?

With that out of the way, let's discuss DC fast charging during a road trip.

We recently took a road trip to Denver from northern Utah. In one direction we drove on US-40, then US-9, and joined I-70 to cross the Colorado Front Range for a total of 491 miles. In the other direction we took I-70 to US-6 and then I-15. On the return trip, we split the drive into two days covering 353 miles the first day and 180 miles the second day. The three days of driving all had different energy consumption averages, \\(33.34 kWh \over 100 miles\\), \\(40.23 kWh \over 100 miles \\), and \\(39.11 kWh \over 100 miles \\) respectively.

$$
\begin{align}
491 miles \times {33.34 kWh \over 100 miles} \approx 164 kWh\\
353 miles \times {40.23 kWh \over 100 miles} \approx 142 kWh\\
180 miles \times {39.11 kWh \over 100 miles} \approx 70 kWh
\end{align}
$$

There is an interesting aside here, the single-day 491 mile trip to Denver used ~82% of the energy used on the return trip. I don't have the exact reasons for this other than (1) the average speed was ~7 MPH slower and (2) the return trip experienced colder weather. It is also worth noting that internal combustion engine driven cars experience similar kinds of speed and weather driven efficiency variances. 

Moving on, using the Tesla supercharge rate, how much did we spend on fast charging? 
$$
376 kWh \times {$0.36 \over 1 kWh} \approx $135
$$

What if did it in the hypothetical Audi Q7 45 instead? 

Utah
$$
1024 miles \times {1 gallon \over 22 miles} \times {$3.568 \over 1 gallon} \approx $166
$$

Colorado
$$
1024 miles \times {1 gallon \over 22 miles} \times {$3.316 \over 1 gallon} \approx $154
$$

A reversal from our [July travel experience]({{<ref "2025-07-09-evs-update">}}). We experienced both slightly better vehicle efficiency (interesting in its own right since usually EVs perform worse in winter) and cheaper DC fast charging rates. 

## Some take aways?

- The Etron continues to maintain the same efficiency it had last year. Its relative cold weather performance was good.
- DC Fast Charging remained within 20% of the cost of an equivalent gas driven car (more expensive in July, cheaper now)

I'm probably done writing these update posts as there is nothing more to add regarding the Etron. 