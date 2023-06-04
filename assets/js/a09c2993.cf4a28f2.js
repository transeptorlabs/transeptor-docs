"use strict";(self.webpackChunktranseptor_docs=self.webpackChunktranseptor_docs||[]).push([[128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,l(l({ref:e},u),{},{components:n})):r.createElement(h,l({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(2606);const l={sidebar_position:1,id:"intro",description:"5 minutes to learn the most important Transeptor concepts.",title:"\ud83d\udc4b Introduction"},i=void 0,s={unversionedId:"intro",id:"intro",title:"\ud83d\udc4b Introduction",description:"5 minutes to learn the most important Transeptor concepts.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",description:"5 minutes to learn the most important Transeptor concepts.",title:"\ud83d\udc4b Introduction"},sidebar:"tutorialSidebar",next:{title:"Learn",permalink:"/docs/category/learn"}},p={},u=[{value:"Why is Transeptor Needed?",id:"why-is-transeptor-needed",level:2},{value:"What is Transeptor?",id:"what-is-transeptor",level:2},{value:"How can I use Transeptor?",id:"how-can-i-use-transeptor",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Contact us",id:"contact-us",level:2}],c={toc:u},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"Transeptor is more than a ',(0,a.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-4337"},"ERC-4337"),' Bundler - a vision for a more accessible and inclusive blockchain ecosystem."')),(0,a.kt)("h2",{id:"why-is-transeptor-needed"},"Why is Transeptor Needed?"),(0,a.kt)("p",null,"More applications are being built on the Ethereum ecosystem, expanding its reach. But, this growth has made it more complex for users to manage their EOA (Externally Owned Accounts). A new proposal called ERC-4337 aims to simplify this process by allowing users to use smart contract wallets instead of EOAs."),(0,a.kt)("p",null,"One of the crucial components of the ERC-4337 is Bundlers, which are the infrastructure of Account Abstraction. The ERC-4337 Bundler ecosystem needs bundler diversity and the ability to allow any actor to take part in the bundling process. We are supporting the development of an ERC-4337 bundler to increase Bundler diversity in the ERC-4337 ecosystem."),(0,a.kt)("h2",{id:"what-is-transeptor"},"What is Transeptor?"),(0,a.kt)("p",null,"The Transeptor offers a wide range of bundling mode to to fit your needs."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mempool support"),": Determines the visibility of the UserOperations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"EVM network"),": The networks that the Bundler supports."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Block building strategy"),": The strategy used by the Bundler to send bundled UseOperations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Front-running protection"),": Does the strategy to send bundles protect the UseOperations from front-running.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Mempool support"),(0,a.kt)("th",{parentName:"tr",align:null},"EVM Networks"),(0,a.kt)("th",{parentName:"tr",align:null},"Block building strategy"),(0,a.kt)("th",{parentName:"tr",align:null},"Front-running protection"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"**base"),(0,a.kt)("td",{parentName:"tr",align:null},"Private mempool of UserOperation"),(0,a.kt)("td",{parentName:"tr",align:null},"All EVM clients"),(0,a.kt)("td",{parentName:"tr",align:null},"Uses eth_sendRawTransaction RPC"),(0,a.kt)("td",{parentName:"tr",align:null},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"**searcher"),(0,a.kt)("td",{parentName:"tr",align:null},"*p2p public mempool or private mempool"),(0,a.kt)("td",{parentName:"tr",align:null},"Ethereum and Goerli"),(0,a.kt)("td",{parentName:"tr",align:null},"Uses ",(0,a.kt)("a",{parentName:"td",href:"https://docs.flashbots.net/flashbots-auction/searchers/quick-start"},"Flashbots")," to send bundled UserOperations to block builders"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"**conditional"),(0,a.kt)("td",{parentName:"tr",align:null},"*p2p public mempool or private mempool"),(0,a.kt)("td",{parentName:"tr",align:null},"EVM clients that support conditional transactions"),(0,a.kt)("td",{parentName:"tr",align:null},"Uses ",(0,a.kt)("a",{parentName:"td",href:"https://notes.ethereum.org/@yoav/SkaX2lS9j"},"eth_sendRawTransactionConditional")," RPC"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")))),(0,a.kt)("p",null,"*You can run with p2p enabled excluding private mode. Base mode should not run in production since it does not protect bundled transaction from front-running."),(0,a.kt)("p",null,"**active development"),(0,a.kt)("h2",{id:"how-can-i-use-transeptor"},"How can I use Transeptor?"),(0,a.kt)("p",null,"Transeptor is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration. To use Transeptor, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the Transeptor docker image."),(0,a.kt)("li",{parentName:"ol"},"Run the Transeptor docker image in a docker container."),(0,a.kt)("li",{parentName:"ol"},"Start using Transeptor to bundle user operation.")),(0,a.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU: Minimum of 2 CPU cores"),(0,a.kt)("li",{parentName:"ul"},"RAM: ","[TBD]"),(0,a.kt)("li",{parentName:"ul"},"Storage: ","[TBD]")),(0,a.kt)("p",null,"Please ensure that your system meets these hardware requirements."),(0,a.kt)("div",{className:"button-left"},(0,a.kt)(o.PopupButton,{id:"fEY6nXV1",style:{fontSize:20},className:"button button--primary button--lg",onReady:()=>{console.log("form ready")},mdxType:"PopupButton"},"Sign up for our waiting list \u23f1\ufe0f")),(0,a.kt)("h2",{id:"contact-us"},"Contact us"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open an issue of Transeptor ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transeptorlabs/transeptor-bundler"},"Github")),(0,a.kt)("li",{parentName:"ol"},"Tweet us on ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/transeptorlabs"},"Twitter"))))}m.isMDXComponent=!0}}]);