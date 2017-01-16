---
title: 'Repository pattern overuse: The double repository with Microsoft Entity Framework and other ORMs'
author: MichaelHughes
layout: post
date: 2015-01-04
url: /2015/01/04/repository-pattern-overuse-the-double-repository-with-microsoft-entity-framework-and-other-orms/
categories:
  - Software Design
tags:
  - design
  - rant

---
Martin Folwer’s blog and website is a common reference for modern design pattern so we will start with his glossary definition for the [repository pattern][1]. The linked article contains more detail, but in short a ‘repository’ acts as an data store layer on top of the storage system and provides (more) object oriented methods for accessing said system. Unfortunately, something I have also seen is the over application of this pattern in combination with RDBMS [ORM][2]s leading to contorted code with unnecessary interfaces and classes. This post covers what I have seen in some projects in order to provide some of the <a href="http://blog.codinghorror.com/code-smells/" target="_blank">code smells</a> to avoid.

 [1]: http://martinfowler.com/eaaCatalog/repository.html
 [2]: http://en.wikipedia.org/wiki/Object-relational_mapping

<!--more-->

ORMs are often used to mediate between the application and database system in non-exotic (think business process applications) relational database backed applications. An ORM like Entity Framework or Hibernate generates SQL to interact with a relational back-end and exposes object collections to the application. The object collections exposed by ORMs like Hibernate are also managed in the application’s memory in order to help manage things like transactions and speed up interactions with the database. The prior descriptions should sound familiar since these ORMs are implementing the repository pattern for the application.

[<img class="alignnone wp-image-316" src="//codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Diagram-300x70.png" alt="ORM Diagram" width="400" height="94" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Diagram-300x70.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Diagram.png 631w" sizes="(max-width: 400px) 100vw, 400px" />][3]

There are legitimate reasons for wrapping an ORM inside of another set of repositories. An oft cited reason for wrapping an ORM is to improve the testability of application logic that depends on querying the data layer. Fortunately, with recent iterations of Hibernate and Entity Framework testing application logic has become much easier than it was previously. In some cases though it can still be valid to create a veneer over the ORM in order to make mock creation easier.

A slightly less legitimate reason for applying the repository pattern over an ORM would be in order to (attempt to) make it easy to switch ORMs or data storage systems. Conceptually this seems like a good idea, but often the data model for the application is stored in one of these systems making it difficult to switch systems.

Unfortunately on applications that I have worked on, it appears that the applications’ ORMs were wrapped in a set of repositories because it seemed like a “good thing to do” ™. The result of this wrapping often yields an application that looks likes the following:

[<img class="alignnone wp-image-317" src="//codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Repository-Diagram-300x71.png" alt="ORM Repository Diagram" width="400" height="94" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Repository-Diagram-300x71.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Repository-Diagram.png 631w" sizes="(max-width: 400px) 100vw, 400px" />][4]

I’ve never been fond of this design because it promotes creating access classes with single line methods.

<pre>// Java / C# pseudocode
public class MyDomainTypeVeneerRepository {
    private SomeType actualRespository;
    public MyDomainType get(long id) {
        return this.actualRepository.getMyDomainTypeEntitySet().get(id);
    }
}
</pre>

The wrapped repositories also make transaction management more difficult which is an even more problematic result than just a proliferation of single line veneer methods. In many implementations I have seen each repository will instantiate its own ORM context which means that application logic interacting with multiple repositories is no longer transactional. There is a way of ensuring that application logic does remain transactional by using the [unit of work pattern][5], but this is an additional complexity which I have not often seen done.

The final thing which has been present in some projects is an attempt to over generalize existing ORM repositories. This approach often includes the use of templates or generics in abstract classes in order to create a single interface to many repositories defined by the ORM.

<pre>// Java / C# pseudocode
 public class AbstractVeneerRepository&lt;TKey, TEntity&gt; {
     private void someUtilityMethod() {
     …
     }
     public abstract TEntity get(TKey id);
     public abstract void delete(TKey id);
     …
 }</pre>

While the above code doesn’t itself lead to anything terrible, it does essentially re-implement functionality that is already written into Entity Framework’s and Hibernate’s base classes. The problem with the generic repository and the single line veneer repositories is that they don’t add anything to the application other than more classes and interfaces to manage. The above methods are _not_ inherently evil, they make sense in cases where the application repositories contain significant logic (and possibly use the unit of work pattern). In many cases though the application’s repositories consist of single line adapter methods that do not do anything beyond pass calls onto the next layer down.

To summarize the collected code smells:

  * The system wraps basic ORM methods but then still leaves access and filtering of objects to the client code; this is particularly evident when Entity Framework based repositories return <a href="http://msdn.microsoft.com/en-us/library/vstudio/system.linq.iqueryable%28v=vs.110%29.aspx" target="_blank">IQueryable</a> objects.
  * The methods in the wrapping repository contain no logic of themselves and are merely single line call-throughs to the underlying ORM
  * Client code cannot use transactions due to use of multiple repositories each of which instantiates its own ORM context

In case of the above issues it may be best to remove the wrapping repositories or, alternatively, create a more substantial abstraction layer, possibly using the unit of work pattern with the repository pattern.

On its own the repository pattern is a good approach to handling the interaction between application logic and data systems. Popular ORMs like Entity Framework do a large part of the heavy lifting necessary to implement the repository pattern for an application. Creating an abstraction on top of an ORM is not necessary a bad idea, but it’s important to do so thoughtfully in order to not create a leaky abstraction or add complexity to the application without justification.


 [3]: //codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Diagram.png
 [4]: //codinginthetrenches.com/wp-content/uploads/2015/01/ORM-Repository-Diagram.png
 [5]: http://www.asp.net/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application