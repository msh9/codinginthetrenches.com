Create an object based dual list shuttle with Knockoutjs
########################################################
:date: 2014-05-24 06:56
:author: MichaelHughes
:category: Projects
:tags: design, javascript, tips
:slug: create-an-object-based-dual-list-shuttle-with-knockoutjs
:status: published

A quick tip post on using Knockoutjs to create a certain type of common
web UI component. The short and sweet summary is that I’ll show how to
create a shuttle control using two select boxes that are bound to arrays
of Javascript objects (instead of simple value types) using Knockoutjs.
Before getting to that though I'll provide some background on the
various component used to create the UI.

A shuttle component, AKA two select boxes with buttons that move things
between them is a commonly seen in permission or role assignment
scenarios.

|A shuttle|

The general concept is that one list contains the set of all things that
the user could select, by selecting items in the list of all things and
clicking a button the user can move his or her selection into the other
list. The process of selecting and moving can be repeated in order to
achieve the desired list of assigned items.

Changing gears, Knockoutjs is a javascript framework that makes data
driven web UIs easier to write. At a more technical level Knockout is a
framework which helps client side developers implement the
`MVVM <http://en.wikipedia.org/wiki/Model_View_ViewModel>`__ pattern.
Kockoutjs helps developers by driving the creation, updating, and
deletion of HTML (or more accurately the browser
`DOM <http://en.wikipedia.org/wiki/Document_Object_Model>`__) from a
developer defined set of javascript objects. For example, Knockoutjs can
be used to populate a select dropdown instead of manually populating it
by ‘binding’ the element to an array of strings.

::

    <select multiple size="8" data-bind="options: myList">

See this jsFiddle for a complete example of `how it
works <http://jsfiddle.net/NY7Pq/>`__, and the gist here for `just the
source code <https://gist.github.com/msh9/22ad16537e18a5e50bac>`__.

Knockoutjs has a number of other powerful features and bindings, but
that is better covered by their `tutorials and
manual <http://learn.knockoutjs.com/>`__. Before moving on to how to
create an object based Knockoutjs shuttle though there are two more
things worth covering. One is that Knockoutjs also allows binding
elements to objects. Two is that Knockoutjs also provides a click
binding which allows us to capture the action of a user clicking on
something.

::

    <select multiple='multiple' data-bind="options: myList, optionsText: 'name', optionsValue: 'id' "></select>

Here we've updated the `prior jsFiddle <http://jsfiddle.net/874tV/1/>`__
to include objects and a clickable button and here is the
`gist. <https://gist.github.com/msh9/63c575e043ca2b6800aa>`__

Using the above we can create two select boxes that are each driven by
the contents of an array of objects. We can also wire up a couple
buttons to execute two different functions when clicked.

::

        <select multiple='multiple' data-bind="options: myList, optionsText: 'name', optionsValue: 'id' "></select>
        <select multiple='multiple' data-bind="options: myOtherList, optionsText: 'name', optionsValue: 'id' "></select>

After yet another update to our
`fiddle <http://jsfiddle.net/78jN3/2>`__\ and
`gist <https://gist.github.com/msh9/63c575e043ca2b6800aa#file-twoselects-html>`__ we
now have multiple select boxes.

The above is great and Knockoutjs even provides a binding,
`selectedOptions <http://knockoutjs.com/documentation/selectedOptions-binding.html>`__ to
get the ids of the objects that are selected by the user. Which is
awesome if the intent is to turn around and submit those ids in a form
POST action, unfortunately we want to take a set of selected ids and use
those to move elements from one array of objects to another. Something
we can’t do with Knockoutjs is use a dictionary (where the ids of object
give us direct access to the objects themselves) which leaves us stuck
unless we do something creative.

What can be done though is using the selected id list to find elements
in source object array to remove. Fortunately the\ `remove
method <http://knockoutjs.com/documentation/observableArrays.html>`__ in
Knockoutjs’s array implementation returns the object being deleted from
the array. The object that is removed from the source array is also the
object we want to move into the other array. So the general method for
creating the move action in the shuttle is to:

#. Get the list of selected ids from the source array
#. For each selected id, find the object in the source array with that
   id and remove it
#. Add the returned object to the other select’s source array

Astute observers will note at this point this operation has a worst case
run time which is O(n^2) where *n* is the count of all selectable items
it is also worth pointing out though that in most cases this operation
will be working against fairly small sets of data, keeping the run time
short.

Let's take a look at what the above operation looks like using knockout
observable arrays:

::

    self.moveLeft = function () {
        var sel = self.selectedMyOtherList();
        for (var i = 0; i < sel.length; i++) {
            var selCat = sel[i];
            var result = self.myOtherList.remove(function(item) {
                return item.id == selCat;
            });
            if (result && result.length > 0) {
                self.myList.push(result[0]);
            }
        }
        self.selectedMyOtherList.removeAll();
    }

The above javascript is for moving items from the right select list to
the left select list. We used knockout's selectedOptions binding to
populate the 'selectedMyOtherList' object. When the function is executed
(in response to a button click) the selected items are captured and then
enumerated. During the selected item enumeration we attempt to find each
item in the *right* options list, remove it, and put it into the option
list that drives the box on the *left.* Finally we clear the selected
item object since we don't want knockoutjs to think that items we
removed from the right hand list are still selected.

We can tie this all together now so that the left and right arrow
buttons move items left and right respectively. The `fiddle
here <http://jsfiddle.net/msh9/2QpFr/1/>`__ has a full working example.
The `gist
here <https://gist.github.com/msh9/63c575e043ca2b6800aa#file-completetwoselects-html>`__
has a full single page example you can copy and open locally in a
browser.

I hope this post was helpful since when I initially searched for shuttle
implementations I didn’t find anything immediately useful.

.. |A shuttle| image:: http://codinginthetrenches.com/wp-content/uploads/2014/05/shuttle.png
   :class: aligncenter wp-image-152 size-full
   :width: 426px
   :height: 198px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/05/shuttle.png
