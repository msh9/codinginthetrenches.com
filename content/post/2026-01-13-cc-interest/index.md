+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "Credit card interest capped at 10%? Weird market effects to follow"
author = "Michael Hughes"
date = 2026-01-13
title = "A small amount of consideration for a throwaway remark: Capping consumer card interest rates at 10%"
[params]
    math = true
+++

It's January, 2026 and someone threw out the suggestion of capping credit card interest at 10%, because, I don't know, why not?

<!--more-->

## Context

I spent about a day and a half acquiring economic data and thinking about a UI for people to play around with interest rate (controls) on credit cards. Then I came to my senses, this nonsense about a 10% credit card interest is possibly, like political noise, a throwaway soundbite. Instead of investing time in building a model, I'll write about it and then move on with my life.

First though, if you are just mad about credit card interest and not interested in my amateur level thoughts then I recommend reading a blog post, ["Why Are Credit Card Rates So High?"](https://libertystreeteconomics.newyorkfed.org/2025/03/why-are-credit-card-rates-so-high/), by the New York Federal Reserve Bank that summarizes one of their cited staff reports. The result of this post are my own personal armchair thoughts on credit card interest.

Lastly, I acknowledge the following writing is loose with terminology at times, using the words 'bank' and '(credit card) issuer' interchangeably. This is because ***most*** companies that issue credit cards in the US are also functionally banks (or bank holding companies, but I digress). Also I often interchange 'interest' and 'annual percentage rate' (APR). These are not always the same because APR is an inclusive measure of both interest charges and certain fees. In a marketplace where many credit cards do not carry annual fees though the APR is often representative of the underlying interest charges.

Onwards.

## Conclusions first

My armchair predictions for the results of a 10% "interest" cap?

* Many, if not most, credit card reward programs disappear  
* Annual or monthly fees start to apply to more cards  
* Smaller and more specialized banks take over a great share of the credit card market

## Credit cards are weird.

Folks who buy stuff, like myself, have a few forms of financing available. We'll put them into four buckets,

* Secured term loans like (mortgage) loans for real estate and loans for cars and other vehicles  
* Secured credit lines like home equity lines of credit  
* Unsecured term-ish loans like personal loans and payday lending  
*  and, finally, unsecured credit lines

Payday lending is really its own, often predatory, category of lending but it is lumped here under unsecured term loans because payday loans are often extremely short in duration. I'm also glossing over access to unsecured lines of credit since those are less common.

Regardless, the first three bullets in this list are either short in duration (ie \~5 years or less) ***and/or*** are secured by some valuable asset (a house, a primary car, etc). 

The last item though is an unsecured open ended credit line. It's also the credit facility with either the highest, or second highest interest rate. Payday loans, again being predatory, can have very high effective annualized rates. We're going to ignore payday loans for the rest of this post though.

Here's a chart of recent credit overall annual rates, APRs,

{{<figure src="2026-01-13-cc-interest-fred-avg-apr-origination.avif"  caption="Source: Federal Reserve Bank of Philadelphia, Large Bank Consumer Credit Card Originations: Average Original Purchase APR: General Purpose [RCCCOAPRAVGPCTGP], retrieved from FRED, Federal Reserve Bank of St. Louis; https://fred.stlouisfed.org/series/RCCCOAPRAVGPCTGP, January 13, 2026." alt="A chart of recent average credit card APRs">}}

An average APR of 27.21%\! As an example, for a $1200 purchase that is $27.13 in finance charges over a 30-day month. For comparison comparison here are mortgage loan rates,

{{<figure src="2026-01-13-cc-interest-fred-avg-mortgage-apr.avif"  caption="Source: Federal Reserve Bank of Philadelphia, Large Bank Consumer Mortgage Originations: Average Interest Rate at Origination by LTV - 30-YR Fixed Rate Mortgage: >=80 LTV [RCMFLRIGIRAPCTF30LTVGTE80], retrieved from FRED, Federal Reserve Bank of St. Louis; https://fred.stlouisfed.org/series/RCMFLRIGIRAPCTF30LTVGTE80, January 13, 2026." alt="A chart of recent average mortgage loan APRs">}}

Classic, 30-year fixed rate, 20% down home loans were being originated in the same time period with rates around 6.7%. For even further comparison here are [(secured) auto loans](https://fred.stlouisfed.org/series/TERMCBAUTO48NS) and (unsecured) [personal loans](https://fred.stlouisfed.org/series/TERMCBPER24NS).

Credit cards have high interest rates. The Consumer Financial Protection Bureau publishes a biennial report on credit cards with lots of data and discussion. It addresses how credit card rates are set. Almost all consumer credit card rates are variable and set as the '[prime rate](https://en.wikipedia.org/wiki/U.S._prime_rate)', currently \~6.7%, plus some margin (CFPB. The Consumer Credit Card Market., 2025). The prime rate itself varies with the US Federal Funds rate. Astute readers will note this is also how adjustable rate mortgage (ARM) loans work and that the value for 'some margin' is lower for ARMs than credit cards.

Aside from a high interest rate margin credit cards are unique in another way; laws enacted after the 2008 financial crisis restricted how and when issuers can change interest rates. [The gory details of how and when are here](https://www.consumerfinance.gov/rules-policy/regulations/1026/55/). The result is that the interest rate that a bank charges for a single purchase is mostly fixed at time of purchase, with interest changes instead primarily impacting future purchases.The [CFPB's report](https://files.consumerfinance.gov/f/documents/cfpb_consumer-credit-card-market-report_2025.pdf) has a neat chart, Figure 24, showing when issuers have generally made changes.

{{<figure src="2026-01-14-cc-apr-changes.avif"  caption="Source: CFPB. The Consumer Credit Card Market., 2025" alt="A chart of credit card APR increases over time">}}

## Interest rates matter

This all matters because credit cards are unsecured, open ended, loans with limited tools for issuers to reprice existing balances (i.e. charge more when the risk of default rises).

To be clear, I am not a defender of banks here, they should be regulated in order to ensure a competitive marketplace and so consumers understand what they are agreeing to when opening a credit card account. Credit cards are enormously profitable for banks due to a combination of merchant fees (interchange), interest, and fees. 

With that said though, there is reason to believe that high interest rates are compensating for long-tail risk of default. In other words, a given credit card account has a high risk of default and loss because it is an open ended loan with no collateral to secure it and, also, limits on how it can be priced. Issuers compensate for the higher lifetime risk of default and loss with higher interest rates (Drechsler et al., 2025\) and (Fleckenstein et al., 2025).

This is the conclusion of both the New York Fed's [Liberty Street paper](https://www.newyorkfed.org/research/staff_reports/sr1143) and [this working paper b](https://www.nber.org/system/files/working_papers/w28029/w28029.pdf)y the National Bureau of Economic Research.

## A 10% interest cap would have unexpected impacts

Firstly, like many throwaway proposals made by the current POTUS, there is not necessarily enough substance in the statement to act.

A 10% cap on what? 

* The total annual APR (APR includes both interest *and* recurring fees\!)?  
* A 10% cap on the marginal spread added to the prime rate?  
* A 10% cap on total finance charges, but not fees?

Regardless. I'm going to somewhat arbitrarily and very generously assume the most sane implementation of a "10% cap", a 10% cap on marginal spread. This would imply a maximal APR of \~16.7% on accounts issued today. This is lower than any APR charged in recent history. See the historical margin chart below from the CFPB's report:

{{<figure src="2026-01-13-cc-interest-apr-margin.avif"  caption="Source: CFPB. The Consumer Credit Card Market., 2025" alt="A chart of credit card margin rate over time">}}

WIth that said, I do not believe the industry doomsayers that claim a 10% cap will be the end of consumer credit card availability to less credit worthy individuals. 

While the high interest rates price in lots risk, both of the above papers also note that issuers enjoy significant positive profit margins. The New York Fed paper demonstrates higher margins even after default losses on some of the least credit worthy individuals (Drechsler et al., 2025).

Instead I expect a repeat of what happened to debit cards in the wake of 2009 rule changes that reduced the fee and interchange profits from debit card purchases. The result was a near completion elimination of debit card rewards and cobranded debit cards. Less credit card interest profit means less money to spend on account perks and rewards. 

Another lens to look at this comes from an annual report on credit card profitability,

{{<figure src="2026-01-13-cc-interest-income-expenses-us-banks.avif"  caption="Source:  Board of Governors of The Federal Reserve System. Profitability of Credit Card Operations of Depository Institutions., 2025" alt="A table of selected bank profitability metrics">}}

**Note well that a "10% cap" on margin would not directly translate to 10%** **less "Total interest income".** It will translate to less interest income though, which as shown in the chart currently subsidizes net losses in noninterest income. Clarifying further– things like rewards programs and perks are 'noninterest expenses', one way to compensate for less interest income is to cut noninterest expenses. Another way of approaching this issue is to increase 'noninterest income' by adding fixed monthly or annual fees.

My other expectation is the further retreat of large banks from the lower tiers of the credit card market. 

{{<figure src="2026-01-13-cc-interest-balances-by-issuer-size.avif"  caption="Source: CFPB. The Consumer Credit Card Market., 2025" alt="A table of credit card balances held by different institution sizes">}}

Again from the CFPB's biennial report–given high margin requirements for business operations, I would expect smaller, lower overhead, issuers to take over more of the market. There's a counterargument to this that large banks and issuers have a lower cost of funds, but that doesn't track with market dynamics today already.

## Conclusions?

I'm not sure I have any other than that arbitrary price caps will likely have, potentially many, unintended side effects. 

Credit card interest is high; it is generally the most expensive way to pay for a purchase over time. I don't think arbitrary price caps will fix that. Similar to how rent control doesn't fix general affordability of apartments or how Californian property tax rules do not result in fair property taxation.

If I could wave a wand I'd focus on cheap, easy to use, payment rails that could replace existing credit and debit platforms in a way that eliminates the 2%-5% payment cost baked into all retail goods. I don't care what it is, it could be crypto/stablecoins. It could be FedNow or something else.

## References

* Sumit Agarwal, Souphala Chomsisengphet, Neale Mahoney, and Johannes Stroebel, "Regulating Consumer Financial Products: Evidence from Credit Cards," NBER Working Paper 19484 (2013), [https://doi.org/10.3386/w19484](https://doi.org/10.3386/w19484).
* Matthias Fleckenstein and Francis A. Longstaff, "The Market Risk Premium for Unsecured Consumer Credit Risk," NBER Working Paper 28029 (2020), [https://doi.org/10.3386/w28029](https://doi.org/10.3386/w28029).  
* Consumer Financial Protection Bureau. The Consumer Credit Card Market. (December, 2025). [The Consumer Credit Card Market Report to Congress](https://files.consumerfinance.gov/f/documents/cfpb_consumer-credit-card-market-report_2025.pdf)  
* Board of Governors of The Federal Reserve System. Profitability of Credit Card Operations of Depository Institutions. (November, 2025). [Profitability of Credit Card Operations of Depository Institutions, November 2025](https://www.federalreserve.gov/publications/files/ccprofit2025.pdf)  
* Drechsler, Itamar, Hyeyoon Jung, Weiyu Peng, Dominik Supera, and Guanyu Zhou. 2025\. “Credit Card Banking.” Federal Reserve Bank of New York Staff Reports, no. 1143, September. [https://doi.org/10.59576/sr.1143](https://doi.org/10.59576/sr.1143)  