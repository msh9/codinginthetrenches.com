+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "Some light arithmetic demonstrating EV efficiency and updating a post from last year about the same"
author = "Michael Hughes"
date = 2025-07-09
title = "EV Energy Cost and Consumption Part II: An update"
[params]
    math = true
+++

An update to a prior post about electric car efficiency using my relatively inefficient EV, a 2022 Audi Etron, as an example. We'll include some up to date numbers and discuss DC fast charging prices as of July, 2025 (spoiler: fast charging is, indeed, expensive). See the prior post [here for more context]({{<ref "2024-04-04-evs">}}) 

<!--more-->

For the rest of this post, I will make three assumptions to simplify the math. The net effect of these assumptions is to make the numbers for EVs look worse than they are in reality.

1. My power utility uses tiered billing. For simplicity sake, I'm going to use the most expensive tier we regularly hit. This is their 'summer block 2' at ~0.1197 cents per kwh.
2. I'm going to compute DC fast charging costs using Electrify America's (EA) *discounted* rate for the most expensive charge we had on a recent trip. EA's discount membership currently costs $7/mo, is a month to month subscription, and discounts the regular charge rate. It's worth paying for even on a single road trip. Regardless, this means we'll use 0.48 cents per kwh.
3. For comparison sake we'll use **premium** grade gasoline prices from a couple places, one, Utah because I live here, and two, Texas because fuel on average is cheap there and lots of people live in that state. We'll use premium grade prices for the most direct comparison to my particular EV, more on that below. AAA claims the current average at time of writing for Utah is $3.824 per gallon and in Texas it is $3.627 per gallon. 

## The Update

Okay! First the high level averages based on our most recent driving.

$$
17559 miles \times {40.2 kWh \over 100 miles} \approx 7058 kWh
$$

We charge mostly at home, so we'll use our electricity rate to determine the cost,

$$
7058kWh \times {$0.1197 \over 1 kWH} \approx $844
$$

It's interesting to consider what we would have paid for gas during this time period. We purchased a 2022 model year Audi E-Tron. It does not have a direct gas equivalent, but it is roughly equivalent to the Audi Q7 45 in size. The base model Q7 45 engine is a turbocharged four cylinder engine with an EPA combined city/highway rating of 22 mpg (This is worse than when we did this last year!! It was previously 25 combined). Now we do some multiplication to get a total cost for all those miles that we drove,

$$
17559 miles \div {22 miles \over 1 gallon} = 17559 miles \times {1 gallon \over 22 miles} \approx 798 gallons
$$
Utah
$$
798 gallons \times {$3.824 \over 1 gallon} \approx $3051
$$
Texas
$$
798 gallons \times {$3.627 \over 1 gallon} \approx $2891
$$

[The prior post does some math to show that electric motors are more efficient at turning stored energy into motion.]({{<ref "2024-04-04-evs">}}). I will not repeat that here, but will comment its unclear to me why this has become a point of contention. As country we switched to diesel **electric** locomotives over 70 years ago because the efficiency and capability of electric motors were so great that it make sense to relegate the internal combustion engine to power generation. Hybrid cars deliver similar benefits. Pure EVs take this a setup further and deliver even better efficiency.

## DC Fast Charging is expensive

With that out of the way, let's discuss DC fast charging using services like Electrify America.

We recently took a road trip. For simplicity, we'll say that we drove ~745 miles each direction, 1490 miles roundtrip. On that trip we had an average power consumption of 40.175 kWh per 100 miles. Or,

$$
1490 miles \times {40.175 \over 100 miles} \approx 599 kWh
$$

We spent a bit on DC fast charging while on the trip,

$$
599 kWh \times {$0.48 \over 1 kWh} \approx $287
$$

What if did it in the hypothetical Audi Q7 45 instead? 

Utah
$$
1490 miles \times {1 gallon \over 22 miles} \times {$3.824 \over 1 gallon} \approx $258
$$
Texas
$$
1490 miles \times {1 gallon \over 22 miles} \times {$3.627 \over 1 gallon} \approx $246
$$

Ouch. Some more math for context, each gallon of gasoline is,

$$
1 gallons \times {120214 BTU \over 1 gallon} \times {1 kWh \over 3412 BTU} \approx 35 kWh
$$

We paid ~$30-$40 more for **~1787 kWh** less energy to go that distance.

## What if we bought a different car?

Let's use the Tesla Model X. The Model Y is more efficient, but the Model X is closer to the Etron and Q7 in terms of build finish and price, albeit also a more capable car too than the Etron. EPA range figures which claim 310 Wh per mile are, just like gas MPG ratings, optimistic. Instead we'll use some efficiency numbers I gathered and averaged from Reddit and Tesla forum posts, about 360 Wh per mile. That's better than the Audi Etron. If we drove the same trip using a Model X,

$$
1490 miles \times {360 Wh \over 1 mile} \approx 536 kWh
$$
$$
536 kWh \times {$0.48 \over 1 kWh} \approx $257
$$

Closer. It is a similar price to gas in Utah, but still more expensive than Texas. It's worth noting though, that this is a worst case comparison for EVs for a couple reasons. We used the, likely optimistic, EPA MPG rating for the Audi Q7 45 gas car. We could have picked the Model Y, a more modern and efficient Tesla, in the same class. And, finally, the Tesla Supercharger network is bit cheaper on average than Electrify America.

Regardless, the Audi Etron is still cheaper to operate overall because we do most of our charging at home in addition to EVs not requiring as much regular service as gas cars.

## Some take aways?

- The Etron continues to maintain the same efficiency it had last year. Not a surprise.
- The Etron remains a relatively inefficient EV. I picked the Model X for comparison, but other modern EVs like the Cadillac Lyriq and Mercedes-Benz EQE/EQS will likely also demonstrate better numbers.
- Owning an EV and charging it *at home* is much cheaper to operate than a gas car.
- Despite paying **significantly** more per kWh unit of energy, DC fast charging still net outs to be within ~15% of the cost of doing a road trip with a gas car.

And the real final take away? It's 2025. The real reasons to consider buying an EV are things like quiet and comfortable ride, not having to bother with gas stations as part of a regular commute, and less trips to the service shop. I'm just a nerd that likes numbers and lower operating costs is a bonus.