"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[487],{3378:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",h="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:p,groupId:d,className:g}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!w.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[T,C]=(0,o.useState)(v),M=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=d){const e=b[d];null!=e&&e!==T&&w.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=M.indexOf(t),a=w[n].value;a!==T&&(S(t),C(a),null!=d&&y(d,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=M.indexOf(e.currentTarget)+1;n=M[t]??M[0];break}case"ArrowLeft":{const t=M.indexOf(e.currentTarget)-1;n=M[t]??M[M.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},g)},w.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>M.push(e),onKeyDown:_,onClick:E},r,{className:(0,i.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,r.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}const d="tabItem_Ymn6";function g(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,i.Z)(d,a),hidden:n},t)}var f=n(814);const w=e=>{let{js:t,python:n,java:a,go:i,csharp:r,rust:l,ruby:s,cli:c}=e;return o.createElement(p,null,o.createElement(g,{value:"js",label:"JavaScript"},o.createElement(f.Z,{language:"js"},t)),o.createElement(g,{value:"python",label:"Python"},o.createElement(f.Z,{language:"python"},n)),o.createElement(g,{value:"java",label:"Java"},o.createElement(f.Z,{language:"java"},a)),o.createElement(g,{value:"go",label:"Go"},o.createElement(f.Z,{language:"go"},i)),o.createElement(g,{value:"csharp",label:"C#"},o.createElement(f.Z,{language:"csharp"},r)),o.createElement(g,{value:"rust",label:"Rust"},o.createElement(f.Z,{language:"rust"},l)),o.createElement(g,{value:"ruby",label:"Ruby"},o.createElement(f.Z,{language:"ruby"},s)),o.createElement(g,{value:"cli",label:"CLI"},o.createElement(f.Z,{language:"cli"},c)))}},8088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),i=n(3378);const r={sidebar_position:1,title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",sidebar_label:"How it works"},l="How it works - Momento Serverless Cache",s={unversionedId:"learn/how-it-works/index",id:"learn/how-it-works/index",title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/how-it-works/index.mdx",sourceDirName:"learn/how-it-works",slug:"/learn/how-it-works/",permalink:"/ja/learn/how-it-works/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/how-it-works/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"How it works | Momento Serverless Cache",description:"Explore what makes Momento Serverless Cache work and how best to utilize it with your apps.",sidebar_label:"How it works"},sidebar:"tutorialSidebar",previous:{title:"Learn"},next:{title:"Expiring data with TTL",permalink:"/ja/learn/how-it-works/expire-data-with-ttl"}},c={},u=[{value:"The SimpleCache object and developing with Momento Serverless Cache",id:"the-simplecache-object-and-developing-with-momento-serverless-cache",level:2},{value:"Control plane: simple, efficient cache management",id:"control-plane-simple-efficient-cache-management",level:3},{value:"Data plane: performant cache interactions",id:"data-plane-performant-cache-interactions",level:3},{value:"Interacting with the Momento Serverless Cache API",id:"interacting-with-the-momento-serverless-cache-api",level:2},{value:"Authentication token",id:"authentication-token",level:3},{value:"gRPC",id:"grpc",level:3},{value:"Networking",id:"networking",level:3},{value:"Default networking",id:"default-networking",level:4},{value:"Advanced networking",id:"advanced-networking",level:4},{value:"Conclusion",id:"conclusion",level:2}],h={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-it-works---momento-serverless-cache"},"How it works - Momento Serverless Cache"),(0,o.kt)("p",null,"On this page, you will learn about the concepts specific to using Momento Serverless Cache in your application. These concepts apply across languages -- while Momento has supported SDKs for Golang, JavaScript, Python, Java, and .NET, the concepts described on this page are applicable to all of them."),(0,o.kt)("p",null,"In crafting Momento Serverless Cache, we've focused on two things: simplicity and speed. Every decision we make is in service of these two goals. In describing the Momento Serverless Cache concepts below, we will also explain how these concepts make it easier or faster for you as a user."),(0,o.kt)("p",null,"On this page, we'll cover two main aspects of working with Momento Serverless Cache:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#the-simplecache-object"},"The SimpleCache object and the Momento SDK"),";")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#interacting-with-the-momento-api"},"Interacting with the Momento API"),";"))),(0,o.kt)("h2",{id:"the-simplecache-object-and-developing-with-momento-serverless-cache"},"The SimpleCache object and developing with Momento Serverless Cache"),(0,o.kt)("p",null,"In every Momento SDK, you will be using a SimpleCache client object to interact with the Momento Serverless Cache service. The SimpleCache object will provide credential management and efficient interaction with the Momento API."),(0,o.kt)("p",null,"Generally, you will create a SimpleCache object by passing in your authentication token and any desired settings."),(0,o.kt)(i.A,{js:'\nconst authToken="eyJhbGc.MyTestToken";\nconst defaultTTL = 300;\nconst momento = new SimpleCacheClient(authToken, defaultTtl);\n',python:'\nimport momento.simple_cache_client as scc\n\n_MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken"\n_ITEM_DEFAULT_TTL_SECONDS = 300\n\nwith scc.init(_MOMENTO_AUTH_TOKEN, _ITEM_DEFAULT_TTL_SECONDS) as cache_client:\n',java:'\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nint DEFAULT_ITEM_TTL_SECONDS = 300;\n\nSimpleCacheClient simpleCacheClient = SimpleCacheClient\n    .builder(MOMENTO_AUTH_TOKEN, DEFAULT_ITEM_TTL_SECONDS)\n    .build()\n\n',go:'\nconst (\n    authToken             = "eyJhbGc.MyTestToken"\n    itemDefaultTtlSeconds = 300\n)\nclient, err := momento.NewSimpleCacheClient(authToken, itemDefaultTtlSeconds)\n    if err != nil {\n    panic(err)\n}\n',csharp:'\nuint DEFAULT_TTL_SECONDS = 300;\nString MOMENTO_AUTH_TOKEN = "eyJhbGc.MyTestToken";\nusing SimpleCacheClient client = new SimpleCacheClient(MOMENTO_AUTH_TOKEN, DEFAULT_TTL_SECONDS);\n',rust:'\nlet auth_token = "eyJhbGc.MyTestToken";\nlet item_default_ttl_seconds = 300;\nlet mut cache_client = SimpleCacheClientBuilder::new(\n    auth_token,\n    NonZeroU64::new(item_default_ttl_seconds).unwrap(),\n)\n.unwrap()\n.build();\n',ruby:"\nrequire 'momento'\nMOMENTO_AUTH_TOKEN = \"eyJhbGc.MyTestToken\"\nDEFAULT_TTL_SECONDS = 15\nclient = Momento::SimpleCacheClient.new(\n  auth_token: MOMENTO_AUTH_TOKEN, default_ttl: DEFAULT_TTL_SECONDS\n)\n    ",cli:"momento configure",mdxType:"SdkExamples"}),(0,o.kt)("p",null,"A SimpleCache instance can interact with both the control plane and data plane APIs in Momento. Let's take a look at each of these."),(0,o.kt)("h3",{id:"control-plane-simple-efficient-cache-management"},"Control plane: simple, efficient cache management"),(0,o.kt)("p",null,"The Momento Serverless Cache control plane API is the API you will use to manage your caches overall. You can use the control plane API to create a new cache, list existing caches, or delete an unwanted cache."),(0,o.kt)("p",null,"When you hear 'control plane', you might think 'slow, management operations.' But that's not the case here -- ",(0,o.kt)("strong",{parentName:"p"},"Momento has been designed to quickly and efficiently manage caches within your account.")," You won't fire a command to create a cache and wait for the cache to be created in the background. With Momento, the cache is created synchronously, within a second. Your cache will be ready to go by the time your request to create it has returned."),(0,o.kt)("p",null,"Each cache in Momento Serverless Cache is isolated from other caches, and there's no technicel limit on the number of caches you can have in your account, but there are guardrails in place in the form of ",(0,o.kt)("a",{parentName:"p",href:"/limits"},"service limits"),". This means you can have dedicated caches for each environment for your application or even each deployed branch in your Continuous Integration/Continuous Delivery (CI/CD) system."),(0,o.kt)("h3",{id:"data-plane-performant-cache-interactions"},"Data plane: performant cache interactions"),(0,o.kt)("p",null,"The Momento control plane is very useful, but data plane operations are where the action is. The data plane API refers to operations that actually interact with the data in your cache(s). It's designed to be blazing fast -- most data plane operations take less than 1-2 milliseconds from the client's perspective."),(0,o.kt)("p",null,'The data plane includes the standard "set" and "get" cache functionality allowing you to write and retrieve a cache entry. You can also use the multi-get and multi-set commands to process multiple cached entries in a single request.'),(0,o.kt)("h2",{id:"interacting-with-the-momento-serverless-cache-api"},"Interacting with the Momento Serverless Cache API"),(0,o.kt)("p",null,"The SimpleCache object will be your main way of interacting with the Momento Serverless Cache API. Let's talk a little bit about what is happening under the hood. We'll discuss the authentication mechanism, the communication format, and the networking configuration for the Momento API."),(0,o.kt)("h3",{id:"authentication-token"},"Authentication token"),(0,o.kt)("p",null,"Your SimpleCache object will use an authentication token when communicating with the Momento Serverless Cache service. This token is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JSON Web Token"),' (or "JWT") that contains signed account information to authenticate you when making cache requests. It also includes information like the hostname of your cache instance, which helps the SimpleCache object to make more efficient requests to the Momento service.'),(0,o.kt)("p",null,"You will receive the Momento authentication token when signing up for the Momento service. To get your Momento authentication token and begin using the Momento service, ",(0,o.kt)("a",{parentName:"p",href:"/getting-started"},"follow the quickstart here"),"."),(0,o.kt)("h3",{id:"grpc"},"gRPC"),(0,o.kt)("p",null,"Momento is a ",(0,o.kt)("a",{parentName:"p",href:"/introduction/common-caching-patterns#where-to-cache----local-vs-remote-caching"},"remote cache")," using a client-server model. Because of this, your SimpleCache client will need to communicate with your remote Momento cache. To facilitate this communication, Momento could use any number of communication methods, from a JSON API over HTTP to a custom-built RPC protocol."),(0,o.kt)("p",null,"The SimpleCache client object uses ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," to communicate with the Momento service. gRPC is a popular open source remote procedure call (RPC) framework developed at Google for fast, efficient communication. When using gRPC, you define the RPCs you want to expose and the data structures you will use in a .proto file. This .proto file is then used to build the client and server implementations of your service."),(0,o.kt)("p",null,"There are two main benefits for you of using gRPC as a Momento user."),(0,o.kt)("p",null,"First, gRPC is ",(0,o.kt)("em",{parentName:"p"},"fast"),". You may be familiar with using JSON-based REST APIs for interacting with other services. While this method is flexible, the plaintext format of the message results in a larger message size and slower performance. Conversely, gRPC uses protocol buffers by default to exchange messages between the client and server. Protocol buffers will serialize your data into a more efficient binary format, allowing for faster transport plus faster serialization and deserialization of your data. When you are using a cache like Momento, this additional speed is critical."),(0,o.kt)("p",null,"Second, gRPC has cross-language support. You can use the .proto files to quickly generate clients in a large number of supported languages. While this doesn't directly help you as a Momento user, you indirectly benefit by quickly receiving new features in your language of choice. The Momento team can generate base clients across languages, lowering the burden of maintaining SDKs for each language. We will craft a consistent, language-specific interface on top of the generated code for each language, but the baseline work of interacting with the Momento service is much lower."),(0,o.kt)("p",null,"gRPC is supported by all languages for which there is a Momento SDK. For most of these languages, you do not need to know that Momento is using gRPC -- all the dependencies and gRPC communication are handled for you by the Momento SDK. For special concerns about using the Momento Python SDK in AWS Lambda, check out our guide on ",(0,o.kt)("a",{parentName:"p",href:"/guides/caching-with-aws-lambda#python"},"using Momento in AWS Lambda"),"."),(0,o.kt)("h3",{id:"networking"},"Networking"),(0,o.kt)("p",null,"As noted above, Momento cache is a remote service from your application, and thus we need to think about the networking infrastructure to connect your application to the Momento service. In keeping with our core principles, Momento offers two networking mechanisms for interacting with your cache: the default configuration, and an advanced configuration."),(0,o.kt)("h4",{id:"default-networking"},"Default networking"),(0,o.kt)("p",null,"By default, your SimpleCache client will connect to a publicly accessible endpoint for the Momento cache service. There are two main benefits to the default networking setup."),(0,o.kt)("p",null,"First, it is simple. You can ",(0,o.kt)("a",{parentName:"p",href:"/getting-started"},"get started with Momento")," and start interacting with your cache in as little as five minutes right from your laptop. You don't have to mess with complicated network configuration to benefit from a cache in your application."),(0,o.kt)("p",null,"Second, it works well with serverless applications. Many serverless applications prioritize using services that are available using HTTPS rather than connection models that require a private VPC to control access. Part of this is due to the initial complexity and latency around using Lambda functions within a VPC, but part of it is due to the reduced complexity of avoiding complex network configurations."),(0,o.kt)("p",null,"If these benefits appeal to you, the default networking setup is perfect for you."),(0,o.kt)("h4",{id:"advanced-networking"},"Advanced networking"),(0,o.kt)("p",null,"In addition to the default networking setup, Momento provides an advanced networking configurations that allows for an optimal path between your VPC and the Momento VPC depending on what is best for your application. We can currently support both VPC Endpoints and VPC peering in AWS."),(0,o.kt)("p",null,"These are good options for your workloads if you need to keep the traffic over private addresses for compliance or if you have extreme bandwidth or latency requirements. If you're interested in using a VPC Endpoint or VPC peering with your Momento cache, please ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@momentohq.com"},"contact us")," to learn more and get your account approved to try out."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"On this page, we learned the basic concepts of working with the Momento SDK and API. If you want to get started using Momento, check out our ",(0,o.kt)("a",{parentName:"p",href:"/getting-started"},"getting started guide"),"."),(0,o.kt)("p",null,"If you want to learn more about caching strategies and how to think about caching, check out our resource on ",(0,o.kt)("a",{parentName:"p",href:"./../introduction/common-caching-patterns"},"caching strategies and patterns"),"."),(0,o.kt)("p",null,"If you're looking for a deep, walkthrough tutorial, take a look at our ",(0,o.kt)("a",{parentName:"p",href:"./../serverless-cache-walkthrough/adding-a-cache-to-serverless"},"tutorial on adding caching to a serverless application"),"."))}m.isMDXComponent=!0}}]);