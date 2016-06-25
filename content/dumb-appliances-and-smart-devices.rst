Dumb appliances and smart devices
#################################
:date: 2014-05-13 17:24
:author: MichaelHughes
:category: Uncategorized
:tags: philosophy
:slug: dumb-appliances-and-smart-devices
:status: published

I saw an advertisement for a 'smart' laundry machine yesterday. The
washer was smart because it came with the capability to connect to a
wireline network and phone back to the manufacturer for updates and
service information. I have seen similar smart refridgerators that also
can connect to a local network for internet access. As an idea this
seems great, it's all part of the `internet of
things <http://en.wikipedia.org/wiki/Internet_of_Things>`__ concept
where our devices are all intelligently interlinked. I'm going to make
the argument that smart appliances unlike smart devices is a bad idea.

Smart personal devices are great phones, glasses, and wearable
electronics all have made innovative leaps in the last few years and are
expected to continue that course `this
year <http://bits.blogs.nytimes.com/2013/12/29/disruptions-coming-in-2014-extremely-smart-watches-and-wearable-tvs/?_php=true&_type=blogs&_r=0>`__.
Modern smart phones can and do, do many things that were not previously
possible and have in turn enabled users to have more connected mobile
lives for `better or
worse <http://online.wsj.com/news/articles/SB124986371466018299>`__).

|phones|

A chest freezer on the other hand is still a chest freezer.

|A chest freezer|

I do not mean to disparage the major home appliance industry, there has
been a lot of innovation in the space over the last several years.
Modern refrigerators are substantially `more
efficient <http://needtoknow.nas.edu/energy/energy-efficiency/refrigeration/>`__
and featureful in terms of food storage than older models. Similarly
modern laundry machines now incorporate steam cleaning techniques to
help reduce wrinkling in clothing . There is a trend here though,
appliances have gotten better by getting better at their primary
purpose, lengthening the shelf life of food and cleaning fabrics better
in my examples respectively.

It is also worth noting that household appliances fall into the `durable
goods category <http://en.wikipedia.org/wiki/Durable_good>`__. A good
washing machine has an average lifespan of `7-10
years <http://www.whitegoodstradeassociation.org/index.php/for-public-mainmenu-43/how-long-should-it-last->`__,
and possible a lot more while the average smartphone in the US is kept
`for 21
**months** <http://mobilefuture.org/newsroom/new_report_finds_u-s-_consumers_driving_adoption_of_newest_wireless_handset/>`__.
The difference in life cycles between a smart device and an appliance is
important. One way of thinking about the issue is that support for most
computer operating systems only extends to the last couple of releases
whereas the warranty for washers is 10 years. The difference in support
cycles means that once 'smart' features released over 8 years ago are
still warranted to a lessor or greater extent in washers whereas an 8
year old smart device has been completely forgotten.

Fundamentally internet connected home appliances seem like a bad idea
because the somewhat vague benefits do not outweigh the costs of
potentially adding another large set of unsupported, unpatched, devices
to home networks and at a broader level the internet. My belief is based
more than anything else on the idea of minimizing `attack
surface <http://www.sans.edu/research/security-laboratory/article/did-attack-surface>`__
into home networks. Each additional, different device on a network that
has access to public networks is another surface by which infections can
spread. By not making devices like washing machines network accessible
or even attempt to reach network services we avoid adding another way by
which a home network can become compromised. On another level it seems
inappropriate for washing machines and refrigerators to be individually
networked since there may be a better model for managing home
appliances.

Coming back to dumb appliances versus smart devices, I actually agree
with the idea that some major appliance manufactures have taken, just
not the approach. A better safer approach would be to expose information
from appliances to a smart device rather than a network as whole. A
model that has appeared in the last couple years involves more limited
devices like a fitness band or a watch synchronizing with more capable
devices like a laptop or phone. The limited device carries out a
specific task efficiently (whether that be a measuring steps taken in a
day or washing clothes) and then connects to a more frequently updated
less specialized device like a phone. Like a stationary fitness band a
laundry machine could connect to an in house computer using Bluetooth
and report the status of the washer, whether it needs an update, and the
current wash cycle without any direct internet access.

So what's the conclusions? I love technology, I especially
love networked technology that allows me to get data from a wrist band
to a desktop on the other side of the world. I don't, however like the
idea of more durable, less frequently updated goods **also** being
networked with the rest of the world.

.. |phones| image:: http://codinginthetrenches.com/wp-content/uploads/2014/05/phones.jpg
   :class: aligncenter wp-image-139 size-full
   :width: 839px
   :height: 445px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/05/phones.jpg
.. |A chest freezer| image:: http://codinginthetrenches.com/wp-content/uploads/2014/05/chest-freezer.jpg
   :class: aligncenter wp-image-138 size-full
   :width: 1900px
   :height: 1621px
   :target: http://codinginthetrenches.com/wp-content/uploads/2014/05/chest-freezer.jpg
