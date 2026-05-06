+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "Instagram personal finance slop."
author = "Michael Hughes"
date = 2026-05-01
title = "A short analysis of some personal finance slop."
[params]
    math = false
+++

Some slop on instagram recommended using your kid's 529 to pay rent on a mortgaged house. *Sigh...*

<!--more-->

It is particularly frustrating that it took me way longer with a spreadsheet to determine how bad of an idea this was than it took whoever is behind the account to make the instagram post.

Here's a screenshot with the gist of the scheme:
{{<figure src="screenshot2.avif"  caption="Source: Instagram, someone claiming to be a CPA." alt="An instagram screenshot of post recommending use of 529 distributions to pay rent to pay a mortgage.">}}

I blanked out the account because the account doesn't really matter. They claim to be a CPA; they might be a CPA, they might not. It's not like Meta checks people's state licenses. Regardless, the specific account does not matter, Instagram, TikTok, etc are rife with this kind of advice content. Some finance content on the platform is good, some of it is just advertising to get your attention. This recommendation falls into the latter category.

{{<figure src="screenshot1.avif"  caption="Source: Instagram, someone claiming to be a CPA." alt="An instagram screenshot of post recommending use of 529 distributions to pay rent to pay a mortgage.">}}

This account helpfully gives a abbreviated funds flow. Here's some other screenshots from the ~~advice~~ advertisement, hereafter referred to as 'the scheme'.

{{<figure src="screenshot4.avif"  caption="Source: Instagram, someone claiming to be a CPA." alt="An instagram screenshot of post recommending use of 529 distributions to pay rent to pay a mortgage.">}}
{{<figure src="screenshot5.avif"  caption="Source: Instagram, someone claiming to be a CPA." alt="An instagram screenshot of post recommending use of 529 distributions to pay rent to pay a mortgage.">}}
{{<figure src="screenshot6.avif"  caption="Source: Instagram, someone claiming to be a CPA." alt="An instagram screenshot of post recommending use of 529 distributions to pay rent to pay a mortgage.">}}

To summarize,

- It's implied that "wealthy parents" do this, so you should too, perhaps, by paying for this CPA's services.
- Getting 'equity' in an 'appreciating asset' is the point of this--we're going to assume this is referring to a property of some type near a university campus.
- The 529 distributions will pay for the mortgage

## The conclusion of our analysis, upfront.

This post is really just an advertisement appealing to the same crowd that believes that using small down payment mortgage loans to buy real estate is the key way to get rich. That's it. Everything else is just window dressing. The rest of this post uses a lot of words show why. Here's a table from the conclusion below,

#### Rate of return without renters, just the child
| Location                           |   |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|---|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |   |                               33.95% |            -182.41% |           -206.04% |
| Stanford University (San Jose, CA) |   |                               32.99% |            -188.21% |           -208.37% |
| UW, Seattle (Seattle, WA)          |   |                               36.65% |             -41.07% |           -197.69% |

#### Rate of return with renters
| Location                           |   |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|---|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |   |                               42.96% |               5.02% |            -20.54% |
| Stanford University (San Jose, CA) |   |                               43.79% |               7.77% |            -13.19% |
| UW, Seattle (Seattle, WA)          |   |                               45.39% |              12.52% |             -3.36% |

Note that the median nominal return of the S&P500 index over time is ~10%. 

This scheme only generates significant returns when the housing market also appreciates at a significant rate. Intuitively this makes sense because viewed as an investment this is making a leveraged bet on a particular geographic market. The leverage, i.e. the mortgage loan, magnifies the underlying asset's gains **and** losses. Additionally, betting on a single market or asset can result in significant gains and losses over a given time period that deviate from the national average.

Regardless, if the tables were tl;dr then here's the summary for the parents out there,
1. Don't buy a property because you have an over funded 529. The allowed room & board distributions will never cover a mortgage payment and never be enough to make the ROI positive on its own. This is visible in the above table where, with a single exception, the ROI is only positive and above the S&P500 when the housing market is experiencing annual growth as well.
2. If you want to do real estate investing. Great. Analyze it as a business with appropriate projected return on investment / return on capital calculations. If your child's 529 just so happens to fit into that plan great, but its not going to make a lot of difference either way. 
3. Recognize that it is ultimately all your money anyway, even the funding of 529. Consider that there are other options like UGMA/UTMAs in addition to 529s, annual gifting to your child, and changing the over funded 529 beneficiary, etc etc.

Now on to the gory details...

## Funds flow

The post's funds flow is incomplete. This is the complete picture including things that the post does not address or conveniently ignores.

{{<figure src="2026-05-01-garbage-tax-hack-overtime-funds-flow.svg"  caption="Somebody has to fund the 529 account and purchase the property in the first place." alt="A diagram showing that funds all come from the parent.">}}

