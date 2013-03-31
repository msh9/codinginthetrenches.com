---
title: Thoughts on SQL Server in AWS RDS
date: 31.03.2013
author: Michael Hughes
tags: [sql server, aws, dev practices]
---

Summary
    Today's post is a short discussion of my experiences with Microsoft
    `SQL Server 2008R2`_ running in the Amazon Web Services
    `Relational Database Service`_ (RDS). 

I recently rolled off a project that used SQL Server for a couple different
database driven web applications, both applications were internally facing (not 
publicly available). The project was my first experience with Amazon's relatively
new PaaS_ offering, RDS. In short RDS manages the hardware and software
provisioning for a database, exposing a single end point for the db. Highlights
of RDS include the ability to do point-and-click scheduling of `point in time`_
backups (and restores) and, of course the ability easily change instance size. 

For one of the web applications the ability to scale the instance running the
database turned out to be a boon to the project. The application in question
had several CPU intensive batch operations which overwhelmed the medium instance
initially chosen for the database. After reviewing our options that instance was
scaled to a 4X Large instance which handled the application nicely.

RDS also has it's limitations though, in particular there is no access to the underlying
operation system. When an application is operating normally there's no need
to access the system underneath the database. The lack of access can be problematic
for solving certain problems though. For example due to a miscalculation in how much space
a process would need one of the database ran out of disk space (the db file consumed ~60%
of the disk and the transaction log filled the rest). The process failed when the transaction 
log couldn't grow because of the full disk. After the process failed the db attempted
to rollback the transaction which involved writing out further entries to the transaction
log, which also failed because there was no disk space. We ended up restoring an old snapshot
of the database and continuing on our way, but restoring an old snapshot was a clunky solution
at best. Had there been access to the server it would have been possible to take the database
offline and truncate the large log file without resorting to a much slower snapshot restore.

Another issue with RDS is specific to SQL Server. The space available to a MS SQL Server instance
is **not** scalable. Once a SQL Server RDS instance is created the space available to it is
set in stone. Our project's requirements changed somewhat frequently, usually in the direction of
greater amounts of data which meant that we had to increase the size of our database instance's a
couple of times. It should be noted that RDS backups (snapshots or otherwise) are *tied to a specific instance.*
Data cannot be restored from a backup of one instance onto a different larger instance.
To transition data to a larger instance I created a linked database object on the new instance pointing
at the old instance and used t-sql to transfer the data. The solution worked, but again it was
more clunky than just restoring data onto a new instance.

My other complaints about SQL Server are more minor and mostly relate to certain parts of
management studio not behaving as expected due to permissions errors.

Even with the above comments in mind on the whole RDS worked well for the project. The performance
of the instances was reasonable and pricing was also reasonable once we locked into 1 year reserved
instances. The use of RDS made sense for this project since the rest of the application was
also hosted in AWS-infrastructure management for the applications could all be done from the AWS management
console. If I could go back in time though I might advise myself to investigate the use of `Oracle 11g`_ on RDS
instead of SQL Server. For the purposes of the project the two DBMS are roughly equivalent and 11g 
on RDS supports size scaling (and is cheaper too).

*Cliff notes*

Pros:

#. Performaned as expected
#. Fantastically easy to setup and administer (almost too easy actually)
#. `Security groups`_ make it really easy to create a firewall that restricts access to databases
#. Easy to scale hardware when needed
#. Relatively inexpensive in the context of enterprise applications

Cons:

#. No size scaling
#. Lack of access to base system can make diagnosis and resolution of certain problem classes more difficult
#. Snapshot are tied to the instance (why this is makes sense from a technical perspective, I'm just hoping against hope for more flexibility)

.. _SQL Server 2008R2: http://msdn.microsoft.com/en-us/library/bb500435%28v=sql.105%29.aspx
.. _Relational Database Service: http://aws.amazon.com/rds/
.. _PaaS: http://en.wikipedia.org/wiki/Platform_as_a_service
.. _point in time: http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html
.. _Security groups: http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html
.. _Oracle 11g: http://www.oracle.com/technetwork/database/enterprise-edition/overview/index.html
