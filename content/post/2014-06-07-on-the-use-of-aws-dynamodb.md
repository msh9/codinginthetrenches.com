---
title: On the use of AWS DynamoDB
author: Michael Hughes

date: 2014-06-07
url: /2014/06/07/on-the-use-of-aws-dynamodb/
categories:
  - Data
tags:
  - databases
  - design

---
In today's post I'll cover some of the potential use cases for AWS DynamoDB, why you might want to use it or not.

<!--more-->

DynamoDB is fast, highly scalable database service offered by Amazon Web Services. DynamoDB provides table oriented storage of records with variable attributes on each record.

Like any other data storage system DynamoDB has trade offs between its features and ca­pa­bil­i­ties which makes it more ap­pro­pri­ate for some ap­pli­ca­tions than others. The point of this post is cover some reasons why (and why not) to use DynamoDB as the database for a project. A way of evaluating the ap­pro­pri­ateness of DynamoDB for a project is to first consider **could I use it** then consider **can I use it**. The ordering used is to first consider if the system is of any use the project, if it&#8217;s not then move on to another technology, <span class="caps">SQL</span> Server perhaps? The second con­sid­er­a­tion is necessary to take into account that in some cases the trade offs that DynamoDB makes may make it in­ap­pro­pri­ate for ap­pli­ca­tions that it would otherwise work well for.

The below workflow is what we will step through:

<img class="align-center" src="/images/2014-06-07-dynamodb/dynamodb-choice.png" alt="Abstract choices leading to use of DynamoDB or not" />

