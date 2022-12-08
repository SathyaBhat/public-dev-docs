"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[687],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>v});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(a),v=n,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||r;return a?i.createElement(m,o(o({ref:t},h),{},{components:a})):i.createElement(m,o({ref:t},h))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=a(7462),n=(a(7294),a(3905));const r={sidebar_position:4,sidebar_label:"Cache eviction vs expiration",title:"Cache eviction vs expiration",slug:"/learn/how-it-works/cache-eviction-vs-expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache"},o="Cache eviction vs. cache expiration",c={unversionedId:"learn/how-it-works/cache-eviction-vs-expiration",id:"learn/how-it-works/cache-eviction-vs-expiration",title:"Cache eviction vs expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/learn/how-it-works/cache-eviction-vs-expiration.md",sourceDirName:"learn/how-it-works",slug:"/learn/how-it-works/cache-eviction-vs-expiration",permalink:"/ja/learn/how-it-works/cache-eviction-vs-expiration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/learn/how-it-works/cache-eviction-vs-expiration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Cache eviction vs expiration",title:"Cache eviction vs expiration",slug:"/learn/how-it-works/cache-eviction-vs-expiration",description:"Learn about differences between expiring and evicting data from a cache and how these terms relate to Momento Serverless cache"},sidebar:"tutorialSidebar",previous:{title:"Expiring data with TTL",permalink:"/ja/learn/how-it-works/expire-data-with-ttl"},next:{title:"\u6599\u91d1",permalink:"/ja/pricing"}},s={},l=[{value:"What is cache eviction?",id:"what-is-cache-eviction",level:2},{value:"Momento Serverless Cache and eviction",id:"momento-serverless-cache-and-eviction",level:2},{value:"Cache expiration",id:"cache-expiration",level:2}],h={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cache-eviction-vs-cache-expiration"},"Cache eviction vs. cache expiration"),(0,n.kt)("p",null,"The data lifecycle is one of the most important aspects of a cache management system. This page discusses the two means a cache does this, cache eviction and cache expiration, and then provides detail about how Momento Serverless Cache employs these concepts."),(0,n.kt)("h2",{id:"what-is-cache-eviction"},"What is cache eviction?"),(0,n.kt)("p",null,'In general caching terms, eviction is when a cache write causes the aggregate data in a cache to exceed the available memory storage, and the cache must remove some data ("evict") to make room. For example, this evicted data could be data that is used less frequently, or another algorithm, depending on how the cache is configured. Some cache implementations evict data to perform maintenance windows.'),(0,n.kt)("h2",{id:"momento-serverless-cache-and-eviction"},"Momento Serverless Cache and eviction"),(0,n.kt)("p",null,"Momento Serverless Cache associates cache misses closely with errors. Therefore, the service is designed to avoid evicting data from a cache. Instead of evicting data, when one of the service's cache nodes nears capacity, the service scales to add more capacity on your behalf, and keys are transparently re-distributed to keep the cache miss ratio low."),(0,n.kt)("p",null,"Momento Serverless Cache has no maintenance windows. Operational changes such as scaling and node replacement are automatically handled in the background by the service. A prewarming process is used to avoid impacting cache hit rates. "),(0,n.kt)("h2",{id:"cache-expiration"},"Cache expiration"),(0,n.kt)("p",null,"In general caching terms, expiration is when a time-to-live (TTL) value is part of each piece of data. When that time lapses, the service deletes the data from the cache."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"./expire-data-with-ttl"},"Expire data from caches by setting Time-to-Live (TTL)")," for specific information on how Momento Serverless Cache treats this topic."))}p.isMDXComponent=!0}}]);