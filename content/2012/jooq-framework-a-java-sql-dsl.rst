---
title: jOOQ Framework - A Java SQL DSL
date: 25.10.2012
author: Michael Hughes
tags: [SQL, Java, Open Source, Rave]
---

Summary
    After reviewing higher level `JPA 2.0`_ abstractions like EcpliseLink_ and TopLink_ for tieing a service application to a database
    I chose to use jOOQ_ because of its flexibility and ability to provide tight control over the SQL being executed in the application's
    data layer.

----

I'll be direct--I don't like it when a framework completely hides how data is transferred to and from a data store. On the other hand,
however I don't like writing lots of boiler plate code.

Usually the first of the two gripes above wins out over the secondary gripe--I'd rather write more boiler plate in return for greater control. 
Sometimes the first gripe wins out because of my desire to control the full process by which data moves from a database to an application, other
times the gripe wins out because the interaction of application and database are too complex for simple application object<->database table relationships.

My current project is an example of the latter--our database model is moderately complex and correctly representing the relationship between
entities means we don't have simple relationships between tables and (lists of) objects. In some cases objects for clients of our applications
are created from select projections of a couple different tables--in other cases objects are persisted in the database by means of stored
procedures that define ETL processes in SQL.

Under auspice of increasing productivity I tried to use EclipseLink only to find out that it doesn't do something as simple as fully integrate
stored procedures. Yes I am aware that EclipseLink *can* call a stored procedure, but it is clearly a 1/4 baked throw-on addition to the tool.
Bluntly put there are bulk data operations that a RDBMS will always be better at than application code, that is why stored procedures exist.

I was pleasently surprised when I found jOOQ, which is essentially a DSL_ implementation of SQL in Java. With jOOQ I can write efficient SQL
queries whose inputs and outputs can by type checked by the Java compiler...and it lets me effortlessly call a store procedured. Amazing. A
couple examples are in order:

.. sourcecode:: java

    UserRecord userRecord = factory.select(Tables.USER.USER_ID)
                                    .from(Tables.USER)
                                    .where(Tables.USER.USER_NAME.equal(user.getName()))
                                    .fetchAny();


Beautiful. This was a simple example though, one easily supported by something like EclipseLink. What about calling a store procedure?

.. sourcecode:: java

    String outputMessage = Routines.deleteUser(factory, UInteger.valueOf(userID));

Also beautiful. This is deserving of explanation though: This particular procedure takes as input an unsigned integer (which is represented
by a long in our application) and has a single output VARCHAR parameter. jOOQ understands how to route parameters in and out of the 
store procedure and generates a clean, easy to use interface in Java.

Unfortunately the best examples I have of jOOQ are also those specific this application--but imagine logic where the application needs to insert
a large volume data into a temporary table, then process the data with a procedure, and then finally return a value based on a project from 
two joined tables. jOOQ makes the logic from my application possible, other frameworks...don't.

.. _JPA 2.0: http://en.wikipedia.org/wiki/Java_Persistence_API
.. _jOOQ: http://www.jooq.org/
.. _EcpliseLink: http://www.eclipse.org/eclipselink/
.. _TopLink: http://www.oracle.com/technetwork/middleware/toplink/overview/index.html
.. _DSL: http://en.wikipedia.org/wiki/Domain-specific_language
