Fun with Kivy & drawing graphics
################################
:date: 2014-04-03 18:51
:author: MichaelHughes
:category: Projects
:tags: fun, python, tips
:slug: fun-with-kivy-drawing-graphics
:status: published

I recently starting using `Kivy <http://kivy.org>`__, a cross platform
Python based native UI framework for a personal project. While searching
forums, documentation, and Stackoverflow I have noticed several posts
with code that takes the hard road to updating an on screen graphic.
This post presents an example of using Kivy's Kv language in combination
with Python to draw an object that rotates in response to user input.

One of the reasons why I picked Kivy for a project was the included
`Kv <http://kivy.org/docs/guide/lang.html>`__ language. Kv provides a
way to declaratively describe how an object looks when drawn on screen.
The Kivy framework can also automatically tie variables used in the Kv
description of an object to code in a python file. The other thing that
Kv does is expose a way to manipulate the underlying OpenGL
`transformation
matrix <http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/>`__.
Using the underlying transformation matrix we can scale, translate (move
within a coordinate space), and rotate an object seen by the end user.

Let's suppose that I want to draw an ellipse that rotates around a
circle anchored to the left side of the screen.  We'll represent the
collection of both the circle and ellipse using a single Kivy
`Widget <http://kivy.org/docs/api-kivy.uix.widget.html>`__.\ |A rotating
ellipse| Here is the definition of the widget code:

.. code:: python

    class MyWidget(Widget):
        """My Widget represents a circle and a rotating ellipse
        """
        angle = NumericProperty(0)

        def on_touch_down(self, touch):
            radians = math.atan2(touch.y - self.parent.center_y, touch.x)
            self.angle = math.degrees(radians)

The class uses the Kivy NumericProperty class to add a 'angle' property
to each instance of MyWidget, we'll see where that value gets used in a
few moments. The class also implements the on\_touch\_down(self,
touch)method which gets called when a user clicks inside of the Kivy
application window.

That's it, the only thing that needs to be done in Python is the
calculation of the angle that the ellipse should rotate to when the user
clicks in the application window.

Now let's look at the Kv for the widget:

.. code:: python

    <MyWidget>:
        canvas.before:
            PushMatrix
            Rotate:
                angle: self.angle
                axis: 0, 0, 1
                origin: self.x, self.y
        canvas:
            Ellipse:
                pos: self.x + 10, self.y - 5
                size: 30, 10
        canvas.after:
            PopMatrix
            Ellipse:
                pos: self.x - 10, self.y - 10
                size: 20, 20

The magic of positioning the objects on screen relative to each other
occurs in the Kv file. The first line associates the Kv definition with
a Python class of the same name. We use the ``canvas.before`` and
``PushMatrix`` elements to push the current OpenGL transformation matrix
onto the matrix stack (saving it in other words). We then rotate the
scene using the angle provided by the Python class (``self.angle``), see
`here for more <http://kivy.org/docs/guide/lang.html#event-bindings>`__
information about how Kivy ties these elements together. After rotating
the scene (in ``canvas``), we draw an ellipse positioned such that it
will rotate around the circle we draw (in ``canvas.after``). The final
things we do are restore the previously saved matrix by calling
``PopMatrix`` and then draw a circle that the ellipse will rotate
around.

When a user clicks in the Kivy app the rotation angle is recalculated in
the Python code and the Kivy drawing code is notified of the change
to the angle attribute. When the angle attribute changes the elements on
screen are redrawn using the new values. There is no need for a timed
update method, no need to calculate (x,y) coordinates in the Python
code, and no need to clear and redraw the screen. All in all Kv (and
Kivy) offer a pretty nifty way of drawing things on screen with minimal
code effort. The `linked gist
has <https://gist.github.com/msh9/9966998>`__\ fully operational source
code for Kivy 1.8.0 and up.

.. |A rotating ellipse| image:: http://codinginthetrenches.com/wp-content/uploads/2014/04/rotate_ellipse.png
   :class: size-full wp-image-108 aligncenter
   :width: 181px
   :height: 184px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/04/rotate_ellipse.png
