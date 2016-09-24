---
title: 'jOOQ Framework - A Java SQL DSL'
author: MichaelHughes
layout: post
date: 2014-04-04
url: /2014/04/03/jooq-framework-a-java-sql-dsl/
categories:
  - Data
tags:
  - databases
  - java

---
After reviewing higher level [JPA 2.0][1] ab­strac­tions like [Ec­pliseLink][2] and [TopLink][3] for tieing a service ap­pli­ca­tion to a database I chose to use [jOOQ][4] because of its flex­i­bil­i­ty and ability to provide tight control over the SQL being executed in the ap­pli­ca­tion’s data layer.

 [1]: http://en.wikipedia.org/wiki/Java_Persistence_API
 [2]: http://www.eclipse.org/eclipselink/
 [3]: http://www.oracle.com/technetwork/middleware/toplink/overview/index.html
 [4]: http://www.jooq.org/

<!--more-->

I’ll be direct–I don’t like it when a framework completely hides how data is trans­ferred to and from a data store. On the other hand, however I don’t like writing lots of boiler plate code.

Usually the first of the two gripes above wins out over the secondary gripe–I’d rather write more boiler plate in return for greater control. Sometimes the first gripe wins out because of my desire to control the full process by which data moves from a database to an ap­pli­ca­tion, other times the gripe wins out because the in­ter­ac­tion of ap­pli­ca­tion and database are too complex for simple ap­pli­ca­tion object<->database table re­la­tion­ships.

My current project is an example of the latter–our database model is moderately complex and correctly rep­re­sent­ing the re­la­tion­ship between entities means we don’t have simple re­la­tion­ships between tables and (lists of) objects. In some cases objects for clients of our ap­pli­ca­tions are created from select pro­jec­tions of a couple different tables–in other cases objects are persisted in the database by means of stored procedures that define ETL processes in SQL.

Under the auspice of increasing pro­duc­tiv­i­ty I tried to use EclipseLink only to find out that it doesn’t do something as simple as fully integrate stored procedures. Yes I am aware that EclipseLink _can_ call a stored procedure, but it is clearly a 1/4 baked throw-on addition to the tool. Bluntly put there are bulk data operations that a RDBMS will always be better at than ap­pli­ca­tion code, that is why stored procedures exist.

I was pleasently surprised when I found jOOQ, which is es­sen­tial­ly a [DSL][5] im­ple­men­ta­tion of SQL in Java. With jOOQ I can write efficient SQL queries whose inputs and outputs can by type checked by the Java compiler…and it lets me ef­fort­less­ly call a store procedured. Amazing. A couple examples are in order:

<div>
  <pre>UserRecord userRecord = factory.select(Tables.USER.USER_ID)
                                .from(Tables.USER)
                                .where(Tables.USER.USER_NAME.equal(user.getName()))
                                .fetchAny();</pre>
</div>

Beautiful. This was a simple example though, one easily supported by something like EclipseLink. What about calling a store procedure?

<div>
  <pre>String outputMessage = Routines.deleteUser(factory, UInteger.valueOf(userID));</pre>
</div>

Also beautiful. This is deserving of ex­pla­na­tion though: This particular procedure takes as input an unsigned integer (which is rep­re­sent­ed by a long in our ap­pli­ca­tion) and has a single output VARCHAR parameter. jOOQ un­der­stands how to route parameters in and out of the store procedure and generates a clean, easy to use interface in Java.

Un­for­tu­nate­ly the best examples I have of jOOQ are also those specific this ap­pli­ca­tion–but imagine logic where the ap­pli­ca­tion needs to insert a large volume data into a temporary table, then process the data with a procedure, and then finally return a value based on a project from two joined tables. jOOQ makes the logic from my ap­pli­ca­tion possible, other frameworks…don’t.


 [5]: http://en.wikipedia.org/wiki/Domain-specific_language