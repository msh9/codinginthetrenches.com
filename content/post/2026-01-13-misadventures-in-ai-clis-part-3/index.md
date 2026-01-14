+++
tags = ['design', 'using software', 'cloud computing']
categories = ['commentary']
description = "some gotchas and successes using codex CLI to build a financial calculator"
author = "Michael Hughes"
date = 2026-01-14
title = "Misadventures in AI CLIs Part 3: Great Success?"
[params]
    math = false
+++

We continue the prior post's theme of using CLI AI tools and then writing about it. The theme of [Part 2](/post/2025-10-03-misadventures-in-ai-clis-part-2 "(Mis)adventures in AI CLIs: Part 2 Confidently Building the Wrong Thing") was directing updates to a legacy javascript library and was based on work done in September, 2025. The theme of this post is on using these tools for brand new development, specifically a financial calculator toy [available here](/apr-apy-comparer).

<!--more-->

## Did it do what it said it would do on the box?

I'm trying to get better at writing my conclusions upfront–

In short, Yes. Codex, the AI CLI tool I've used the most, did accelerate my work and help build a piece of software faster than I would have myself. It furthermore did so in a way that helped me finish a small project despite myself only spending a handful of hours on it over several weeks.

One of the neat things about writing this post series over several months is getting to see the evolution of tools like Codex and Gemini. Beyond just doing something that is known to be easier for gen AI tools, green-field development, there was a noticeable output and instruction following quality increase between summer, 2025, and now. I don't have a great quantitative measure for this, qualitatively I'll characterize it as me needing to do less clean up. That doesn't mean codex's output was error free though…

## Gotchas, issues, successes, etc

### Issues

I wrote a short update post, [Part 2.5](/post/2025-11-03-misadventures-in-ai-clis-part-2.5 "Misadventures in AI CLIs Part 2.5: This seems harder than it should be.") , in this series about an early issue with the codex CLI sandbox playing poorly with vitest. That was a gotcha and at the time put codex in an infinite loop.

There were many other gotchas. They can be best summarized as codex's output replicating common mistakes made in the general software industry in sometimes new and inventive ways. [Here's a slightly subtle one, link is to the fixing commit,](https://github.com/msh9/apy-apr-tradeoff/commit/c866b6e9cd74d2bce60e15a2106e945673714718)

```javascript
    const balanceDecimal = this._balance.toDecimal();
    const apyDecimal = this._apy.toDecimal();

    const dailyFactor = (1 + apyDecimal) ** (1 / 365);
    const accruedBalance = balanceDecimal * dailyFactor ** days;
```
See it? Despite instructions to the contrary, generated code used floating point math in a repeated monetary balance update calculation. This is a well documented and classic error that can cause banking software to yield slightly wrong or unpredictable results.

Another odd one I ran into was the [generated code not correctly handling iteratively compounding interest on deposit accounts, again link is to fix,](https://github.com/msh9/apy-apr-tradeoff/commit/bc866b38685537f635ac27ad2575258361efa164)

```javascript
    for (let i = 0; i < days; i += 1) {
      const dailyInterest = this.#balance.multiplyBy(this.#dailyRate);

      this.#pendingInterest = this.#pendingInterest.addTo(dailyInterest);

      if (monthEndCheck(currentDate)) {
        const postedInterest = this.#pendingInterest.addTo(new Amount(0), {
          roundingMode: 'bankers',
          decimalPlaces: 2,
        });
        this.#balance = this.#balance.addTo(postedInterest);
        this.#pendingInterest = new Amount(0);

      }
      // code continues...
```
The above snippet shows code that I subsequently fixed in the linked commit. The above version does not compound interest and instead accrues only on the posted balance. Often, in the US, deposit account interest compounds daily. The difference between the two will not show up in small dollar amount tests but it *does* matter especially on larger balances and over long periods of time.

I approached these issues with some combination of the following:

* Updated instructions in AGENTS.md, for example more precisely stating how monetary amounts should be handled  
* Clearer AGENTS.md instructions on how and when to run tests (`npm run test` and follow TDD respectively)  
* In several cases, handwriting my own targeted test cases to validate specific values, calculation precision, or certain edge cases

I found the last item particularly helpful in nudging the entire implementation in a good direction with regard to calculation precision.

### Successes

Most code for the first iteration of the web-components UI and much of its subsequent refactors was generated. I supplied a mockup image to codex and asked it to implement that mockup image using web components. It did so and the result functioned immediately. I count this as a decent success since codex took care of a significant amount of boilerplate code on my behalf.

The styling approach was terrible. I made a number of structural and CSS changes in order to make the UI somewhat responsive. As it stands today, the design is still not great, but I ran out of patience for working on a toy calculator UI and wanted to work on other things.

## Next

This is the end of this series– for now anyway. I'll continue using codex, code, etc. As discussed in more detail in prior posts, these *are* useful tools. I'll even continue writing about them as I encounter or discover new information.

Codex saved me a good amount of time by scratch generating a UI based on a mockup image. That said, the latest and greatest model at the time (gpt-5.1-codex-max) still made basic implementation errors that were instructed against and would result in basic application functionality not working correctly. For this reason, I still view these models as tools that require knowledge of development and systems to use effectively for any reasonably complex application.

## Addendum

[The project repository](https://github.com/msh9/apy-apr-tradeoff "APY APR Tradeoff") alternates between squash merges and merge commits that retain the entire history. The commit history is messy, but I left it this way for those who were curious or wanted to throw darts at me for poor coding or misusing AI. Professionally, cleaned squash commits for well organized feature branches and clear commit messages would be better, but, again, this is a toy.