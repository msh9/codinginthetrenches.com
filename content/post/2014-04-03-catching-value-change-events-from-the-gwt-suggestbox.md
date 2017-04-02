---
title: Catching value change events from the GWT SuggestBox
author: MichaelHughes

date: 2014-04-04
url: /2014/04/03/catching-value-change-events-from-the-gwt-suggestbox/
categories:
  - Uncategorized
tags:
  - gwt
  - web services

---
[Google Web Toolkit][1] (GWT) is a useful framework for building asyn­chro­nous web ap­pli­ca­tions. Among other features, GWT handles the Javascript (hereafter JS) engine dif­fer­ences between various versions of Internet Explorer, Chrome, and Firefox, can handle UI layout, and comes with a number of pre-built in­ter­ac­tive components.

<!--more-->

One of GWT’s primary feature is generating JS from Java code, JS that handle events, user in­ter­ac­tions, or any number of other ap­pli­ca­tions. The short summary of GWT is that Google has im­ple­ment­ed a portion of the Java Runtime En­vi­ron­ment in JS, built a cross-compiler for Java to JS, and has built up reusable libraries that simplify client server com­mu­ni­ca­tion for web ap­pli­ca­tions.

The purpose of this post though is to be brief and focused. GWT provides an event system that will execute code based on user in­ter­ac­tion with the toolkit’s pre-built UI components. One example of a widget which we may wish to execute code based upon is the [GWT SuggestBox][2] widget, the widget is a text box with built in [in­cre­men­tal search][3] ca­pa­bil­i­ties or in other words it has the ability to make completion sug­ges­tions as the user types input. Recently I worked on a project where I needed to know when the user had **either** selected a choice from the widget or finished typing input and had moved on to in­ter­act­ing with something else. Un­for­tu­nate­ly at time of writing the SuggestBox widget has couple bugs associated with it.

There are two GWT bugs relevant to this blog post, [issue 3958][4] and [issue 1634][5]. When a user selects a SuggestBox suggestion as his or her input, the [Val­ueChangeEvent][6] is fired _before_ the value of the change is stored. The Val­ueChangeEvent object is a generic class that is in­stan­ti­at­ed with a type for the kind of event data that it will transfer. In the case of the SuggestBox, when handled the Val­ueChangeEvent object should contain the string value of the new text in the SuggestBox. Instead the Val­ueChangeEvent always contains the previous value of the SuggestBox instead of the user’s new choice. There is a way around issues 3958 and 1634 though. In addition to an event being fired whenever the value of the SuggestBox changes, an event is also fired the user makes a selection. The following work around uses the selection event to fire a Val­ueChange event and is mostly thanks to “happyi…@gmail.com” and “jakub.marton” in the issue 1634 thread. The issue with their existing workaround is that the text typed in by the user _before_ a suggestion is selected is also fired as a Val­ueChangeEvent. Ideally we only want to fire a Val­ueChangeEvent when the user is actually done with the SuggestBox, i.e. the box has lost the browser’s focus. My work around comes in two parts, first the part from “jakub.marton”, the part that fires the Val­ueChangeEvent.

<pre>inputBox.addSelectionHandler(

  new SelectionHandler() {

    @Override

    public void onSelection(SelectionEvent event) {

      String selected = event.getSelectedItem().getReplacementString();

      ValueChangeEvent.fire(box, selected);

    }

  }

);</pre>

The second part of the solution is the event handler. I’ll first show the code then discuss it:

<pre>new ValueChangeHandler() {

  @Override

  public void onValueChange(ValueChangeEvent event) {

    Widget eventSource = (Widget)event.getSource();

    if(inputBox == eventSource && //check if the object that sourced the event is referentially the object we want to handle events for

        !((DefaultSuggestionDisplay)inputBox.getSuggestionDisplay()).isSuggestionListShowing()) {

      //do something with the new value / react to the value change here

    }

  }

};</pre>

The above code creates an anonymous class to handle a Val­ueChange event. I make a couple of as­sump­tions, first, everything that we will handle events for inherits from the [Widget][7] base class and second, the SuggestBox is using the GWT [De­fault­Sug­ges­tionDis­play][8] instead of a custom display. My as­sump­tions are made apparent by the explicit casts to Widget and De­fault­Sug­ges­tionDis­play re­spec­tive­ly in the above code. The key piece of code is the cast to De­fault­Sug­ges­tionDis­play which defines the is­Sug­ges­tion­List­Show­ing() method. In short if is­Sug­ges­tion­List­Show­ing() returns true then the user has entered text in the box (and thus a Val­ueChange event has been fired), but we should ignore it because the user is still in­ter­act­ing with the SuggestBox and may make a choice.

 [1]: http://code.google.com/webtoolkit/overview.html
 [2]: http://google-web-toolkit.googlecode.com/svn/javadoc/latest/com/google/gwt/user/client/ui/SuggestBox.html
 [3]: http://en.wikipedia.org/wiki/Incremental_search
 [4]: http://code.google.com/p/google-web-toolkit/issues/detail?id=3958
 [5]: http://code.google.com/p/google-web-toolkit/issues/detail?id=1634
 [6]: http://google-web-toolkit.googlecode.com/svn/javadoc/latest/com/google/gwt/event/logical/shared/ValueChangeEvent.html
 [7]: http://google-web-toolkit.googlecode.com/svn/javadoc/latest/com/google/gwt/user/client/ui/Widget.html
 [8]: http://google-web-toolkit.googlecode.com/svn/javadoc/latest/com/google/gwt/user/client/ui/SuggestBox.DefaultSuggestionDisplay.html