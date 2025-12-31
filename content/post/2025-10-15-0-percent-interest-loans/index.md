+++
tags = ['nottechnology','theydidthemath']
categories = ['personal']
description = "On the topic of whether a purchaser should use a 0% APR purchase loan or a credit card for purchases"
author = "Michael Hughes"
date = 2025-10-15
title = "Does that 0% pay over time loan make sense?"
[params]
    math = true
+++

If you like to nerd out about enough money to buy lunch at a counterserve restaurant then this is the post for you. If you don't care about effectively paying $18 less on a $1200 purchase then this is not the post for you.

The short answer to the title's question is 'Only in specific circumstances.'

Let's suppose that we want to make some expensive online purchase and the merchant offers 0% APR financing to pay for the purchase over time, literally buy now, pay later. It could be via themselves, Affirm, or some other company.

To make it concrete, let's suppose that we need a new mattress which costs $1200. How should we pay for it in order to minimize its effective cost?

<!--more-->

**--December, 2025 update, a calculator based on this post is now [available here](/apr-apy-comparer), original post is as follows:--**

At first, taking the 0% interest "buy now, pay later" option AKA "a loan" makes the most sense. That said, businesses offering purchase financing are trying to make a profit too and may not always have our best interests at heart. We will do a bit of math to learn for ourselves.

## Conclusion first

The following diagrams summarize all of the below words, but please note that the workflow is **current as of October, 2025**. Interest rates on deposit accounts and loans can change these recommendations.
{{<figure src="2025-10-07  0% loan purchases.svg"  caption="If you can, a credit card makes more fiscal sense" alt="A workflow showing that it's often better to purchase with a rewards credit card instead of a loan.">}} 

## First: Why not just pay all at once with a debit card?

Sometimes folks do not have $1200 to spend on a mattress. That's OK. 

Other times, folks can spend $1200 all at once. Let's explore that scenario now.

