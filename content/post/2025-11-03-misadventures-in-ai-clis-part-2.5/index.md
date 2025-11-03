+++
tags = ['design', 'using software', 'cloud computing']
categories = ['commentary']
description = "Fixing Codex CLI's failure to run vitest in the linux sandbox"
author = "Michael Hughes"
date = 2025-11-03
title = "Misadventures in AI CLIs Part 2.5: This seems harder than it should be."
[params]
    math = false
+++

Like previous posts, this was originally going to be about accomplishing something grand. Instead, this is a look into a niche issue that made it hard to build with AI. Specifically, why is it so hard for Codex to run vitest?

<!--more-->

## What's the issue?

<video controls controlslist="nofullscreen nodownload noremoteplayback" width="720">
  <source src="2025-11-03-misadventures-in-ai-clis-part-2.5-frustration.webm" type="video/webm"/>
</video>

What's not shown is Codex burning thousands of tokens and watt/hrs of energy trying to run this simple command over and over again.

## Can Codex fix itself?

Of course, I just had to ask nicely. It then inserted the following,   
```javascript
pool: 'threads',  
poolOptions: {  
  threads: {  
    singleThread: true,  
  },  
},  
```  
in vitest's configuration. Here is vitest's [configuration reference page.](https://vitest.dev/config/#pool)

Fun facts,

1. `poolOptions` is not an option  
2. `threads` is an option, but not in the way codex confabulated

## What?

The actual needed configuration change is just the addition of,
```javascript
pool: 'threads'  
```

In short, we're telling vitest to run tests as threads within the same node process instead of, by default, forking a node subprocess to execute tests.

*Warning: I am not a Codex CLI implementation expert, just learning as I go here…*

I work with WSL 2 using Debian. For the sake of this issue, this is effectively a Debian linux installation. Codex's linux distribution runs commands issued by the agent within a sandbox to stop happy little accidents like running `rm -rf .` when the user actually wanted `rm test_report.xml`. That is, unless the user specifically asks for the tool to be run without a sandbox with an option flag prefixed with the word 'dangerous'. We are not doing that here.

In any case, OpenAI seems to be constantly refining how the sandbox [works based](https://github.com/openai/codex/issues/1532) [on feedback](https://github.com/openai/codex/issues/5880). Asking codex to explain itself returns an explanation that the sandbox sometimes kills subprocesses. That seems to align with known bug reports in codex cli's issue tracker on GitHub, but is also odd given that there are no related (as of November 3rd, 2025\) issues [reported for vitest](https://github.com/openai/codex/issues?q=is%3Aissue%20state%3Aopen%20vitest).

## I guess I'll keep going

A little reading suggests that Claude Code has a better sandbox mechanism. For now, I'll keep going with Codex.

I've been out of frontend javascript development for a while and both vite and vitest are new to me. It's great that Codex could 'fix' issues in the project due to its own sandboxing mechanism. I am, yet again, reminded of a post I read recently by [Anil Dash on how these tools are just that, merely tools.](https://www.anildash.com/2025/10/17/the-majority-ai-view/)

Finally, and I know that I have beaten this point to death, but I'm going to keep making it until these tools get better, if I did not have a background in *nix tools and software development I might have found myself submitting a bug report like this. Why I see that as a problem is left as an exercise for the reader.

Nevertheless, my misadventures continue and hopefully I'll publish more results soon.