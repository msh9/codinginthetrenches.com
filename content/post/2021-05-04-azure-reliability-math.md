+++
tags = ["design", "philosophy"]
categories = ["Software Design"]
description = "Related to the topic of service level objective values"
author = "Michael Hughes"
date = "2021-05-04"
title = "Related to the topic of service level objective values" 
+++

What is the expected availability of a service API? What does a "99.9%" availability mean in the context of a service's operation? What can a service client expect, what about a customer? Continuing from our [prior post in January]({{<ref "2021-01-15-service-level-values.md" >}}), let's know discuss some aspects of using these percentage values in the
context of how to guarantee availability.

<!--more-->

The following discussion covers why reliability derived from redundancy is one of the best tools available in our context to improve system availability. We’ll set the stage by discussing availability, limits to it, and then discuss the need for redundancy with a brief example. The discussion here largely revolves around Microsoft Azure, but similar
thinking can be applied to other cloud providers or on premises scenarios.

# Availability

The measurement of a component's availability is the expected uptime divided by the sum total of expected uptime and expected downtime. It is an expression that indicates the likelihood that a system will be usable at some given time. Developing measures of availability is a different topic. For now let's set the context for a reliability discussion with the following concepts:

  - Availability of the system may be higher than the availability of an individual component assuming that the components in the system do not share failure modes.
  - Any system of sufficient complexity may have failure modes that result in differing levels of availability for different functionality
  - Components that have shared failure modes within a system place an upper limit on the total availability of the system.
  - Companies typically care most about the availability of system features used by customers.

We will not give a mathematical treatment here, but some may notice that most of these statements are based on boolean probability.

# Limits to availability

Unfortunately we cannot control everything. Lightning strikes happen, power utilities fail, and backup electrical equipment fails. All three of these things occurred in 2012 to AWS causing a small piece of US East 1 to shut down for 10 minutes. The example illustrates that 100% availability of all components of a system is unrealistic even in organizations with complete control over physical hardware and data centers.

Microsoft offers a SLA with credits for failure to meet it on many services. This SLA offers insight into what level of service might be expected out of different Azure products.

  - In the case of virtual machines, the offered level of availability of connectivity to any single virtual machine is 99.9%. Furthermore, they offer for two virtual machines in two different availability zones in a region that you will be able to connect to at least one of them 99.99% of the time. Microsoft’s own SLA is expressed in terms of the above concepts.
  - CosmosDB comes with a 99.99% availability SLA for many facets of the system and, when deployed in multiple regions, it increases to 99.999% for read/write operations.
  - Microsoft Azure Traffic Manager, used to provide DNS naming services, has a SLA of 99.99% availability of providing a valid response to a DNS query.

Consider, what is the probable availability of a customer feature which relies on both a single virtual machine and CosmosDB to provide service to the customer? Assuming that the two are truly independent then we get a customer feature availability of 99.89%. This effect is multiplicative based on the number of independent components which must succeed in order to service a request. In the case that the customer had never used our services and needs name resolution working (Traffic Manager) then the expected availability may be 99.88%.

The math gets messy quickly. For availability, suffice to say we want to avoid limits to availability in a system by following principles like loosely coupling services. Once we have minimized our dependencies to only those that are necessary then the best way to approach improving availability of the system is by improving the availability of the individual components.

# Redundancy

Reliability and availability are closely tied. We can drive the likelihood of availability higher by using system components that are more reliable. Continuing our example from before,

The reliability of a virtual machine based solution in Azure can be improved by deploying identical, independent, copies of the system to two virtual machines in two different availability zones in a region. Per Microsoft's guidelines the availability of that component is now 99.99% instead of 99.9%. Our solution’s final calculated availability is now 99.97%, significantly better for critical use cases than 99.88%. Referring to our earlier conclusions, the system’s availability is now higher than the availability of an individual component, a single virtual machine, but still limited by the availability of CosmosDB. Redundancy improved the overall availability of the system.

Components that run directly on Azure including applications that rely on databases, even software deployed on things like Azure Kubernetes Service (AKS), must be mindful that we have to take the offered reliability of Microsoft’s services as is. For example, we cannot ‘vet’ virtual machines to remove the unreliable hardware underneath them. Instead, we must start with the assumption that underlying hosts will fail and that our main tool to improve reliability is redundancy.