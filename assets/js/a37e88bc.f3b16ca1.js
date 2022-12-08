"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,sidebar_label:"Introduction and setup",title:"Introduction and setup"},o="Introduction and setup",l={unversionedId:"serverless-cache-walkthrough/adding-a-cache-to-serverless",id:"serverless-cache-walkthrough/adding-a-cache-to-serverless",title:"Introduction and setup",description:"In this tutorial, you will learn how to add a cache to your serverless application with AWS Lambda. To do so, you will use Momento Serverless Cache, a cache service built for\u200b\u200b deep integration with serverless applications. Momento Serverless Cache combines instant, elastic, cache storage with a pay-for-value pricing model, and blazing-fast performance.",source:"@site/docs/serverless-cache-walkthrough/1-adding-a-cache-to-serverless.md",sourceDirName:"serverless-cache-walkthrough",slug:"/serverless-cache-walkthrough/adding-a-cache-to-serverless",permalink:"/serverless-cache-walkthrough/adding-a-cache-to-serverless",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/serverless-cache-walkthrough/1-adding-a-cache-to-serverless.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction and setup",title:"Introduction and setup"},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Adding a cache to a serverless application",permalink:"/serverless-cache-walkthrough"},next:{title:"Deploying a basic serverless application",permalink:"/serverless-cache-walkthrough/deploying-a-basic-serverless-application"}},s={},c=[{value:"What we&#39;re building",id:"what-were-building",level:2},{value:"Setup",id:"setup",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-and-setup"},"Introduction and setup"),(0,r.kt)("p",null,"In this tutorial, you will learn how to add a cache to your serverless application with AWS Lambda. To do so, you will use Momento Serverless Cache, a cache service built for\u200b\u200b deep integration with serverless applications. Momento Serverless Cache combines instant, elastic, cache storage with a pay-for-value pricing model, and blazing-fast performance."),(0,r.kt)("p",null,"As you work through this tutorial, you will build a simple account management service for your application. You'll have endpoints for creating users and organizations and for adding users to an organization via memberships. Finally, you'll be able to check whether a user belongs to an organization, a frequently used authorization pattern."),(0,r.kt)("p",null,"This tutorial includes conceptual material about implementing caching and building serverless applications as well as practical, step-by-step tips for deploying and interacting with your account management service."),(0,r.kt)("p",null,"One of the key concepts we will discuss is the different approaches to caching, including the tradeoffs of using different caching strategies. To learn more about this, check out our page on ",(0,r.kt)("a",{parentName:"p",href:"./../introduction/common-caching-patterns"},"caching patterns"),"."),(0,r.kt)("p",null,"Additionally, this tutorial will show practical aspects of integrating Momento with AWS Lambda. If you want a more succinct reference, check out our guide on ",(0,r.kt)("a",{parentName:"p",href:"/guides/caching-with-aws-lambda"},"caching with AWS Lambda"),"."),(0,r.kt)("p",null,"This tutorial has five steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Introduction to the tutorial and environment setup.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy a serverless application with API Gateway, Lambda, and DynamoDB.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install and configure Momento for your application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement a read-aside cache pattern in your application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use a write-aside cache pattern for improved performance and cache freshness."))),(0,r.kt)("h2",{id:"what-were-building"},"What we're building"),(0,r.kt)("p",null,"We will be building an account management service for a larger SaaS application."),(0,r.kt)("p",null,"Our application has support for both Users and Organizations, and Users may take actions on behalf of Organizations. In order to support this, many parts of our application will need to ensure a particular User belongs to a particular Organization."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"System architecture",src:a(1990).Z,width:"1260",height:"890"})),(0,r.kt)("p",null,"To handle this, we will be modeling three entities in our service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"User")," entity, which represents a single human user of our application;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("em",{parentName:"p"},"Organization")," entity, which represents a group of Users that manage resources within our application;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("em",{parentName:"p"},"Membership")," entity, which represents a relationship between a User and an Organization such that the User is allowed to take certain actions within the Organization."))),(0,r.kt)("p",null,"To interact with these entities, we will set up the following HTTP endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"CreateUser")," (",(0,r.kt)("inlineCode",{parentName:"p"},"POST /users"),"), which is used for User signup;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"CreateOrganization")," (",(0,r.kt)("inlineCode",{parentName:"p"},"POST /organization"),"), which is called by a User to create a new Organization;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"AddUserToOrganization")," (",(0,r.kt)("inlineCode",{parentName:"p"},"POST /organization/{organizationName}/members"),"), which is called by an existing member of an Organization to add a new User to an Organization;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"UserInOrganization")," (",(0,r.kt)("inlineCode",{parentName:"p"},"GET /organization/{organizationName}/members/{username}"),"), which is called to see if a User belongs to an Organization and fetch details about the User's role in the Organization."))),(0,r.kt)("p",null,"Our application is necessarily simplified in order to focus on the key points we want to teach. There are no endpoints to update Users or Organizations, to list all Members of an Organization, or to remove a User from an Organization. Further, we won't have a true authentication system and will rely on crude measures like passing in a username via an HTTP header."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Before we start, let's get your environment set up so that you can follow along with the steps in this tutorial."),(0,r.kt)("p",null,"First, the tutorial uses Node.js and related dependencies, so you will need to install that on your machine. Please follow the installation instructions on the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js downloads page"),"."),(0,r.kt)("p",null,"Second, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework/docs"},"Serverless Framework")," to build and deploy our serverless application. The Serverless Framework is a CLI tool written in Node.js and can be installed by running the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g serverless\n")),(0,r.kt)("p",null,"Third, we will be deploying an application to Amazon Web Services (AWS). To do so, you will need an AWS account and credentials in your environment. If you don't have AWS credentials configured in your local environment, follow the guide from the Serverless Framework documentation on ",(0,r.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework/docs/providers/aws/guide/credentials/"},"configuring your environment"),"."),(0,r.kt)("p",null,"Finally, all the code for this tutorial is available in a GitHub repository. You can clone the code to your machine using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:momentohq/serverless-tutorial.git\n")),(0,r.kt)("p",null,"Now that we've set up our environment, let's move on to the next step where we will deploy our serverless application."))}u.isMDXComponent=!0},1990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-d18fda14b76897b0667227fa9c189210.png"}}]);