Instead of buying with a debit card (we'll talk about credit cards later) let's suppose we put the money into a deposit account and only withdrew payment amounts on their due date. Further, let's suppose that the savings account has an APY of 3.5%. Now we get to earn a little interest from the bank on money that we would have otherwise immediately spent. How much money?

Let's suppose we could just magically have the mattress now and pay for it six months later. We can approximate six months of accrued interest with the following,

$$
((1 + 0.035) ^ {\tfrac{180}{365}} - 1) \times $1200 = (1.035 ^ {\tfrac{180}{365}} - 1) \times $1200 = $20.53
$$
[*Notes on this formula below.*](#compounding-interest-apy-etc)

This is an upper limit though and in reality we need to make payments on the loan during the time period, reducing funds accruing interest for us.

## Second: 0% interest, zero fee loans or, in short, 0% APR loan mechanics

These went away during the higher inflation, higher Federal Reserve Bank funds rate, years in 2022–2024\. I've personally noticed them coming back into vogue in the three and six months varieties.

Depending on the lender they work something like,

* Pick a plan length, it will be something like three, six, or a similar number of months  
* Agree to purchase item on today's date  
* You make your first payment one month in the future  
  * The first and each following payment is equal to the purchase price divided by the number of plan months.  
  * Each payment must be made via EFT transfer or debit card, no credit cards.  
* Continue making payments for the chosen duration

They are simple installment loans. The lack of fees and interest makes the calculation simple; our $1200 mattress purchase could be paid over six months in six $200 payments.

Let's continue the example above and more accurately represent how it would work in practice. To keep the math simple we will assume that all six months are 30 days long. This assumption will result in slightly underestimating the amount of interest we get. We can use the above formula to calculate our interest on the first month with that final grant:

$$
((1 + 0.035) ^ {\tfrac{30}{365}} - 1) \times $1200 = (1.035 ^ {\tfrac{30}{365}} - 1) \times $1200 \approx $3.40
$$

Now we can compute the second month, we remove $200 for the loan payment and add the interest for compounding: \\((1.035 ^ {\tfrac{30}{365}} - 1) \times $1003.40 \approx $2.84\\)

[*Notes on why I use \\(\approx\\) instead of \\(=\\) below.*](#floating-point-math)

We can continue, but we'll use a spreadsheet to generate a graph.

{{<figure src="2025-10-07-0-apr-loansPer-month Accrual.svg"  caption="Accruals per month" alt="A chart showing a total of $12 of accruals spread across six months">}} 

The approach earns ~$12 cumulatively over the six months or one fast‐food lunch.

I didn't promise this would be exciting.

## Third: Credit Cards

What if we pay with a credit card that has [1.5% cash back (not sponsored)](https://www.capitalone.com/credit-cards/cash-back/quicksilver/)?

$$
$1200 \times 0.015 = $18
$$

One lunch at a counterserve restaurant instead of drive-through fast-food. There are several caveats to this,

1. This assumes that the merchant charges the same total price for every form of payment. If the merchant charges a, for example, 3% fee to use a credit card then another form of payment is likely fiscally superior.  
2. This only works financially if you pay the credit statement balance in-full and on-time.  
   1. A story for a different post, but credit cards are a form of debt that uses daily compounding interest and have APRs often exceeding 25%. Carrying any balance that accrues interest will outweigh **all** 'savings' accrued from points, rewards cash, etc.  
3. Unlike interest paid on a deposit account, credit card reward dollars are often not redeemable directly as cash. Instead they are redeemed as a credit on your credit line's balance, reducing the outstanding amount owed on the next billing cycle. Note well, that they are also often not redeemable as payment towards an already outstanding statement. The credit card company wants real money for that.

Those caveats aside, $18 is greater than $12. 

I also structured this comparison in a favorable way to the pay over time loan. A three month loan would compare even worse because our money has less time to accrue interest from the bank and we also did not account for taxes. Interest paid on bank deposits is generally considered taxable income which would further reduce our effective yield. Finally, in a win for the credit card industry, *generally speaking (I am **not** a CPA)*, rewards for purchases are considered a refund of part of the purchase and not taxed.

### Digression: Consumer financing is either evil or good

Consider briefly how a business offering credit cards to consumers could stay in business if every account [behaved in the way recommended here](#third-credit-cards), paying in full every month and never paying interest on a balance?

The answer is that the merchant pays for it. Merchants pay fees per purchase to their transaction processor so their customers can use a convenient way to pay. Incidentally, this is also often how 0% APR pay over time purchase loans work too; the merchants pays a percentage of the sale price to the lender. The specific fees vary across companies, the type of thing being purchased, the specific kind of card, and are often shrouded on non-disclosure agreements. Know though that for credit cards they start in the 3% range and go up from there by several percent, with buy now pay later loans coming in even higher.

The conspiracy-minded among us might think that if we all just stopped using credit cards then merchants would happily reduce their prices by 3%–10%, and eliminate along the way a 'blood-sucking' part of the financial services industry from the face of the earth. This is unlikely. Instead, we have all already seen the alternative, where thrifty merchants either offer a small discount for cash or equivalent or simply do not accept credit cards. 

This is a win for convenience, pulling out a phone loaded with a credit card credential is convenient. This is a loss though for transparent pricing; ultimately, merchants charge what is needed in order to cover payment processing fees and in most cases charge the same regardless of payment type. In effect, merchants cause the generally poorer, without credit, cash users to subsidize the richer, with credit, credit card users. Furthermore, those with poor credit that can only get non-rewards credit cards also subsidize those with better credit who can get rewards credit cards. Whether this is a good or bad thing is out of scope for this post.

## Credit cards are dead, long live credit cards

It is nice to have the option to purchase goods and services with a variety of payment methods, to instantaneously transfer cash or use debt, to pay with a credit line or a loan, etc. Not everyone has the credit score to avail themselves of rewards credit cards though, fortunately there are other options like installment loans discussed above. It can be worth a lunch or several to use credit cards for large purchases for those that do carry rewards credit cards and pay their statement balance in full, on time, every month.

## Appendix

### Compounding Interest, APY, etc

$$
((1 + 0.035) ^ {\tfrac{30}{365}} - 1) \times $1200 = (1.035 ^ {\tfrac{30}{365}} - 1) \times $1200 \approx $3.40
$$

What is going on here?

1) We are using an annual percentage yield (APY) of 3.5% on our hypothetical deposit account. When we use 3.5% in an equation it is represented as a decimal number by moving the decimal two places, thus 0.035.  
2) We are using an exponent to calculate the correct yield for a specified time period. In this specific case we want the yield on 30-days. We need to do this because APY represents a specific annualized [yield defined by law](https://www.consumerfinance.gov/rules-policy/regulations/1030/a/#1) from holding an amount over the entire year.

We start with the APY formula in the above linked federal regulation and derive what we need, the rate for a standardized 30-day month that would result in an annualized APY of 3.5%. That is,

$$
\begin{align}
APY &= 100 \times ((1 + \dfrac{Interest}{Principal})^{\tfrac{365}{\text{Days in term}}} - 1)\\
3.5\% &= 100 \times ((1 + \dfrac{r \times p}{p}) ^ {\tfrac{365}{30}} - 1)
\end{align}
$$
Note well that \\(\dfrac{Interest}{Principal}\\) is equivalent to \\(\dfrac{p \times r}{p}\\) or just \\(r\\) since the "Interest" here is the amount accrued after a 30-day month on our deposited amount (principal) multiplied by the rate we're interested in. Thus we can simplify to,

$$
\begin{align}
0.035 &= ((1 + r)^{\tfrac{365}{30}} - 1)\\
1.035 &= (1 + r)^{\tfrac{365}{30}} = \sqrt[30]{(1 + r)^{365}}\\
1.035^{30} &= (1 + r)^{365}\\
\sqrt[365]{1.035^{30}} &= 1.035^{\tfrac{30}{365}} = (1 + r)\\
1.035^{\tfrac{30}{365}} - 1 &= r\\
r &= (1 + 0.035)^{\tfrac{30}{365}} - 1\\
\end{align}
$$

Please note a number of assumptions built into this, including that interest compounds daily, that there are no fees impacting the principle, that the rate is consistent over time, etc etc.

### Floating Point Math

Readers of the first appendix note will have observed a significant amount of repeated multiplication occurring in these formulas. Unfortunately, slight errors can occur in math operations due to how computers represent numbers. Repeated operations can further compound these errors. Many development tools have ways to accurately and precisely handle such numbers at the cost of speed or memory, but lay use of excel or similar can lead to small differences in calculations.

This is not a post about high precision mathematics in computer software though so I have used \\(\approx\\) instead of \\(=\\) to indicate that the value is roughly correct but if you use the formula in your own calculations the results will likely be slightly different.