The instagram post breezily suggests that parents purchase a house nearby campus and use the money in the 529, which they were already going to use. The post skips over that the source of funding for the proposed property purchase is ultimately always the parents--that is, unless the 529 is being funding by an outside source, say, *even wealthier* grandparents, but now we are well into hypotheticals.

The above over time cash flow diagram demonstrate additional key requirement for the proposed scheme to work. The parents must, 

1. Be able to fund a large 529 for this to work. We look at examples below to see how much.
2. Have the cash on-hand for a down payment on a property and have sufficient wealth such that a bank will approve the loan. Note well this may be considered a loan for business purposes since the property is being expressly purchased to rent out. Since the house is being used as a Schedule E business rental, however, the parents might be able to deduct loan interest against rental income. There's that at least.
  1. The keeping the money 'inside the family' comment falls apart here because this scheme involves paying interest to a third party financial institution. An alternative would be an intra-family mortgage loan from the parents to the child, but now we are stacking turtles and outside the scope of the instagram post.

## Actually buying a house

The implications of funding sources above are significant; let's take three examples of places where a "wealthy parent's" child might go to university,

| School | Cost of housing near campus (Source: Redfin) | Approximate bedrooms for price | Published 2026 Annual Room & Board cost | Approximate Fair Market Monthly Rental Cost (Apartments.com) | 
| --- | --- | --- | --- | --- |
| Duke University (Durham, NC) | 3 | $750000 | $10910 | $1500 |
| Stanford University (San Jose, CA) | 3 | $2000000 | $22944 | $2900 |
| University of Washington (Seattle, WA) | 3 | $800000 | $18858 | $1500 |


> Stanford is in one of the most expensive areas in the country, sandwiched between San Jose and San Francisco. Despite the shortage of housing in the area there are still (multimillion dollar) apartments that can be purchased. 
> For a variety of reasons this area of California has historically built very little new or redeveloped housing despite population growth, take from that what you will. 

Continuing, let's make some assumptions that are the most favorable to this scheme,

1. The parents can get a favorably priced ARM mortgage with only 10% down. We use a 5/1 ARM with a 30 year amortization in order to get the lowest interest rate possible.
2. The parents pay an initial interest rate of **4.875%** because, again, they are wealthy and have access to financial products from multiple service providers.
3. For simplicity, we'll use 5 years as our benchmark for the rest of this post. In other words, the hypothetical child is a student for five years.

