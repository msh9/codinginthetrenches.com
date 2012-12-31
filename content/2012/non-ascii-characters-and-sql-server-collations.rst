---
title: Non-ascii characters and SQL Server Collations
date: 27.12.2012
author: Michael Hughes
tags: [Windows, Database, T-SQL, SQL Server]
---

Summary
    On a recent project I discovered that in the default US SQL Server collation Microsoft
    has implemented an unexpected (to me) portion of the `Unicode Standard`_. The standard
    states_ that in Unicode certain characters, such as 'ß' and 'ss' are equivalent. For the
    project we needed those characters to not be equivalent, what follows is a description of a work
    around and associated pitfalls.

----

Collations_ contain, among other things comparison rules for text stored in character fields
in SQL Server. One such comparison rule determines whether characters are equivalent, by default
the following are equivalent 'straussberg' and 'straußberg', try it with the following T-SQL:

.. sourcecode:: sql

    SELECT CASE WHEN N'staussberg' = N'straußberg' THEN 1 ELSE 0;

At this point it is important to note that in some (many?) situations this may be desired behavior.
Quite possibly from the perspective of a German user typing 'straussberg' into his or her keyboard this
is correct behavior. For the client of my project though this was not desired behavior and the two
words needed to be handled differently. The collation needs to be changed to alter how SQL Server 
compares strings and thus the result of evaluating the above T-SQL. In addition to localized
collation rules, SQL Server also ships with a binary collation. `Binary collations`_ in SQL Server
provide comparison rules that operate on the code points of the characters in strings.

Since setting the binary collation to be the default collation for the entire database is not ideal, we
only set the binary collation to affect the desire text fields. Setting the collation of field can be done
by the following T-SQL which defines a table:

.. sourcecode:: sql

CREATE TABLE MyTable (
    CharacterColumn NVARCHAR(10) COLLATE Latin1_General_BIN
);

**Aside**: "code point" refers to number assigned to every character in a character encoding. Computers
need a way to numerically refer to characters to work with them. Different encoding systems may assign
different values to the same character.

Since 'ß' and 'ss' have (very) different code points the above SQL will evaluate to 0, the desired
behavior for my project. There are a number of pitfalls to be aware of though when using binary collations:

* Lexical_ sorting just went out the window: Collations are normally locale specific and provide lexically correct
  sorting rules for that given locale, e.g. A > B. The sorting rules in a binary collection are based on code
  points which means that in some, or many cases we'll get B > A.
* The default SQL Server collation makes comparisons case insensitive, e.g. a = A. Binary collations are case
  sensitive, this may not be desired behavior and is hard to work around.
* Normally you would not want to set the database server's default collations to a binary collation. In this case
  T-SQL allows specific fields of a entity to be set to different, non-default collation. The collation of a
  field, **however** may not be changed if the field is a member of an index or the target of a foreign key. Changing
  the collation of a field that is in an index or in FK relationship means dropping and recreating the indices, keys,
  tables associated with the field.


.. _Lexical: http://en.wikipedia.org/wiki/Lexicographical_order
.. _Binary collations: http://msdn.microsoft.com/en-us/library/ms143350%28v=sql.105%29.aspx
.. _Collations: http://en.wikipedia.org/wiki/Collation
.. _Unicode Standard: http://www.unicode.org/standard/standard.html
.. _states: http://www.unicode.org/reports/tr18/#RL1.5
