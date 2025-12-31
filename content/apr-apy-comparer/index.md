+++
title = "Comparing 0% APR purchase loans and Credit Cards"
author = "Michael Hughes"
categories = ['commentary']
tags = ["theydidthemath", "nottechnology"]
date = 2025-12-31
[params]
    math = false
+++

The background on why this page exists are a pair of post (series) from the blog. One on [finance](/post/2025-10-15-0-percent-interest-loans "Does that 0% pay over time loan make sense?") and the other on using AI tools for software development, [for example.](/post/2025-10-03-misadventures-in-ai-clis-part-2 "(Mis)adventures in AI CLIs: Part 2 Confidently Building the Wrong Thing")

After this page is posted, roughly end of year 2025, there will be more posts about AI coming. The discussion on 0% APR purchase loans is complete though and the below calculator is the result. For the curious, the implementation and [README are over on Github.](https://github.com/msh9/apy-apr-tradeoff/tree/main)

Please note fields marked with a '*' are required and find additional instructions **below the calculator and fold.**
 
<script type="module" crossorigin src="index-BCZItn4g.js"></script>
<tradeoff-widget></tradeoff-widget>

We are comparing three ways of making purchases,
1. With a rewards credit card where the entire purchase balance is paid off at the balance due date
2. With a 0% (or more!) nominal annual rate loan
3. And, finally, with a loan where the money for the loan payments is held in a high yield deposit account until each payment due date

Those of you who have read the above post are aware that there are no *realistic* scenarios where the loan beats a rewards credit card in terms of reducing the effective purchase price. This is particularly true if the loan charges interest or fees. This calculator further demonstrates this principle in a way where you can play with the numbers. In order for the calculator to return results, you'll need to supply

* the purchase price
* the nominal annual loan rate (NB: this is not quite the same thing as APR, but that will work just fine if it's what you have)
* how many months the loan runs for
* a deposit account APY
* and, for rewards, the credit card rewards rate

Optionally, you can chose 'Real world calendar' calculation mode which returns slightly more accurate numbers and supply a credit card APR to estimate the interest charge if the purchase was not paid off.

With this information, the calculator returns data like,
* the loan's monthly payment and interest charges, if any, for non-zero nominal rates
* the potential benefit gained by holding loan payments in a high yield savings account for the duration of the loan
* and credit card rewards from the single purchase
