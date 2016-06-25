Of null VARCHAR fields and empty strings
########################################
:date: 2014-12-01 02:26
:author: MichaelHughes
:category: Data
:tags: databases, design
:slug: of-null-varchar-fields-and-empty-strings
:status: published

How to represent a blank user input is a reasonably innocent design
question. On a couple occasions though I have been bitten by systems
that have been designed without considering that question seriously.
Maybe it's a clear choice to some, but today's post makes an argument
that in representing an empty input as a null is better than using a
empty or blank string.

Today's post is about how represent nothing.

[caption id="attachment\_281" align="aligncenter" width="179"]\ |A black
box| The box represents the emptiness of input forms implemented in
PHP.[/caption]

Although there are lots of cases where an application may take input,
handling (human) user input is one of the most interesting because it's
often highly varied. Recently I worked with a organization that has
volunteers enter the manufacturer name of the computer they use for an
activity. For a computer made by Dell Inc. the data entered by those
volunteers ranged from "Dell Inc." to "Dell Inc" to "Dell" to "dell" and
finally, also "". Each user's input was then stored in a database along
with other user inputs. Since the user's inputs were free form text
VARCHAR columns were used to store them. We'll ignore the `data
normalization <http://en.wikipedia.org/wiki/Data_normalization>`__
issues involved in this kind of data for today and instead just focus on
what happens when the input is "".

The first issue with storing unused inputs as "" is that it makes
determination of intent more difficult. Take the two following
side-by-side tables:

+------------+
| MyColumn   |
+------------+
| ""         |
+------------+
| NULL       |
+------------+

+------------+
| MyColumn   |
+------------+
| ""         |
+------------+
| ""         |
+------------+

In the first table it is possible to tell the difference between one row
which has no data for ‘MyColumn’ and the other row which has no data for
the column. In a number of cases there may be no significant difference
to the end user between empty and non-existent, but the point is to
**not have to make that distinction until the last possible moment**.

The other thing I noticed was using empty field values in fields used as
join columns. Going back to the organization I worked with they did not
have a separate manufacturer identifier and used the VARCHAR
manufacturer column to join against another table. The biggest danger
with this approach is that if blank rows are not explicitly excluded
from the join then a significant number of incorrect records may be
returned.

The `linked GitHub
gist <https://gist.github.com/msh9/8e75f2d2c66d939f7701>`__ has T-SQL
(for SQL Server) to create a database and an example query that can be
used to experiment with blanks in join conditions. With appropriate
indices there is not a huge difference between

::

    from table t 
    inner join t2 
    on t.id = t2.foreign_key

and

::

    from table t 
    inner join t2 
    on t.some_varchar = t2.some_varchar

or

::

    from table t 
    inner join t2 
    on t.some_varchar = t2.some_varchar
    where t.some_varchar <> ''

The first two of three SQL fragments above look better to my eye by not
having to accommodate the overloaded meaning of '' which can be
accomplished by storing the absence of user input as NULL and letting a
blank just be a blank.

.. |A black box| image:: http://codinginthetrenches.com/wp-content/uploads/2014/11/blackbox.png
   :class: wp-image-281
   :width: 179px
   :height: 179px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/11/blackbox.png