<ol>
  <li>
    <p class="first">
      First we&#8217;ll look at some of things DynamoDB does well and scenarios where DynamoDB&#8217;s ca­pa­bil­i­ties would help a project. Things that DynamoDB is good at:
    </p>
    
    <ul class="simple">
      <li>
        <strong>Pre­dictable speeds</strong>: For the most part the potential throughput for a data layer based on DynamoDB is reliable and pre­dictable. Although the pricing and throughput cal­cu­la­tions may be hard to figure out initially, once you have the rules you can predict the general throughput cost of an operation and determine the overall <span class="caps">IO</span> potential of the system.
      </li>
      <li>
        <strong>Size scability</strong>: Scaling another data storage systems may involve adding volumes, copying data, or adding whole new data node to a cluster (think of <span class="caps">SQL</span> Server or Hadoop). Scaling DynamoDB (with one important exception) just involves adding more data to the system. This bullet point could really be rewritten as the advantage of DynamoDB being a <a class="reference external" href="http://en.wikipedia.org/wiki/Platform_as_a_service"><span style="text-decoration: underline"><span style="color: #0066cc">PaaS</span></span></a>.
      </li>
      <li>
        <strong>A hash based query interface</strong>: I mention this item here because it&#8217;s the reason my current project uses the service. The query interface gives bulk and single record <span class="caps">CRUD</span> access to data stored in DynamoDB. A good analogy that I have often used for DynamoDB is that the query interface gives the client <span class="caps">CRUD</span> access to a very large remote hash map (or dictionary). The query end point takes advantage of DynamoDB&#8217;s data structure re­quire­ments (covered later) to provide very fast access to stored data.
      </li>
    </ul>
    
    <p>
      To sum it up DynamoDB is good for situations where fast <span class="caps">CRUD</span> per­for­mance is required over large and growing data sets. Sounds like:
    </p>
    
    <ul class="simple">
      <li>
        Click stream trackers
      </li>
      <li>
        Database driven (non-financial) web sites
      </li>
      <li>
        Ap­pli­ca­tion user session storage
      </li>
      <li>
        Staging data storage and de-du­pli­ca­tion
      </li>
    </ul>
    
    <p>
      &nbsp;
    </p>
    
    <p>
      We'll look at some of the trade offs made in using DynamoDB, but let it suffice to say that it should not be used casually. A project con­sid­er­ing DynamoDB really needs (at a high level) to have a lot of queries which look like the following in order to justify using it:
    </p>
    
    <p>
      <img class="aligncenter" src="/images/2014-06-07-dynamodb/dynamodb-query.png" alt="A hypothetical query for an item in a set" width="300" height="408" />The above picture represents what should be a common query pattern. The ap­pli­ca­tion asks for a single or small set of records (<span class="caps">ABC</span>) all associated with a single identifier (&#8216;A&#8217; in this case.) If the project is not expected to benefit for high per­for­mance single record or <strong>small</strong> batch <span class="caps">CRUD</span> operations then stop here and consider another technology.</li> 
      
      <li>
        <p class="first">
          Second we’ll look at the reasons why DynamoDB might be in­ap­pro­pri­ate for an ap­pli­ca­tion even if it might otherwise provide value. DynamoDB requires a very particular “shape” of data to operate well. Let&#8217;s first illustrate with a couple diagrams then discuss what they mean; first hash keys should identify small sets of data like the following:
        </p>
        
        <p>
          <img class="aligncenter" src="/images/2014-06-07-dynamodb/dynamodb-small-hk-collection.png" alt="A small collection of records identified by a hash key" width="400" height="221" />and definitely <strong>not</strong> like the following:
        </p>
        
        <p>
          <img class="aligncenter" src="/images/2014-06-07-dynamodb/dynamodb-large-hk-collection.png" alt="A large collection of records identified by a hash key" width="400" height="221" />Finally queries into the data set should look like the one above in #1 and <strong>not</strong> like the following:
        </p>
        
        <p>
          <img class="aligncenter" src="/images/2014-06-07-dynamodb/dynamodb-scan.png" alt="A query that resulted in a scan of records" width="300" height="372" />In words the important take away from these diagrams is that data should be stored in small hunks; hash keys in DynamoDB should only identify 1 or a small number of records. Similarly a frequently repeated request should use a hash key to retrieve a small number of records at a time (although there are benefits to batch reads in this case). There are couple reasons why data should be worked with in small ‘hunks’ in DynamoDB.
        </p>
        
        <ul class="simple">
          <li>
            <strong><span class="caps">JSON</span> <span class="caps">API</span></strong>: The base <span class="caps">API</span> for DynamoDB (even if your project uses the Java <span class="caps">SDK</span>) is a <span class="caps">JSON</span> <span class="caps">HTTP</span> interface. For every request to get data from and put data in DynamoDB there is the overhead of de/se­ri­al­iz­ing <span class="caps">JSON</span> and making a <span class="caps">HTTP</span> request. Se­ri­al­iz­ing and de­se­ri­al­iz­ing <span class="caps">JSON</span> is not a bad thing in and of itself, but doing it thousands of times is bad if it needs to be done on every request.
          </li>
          <li>
            <strong>Design Lim­i­ta­tions</strong>: Placing large data sets underneath any given hash key means that a client ap­pli­ca­tion has to sort through all of the data for a hash key to find a needed record. Ad­di­tion­al­ly the use of local secondary indices places hard lim­i­ta­tions on the amount of data assocated with any given hash key in the system.
          </li>
          <li>
            <strong>Load Balancing <span class="amp">&</span> Per­for­mance</strong>: This next point could also be placed under design lim­i­ta­tions. The pro­vi­sioned throughput units in DynamoDB are allocated across hash keys stored in a table. Hot spots where an ap­pli­ca­tion very frequently updates or inserts records under the same hash key can lead to poor per­for­mance since not all of pro­vi­sioned throughput for a table is available to any single hash key.
          </li>
        </ul>
        
        <p>
          DymanoDB has the above lim­i­ta­tions and some others, which leads us to situations where DynamoDB would be an in­ap­pro­pri­ate choice:
        </p>
        
        <ul class="simple">
          <li>
            Data ware­hous­ing
          </li>
          <li>
            Ap­pli­ca­tions where re­la­tion­ships between data sets must be enforced
          </li>
        </ul>
      </li>
      
      <li>
        <p class="first">
          Thirdly…should you use DynamoDB?
        </p>
        
        <p>
          Maybe, it depends on if your projects would benefit from the good things DynamoDB has to offer and wouldn't be otherwise be affected by DynamoDB's weaknesses. Chances are that not everything in a project fits into DynamoDB; only some of a project&#8217;s data sets may fit the table store model. I am fan of the idea of <a class="reference external" href="http://www.martinfowler.com/bliki/PolyglotPersistence.html"><span style="text-decoration: underline"><span style="color: #0066cc">polyglot per­sis­tence</span></span></a>, es­sen­tial­ly storing data in different system depending on how it will be used. Since DynamoDB <em>is</em> easy to get started with it&#8217;s possible to store the biggest, most <span class="caps">IO</span> intensive, <span class="caps">UI</span> driving data sets in DynamoDB and then store other project data in different systems. For example on my current project we drive the user interface using DynamoDB in order to make it speedy and take weekly dumps of the data set to load into a relational system for analysis and reporting.</p>
        </li> 
    </ol>
        