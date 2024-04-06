+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "Some light arithmetic demonstrating EV efficiency"
author = "Michael Hughes"
date = 2024-04-04
title = "EV Energy Cost and Consumption"
[params]
    math = true
+++

I want to run some numbers on the energy used by our electric car that we purchased nearly two years ago. We'll compare that to a roughly equivalent gasoline car. This is an interesting exercise because we bought what is considered a relatively inefficient EV. Let's do some light arithmetic.

<!--more-->

Let's take the higher of the two rates from my most recent electric utility bill, ~$0.1/kWh. We purchased our EV in July 2022 and we've since driven 9520 miles with an average consumption over that entire period of 42.3 kWh/100 mi. Based on average consumption that means we used,

$$
9520 miles \times {42.3 kWh \over 100 miles} \approx 4027 kWh
$$

We charge mostly at home, so we'll use our electricity rate to determine the cost,

$$
4027kWh \times {$0.1 \over 1 kWH} = $402.70
$$

It's interesting to consider what we would have paid for gas during this time period. We purchased a 2022 model year Audi E-Tron. It does not have a direct gasoline equivalent, but it is roughly equivalent to the Audi Q7 in size. The base model Q7 engine is a turbocharged four cylinder engine with an EPA combined city/highway rating of 25 mpg. Gas prices vary over time dramatically, so like we did for electricity rates, we'll just take the [AAA average price](https://gasprices.aaa.com/?state=UT) and use that for the sake of comparison. The Q7 expects premium so we'll use the highest rate of $4.322/g. Now we do some multiplication to get a total cost for all those miles that we drove,

$$
9520 miles \div {25 miles \over 1 gallon} = 9520 miles \times {1 gallon \over 25 miles} \approx 381 gallons
$$
$$
381 gallons \times {$4.322 \over 1 gallon} \approx $1647
$$

Not bad. One other conversion we can do for the sake of conversation,

$$
381 gallons \times {120214 BTU \over 1 gallon} \times {1 kWh \over 3412 BTU} \approx 13.424 MWh = 13424 kWh
$$

In other words, driving those 9520 miles using gasoline as our energy source would have used a little more than three times the energy. Incidentally, this is one of the reasons electric cars still emit fewer net emissions during their life even in US states, like my home state of Utah, where much of the electricity comes from burning coal. They are just that much more efficient at turning stored energy into movement.

Some minor references,

- [Specific gravity of conventional gasoline](https://tedb.ornl.gov/wp-content/uploads/2022/03/TEDB_Ed_40.pdf#page=205)
- [Thermal to Electricity conversion factor](https://www.eia.gov/totalenergy/data/monthly/pdf/sec12_7.pdf)