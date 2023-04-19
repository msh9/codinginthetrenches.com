---
title: .NET custom cultures and SQLServer Reporting Services
author: MichaelHughes

date: 2014-04-04
url: /2014/04/03/net-custom-cultures-and-sqlserver-reporting-services/
categories:
  - Uncategorized
tags:
  - asp.net
  - localization
  - web services

---
The Re­portView­er control that Microsoft provides to display SQLServer Reporting Services reports in ASP.NET web ap­pli­ca­tions does not support custom cultures. There doesn't appear to be any good, or easy work around for the lack of custom culture support. Fur­ther­more, it appears that the Reporting Services team is intent on continuing to use locale IDs to identify .NET cultures instead of culture names regardless of the preferred method of iden­ti­fy­ing cultures in .NET being by name.

<!--more-->

[Locales][1] are used to identity formatting and languages in a particular region. Microsoft chose to rename locales in the .NET framework as cultures. Locales are shipped with Windows and are used directly by unmanaged code, that is, code which does not run in the .NET CLR. A locale de­fines—a­mong other things—the language and the region that language is spoken in. Locales are used within software glob­al­iza­tion to help determine which trans­la­tions to show, which number formats to use, which time format to use, and etc. Cultures exist within the .NET CLR and are [au­to­mat­i­cal­ly generated][2] from Windows locales. A culture in the .NET platform contains the same in­for­ma­tion as its cor­re­spond­ing Windows locale. For example the .NET culture identified by en-US (English in the United States) contains the same in­for­ma­tion as the locale identified by locale ID 1033 (English in the United States).

I need to pause here to explain the concept of the locale ID and its re­la­tion­ship to locale standards. The concept of glob­al­iz­ing software is not new and there are a number of standards for _how_ to name a particular region and language. The most current standard (to my knowledge) is the [Internet En­gi­neer­ing Task Force's][3] language tags defined in this [RFC document][4], IETF RFC 5646. The [wikipedia article][5] on language tags is also in­for­ma­tive, although only slightly less dense than the original RFC document. Still with me? Okay. _One_ of the standards that con­tributed to and helped to define RFC 5646 was ISO 639-3. The collection of ISO 639-* standards define the familiar en-US, en-GB, es-MX culture names. For reasons I haven't been able to determine, Microsoft decided some time ago to **ad­di­tion­al­ly** define a new naming system for locales on the Windows platform. The Microsoft locale naming system is called the [MS-LCID][6], and it's based on the registered cultures in ISO 639-3. MS-LCID identifies cultures by a number instead of by stan­dard­ized name. Using MS-LCID, the en-US locale is identified by the locale ID (LCID) 1033 and en-GB is identified by LCID 2057. Moving forward several years, when Microsoft released .NET in 2010 with new [glob­al­iza­tion features][7], they rec­om­mend­ed only identifying cultures by name (or in words using the stan­dard­ized naming con­ven­tions) instead of MS-LCID. The result is that MS-LCIDs are still supported, but shouldn't be used, par­tic­u­lar­ly in the .NET world.

Returning to ASP.NET:

In ASP.NET, cultures can, and should be used as part of the glob­al­iza­tion [system][8]. An ap­pli­ca­tion will use cultures associated with the global locations that it should be localized for. For example, if I was developing for the U.S., France, and Spain I would likely use the following cultures: en-US, fr-FR, and es-ES. I would have trans­la­tors localize my ap­pli­ca­tion's text for those cultures and use the trans­la­tions as needed given the desired display culture.

Microsoft cannot, however ensure that Windows will have an ap­pro­pri­ate locale available for every possible language and region that an ap­pli­ca­tion may need to be localized for. For­tu­nate­ly, it is possible to create and install custom cultures on Windows using .NET that behave almost exactly like the locales and cultures shipped with Windows. A major (and prob­lem­at­ic) difference between custom cultures and the cultures shipped with Windows is that all custom cultures are assigned the LCID 4096. Being an internal definition invented by Microsoft, we don't know how to turn custom culture names into unique LCIDs. Ad­di­tion­al­ly, Microsoft's stance is that it should not matter because the way of the future is to use culture names in the .NET framework which _will_ always be unique for custom cultures.

Changing gears again:

Another popular Microsoft product is SQLServer. A feature of SQLServer is SQLServer Reporting Services (SSRS) which enables a developer to design reports that display in­for­ma­tion gathered from queries to a backend database. For context, SSRS' main competitor is SAP Crystal Reports. A lot of the flash and bang ad­ver­tise­ments for SSRS talk about enabling business in­tel­li­gence, but really at its base SSRS is a tool to dy­nam­i­cal­ly generate reports and charts from in­for­ma­tion stored in a database.

A reporting tool by itself is great but where does one want to place reports in the modern web enabled world? Why, in a web ap­pli­ca­tion of course. The reporting services team provides a [Re­portView­er control][9] for the purpose of displaying reports in ASP.NET web ap­pli­ca­tions. The Re­portView­er handles the in­ter­ac­tion with the web service component of SSRS and gracefully displays reports from SSRS as they are generated. The Re­portView­er control also provides facilities to send parameters to SSRS to run a parameterized report. Finally, like other Microsoft enterprise products, Re­port­Serv­er supports glob­al­iza­tion by culture. When the Re­port­Ser­vice control is in­stan­ti­at­ed on a web page it attempts to create a new culture object using the LCID of the current culture being used by the web ap­pli­ca­tion.

And here is where things break. A custom culture in .NET **cannot** be in­stan­ti­at­ed by LCID, attempting to do so yields an exception. A few people have reported the issue to Microsoft over the last couple years on their custom connect website, [here][10], [here][11], and [here][10]. The root issue is that .NET has better standard complinace now and we should all be using IETF language tags to identify cultures, but the control provided by the SSRS team uses the older, pro­pri­etary MS-LCIDs.</a>

Obviously, Reporting Services is still usable with an ASP.NET ap­pli­ca­tion and the Re­portView­er control works fine if there is no need for custom cultures. In my work though, custom cultures are needed and they break the Re­portVie­w­er badly.

 [1]: http://en.wikipedia.org/wiki/Locale
 [2]: http://msdn.microsoft.com/en-us/library/ms172470.aspx
 [3]: http://www.ietf.org/
 [4]: http://tools.ietf.org/html/rfc5646
 [5]: http://en.wikipedia.org/wiki/IETF_language_tag
 [6]: http://msdn.microsoft.com/en-us/library/cc233965%28v=prot.10%29.aspx
 [7]: http://msdn.microsoft.com/en-us/netframework/dd890508.aspx
 [8]: http://msdn.microsoft.com/en-us/library/h6270d0z.aspx
 [9]: http://msdn.microsoft.com/en-us/library/ms251671%28v=vs.100%29.aspx
 [10]: http://connect.microsoft.com/SQLServer/feedback/details/518511/reportviewer-culture-id-4096-0x1000-is-not-a-supported-culture-parameter-name-culture
 [11]: http://connect.microsoft.com/VisualStudio/feedback/details/355686/microsoft-reporting-webforms-fails-when-using-custom-cultureinfo