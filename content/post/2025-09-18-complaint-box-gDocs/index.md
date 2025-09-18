+++
tags = ['rant', 'using software', 'cloud computing']
categories = ['review?']
description = "Asking google to add vector graphic support to google workspaces apps"
author = "Michael Hughes"
date = 2025-09-18
title = "Google Doc(uments) please support SVG."
[params]
    math = false
+++

We all call it docs or gdoc or Google Docs, but the URL path actually says documents.

Regardless, I must be in the minority, but I plead anyway that whatever team within Google Workspaces is responsible for Google Docs please support vector graphics.

<!-- more -->

## Raster images
Raster images are the jpegs, gifs, pngs, webps, tiffs, avifs, and many other formats of the world. They are of fixed resolution. I, and many people within the software development community before and after me, have created diagrams made of boxes, text, and lines connecting those boxes. We've used Visio (does any still use Visio?), Lucidchart, [diagrams.net](http://diagrams.net), and many other tools to create these images.

We have then dutifully exported from those applications in a raster format and pasted into Google Docs, Slides, and others, occasionally resulting in this:

{{<figure src="2025-09-AI Toolwork Flow-overarching.avif" width="400" caption="Above is one from a forthcoming essay that I've ruthlessly upscaled." alt="A badly upscaled image demonstrating poor use of raster images">}}

## Scalable (vg)

There is another way, perhaps, more well known to those of a more artistic persuasion. Users of tools like Adobe Illustrator and Inkscape have used formats that describe the contents of the *graphic* via mathematics and standardized format. An SVG file is not the ~~image~~ graphic; an SVG file is a description of how to draw the ~~image~~ graphic.

{{<figure src="2025-09-AI Toolwork Flow-overarching.svg" width="400" caption="Above is the same diagram but now rendered by the browser client from a SVG." alt="A SVG image demonstrating scaling by the browser client">}}

## I just…

want to write in Google Docs about software without exporting images to raster formats that will inevitably become blurry when I have to rescale the document for presentation, print, or posting in a blog.

Instead, today, my workflow is to write in Docs using raster images and also export to SVG for use elsewhere.

## Yes, there are limitations

Vector graphics are limited in what they can render by their nature. They are an extremely poor choice for general purpose conveyance of photographs and similar images. They are an elegant solution to graphics and diagrams.

I'd like to believe that I am not alone in this use case. So, Google (Workspaces group?) please consider adding support for vector graphics to Google Workspace applications.