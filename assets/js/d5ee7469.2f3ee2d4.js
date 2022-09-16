"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8054],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4932:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},c="Read-aside caching with Momento",l={unversionedId:"serverless-cache-walkthrough/read-aside-caching-with-momento",id:"serverless-cache-walkthrough/read-aside-caching-with-momento",title:"Read-aside caching with Momento",description:"In the previous step, we installed and configured Momento within our serverless application. As part of that, we learned some important details about the Lambda lifecycle that will help with performance, particularly when making external network calls from our application.",source:"@site/docs/serverless-cache-walkthrough/4-read-aside-caching-with-momento.md",sourceDirName:"serverless-cache-walkthrough",slug:"/serverless-cache-walkthrough/read-aside-caching-with-momento",permalink:"/docs/serverless-cache-walkthrough/read-aside-caching-with-momento",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/serverless-cache-walkthrough/4-read-aside-caching-with-momento.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring Momento in Serverless",permalink:"/docs/serverless-cache-walkthrough/configuring-momento"},next:{title:"Write-aside caching with Momento",permalink:"/docs/serverless-cache-walkthrough/write-aside-caching-with-momento"}},h={},p=[{value:"Key concepts on caching strategies",id:"key-concepts-on-caching-strategies",level:2},{value:"Implementing a read-aside caching strategy",id:"implementing-a-read-aside-caching-strategy",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"read-aside-caching-with-momento"},"Read-aside caching with Momento"),(0,i.kt)("p",null,"In the previous step, we installed and configured Momento within our serverless application. As part of that, we learned some important details about the Lambda lifecycle that will help with performance, particularly when making external network calls from our application."),(0,i.kt)("p",null,"In this step, we'll actually implement caching in our application. Before we do so, we will learn some key concepts about caching strategies. Then, we'll implement a read-aside cache in our serverless application."),(0,i.kt)("p",null,"If you want to skip the concepts and go directly to the implementation, navigate ahead to the ",(0,i.kt)("a",{parentName:"p",href:"#implementing-a-read-aside-caching-strategy"},"implementation section"),"."),(0,i.kt)("h2",{id:"key-concepts-on-caching-strategies"},"Key concepts on caching strategies"),(0,i.kt)("p",null,"There are a number of different reasons for adding caching to your application, as well as a variety of caching strategies that you can use to accomplish your goals. In general, you have to make choices on three factors in choosing a caching strategy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Where to cache:")," Is my cache local to my application process or does it require a network call to a remote instance?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"When to cache:")," Do I update my cache lazily, after a read from the primary data source, or do I update my cache optimistically, after performing a write operation?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How to cache:")," Is my cache a generic store for any type of application data I choose, or is the cache specifically designed for integration with my underlying data source?"))),(0,i.kt)("p",null,"Making the proper choice on each of these factors is important to implementing a caching strategy that works for your application. For more on each of these factors and various combinations, check out our ",(0,i.kt)("a",{parentName:"p",href:"./../caching-concepts/caching-strategies-and-patterns"},"guide to caching strategies"),"."),(0,i.kt)("p",null,'In this example, we will use a read-aside caching strategy (also called a "lazy-loading" strategy). In a read-aside caching strategy, you first try to read your cached entry from a remote cache whenever your object is requested. If the object does not exist in the cache, then you fallback to reading the object from the primary data source. After retrieving from the primary data source, you store the object in your cache before returning so it\'s available the next time it is requested.'),(0,i.kt)("p",null,"This is the most common caching strategy due to its simplicity and applicability to a wide range of applications. Let's see how it breaks down on the three factors above."),(0,i.kt)("p",null,"First, it uses a ",(0,i.kt)("em",{parentName:"p"},"remote")," caching strategy, as our application will reach out to Momento to check for cached values."),(0,i.kt)("p",null,"While a local, in-memory caching strategy is easier to implement, a remote cache is a common choice. A local cache strategy has a lower cache hit rate since the hit rate decreases as the number of instances running your application increase. Given what we know about the Lambda function runtime, where we could have a large number of function instances handling our requests, a remote cache is a better fit for our needs."),(0,i.kt)("p",null,"Second, it chooses to cache our data at read time."),(0,i.kt)("p",null,"We will insert items into the cache only after a previous attempt to read from the cache fails, necessitating a fallback to the primary data source. This is the simplest pattern to implement, but it can result in stale reads when the underlying data changes as well as a lower cache hit rate. We'll talk more about this in the next step."),(0,i.kt)("p",null,"Finally, it uses a ",(0,i.kt)("em",{parentName:"p"},"cache-aside")," mechanism rather than an ",(0,i.kt)("em",{parentName:"p"},"inline")," approach."),(0,i.kt)("p",null,"We'll use Momento, a generic key-value cache, to store any data we want, rather than an inline cache that has a tight integration with DynamoDB. DynamoDB does have Amazon DynamoDB Accelerator (DAX) as an inline cache for DynamoDB. However, it requires the use of a VPC and complicated network configuration that is not a good fit for our serverless application. The cache-aside strategy with Momento is a better approach here."),(0,i.kt)("p",null,"Now that we know the three factors to consider in choosing our caching strategy and the reasons we chose a read-aside strategy, let's get to work implementing this in our application."),(0,i.kt)("h2",{id:"implementing-a-read-aside-caching-strategy"},"Implementing a read-aside caching strategy"),(0,i.kt)("p",null,"Head back to the code for your serverless application. To implement our read-aside cache strategy, we will update our code to use the cache whenever fetching individual records with our service."),(0,i.kt)("p",null,"Navigate back to the service code in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js"),". Update the getUser method on our AccountService class to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'async getUser({ username }) {\n  const user = new User({ username });\n  const userCacheKey = `USER#${user.username}`;\n\n  let getResp = await this._cacheClient.get(\n    CACHE_NAME,\n    userCacheKey\n  );\n  if (getResp.status === CacheGetStatus.Hit) {\n    const cacheContent = JSON.parse(getResp.text());\n    return cacheContent ? itemToUser(cacheContent) : null;\n  }\n\n  const response = await this._dynamoDBClient\n    .getItem({\n      TableName: TABLE_NAME,\n      Key: user.keys(),\n    })\n    .promise();\n\n  await this._cacheClient.set(\n    CACHE_NAME,\n    userCacheKey,\n    JSON.stringify(response.Item || ""),\n    60\n  );\n\n  return response.Item ? itemToUser(response.Item) : null;\n}\n')),(0,i.kt)("p",null,"There are three changes to our code."),(0,i.kt)("p",null,"First, we've defined the string template for our User cache key, which is \"",(0,i.kt)("em",{parentName:"p"},'USER#{user.username}".')," Like most caches, Momento is a key-value store. We will retrieve specific cache entries by their key and thus we need a defined format for generating and retrieving that key. Because this function is the only place that we will use the key for a User entry, we can declare it inline."),(0,i.kt)("p",null,"Second, we add logic to attempt to retrieve the entry from our cache using the cache key. If the response indicates that there was a hit from the cache, we will retrieve the value and return it to the caller. If it was a cache miss, then we'll continue on to read from the database."),(0,i.kt)("p",null,"Finally, we add code to store the User item in our cache after retrieving it from our DynamoDB table. This ensures that the User item will be around for the next request that needs to retrieve the User."),(0,i.kt)("p",null,"Note two things about storing the User item. First, a GetItem response from DynamoDB can be empty, indicating that the item does not exist in DynamoDB. However, we are storing the response in our cache either way. This will ensure our application will get caching benefits even for objects that are requested but don't exist."),(0,i.kt)("p",null,'Second, we are setting a time-to-live ("TTL") value of 60 seconds. This tells Momento how long to keep the cache entry in the cache before deleting it. Any request made within this period will benefit from the cached value, while expiration of the entry will require a slower request to the primary data source.'),(0,i.kt)("p",null,"Choosing the proper TTL value depends on your application needs, including how frequently an object is retrieved following an initial request and whether the underlying data is likely to change. For more on this, check out the section on TTL values in our caching concepts documentation."),(0,i.kt)("p",null,"For now, we're using a relatively short TTL of only 60 seconds. This is mostly because we're caching only on the read side. Because this underlying data can change, we want to expire it quickly to prevent a confusing experience for our users. In the next step, we'll see how to integrate caching on the write side to allow for a longer TTL."),(0,i.kt)("p",null,"Finally, we need to update some imports and global variables for our service module. Add the following code to the top of your src/accounts/service.js file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const { CacheGetStatus } = require("@gomomento/sdk");\nconst TABLE_NAME = process.env.TABLE_NAME;\nconst CACHE_NAME = process.env.CACHE_NAME;\n')),(0,i.kt)("p",null,"The import is used when checking the result of the cache retrieval request, and the CACHE_NAME variable is used for all caching operations."),(0,i.kt)("p",null,"Let's implement similar logic for our Organization and Membership objects as well."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"getOrganization")," method to look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'async getOrganization({ organizationName }) {\n  const organization = new Organization({ organizationName });\n  const organizationCacheKey = `ORG#${organization.organizationName}`;\n\n  let getResp = await this._cacheClient.get(\n    CACHE_NAME,\n    organizationCacheKey\n  );\n  if (getResp.status === CacheGetStatus.Hit) {\n    const cacheContent = JSON.parse(getResp.text());\n    return cacheContent ? itemToOrganization(cacheContent) : null;\n  }\n\n  const response = await this._dynamoDBClient\n    .getItem({\n      TableName: TABLE_NAME,\n      Key: organization.keys(),\n    })\n    .promise();\n\n  await this._cacheClient.set(\n    CACHE_NAME,\n    organizationCacheKey,\n    JSON.stringify(response.Item || ""),\n    60\n  );\n\n  return response.Item ? itemToOrganization(response.Item) : null;\n}\n')),(0,i.kt)("p",null,"Notice that it follows a similar pattern as the User caching implementation. We define the cache key pattern for the Organization item. Then we try to retrieve a cached Organization entry and return it if it exists. If not, we fetch it from DynamoDB, store it in our cache, and return it to the caller."),(0,i.kt)("p",null,"Finally, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"getMembership")," method to look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'async getMembership({ organizationName, username }) {\n  const membership = new Membership({\n    organizationName,\n    memberUsername: username,\n  });\n  const membershipCacheKey = `MEMBER#${membership.organizationName}#${membership.memberUsername}`;\n\n  let getResp = await this._cacheClient.get(\n    process.env.CACHE_NAME,\n    membershipCacheKey\n  );\n  if (getResp.status === CacheGetStatus.Hit) {\n    const cacheContent = JSON.parse(getResp.text());\n    return cacheContent ? itemToMembership(cacheContent) : null;\n  }\n\n  const response = await this._dynamoDBClient\n    .getItem({\n      TableName: TABLE_NAME,\n      Key: membership.keys(),\n    })\n    .promise();\n\n  await this._cacheClient.set(\n    process.env.CACHE_NAME,\n    membershipCacheKey,\n    JSON.stringify(response.Item || ""),\n    60\n  );\n\n  return response.Item ? itemToMembership(response.Item) : null;\n\n}\n')),(0,i.kt)("p",null,"Notice that it follows a similar pattern as the User and Organization caching implementations."),(0,i.kt)("p",null,"Before we deploy, let's make one final note. We've implemented very simple caching of individual objects in our application. Those will certainly help readers that use our REST endpoints to retrieve a User, Organization, or Membership by reducing latency for cached items."),(0,i.kt)("p",null,"However, the caching will help for other endpoints as well. Take a look at the createOrganization method for our AccountService:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async createOrganization({ organizationName, foundingUser }) {\n  const user = await this.getUser({ username: foundingUser });\n  if (!user) {\n    throw new UserDoesNotExistError(foundingUser);\n  }\n  ...\n}\n")),(0,i.kt)("p",null,"Before creating a new Organization, our code first checks to ensure the creating User exists. It is calling into the same getUser method that would be used by our endpoint to retrieve a User, so both methods are improved by our simple caching."),(0,i.kt)("p",null,"To see an even better example, look at the addUserToOrganization method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"async addUserToOrganization({\n  organizationName,\n  memberUsername,\n  role,\n  addingUser,\n}) {\n  const [organization, newMemberUser, addingMembership] = await Promise.all([\n    this.getOrganization({ organizationName }),\n    this.getUser({ username: memberUsername }),\n    this.getMembership({ organizationName, username: addingUser }),\n  ]);\n  \u2026\n}\n")),(0,i.kt)("p",null,"At the beginning of this method, we have to make three other reads -- one for the Organization, one for the User being added to the Organization, and one for the Membership record of the user creating the new Membership. Because we've added caching to each of those methods, we should see lower latency on this endpoint."),(0,i.kt)("p",null,"This is what's great about our simple caching. It's pretty easy to reason about our cache setup as we're only handling individual objects. However, it's making almost all of our endpoints faster as many of them rely on these individual objects."),(0,i.kt)("p",null,"In this step, we implemented simple read-aside caching in our application. However, there's still a big problem with our caching setup. Even though we're only caching our objects for 60 seconds, there's still a chance that the underlying data has changed in the interim. Further, our cache hit rate is likely low as the initial read is always retrieved from the primary datastore."),(0,i.kt)("p",null,"In the next step, we'll look at cache invalidation and refreshing cached data on the write side."))}m.isMDXComponent=!0}}]);