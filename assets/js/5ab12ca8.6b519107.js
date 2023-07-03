"use strict";(self.webpackChunktranseptor_docs=self.webpackChunktranseptor_docs||[]).push([[304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var n=r(7462),a=r(7294),o=r(3905),i=r(6010),s=r(9960);const c={cardContainer:"cardContainer_C0Dw",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"};function l(e){let{item:t}=e;const r=a.createElement(a.Fragment,null,t.title&&a.createElement("h2",{className:(0,i.Z)("text--truncate",c.cardTitle)},t.icon&&a.createElement("img",{src:t.icon,className:c.cardIcon}),a.createElement("span",null,t.title)),t.description&&a.createElement("p",null,t.description)),n=(0,i.Z)("card padding--lg",c.cardContainer);return t.href?a.createElement(s.Z,{className:n,href:t.href},r):a.createElement("div",{className:n},r)}function p(e){const{items:t}=e;return a.createElement("section",{className:"row"},t.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(l,{item:e})))))}const u={sidebar_position:1,description:"5 minutes to learn the most important Transeptor concepts.",title:"Introduction"},d=void 0,m={unversionedId:"index",id:"index",title:"Introduction",description:"5 minutes to learn the most important Transeptor concepts.",source:"@site/snap/index.mdx",sourceDirName:".",slug:"/",permalink:"/snap/",draft:!1,editUrl:"https://github.com/transeptorlabs/transeptor-docs/edit/main/snap/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"5 minutes to learn the most important Transeptor concepts.",title:"Introduction"},sidebar:"snapSidebar",next:{title:"Get started",permalink:"/snap/category/get-started"}},h={},f=[{value:"Why ERC-4337 Relayer Snap?",id:"why-erc-4337-relayer-snap",level:2},{value:"What is ERC-4337 Relayer Snap?",id:"what-is-erc-4337-relayer-snap",level:2},{value:"How does ERC-4337 Relayer Snap work?",id:"how-does-erc-4337-relayer-snap-work",level:2},{value:"What can you do with ERC-4337 Relayer Snap",id:"what-can-you-do-with-erc-4337-relayer-snap",level:2},{value:"Questions?",id:"questions",level:2}],y={toc:f},A="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(A,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-erc-4337-relayer-snap"},"Why ERC-4337 Relayer Snap?"),(0,o.kt)("p",null,"Account abstraction introduces new core components to make managing crypto simple. It has potential, but it can be difficult for developers and users to use all its core components. We have a solution that simplifies interacting with those core components."),(0,o.kt)("h2",{id:"what-is-erc-4337-relayer-snap"},"What is ERC-4337 Relayer Snap?"),(0,o.kt)("p",null,"ERC-4337 Relayer is a snap that makes it easy for developers and MetaMask wallet users to use ERC-4337 without dealing with its complexity."),(0,o.kt)("h2",{id:"how-does-erc-4337-relayer-snap-work"},"How does ERC-4337 Relayer Snap work?"),(0,o.kt)("p",null,"The snap adds extra features to MetaMask by including RPC methods that work with ERC-4337 core components. Please take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/snap/concepts/architecture"},"ERC-4337 Relayer Snap Architecture page"),"."),(0,o.kt)("h2",{id:"what-can-you-do-with-erc-4337-relayer-snap"},"What can you do with ERC-4337 Relayer Snap"),(0,o.kt)("p",null,"ERC-4337 Relayer Snap add new API methods to MetaMask, to add support for ERC-4337 blockchain protocol. Here are some of the things you can do with ERC-4337 Relayer Snap."),(0,o.kt)("p",null,"Features include:"),(0,o.kt)(p,{items:[{icon:r(8012).Z,href:"snap/how-to/connect-sc-account",title:"Smart Account Connect",description:"Connect your Smart account to dApps."},{icon:r(8012).Z,href:"snap/how-to/manage-deposits",title:"Manage Deposits",description:"Manage Smart account entry point deposits."},{icon:r(8012).Z,href:"snap/how-to/manage-withdrawals",title:"Manage Withdraws",description:"Manage Smart account entry point withdraws."},{icon:r(8012).Z,href:"snap/how-to/bundler-urls",title:"Manage Bundler Urls",description:"Manage bundler urls for your Smart account."},{icon:r(8012).Z,href:"snap/how-to/send-user-operation",title:"Send User Operations",description:"Send user operations with your Smart account."}],mdxType:"CardList"}),(0,o.kt)("h2",{id:"questions"},"Questions?"),(0,o.kt)("p",null,"If you have any questions on how ERC-4337 Relayer Snap works or want to propose new feature."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open an issue of Transeptor ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transeptorlabs/transeptor-bundler"},"Github")),(0,o.kt)("li",{parentName:"ol"},"Tweet us on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/transeptorlabs"},"Twitter"))))}g.isMDXComponent=!0},8012:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);