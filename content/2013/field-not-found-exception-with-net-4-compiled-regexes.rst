---
title: Field not found exception with .net 4/4.5 compiled regexes
date: 18.03.2013
author: Michael Hughes
tags: [tips, .net, Windows]
---

Summary
    The following is a short tip on an issue I ran into earlier today when deploying
    a .net application that depended on precompiled regular expressions stored in a DLL.
    The issue caused the application to throw a System exception about a missing field
    in the regular expression DLL: Exception: Field not found: 'System.Text.RegularExpressions.Regex.internalMatchTimeout'.
    The following post offers a partial work around and some background information.

----

In .net one way to improve the performance of regular expressions (regexs) that will be used many times (think millions of times)
is to precompile_ them into a regex assembly. The assembly is then included as a reference in the client application 
which can then use the precompiled regular expressions as normal.

Today I ran into an error with precompiled expressions that I hadn't seen before. The application and regular expression compilation
library were built targeting .net 4 and deployed onto a Windows server with .net 4 installed. The application ran normally on
the build host, but failed with a field not found exception on the server. The missing field was the *internalMatchTimeout_* field
which was introduced in **.net 4.5.** 

The issue was not resolved by reparing the .net 4 installation on the server nor by redeploying the application. Subsequent research
found that the build host had .net 4.5 installed while the server only had .net 4. Additionally the `installation of
.net 4.5 replaces .net 4 assemblies`_ instead of installing side-by-side. The only explanation I could determine was that the regex assembly
was being built for .net 4.5 since the build host had .net 4.5 installed locally. The final solution (unfortunately) was to
upgrade the server to .net 4.5 after which the application ran normally.

.. _precompile: http://msdn.microsoft.com/en-us/library/d635t0w8(v=vs.100).aspx
.. _internalMatchTimeout: http://msdn.microsoft.com/en-us/library/system.text.regularexpressions.regex.internalmatchtimeout.aspx
.. _installation of .net 4.5 replaces .net 4 assemblies: http://msdn.microsoft.com/en-us/library/5a4x27ek.aspx
