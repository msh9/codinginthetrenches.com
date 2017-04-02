---
title: Loading a Cocos Studio scene into cocos2d-x 3.4/3.5
author: MichaelHughes

date: 2015-04-25
url: /2015/04/25/loading-a-cocos-studio-scene-into-cocos2d-x-3-43-5/
categories:
  - Projects
tags:
  - c++
  - fun
  - tips

---
In the last few weeks I have been slowly learning about the [cocos2d-x][1] framework. cocos2d-x is a C++ based cross platform game engine. The makers of the engine also produce a UI creation GUI called Cocos Studio. Today&#8217;s post is a brief one about loading scenes from Cocos Studio into a cocos2d-x based application.

[1]: http://www.cocos2d-x.org
  
<!--more-->

Cocos Studio can output created projects in a couple different formats. I chose to export in the binary format that uses the `.csb` file extension. After doing some web searches I found that there is some confusion in regard to how to load a binary scene and register a listener with an element in the scene. The following code has been tested with cocos2d-x v3.4 and 3.5 on Windows and OS X.

The output resource folder from Cocos Studio&#8217;s project export should be placed in a location accessible to the running cocos2d-x application. In my case, I put the generated content in the `Resources` folder in the project directory. I then added the following c++ code inside of a scene class.

```c++
//near the top
#include "cocostudio\CocoStudio.h"
// your other code...
Node* node = CSLoader::createNode("binaryscene.csb");
this-&gt;addChild(node);
auto button = static_cast&lt;cocos2d::ui::Button*&gt;(node-&gt;getChildByName("Some_btn_name"));
if (button != NULL) {
  button-&gt;addClickEventListener([](Ref *) {
    CCLOG("Pressed");
  });
}
```

A couple notes on the above snippet. It is located within a scene class, so that the `this->addChild...` statement adds the loaded scene into the current class. Inside of the Cocos Studio project I label a single button with the name “Some\_btn\_name.” Getting the button object to add a listener involves retrieving it from the node by name and then casting it to a button object which exposes the `addClickEventLisenter` button.

Hope this helps other people getting started with cocos2d-x.

 