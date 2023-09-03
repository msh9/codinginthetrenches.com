+++
tags = ["using-software"]
categories = ["commentary"]
description = "Some examples of using GPT4 via chat, links to references, and practicality of AI usage"
author = "Michael Hughes"
date = 2023-09-02T20:09:21-06:00
title = "AI. Again. The boring manager's view."
+++


This is a continuation from a post in April, 2023 on low-code and AI.

<!--more-->

I previously posted on AI and [low-code in April]({{<ref "2023-04-13-wither-low-code">}}) of this year. In that post we discussed some of the challenges and dreams of low-code and used those as a lens to think about recent generative language models. This is a smaller follow up covering a couple places I used OpenAI's ChatGPT in the last few months. I set out in manner to give ChatGPT its best shot at replacing me and took an open mind to the results.

The results were fine and even though I didn't set out to create evidence for my writing in April, that's what I did. In short, ChatGPT is at best a job-aid to an already experienced practitioner. It does its best work with boilerplate code and its worst work with unique or novel applications. 

For context, I used both ChatGPT 3.5 and 4 with various prompting techniques.

### Powershell

I gave ChatGPT 3.5 the somewhat inane prompt,

> I'd like to use powershell to recursively delete files with a particular extension from a directory tree

In response the LLM suggested,

> You can use the PowerShell cmdlet Remove-Item with the -Recurse parameter to delete files with a particular extension from a directory tree…

Specifically, ```Remove-Item -Path "C:\MyFiles\*.txt" -Recurse```

It did include the following warning, 

> Please be careful when using the Remove-Item cmdlet with the -Recurse parameter, as it will delete all files and subdirectories matching the specified path and extension.

The problem is that this isn't quite right, running this on the default version of Powershell provided on Windows 10 and 11 will either return an error or potentially delete files not intended to be deleted.

Referencing Microsoft's documentation directly yields a [different way using `Get-ChildItem`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item?view=powershell-7.2#example-4-delete-files-in-subfolders-recursively) to perform this on older Windows deployments.

#### Take-away

I think ChatGPT's overall response to the question was actually reasonable. If it wasn't for a bug in `Remove-Item` the predicted response would have been fine. The take-away is similar to my last post, the individual using the output needs to be reasonably familiar with the tools being recommended. Next example.

### Python of various kinds

I had a need to create a [small python utility earlier](https://github.com/msh9/g_photos_takeout_metadata_merger) this year. I used ChatGPT a couple different ways to help.

#### write the program for me

This was the most open ended prompting of the three takes. I asked the LLM to write a utility for processing Google Takeout archives and then progressively refined the result by asking the LLM to change things based on previous outputs. My opening prompt was,

> Let's build a utility program for processing google photos takeout archives. 

It gave me a generic python script that would have worked for extracting files into date organized directories. From there I made suggestions like needing to process the JSON metadata present in the takeout archives or processing files in memory instead of on disk.

This was fine. It gave me a starting point for what I needed to build and helped me iterate on some of the important elements of what I wanted quickly.

#### explain code for me

In these prompts, I gave a context setting statement like,

> You are a python3 expert working with me as a code reviewer. When you review code, you review it for correctness, following idiomatic practices for python3, and PEP 8 python3 style guidelines.

Followed by asking it to explain snippets of code. For common libraries and python's builtin runtime this worked slightly better than just searching for explanations using Bing or Google. Not surprisingly though, the quality and accuracy of responses correlated with commonness of the code. ChatGPT performed poorly when asked explain how pyexiv2, a niche library for handling media metadata, works 

#### fill-in the blank coding

Finally, in the last series of prompts, I used a ChatGPT plugin to read the raw text python files from my project's GitHub repo into context in combination with a context setting prompt. I then asked ChatGPT to write tests for methods or write new methods based on additional code.

For example after providing the above context I gave the prompt,

> Can you extend `_update_content_metadata` to add XMP formatted metadata in addition to the existing exif metadata and, if so, what XMP attributes can we add based on the existing code?

The LLM provided code that mostly worked when given prompts like this.

#### Take-away

ChatGPT performed well enough to be helpful in all of the above scenarios. With the, hopefully unsurprising caveat, that the LLM becomes less useful in correlation with how niche or unusual the work is. It helped me iterate quickly on some initial ideas by generating scripts with some elements of logic that I later reused. The code quality was reasonable, not great and occasionally inconsistent, but generally usable with revisions. GitHub Copilot acting as a specialty tool for 'fill-in the blank coding' likely performs better than ChatGPT, but I suspect, still shares the same need for expert review and revisions.

### The bigger take-away

LLMs are useful, they're not magic, and for code at least they very much still need an experienced practitioner running the show to build anything of significance. Some more reading on this topic from others can be found [here](https://martinfowler.com/articles/exploring-gen-ai.html) and [here](https://www.ben-evans.com/benedictevans/2023/7/2/working-with-ai).

That's all for now.