| School | Down payment | Monthly Loan Cost for ARM (Google Sheets' `PMT` function) | Parents "out of pocket" with 1 renter | # of break even renters |
| --- | --- | --- | --- | --- |
| Duke University | $75000 | $3572 | $1969 | 2 (3 total) |
| Stanford University | $200000 | $9525 | $6187 | 3 (4 total) |
| University of Washington | $80000 | $3810 | $2089 | 2 (3 total) |

> The above assumes that in Seattle the child pays $1571/mo in rent even though my rough market rent rate for Seattle is $1500/mo. These numbers are close enough for it not to matter.

Issues the scheme has at this point,
- The rent for both the Duke and Stanford University scenarios exceed the allowed room & board costs. The student in these scenarios has to pay $600 and $1000 extra per month respectively on top of their 529 room & board disbursement. Recall, the parents must charge fair market value rent. Where does this additional money come from? It is unclear to me how a tax auditor would view a parent's payment to the child so that the child can pay the parent rent. Maybe it's fine? It is not tax efficient though because this is a round trip of funds from parent's account through the child's account and back to the parent's account that must be declared as taxable rental income.
  - Aside: The parents *could* solve for this by also funding an UMGA/UTMA account for the child which then is used to fund living expenses. Though, if the parents were funding both an UMGA and 529 then maybe the 529 would not be over funded and we would not need this scheme. Also, if the child is still a dependent on the parent then they may have to pay taxes at the parent's marginal rates-- see the ["kiddie tax"](https://www.irs.gov/taxtopics/tc553)
  - In any case, this issue is why the above subtracts the room & board allowance from the mortgage payment to determine the parent's out of pocket. The money has to come from somewhere.
- How many other renters it takes to "cover" the parents out of pocket expenses. Here we ignore the room & board allowance and just look at how many additional people beyond the child are required to break even on the mortgage. The numbers kind of work for Duke and University of Washington, but at Stanford the child needs to convince someone to share a bedroom or similar while paying market rate rent for an apartment. __Hmm__.
  - There is a broader issue here. I've made best-case assumptions where renters pay studio apartment level fair market value rent in return for shared living space, shared kitchen, and in Stanford, shared bedroom living conditions. This hypothetical child in the instagram post must be very charismatic.

## Backs to the funds flow and fund sources

All of the above assumes that the child has a 529 with sufficient funds. How much?

We'll assume that the 529 uses conservative investments while the child is in school in order to ensure that it maintains value, something like government bonds. Given that assumption, we'll assume that the account grows 1% annually in real terms or 4% annually in nominal terms with 3% inflation.

| School | Starting 529 value for just room & board (Google Sheets' `PV` function) | 529 values for room & board plus tuition (Google Sheets' `PV` function) |
| --- | --- | --- |
| Duke University | $53187 | $394442 |
| Stanford University | $111853 | $443358 |
| University of Washington | $91934 | $311312 |

I will admit to playing a little loose with these numbers. These are present value calculations to determine the required 529 account value needed to generate a stream of payments over time, i.e. the 'rent' payments to the parents. These are not impossible to reach 529 account values. For example, a future value calculation shows that ~$430000 is possible with an assumed 5% real annual rate of return and 15 years of $20000 per year contributions.

This also shows though that these account values are only achievable through deliberate planning, either by having the assets to superfund the accounts or making consistent annual gifts. I bring this up because the hypothetical parents in this scheme could also plan to fund a large UGMA/UTMA that the child uses to help purchase real estate early in their life. Alternatively, the parents could just invest these funds themselves and purchase a property for the child to live in without the roundabout 529 part. The 529 room & board disbursements do not make much of a difference in terms of making money (or not) on real estate anyway. 

## Last stop, "equity is the point" or something, I guess.

The post says that the equity is the point. 

We can use the `CUMPRINC` function to calculate the paid off loan principle and `CUMIPMT` to calculate cumulative interest paid over five years. We'll also calculate house equity three ways, one with an average nominal return of 8%, one where the home market value remains constant, and one with a decreasing home value of -2% annually. In the appendix, there are screenshots from Zillow's home value index for 2017-2025 for our locations. I have eyeballed average returns from these charts and those are the source of the 8% annual increase and -2% annual decrease figures. 

The following ~~tables~~ eye charts derive from this data.

### Costs and equity in the property at 5 years with just the child.

| Location                           | Total Costs -- just one renter, the child with a 529 |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|------------------------------------------------------|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |                                          $234,779.33 |                          $483,259.28 |         $131,263.22 |         $59,203.82 |
| Stanford University (San Jose, CA) |                                          $656,824.88 |                        $1,288,691.41 |         $350,035.26 |        $157,876.85 |
| UW, Seattle (Seattle, WA)          |                                          $214,327.95 |                          $515,476.57 |         $140,014.10 |         $63,150.74 |

#### Annualized return on investment with just the child

| Location                           |   |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|---|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |   |                               33.95% |            -182.41% |           -206.04% |
| Stanford University (San Jose, CA) |   |                               32.99% |            -188.21% |           -208.37% |
| UW, Seattle (Seattle, WA)          |   |                               36.65% |             -41.07% |           -197.69% |

### Costs and equity in the property at 5 years with the child and enough roommates to cover the mortgage. 

Note significantly lower costs.

| Location                           | Total Costs -- assuming renters cover entire mortgage |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|-------------------------------------------------------|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |                                           $110,450.00 |                          $483,259.28 |         $131,263.22 |         $59,203.82 |
| Stanford University (San Jose, CA) |                                           $259,280.00 |                        $1,288,691.41 |         $350,035.26 |        $157,876.85 |
| UW, Seattle (Seattle, WA)          |                                            $75,710.00 |                          $515,476.57 |         $140,014.10 |         $63,150.74 |

#### Annualized return on investment with child and renters

| Location                           |   |  8% nominal real estate price growth | Flat nominal growth | -2% nominal growth |
|------------------------------------|---|--------------------------------------|---------------------|--------------------|
| Duke University (Durham, NC)       |   |                               42.96% |               5.02% |            -20.54% |
| Stanford University (San Jose, CA) |   |                               43.79% |               7.77% |            -13.19% |
| UW, Seattle (Seattle, WA)          |   |                               45.39% |              12.52% |             -3.36% |

## What a journey.

In summary, a child's over funded 529 is a poor excuse to do real estate investing. This post was never about 529s though. It's a thinly veiled advertisement using buzzword hooks to get attention.

I am aware that there is a lot to pick apart in this analysis. I skipped over property taxes, property maintenance, and insurance costs, all of which make the ROI worse. I could have assumed higher or lower growth rates with corresponding ROI impacts too. Ultimately the point is 529 room & board disbursements are small compared to the total cost of buying a property. 

If "wealthy parents" are doing this, it is because they wanted to buy a property in that specific area for themselves or for their kid. It is not because of some tax law, 529 account, hack that generates a tax free mortgage payments from investments. 


## Appendix -- Zillow Screenshots

{{<figure src="Durham-ZHVI-2017-2025.png" class="full-width" caption="Durham, NC" alt="Zillow home value index values, 2017-2025--Durham, NC">}}
{{<figure src="SanJose-ZHVI-2017-2025.png" class="full-width" caption="San Jose, CA" alt="Zillow home value index values, 2017-2025--San Jose, CA">}}
{{<figure src="Seattle-ZHVI-2017-2025.png" class="full-width" caption="Seattle, WA" alt="Zillow home value index values, 2017-2025--Seattle, WA">}}