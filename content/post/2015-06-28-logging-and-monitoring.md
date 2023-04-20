---
title: Logging and Monitoring
author: MichaelHughes

date: 2015-06-28
url: /2015/06/28/logging-and-monitoring/
categories:
  - Software Design
tags:
  - logging

---
Operational monitoring of a software application is one of the activities the ensures a successful public launch. Too often it seems like a service's course to public availability looks something like, Conceptualization → Development → ... → SHIP IT. The "..." component is an important step at large enterprises with large public services (like Expedia, Amazon.com, etc) and involves developing a way to monitor an application whilst running it. At smaller organizations though I have seen this smaller step get discarded or not looked at. Today's post offers a few thoughts on what logging and monitoring looks like today.

#### <!--more-->Why

In order to keep this discussion to a reasonable length we'll consider only public facing service applications such as web APIs, public websites, public web applications. Monitoring and management of deployed desktop applications is a different, and more difficult field due to operators having less control over the application's runtime environment. Even when focusing on a certain class of applications we run into a variety of different ways for an application to be run. One option is that a company uses a language with a runtime virtual machine like Java on the Java Virtual Machine.<figure class="wp-caption aligncenter" id="attachment_392" style="width: 352px">

[<img alt="Application VM Deployment" class="size-full wp-image-392" height="131" sizes="(max-width: 352px) 100vw, 352px" src="//codinginthetrenches.com/wp-content/uploads/2015/06/app-vm.png" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/06/app-vm-300x112.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/06/app-vm.png 352w" style="background-color: white;" width="352"/>][1]<figcaption class="wp-caption-text">An application might be run in the Java Virtual Machine.</figcaption></figure> 

In this scenario failures could occur at the server level, the virtual machine, or the application itself. Another alternative that has become more popular recently is using lightweight virtualized containers.<figure class="wp-caption aligncenter" id="attachment_393" style="width: 353px">

[<img alt="Lieghtweight application VM" class="size-full wp-image-393" height="134" sizes="(max-width: 353px) 100vw, 353px" src="//codinginthetrenches.com/wp-content/uploads/2015/06/lw-vm.png" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/06/lw-vm-300x114.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/06/lw-vm.png 353w" style="background-color: white;" width="353"/>][2]<figcaption class="wp-caption-text">An application may be run inside of containerization system like Docker or Rocket.</figcaption></figure> 

A physical server might have several containers running on it, each of which could contain applications. In both of these prior pictures it is also possible for the "Server" itself be a virtualized with operating system level virtualization. For example, running a [Docker][3] container on [AWS EC2][4] imparts several layers of abstraction between an application and the physical hardware.

It is worth mentioning all of these layers when discussing logging and monitoring because they are all also layers were failures may occur. A customer using an application doesn't care that an outage was caused by EC2, a bad container update, or an application failure, he or she cares that they couldn't access the application. The aim of implementing logging and monitoring is to know what failed, where the failure occurred, and when it occurred (preferably as soon as possible after the failure occurs).

#### What

Logging is one component of a strategy, part of  an answer, and not an end solution. What exactly needs to be monitored will depend on the specifics of an application's runtime environment. There are, however, some broad categories that should always be addressed when considering monitoring:

  * The application itself 
      * Is it running
      * Are there exceptions or errors occurring within the application
      * How long does it take the application to respond to input
  * The application's local environment 
      * Are there multiple instances of the same application running, are all possible instances running
      * Is there free memory
      * What is the system load while the application is running
  * The application's network environment 
      * Is all network traffic reaching the application
      * Is there too much or malicious traffic reaching the application
      * Are there intermediaries between the application and its consumers (e.g. load balancers), if so, are they running
      * Are the application's networked dependencies (e.g. other services) alive and available

The point of this exercise is to walk the chain of possible failures from the application itself out to the environment of the application. Application level logging that developers add only addresses a couple of the above points and we need additional tools to monitor the other items.

#### How

The how question with regard to monitoring and logging is deceptively difficult to answer because of the large number tools available today. Again, specific prescriptions here are impossible without specific knowledge of the application and its runtime environment. But, also, again there are useful concepts to discuss with regard to the above ‘What' points:

###### Application Logging

I have recently become a fan of elements of the [12 Factor Application list][5], in particular, the [logging factor][6] has resonated well with me. The list is worth reading in whole, but the salient point for logging is that the application writes to [STDOUT][7] or equivalent and that an external log router captures that information and sends it elsewhere for processing. Alongside the 12 Factor logging idea, it's useful to have a concept of centralized log management in an application's run time environment. Tools like <a href="https://logentries.com/" target="_blank">Logentries</a>, <a href="http://www.splunk.com/" target="_blank">Splunk</a>, and <a href="https://www.loggly.com/" target="_blank">Loggly</a> (in no particular order) help to centrally index and search log streams sent from applications, routers, operating systems, etc.

Sending logs from applications to a central logging system where operations personnel can view them is part of the solution. Applications need to also log useful information. This can be a subject of person taste, but my strategy is to log generously—it is very easy to shift through vast quantities of logs using a central logging solution and there is less concern about filling up application server file systems when streaming logs to STDOUT. The following is an example of things that I might log on a request round trip in a service application.
  
[<img alt="Example logs for a HTTP request" class="aligncenter size-full wp-image-399" height="523" sizes="(max-width: 599px) 100vw, 599px" src="//codinginthetrenches.com/wp-content/uploads/2015/06/Logging-RoundTrip.png" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/06/Logging-RoundTrip-300x262.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/06/Logging-RoundTrip.png 599w" style="background-color: white;" width="599"/>][8]
  
The advantage of generous logging is that it makes it easier to pinpoint an application failure. The key takeaways here are to use some sort of centralized logging solution to capture logs from components throughout the system, make those logs easily searchable, and **don't** keep logs on the application servers themselves.

###### Application's Local Environment

The application's local environment encompasses information from  the operating system's performance statistics to information about the performance of the application in the context of the host. In some ways the monitoring here boils down to determining if an application has the required resources (memory, disk, network bandwidth, etc) to operate optimally for a given load. In the past this type of monitoring might have been handled by command line scripts in [POSIX][9] like environments or custom agents utilizing [Windows' WMI][10] to access performance information. More recently, complete agent based solutions like [NewRelic][11] and [AppDyanmics][12] gather data from both the environment and instrument the application as well. The key takeaway here is have a way to centrally monitor things like network, memory, disk, and CPU utilization. Knowledge of how an application consumes resources can be a first step in identifying whether an application needs to be tuned, scaled, or both in response to customer demands.

###### Application's Network Environment

Logging and monitoring in the network environment is a combination of the prior techniques and, again, will depend on the specifics of the application and environment. The goal is to have an understanding of how network traffic from an application's consumers reach the application. An example of this kind of monitoring is keeping track of requests passing through a load balancer on their way to the application. Another type of logging in the network environment is keep track of requests from the application to its dependencies (other network services).

[<img alt="Application's network environment" class="aligncenter size-full wp-image-401" height="96" sizes="(max-width: 501px) 100vw, 501px" src="//codinginthetrenches.com/wp-content/uploads/2015/06/Network-Environment.png" srcset="https://codinginthetrenches.com/wp-content/uploads/2015/06/Network-Environment-300x57.png 300w, https://codinginthetrenches.com/wp-content/uploads/2015/06/Network-Environment.png 501w" style="background-color: white;" width="501"/>][13]

Achieving logging on both sides of the application will involve a combination of sending logs from systems running load balancers and agents tools like Nagios that can monitor appliances like routers and [intrusion detection devices][14].

* * *

I hope this discussion was useful. Drop me a comment below if there are areas that could use more or less detail or just want to tell me anything in particular.

 [1]: //codinginthetrenches.com/wp-content/uploads/2015/06/app-vm.png
 [2]: //codinginthetrenches.com/wp-content/uploads/2015/06/lw-vm.png
 [3]: https://www.docker.com/
 [4]: http://aws.amazon.com/ec2/
 [5]: http://12factor.net/
 [6]: http://12factor.net/logs
 [7]: https://en.wikipedia.org/wiki/Standard_streams#Standard_output_.28stdout.29
 [8]: //codinginthetrenches.com/wp-content/uploads/2015/06/Logging-RoundTrip.png
 [9]: https://en.wikipedia.org/wiki/POSIX
 [10]: https://msdn.microsoft.com/en-us/library/aa384642(v=vs.85).aspx
 [11]: http://newrelic.com/
 [12]: http://www.appdynamics.com/
 [13]: //codinginthetrenches.com/wp-content/uploads/2015/06/Network-Environment.png
 [14]: https://en.wikipedia.org/wiki/Intrusion_detection_system