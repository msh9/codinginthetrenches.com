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
comparisons that will get made.

#. One of the things about Go that I like isn't actually a component of the language, but of the Go
   ecosystem instead, the go `command and associated path settings`_. The best way to describe the 
   command from what I have
   seen so far is as a much saner version of Maven. The go commands allows a user to build packages
   into distributable binarys, run tests, fetch packages developed by others for inclusion in the project,
   and in general manage the build process. **Unlike** Maven, however the go command doesn't require the
   user to independently define a onerously long and verbose XML file that describes the project and its
   dependencies. Instead the go command politely reads the project source files and derives the required
   dependencies from the source. Beautiful!
#. Go is a native compiling language that doesn't need header files. I am more than well aware that
   there are languages (such as Ocaml) that compile to native binaries without the use of preprocessing
   and header files. Writing Go code is refreshing though when coming from the perspective of C and C++.
#. My types and object methods are not arbitrarily bound to a particular file. I cringe a little every
   time I type the following in Java 

   .. sourcecode:: java

     //file name: MyClass.java
     public class MyClass {
         private int myField;
         ...
         public int doSomething() {
             return this.myField;
         }
         public static class MyInnerClass {
             private String someText;
             ...
         }
     }

   Why can't I just declare two classes in a file? Why is the file name rigidly tied to the class definition?
   C# is a little better, at least it was deemed OK for a developer to define multiple classes per file. I
   prefer the path taken by Go though:

   .. sourcecode:: go

     //file name: types.go
     type MyClass struct {
         myField int
     }
   
     type MyInnerClass {
         someText string
     }
   
     func (t *MyClass) DoSomething() (int) {
         return t.myField
     }
   
   Those familiar with Go already with likely notice that the two code blocks don't define the exactly same
   structures (in fact Go does not implement classes as they exist in Java), but they're close enough for
   my purpose. In Go (somewhat like C++), the definition of a type and the methods that act on a type are
   two different entities that may be located in different places. Additionally I am not forced into odd
   looking paradigms by the language if I need to define multiple types in one file. The separation of
   type definitions and methods is powerful and could be abused to create `a big mess`_, but it also means
   that it's possible for types to be easily extended to implement new interfaces without modifying the
   original (Java-like) class definition.
#. I also like the simplicity of Go's module system. File names **are** meaningful in Go, but instead of
   signifying the name of the class contained therein, the name of file indicates the module it defines.
   In the brief example code above the Go type definitions *by convention* would be part of the "types"
   package since the name of the file is types.go. Note: The name of the package could be something
   else if need be, but that would break the conventions followed by Go's packages. Additionally the
   name used to import a package for use also indicates where the package is from, the best examples
   of this are given by the document for the `go command`_.

At a more general level Go is designed in a way that I appreciate, it is minimalistic and the rules it
enforces are consistent, make sense, and help the developer write better code.

.. _go command: http://golang.org/doc/code.html#tmp_4
.. _command and associated path settings: http://golang.org/doc/code.html
.. _Ocaml: http://caml.inria.fr/ocaml/
.. _Go: http://golang.org/
.. _a big mess: http://en.wikipedia.org/wiki/Spaghetti_code
