---
title:'Initial impressions of the Go programming language'
date: 03.01.2013
author: Michael Hughes
tags: [Open Source, Rave, Fun, Go]
---

Summary
    During the holidays I had some time to begin learning a new programming language for
    hobby use. After some consideration I split my available time between learning the
    basics of Ocaml_ and Go_. The following post is about things I liked and/or found
    interesting about the Go programming language. The goal of this post is not necessary
    to educate about Go, but instead to observe a couple interesting features of the language.

----

To start with: please keep in mind that I am still learning Go and am very much in the novice
area. Also it is likely that the following paragraphs will compare Java and Go, some might term
this an unfriendly comparison, but since that is the realm of my experience those are the 
comparisons that will get make.

I work with Java (and sometimes C#) at my day job. Java is a fine language, but whenever I work
with it I feel as if there needs to be a sacrifice to the programming gods or at the very least
more work than there should be to set up a new project. Furthermore compiling and running Java
applications requires setting and maintaining a classpath_ for each application. 

I dislike the classpath.

It is a simple thing really; a set of directories that the Java VM searches for byte code class 
files or JARs. Yet for such a simple thing it seems like I spend an inordinate amount of time
forgetting to set it, forgetting to change it, setting it incorrectly... The point is that compared
to .NET's GAC_ and library management **or** Go's external management the classpath concept seems
poorly done.





Another thing I like about Go the::

    go

`command and associated path settings`_. The best way to describe the command from what I have
seen so far is as a much saner version of Maven. The go commands allows a user to build packages
in distributable binarys, run tests, fetch packages developed by others for inclusion in the project,
and in general manage the build process for code. **Unlike** Maven the go command doesn't require the
user to independently define a onerously long and verbose XML file that describes the project and its
dependencies. Instead the go command politely reads the project source files and derives the required
dependencies from the source. Beautiful!

At a more general level Go is designed in a way that I appreciate, minimalism.

* Why should I, the developer need to separately define a project configuration file when the filesytem
  structure and source code already define the necessary project properties.
* The statement to import another package for use in a source file also defines where that package came
  from--again avoiding the repetition of information.
* 
