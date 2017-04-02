---
title: The importance of structured cloud deployments
author: MichaelHughes

date: 2014-05-03
url: /2014/05/03/the-importance-of-structured-cloud-deployments/
categories:
  - Uncategorized
tags:
  - cloud computing
  - tips

---
One of the advantages of operating in an environment like AWS or Azure is the ability to template and programmatically deploy both infrastructure and application platforms. This advantage is sometimes overlooked in place of a more adhoc deployment model where resources are created as needed. Today&#8217;s post provides brief commentary on some of the advantages of handling deployments in a more structured manner.

<!--more-->

[AWS&#8217;s infrastructure service][1], EC2 has been available for around seven years now. The link provides more detail from Amazon directly, but in short it is a service that allows users to create virtual hosts on demand with an operating system of their choice. A really nice thing about EC2 (and Azure VMs, Rackspace cloud, Softlayer, etc) is the ability to easily add resources to run applications as needed; IT procurement becomes a process of budget validation and then clicking a couple buttons.

In fact, it&#8217;s almost too easy to create new resources. It very easy to get into a scenario where production applications are running on instances which are not being patched with the latest OS updates. It is also very easy to get into a scenario where a number of servers are spun up for a project, but then left running after their usefulness has passed (Ethann at IBM [calls them zombies][2]). Other times an application deployment is handled well initially, but future expansions aren&#8217;t handled leading to an environment where some resources such as virtual machines are managed but other services such as message queues or databases are not appropriately tracked. The root issue comes from one of the primary selling points of cloud services, easy resource acquisition and deployment. There are a number of tools, however that with a little additional upfront work can help alleviate the problem of tracking deployed resources.

From an operations perspective there are tools which will help provision, maintain, and shutdown servers without a user manually keeping track of instances. Ranging from simple template systems like [Cloudformation][3] to more complex environment management tools like [Asgard by Netflix][4]. On the simple end, templating tools help ensure that only the resources needed for an application are provisioned and if needed can manage the resources&#8217;s life cycle (e.g. if an instance fails the environment automatically creates a new one). On the complex end tools like Asgard can be setup to manage the entire life cycle of an application deployment in a cloud environment (one step of which is managing the life cycle of instances involved.)

We could go into different types of management tools in detail, but we&#8217;ll leave that for another post. Today lets look at some of the basic things that even a simple tool like CloudFormation makes easier:

  1. Associate resources with their use: It is very easy to end up with servers running in an environment like EC2 that need to be logged onto to determine their purpose. This can happen via organic growth of a system. Without appropriate tracking the purpose of old resources can get lost as users add new resources to an environment . With a template tool like CloudFormation the required resources for each application are associated with a named template. In a small environment there may multiple applications associated with one template that defines data systems, application servers, and cache servers. In a larger environment a single application may be associated with a single template that defines a group of server and data systems. In either case the result is that resources created in the environment are not free standing, but are instead associated with a fixed template that in turn can be associated with a business need.
  2. Environment life cycle: Instances in the EC2 environment can and do fail, there are a variety of reasons for failure ranging from freak lightening strikes to EC2 infrastructure maintenance. Instances that are provisioned by themselves will stay missing when abnormally terminated&#8211;having instances permanently go away is likely not intended in most cases. With a templated, managed environment instances that fail can be replaced automatically or alarms can be created to notify individuals of failures.
  3. Simplified resource creation: Earlier I mentioned that resource creation in cloud environments should maybe be harder in order to discourage rapid growth of zombies servers. Enforcing the use of templating systems makes resource creation more deliberate by requiring the declaration of needed resources upfront.

The short summary is that I highly recommend using at least a simple templating system for any deployment that is more than a very small proof of concept system. Templates makes creating the environment for an application, managing instance failures, and keeping track of provisioned resources all simpler.

 [1]: https://aws.amazon.com/ec2/
 [2]: http://thoughtsoncloud.com/2013/05/cloud-zombies/
 [3]: https://aws.amazon.com/cloudformation/
 [4]: http://techblog.netflix.com/2012/06/asgard-web-based-cloud-management-and.html