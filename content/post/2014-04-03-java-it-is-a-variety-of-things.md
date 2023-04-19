---
title: 'Java: It is a variety of things'
author: MichaelHughes

date: 2014-04-04
url: /2014/04/03/java-it-is-a-variety-of-things/
categories:
  - Uncategorized
tags:
  - fun
  - tips

---
Just a quick fun post on a wonder of Sun and Oracle marketing: The product named 'Java'.

There is no one thing that the product name Java refers to and depending on the context it may be a cloud service or a programming language.

Here is the list to get it out the way quickly:

  * [Java][1] the programming language
  * [Java][2] the virtual machine (which Java the language runs on)
  * [Java][3] the set of standard libraries leveraged by Java the language (and a whole host of other languages)
  * [Java][4] the browser plugin that comes bundled with Java the virtual machine (this is the one always in the [news due to security flaws][5])
  * [Java][6] the cloud service offered by Oracle (also with recently [discovered security flaws][7])

In more detail:

  1. Java the programming language runs on the Java Virtual Machine. It is a relatively modern (~20 year old) object oriented application development language. It is worth nothing that there are alternative environments that run the Java the programming language including the Dalvik virtual machine used by Android.
  2. The Java virtual machine (as in the HotSpot VM maintained by Oracle) is a JIT compilation enabled virtual machine that is targeted by a number of different programming languages and runs on a variety of platforms. Languages such as python, ruby, scala, and clojure all target or have versions that target the JVM.
  3. The Java platform comes with a large and feature heavy standard library which can be used by most if not all languages that target the JVM.
  4. Sun and now Oracle produce a browser plugin for most modern browsers that enables a user to execute application code that would normally need to be downloaded and executed locally.
  5. Last but not least Oracle now offers a cloud application platform with the name Java in it. The cloud service is essentially a particular type of Java application server offered as a platform on which applications can be deployed.

It is baffling to me that so many different products associated with the same company and community have fallen under the same name.

 [1]: http://en.wikipedia.org/wiki/Java_(programming_language)
 [2]: http://en.wikipedia.org/wiki/Java_Virtual_Machine
 [3]: http://en.wikipedia.org/wiki/Java_Class_Library
 [4]: http://www.oracle.com/technetwork/java/index-jsp-141438.html
 [5]: http://nakedsecurity.sophos.com/2012/08/30/how-turn-off-java-browser/
 [6]: https://cloud.oracle.com/java
 [7]: http://arstechnica.com/security/2014/04/oracles-java-cloud-service-open-to-code-execution-hacks-researchers-warn/