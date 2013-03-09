---
title: "SQL Server: Add an identity primary key to a entity"
date: 08.03.2013
author: Michael Hughes
tags: [SQL Server,T-SQL,Tips]
---

Summary
    This is a brief post of how to correctly add an identity column as a primary key
    to an existing table. I know the information definitely applies to SQL Server 2008, 2008R2
    and SQL Server 2012 and may apply to other versions of SQL Server.

----

Earlier this week I needed to convert an entity from using a `natural primary key`_ to a 
`surrogate key`_. To create a surrogate key I added a new identity field to the entity. SQL Server
identities_ made nice primary keys because they automatically increment and ensure that
different tranactions inserting data into the entity will get different values for the 
field.

Unfortunately, identity fields are not automatically populated for existing data in a table. Additionally
identity fields *cannot* be populated by a update statement--they can only be populated by an 
identity insert where the value is specified or by a regular insert where the value is automatically
populated by the database engine. Finally the identity property cannot be added an existing column, it must
be specified when a new field is created.

The following is some example SQL to get the new identity field
populated properly without losing existing information:

.. sourcecode:: SQL

    --sample table
    CREATE TABLE example (
      some_data VARCHAR(10)
      ,some_other_data INT
      ,regular_data BIGINT
      ,CONSTRAINT pk_example_data_other_data PRIMARY KEY(some_data,some_other_data)
    );
    GO
    --now for adding the column
    ALTER TABLE example ADD id INT IDENTITY(1,1);
    GO
    
    ALTER TABLE example DROP CONSTRAINT pk_example;    
 
    DECLARE TABLE @temp(
      some_data VARCHAR(10)
      ,some_other_data INT
      ,regular_data BIGINT
    );

    INSERT INTO @temp
    SELECT *
    FROM example;

    TRUNCATE TABLE example;

    ALTER TABLE example ADD CONSTRAINT pk_example_id(id);

    INSERT INTO eample
    SELECT *
    FROM @temp;

Essentially the method is to extract the row data from the entity and then re-insert the data after
setting up the identity primary key. In the example SQL above a `table variable`_ is used to make the
process speedy--if the example entity contains a large amount of data then a `temporary table`_ would be
more appropriate.

.. _natural primary key: http://en.wikipedia.org/wiki/Natural_key
.. _surrogate key: http://en.wikipedia.org/wiki/Surrogate_key
.. _identities: http://msdn.microsoft.com/en-us/library/ms186775%28v=sql.105%29.aspx
.. _table variable: http://msdn.microsoft.com/en-us/library/ms188927%28v=sql.105%29.aspx
.. _temporary table: http://msdn.microsoft.com/en-us/library/ms174979%28v=sql.105%29.aspx
