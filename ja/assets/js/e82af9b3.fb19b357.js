"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(n),d=a,k=s["".concat(m,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4589:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,sidebar_class_name:"sidebar-item-pricing",title:"\u6599\u91d1",description:"Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1\u30e2\u30c7\u30eb\u306e\u5358\u7d14\u3055\u3092\u898b\u3066\u307f\u3066\u304f\u3060\u3055\u3044"},l="Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1",i={unversionedId:"pricing",id:"pricing",title:"\u6599\u91d1",description:"Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1\u30e2\u30c7\u30eb\u306e\u5358\u7d14\u3055\u3092\u898b\u3066\u307f\u3066\u304f\u3060\u3055\u3044",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/pricing.md",sourceDirName:".",slug:"/pricing",permalink:"/ja/pricing",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/pricing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item-pricing",title:"\u6599\u91d1",description:"Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1\u30e2\u30c7\u30eb\u306e\u5358\u7d14\u3055\u3092\u898b\u3066\u307f\u3066\u304f\u3060\u3055\u3044"},sidebar:"tutorialSidebar",previous:{title:"Cache eviction vs expiration",permalink:"/ja/learn/how-it-works/cache-eviction-vs-expiration"},next:{title:"\u30b5\u30fc\u30d3\u30b9\u4e0a\u9650",permalink:"/ja/limits"}},m={},p=[{value:"\u6599\u91d1\u4f8b:",id:"\u6599\u91d1\u4f8b",level:3},{value:"\u5e73\u5747\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b5\u30a4\u30ba 4KB \u3067\u6bce\u65e5100\u4e07 read/write \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:",id:"\u5e73\u5747\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b5\u30a4\u30ba-4kb-\u3067\u6bce\u65e5100\u4e07-readwrite-\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059",level:5},{value:"\u5e73\u5747 5000 \u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u30921KB \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5b9f\u884c\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:",id:"\u5e73\u5747-5000-\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u30921kb-\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5b9f\u884c\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059",level:5},{value:"20 \u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u306eLambda \u304c\u3042\u3063\u3066\u30011KB \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:",id:"20-\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u306elambda-\u304c\u3042\u3063\u30661kb-\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059",level:5},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f",id:"\u3088\u304f\u3042\u308b\u8cea\u554f",level:3}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1"},"Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306e\u6599\u91d1"),(0,a.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u3068\u306f\u3042\u3089\u3086\u308b\u610f\u5473\u306b\u304a\u3044\u3066\u5358\u7d14\u3067\u3042\u308b\u3053\u3068\u3067\u3042\u308a\u3001\u305d\u308c\u306b\u306f\u6599\u91d1\u3082\u542b\u307e\u308c\u307e\u3059\uff01Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306f $0.15/GB \u306e\u8ee2\u9001\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u305f\u3063\u305f\u305d\u308c\u3060\u3051\u3067\u3059\uff01"),(0,a.kt)("p",null,"\u6bce\u6708\u6700\u521d\u306e 50 GB \u306f\u7121\u6599\u3067\u3001\u4f7f\u3044\u59cb\u3081\u308b\u306e\u306b\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u3055\u3048\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,"Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u306f\u96a0\u308c\u305f\u6599\u91d1\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30ec\u30d7\u30ea\u30ab\u3001\u307e\u305f\u306f\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u305f\u3081\u306b\u304a\u91d1\u3092\u6255\u3046\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u6587\u5b57\u901a\u308a\u3001Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5165\u308b\u307e\u305f\u306f\u51fa\u3066\u3044\u304f\u30c7\u30fc\u30bf\u8ee2\u9001\u306e\u307f\u304c\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u305d\u308c\u4ee5\u5916\u306f\u5168\u3066\u305d\u306e\u4e2d\u306b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5fc3\u914d\u3059\u308b\u3053\u3068\u306a\u304f\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u3001\u7d20\u6674\u3089\u3057\u3044\u4f55\u304b\u3092\u4f5c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u898b\u7a4d\u308a\u306e\u624b\u52a9\u3051\u306b\u306a\u308b\u3088\u3046\u306b\u3001\u4ee5\u4e0b\u306b\u3044\u304f\u3064\u304b\u306e\u6599\u91d1\u8a08\u7b97\u306e\u30b5\u30f3\u30d7\u30eb\u3092\u8f09\u305b\u307e\u3057\u305f\u3002\u3055\u3089\u306a\u308b\u304a\u624b\u4f1d\u3044\u304c\u5fc5\u8981\u3067\u3042\u308c\u3070\uff08\u3082\u3057\u304f\u306f\u3061\u3087\u3063\u3068\u4fe1\u3058\u3089\u308c\u306a\u3044\u69d8\u3067\u3042\u308c\u3070\uff09\u3001\u79c1\u305f\u3061\u306e",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Z7FSXB89"},"Discord"),"\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9802\u3051\u305f\u3089\u3001\u5bfe\u5fdc\u3044\u305f\u3057\u307e\u3059\u3002Momento \u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u6311\u6226\u3057\u3066\u3001\u305d\u3057\u3066\u3069\u308c\u304f\u3089\u3044\u6599\u91d1\u3092\u524a\u6e1b\u3067\u304d\u308b\u304b\u3092\u898b\u3066\u307f\u3066\u304f\u3060\u3055\u3044\uff01"),(0,a.kt)("h3",{id:"\u6599\u91d1\u4f8b"},"\u6599\u91d1\u4f8b:"),(0,a.kt)("h5",{id:"\u5e73\u5747\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b5\u30a4\u30ba-4kb-\u3067\u6bce\u65e5100\u4e07-readwrite-\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059"},"\u5e73\u5747\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30b5\u30a4\u30ba 4KB \u3067\u6bce\u65e5100\u4e07 read/write \u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"100\u4e07\u30ea\u30af\u30a8\u30b9\u30c8/\u65e5 * 30.5\u65e5/\u6708 * 4KB/\u30ea\u30af\u30a8\u30b9\u30c8 * $.15/GB")," = ",(0,a.kt)("strong",{parentName:"p"},"$18.3/\u6708")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=1+million%2F+day+*+4KB+*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," \u306e\u8a08\u7b97\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h5",{id:"\u5e73\u5747-5000-\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u30921kb-\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5b9f\u884c\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059"},"\u5e73\u5747 5000 \u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u30921KB \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5b9f\u884c\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"5K\u30ea\u30af\u30a8\u30b9\u30c8/\u79d2 * 86400\u79d2/\u65e5 * 30.5\u65e5/\u6708 * 1KB/\u30ea\u30af\u30a8\u30b9\u30c8")," = ",(0,a.kt)("strong",{parentName:"p"},"$1976/\u6708")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=5000%2Fsecond+*+1KB++*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," \u306e\u8a08\u7b97\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h5",{id:"20-\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u306elambda-\u304c\u3042\u3063\u30661kb-\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3057\u307e\u3059momento-\u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059"},"20 \u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2\u306eLambda \u304c\u3042\u3063\u3066\u30011KB \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3059\u308b\u3068\u3057\u307e\u3059\u3002Momento \u306e\u8ab2\u91d1\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u306a\u308a\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"20\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u79d2 * 86400\u79d2/\u65e5 * 30.5\u65e5/\u6708 * 1KB")," = ",(0,a.kt)("strong",{parentName:"p"},"$.38/\u6708")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8: \u7121\u6599\u67a0\u306a\u3057\u3060\u3068\u3001\u3053\u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306f$7.88/\u6708\u306b\u306a\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u8a73\u7d30\u306f",(0,a.kt)("a",{parentName:"em",href:"https://www.wolframalpha.com/input?i=%28%2820+requests%2Fsecond+*+1KB%2Frequest%29+-+50GB+%2Fmonth%29+*+%24.15%2FGB+to+%24%2Fmonth"},"Wolfram Alpha")," \u306e\u8a08\u7b97\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h3",{id:"\u3088\u304f\u3042\u308b\u8cea\u554f"},"\u3088\u304f\u3042\u308b\u8cea\u554f"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"Momento \u306f\u672c\u5f53\u306b$.15/GB \u306e\u30c7\u30fc\u30bf\u8ee2\u9001\u306e\u51fa\u5165\u308a\u3060\u3051\u306a\u306e\u3067\u3059\u304b\uff1f\u305d\u308c\u4ee5\u5916\u306b\u304a\u91d1\u304c\u304b\u304b\u308b\u3082\u306e\u306f\u3042\u308a\u307e\u3059\u304b\uff1f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5bfe\u8c61"),(0,a.kt)("th",{parentName:"tr",align:null},"Momento \u6599\u91d1"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30e1\u30e2\u30ea / \u30b9\u30c8\u30ec\u30fc\u30b8"),(0,a.kt)("td",{parentName:"tr",align:null},"$0/GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8907\u6570AZ \u30ec\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u6599\u91d1"),(0,a.kt)("td",{parentName:"tr",align:null},"$0/GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30b7\u30f3\u30b0\u30eb\u30b5\u30a4\u30f3\u30aa\u30f3 & \u30c1\u30fc\u30e0 (\u307e\u3082\u306a\u304f)"),(0,a.kt)("td",{parentName:"tr",align:null},"$0/\u30e6\u30fc\u30b6\u30fc")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u63a5\u7d9a\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"$0/\u6570\u5343\u63a5\u7d9a"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Momento \u3092\u7121\u6599\u3067\u672c\u756a\u74b0\u5883\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"),"\u3082\u3061\u308d\u3093\u3067\u3059\uff01\u7121\u6599\u67a0\u3084\u4f4e\u3044\u5229\u7528\u7387\u3067\u3082\u3001\u5927\u898f\u6a21\u5229\u7528\u306e\u3082\u306e\u3068\u540c\u69d8\u306b\u3001\u9ad8\u901f\u3067\u53ef\u7528\u6027\u304c\u3042\u308a\u30bb\u30ad\u30e5\u30a2\u3067\u3059\u3002\u8907\u6570AZ \u30ec\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001\u30db\u30c3\u30c8\u30ad\u30fc\u4fdd\u8b77\u3001\u305d\u3057\u3066\u7a81\u767a\u7684\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3078\u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3068\u3044\u3063\u305f\u9ad8\u53ef\u7528\u6027\u306e\u305f\u3081\u306e\u6a5f\u80fd\u304c\u5168\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u305f\u3081\u306e\u5168\u3066\u306e\u6a5f\u80fd(\u30a8\u30f3\u30c9\u30c4\u30fc\u30a8\u30f3\u30c9\u6697\u53f7\u5316\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u6bce\u306e\u8a8d\u8a3c\u3001TLS)\u3082\u7121\u6599\u3067\u4f7f\u3048\u307e\u3059\u3002",(0,a.kt)("p",null,"\u304a\u5ba2\u69d8\u306e\u4e2d\u3067\u3088\u304f\u3001\u4f4e\u3044RPS \u306e\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u305f\u3081\u306b\u30d5\u30eb\u88c5\u5099\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u30d7\u30ed\u30d3\u30b8\u30e7\u30f3\u3057\u3066\u3044\u308b\u30b1\u30fc\u30b9\u3092\u898b\u304b\u3051\u307e\u3059\u3002HA (\u9ad8\u53ef\u7528\u6027)\u304c\u6b32\u3057\u3044\u5834\u5408\u3001\u8907\u6570\u30ce\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002CICD \u3092\u5229\u7528\u3057\u305f\u3051\u308c\u3070\u3001\u540c\u7a0b\u5ea6\u306e\u30b5\u30a4\u30ba\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u3001\u30b9\u30c6\u30fc\u30b8\u30f3\u30b0\u3084\u958b\u767a\u74b0\u5883\u306b\u3055\u3048\u8a2d\u7f6e\u3057\u305f\u304f\u306a\u308b\u3067\u3057\u3087\u3046\u3002\u5168\u3066\u30b3\u30b9\u30c8\u3068\u3057\u3066\u7a4d\u307f\u4e0a\u304c\u308a\u307e\u3059\uff01\u3053\u3046\u3057\u305f\u30de\u30b7\u30f3\u306f\u505c\u6b62\u3057\u3066\u3057\u307e\u3063\u3066\u3001\u30b3\u30b9\u30c8\u3092\u524a\u6e1b\u3057\u307e\u3057\u3087\u3046\u3002Momento \u3067\u884c\u304d\u307e\u3057\u3087\u3046\uff01")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Momento \u3092\u6bce\u6708$1.50 \u3067\u672c\u756a\u74b0\u5883\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u4f7f\u3046\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u304b\uff1f"),"\u3082\u3061\u308d\u3093\u3067\u3059\uff01\u3082\u3057\u6bce\u670860 GB \u306e\u30c7\u30fc\u30bf\u8ee2\u9001\u306e\u51fa\u5165\u308a\u304cMomento \u306b\u3042\u3063\u305f\u3068\u3059\u308b\u3068\u3001\u6bce\u6708\u6700\u521d\u306e50GB \u5206\u306f\u7121\u6599\u3067\u3001\u6b8b\u308a\u306e\u6bce\u670810GB \u306b\u5bfe\u3057\u3066$0.15/GB \u3092\u652f\u6255\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u3069\u3093\u306a\u30b9\u30b1\u30fc\u30eb\u3067\u3082\u3001Momento \u306e\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u30ec\u30d9\u30eb\u306e\u53ef\u7528\u6027\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u305d\u3057\u3066\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u3054\u5229\u7528\u3067\u304d\u307e\u3059\u3002",(0,a.kt)("p",null,"\u3053\u308c\u306f\u72c2\u6c17\u3058\u307f\u305f\u3088\u3046\u306b\u805e\u3053\u3048\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u304c\u3001\u79c1\u305f\u3061\u304c\u6700\u521d\u306b\u59cb\u3081\u305f\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u307b\u304b\u306e\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u30b5\u30fc\u30d3\u30b9\u3001\u4f8b\u3048\u3070DynamoDB\u3001S3\u3001\u305d\u3057\u3066\u4ed6\u306b\u3082\u305f\u304f\u3055\u3093\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u540c\u3058\u3082\u306e\u3092\u7d4c\u9a13\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002\u79c1\u305f\u3061\u306f\u5358\u306b\u30b5\u30fc\u30d0\u30fc\u30ec\u30b9\u306e\u30a2\u30a4\u30c7\u30a2\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u3082\u3063\u3066\u304d\u305f\u3060\u3051\u306a\u306e\u3067\u3059\u3002")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u30b9\u30b1\u30fc\u30eb\u3059\u308b\u306e\u3067\u3059\u304b\uff1f"),"\u306f\u3044\u3001\u3082\u3061\u308d\u3093\u3067\u3059\uff01Momento \u306f\u5c06\u6765\u3082\u4f7f\u3044\u7d9a\u3051\u3089\u308c\u308b\u30ad\u30e3\u30c3\u30b7\u30e5\u3068\u3057\u3066\u6700\u9ad8\u306e\u9078\u629e\u80a2\u3067\u3059\u3002Momento \u3092\u8ffd\u52a0\u3059\u308b\u306e\u306f *\u3082\u306e\u3059\u3054\u304f* \u7d20\u65e9\u304f\u3067\u304d\u3066\u3001\u305d\u306e\u3042\u3068\u306f1RPS \u3060\u308d\u3046\u304c100\u4e07RPS \u3060\u308d\u3046\u304c\u3001\u3042\u3068\u306e\u3053\u3068\u306f\u5168\u3066\u30d0\u30c3\u30af\u30b0\u30e9\u30a6\u30f3\u30c9\u306b\u884c\u308f\u308c\u308b\u306e\u3067\u7686\u3055\u3093\u304c\u8003\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u4f7f\u3063\u305f\u5206\u3060\u3051\u6599\u91d1\u3092\u6255\u3046\u3060\u3051\u3067\u3088\u3044\u306e\u3067\u3001\u30b9\u30b1\u30fc\u30eb\u53ef\u80fd\u306a\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u9ad8\u984d\u306a\u6599\u91d1\u3092\u652f\u6255\u3046\u3053\u3068\u306a\u304f\u5f97\u3089\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./getting-started"},"Momento \u3092\u306f\u3058\u3081\u3066\u307f\u307e\u3057\u3087\u3046\uff01")))}c.isMDXComponent=!0}}]);