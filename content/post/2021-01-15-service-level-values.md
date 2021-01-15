+++
tags = ["design", "philosophy"]
categories = ["Software Design"]
description = "On the topic of service level objective values"
author = "Michael Hughes"
date = "2021-01-15"
title = "On the topic of service level objective values" 
+++

What is the expected availability of a service API? What does a "99.9%" availability mean in the context of a service's operation? What can a service client expect, what about a customer?

<!--more-->

The last decade has seen some books from Google and others popularize service level indicators and objectives (SLIs and SLOs) as a way of establishing the reliability of a service. The Google SRE books (links) are an excellent starting place for those unfamiliar with these concepts.
The following will illustrate a couple challenges associated with determining a SLO value for a service's features as deployed in a cloud environment.


# Where do these numbers come from anyway?

Calculations or measurements.

There are two approaches that can be applied. Calculation of a target uses estimates of a dependent system's SLO or SLAs and assumptions about the architecture of an application to determine an expected availability.

!["Box Diagram"](/images/2020-01-15-slos/slo-by-calc.svg "A service with two dependencies")

This is more difficult than it first looks. A significant portion of availability is determined by the application's design. Doing this for a brand-new application design without precedent is part mathematics and part art.

Alternatively, we can observe and measure the system. 

!["Box Diagram"](/images/2020-01-15-slos/slo-by-measure.svg "A service treated as a blackbox")

Treat the system like a black box and use an external tool to exercise it while measuring success and failure rates. The availability measurement from this approach is representative of actual customer experience. This is good. Unfortunately, measurement of availability is also limited by the granularity of its test results and the scenarios tested.

# Always some kind of catch

An initial availability target for a new application should be formulated based on both a hypothesis determined by calculation and empirical data from test runs. Neither alone will be correct, some observations on why,

  - Hypothetical calculations must be based on something. For those on AWS, they provide an SLA that provides for a 10% rebate should the EC2 service fall below 99.99 availability. Separately, individual EC2 instances have an hourly up time of at least 90%. The SLA also lists several caveats and exceptions. Unfortunately, an SLA is just a number with a contract saying what business impacts happen when that is not met. Alone, an SLA does not guarantee much, and cloud services can and do fail in ways that violate advertised SLAs.
  - The best hypothetical calculations are still limited to the writer's imagination. If the functionality of a system relies on three underlying services and the calculations are performed based on two of the three then the numbers will be quite wrong. At a small scale this is obvious. It is less obvious in large scale systems with many interconnected services. 
  - Measurement carries its own faults best explained by illustration,

!["Showing a undetected vault"](/images/2020-01-15-slos/slo-test-granularity.svg "Showing a undetected vault")

Executing tests against a system on some scheduled basis replicates actual behavior but may miss smaller outages that are still visible to customers. An alternative approach here is to measure service unavailability based on events or logs emitted by application. This too suffers from the granularity problem, not all customer facing faults will result in logs recording that a failure occurred.

# Things that need to be done

For all practical purposes, I suggest doing what is, well, practical. When dealing with new services being developed now, estimate based on known available data. This means starting with provider SLAs from Microsoft, AWS, and others. How provider SLAs are combined is determined by the design of the new service and what steps are taken to create redundancy. Keep in mind that values from major cloud providers are SLAs, not SLOs, and that there is a good chance that at some point they will be violated. An SLA violation costs AWS some money; consider what a provider's SLA violation means for a system and design accordingly. 

In the presence of an established service, I prefer empirical data from synthetic test runs and events. The topic of synthetic testing and its value is a short essay for another day. Assuming that they are built to match typical customer workflows, these tests will more closely match the customer's perceived reliability of the service than anything else. 
