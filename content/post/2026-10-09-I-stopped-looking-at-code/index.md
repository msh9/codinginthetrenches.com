+++
tags = ['design', 'using software', 'cloud computing']
categories = ['software design']
description = "A post about creating a physics simulation with claude"
summary = "I stopped looking at the code claude wrote for my physics simulation."
author = "Michael Hughes"
date = 2026-10-11
title = "I stopped looking at the code."
[params]
    math = false
+++

I stopped looking at the code, contrary to several of my prior posts on writing software with CLI tools. The results are [neat though](https://www.michaelonrandom.com/gravity-well/index.html)!


<video controls controlslist="nofullscreen nodownload noremoteplayback" width="720">
  <source src="moon-demo.mp4" type="video/mp4"/>
</video>

*Music is The Blue Danube performed by the US Marine Band*

This feels like an appropriate article to start with, [AI coding agents generate more code, but not more software \- Ars Technica](https://arstechnica.com/ai/2026/10/ai-coding-agents-generate-more-code-but-not-more-software/). Last checked, my private repo for this physics toy held approximately 35000 lines of typescript, \~12000 for tests and \~23000 for the rest. This was not one-shot, [nor was this thing](https://github.com/storytold/photocraft) though, deposit contrary claims. Gravity Well has been a project I have picked up and put down for over a month running. One similarity with all of my prior work with codex and claude is maintaining direction over the work. This has also meant that I'm the limiting factor for direction albeit just creative now and not so much technical. Thus, no one-shot prompts and no 24 hour claude runs for me when I haven't decided how I want attitude control to work for the player.

This has not been without learning on my part either.

Along the way I have, as a result of looking at the agent's outputs, read about Hill Spheres, Kelper's laws, JPL's Horizons data, Chebyshev polynomials, and webgl shaders. To state the now obvious, this is a simulation concerning spaceflight.

The concept of the simulator, look and feel, and "how" it feels to play are all me in the sense that I wrote goals down and tuned the final product. The code, well, as an example the application's vector CRT-ish look is generated with shaders. I have not ever previously in my life and still have not as of today written a line of shader code. I guess I am comfortable with this now.

### What a difference a year makes. 

13 months ago I was writing about what a terrible job codex did writing Golang templates. Eight months ago, codex and later claude were writing extremely suboptimal GIS code. Today, the changes wrought by my agents (largely Opus 5.x with Kimi K3 and GLM 5.X) largely just work.

There are risks. One of the many javascript packages referenced in the product could contain malicious data exfiltration instructions. The generated web application could contain malicious behavior injected via the aforementioned mechanism. I do not *think* either of these things has happened, but cannot be certain outside of a line-by-line audit. I will probably have to do something like this before calling the application "production".

### No Conclusion

It's cool that I've been able to create a reasonably accurate solar system simulation toy that you can fly around. In the hypothetical sense, I have the skills to write the code all myself. In the practice sense, that just was not going to happen. Too many other things in life.

[Go try it out](https://www.michaelonrandom.com/gravity-well/index.html) if you'd like to see first hand how hard it is to model orbital mechanics in your head. The interface as of writing (Oct 9, 2026) is clunky. It will get better. 