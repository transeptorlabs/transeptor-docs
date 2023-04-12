"use strict";(self.webpackChunkopnode_docs=self.webpackChunkopnode_docs||[]).push([[533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,id:"learn",description:"Learn about Smart Contract Accounts vs EOAs.",title:"EOAs vs Smart Accounts"},s=void 0,i={unversionedId:"learn/learn",id:"learn/learn",title:"EOAs vs Smart Accounts",description:"Learn about Smart Contract Accounts vs EOAs.",source:"@site/docs/learn/eoa-vs-smart-contract-account.md",sourceDirName:"learn",slug:"/learn/learn",permalink:"/docs/learn/learn",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"learn",description:"Learn about Smart Contract Accounts vs EOAs.",title:"EOAs vs Smart Accounts"},sidebar:"tutorialSidebar",previous:{title:"ERC-4337 Overview",permalink:"/docs/learn/erc4337-overview"},next:{title:"Additional Information",permalink:"/docs/learn/additional-information"}},c={},l=[{value:"Externally Owned Accounts (EOAs):",id:"externally-owned-accounts-eoas",level:2},{value:"Smart Accounts (ERC-4337):",id:"smart-accounts-erc-4337",level:2},{value:"Honoring the Legacy of EOAs as Ethereum Evolves",id:"honoring-the-legacy-of-eoas-as-ethereum-evolves",level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"5 minutes to learn about Smart Contract Accounts and EOAs.")),(0,r.kt)("h2",{id:"externally-owned-accounts-eoas"},"Externally Owned Accounts (EOAs):"),(0,r.kt)("p",null,"An Externally Owned Account (EOA) is the most common type on the Ethereum network. It is a basic account owned and controlled by a user, and a public/private key pair identifies it. EOAs allow users to send and receive Ether and other tokens and to deploy and interact with smart contracts."),(0,r.kt)("p",null,"EOAs have several limitations that make them less suitable for mass adoption, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limited functionality"),": EOAs can only send and receive Ether or tokens on the Ethereum network. They cannot execute code, store data, or perform complex operations like smart contract accounts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lack of programmability"),": EOAs cannot execute custom code, which limits their ability to automate tasks or perform complex operations on the Ethereum network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Risk of loss or theft"),": EOAs are vulnerable if the private key associated with the account is compromised or lost, resulting in the loss of all funds associated with the account.")),(0,r.kt)("h2",{id:"smart-accounts-erc-4337"},"Smart Accounts (ERC-4337):"),(0,r.kt)("p",null,"Smart Accounts are a new type of account introduced by the ERC-4337 standard. ERC-4337 is a new protocol feature that changes the bottom-layer transaction type; this proposal introduces a higher-layer transaction object called a UserOperation. Users can broadcast signed UserOperation objects into a separate mempool where a decentralized network of actors named Bundlers sends their transactions to block builders."),(0,r.kt)("p",null,"Smart Accounts offer several advantages over EOAs that make them more suitable for mass adoption, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Improved security"),":Smart contracts can produce ECDSA ",(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1271"},"signatures"),", allowing wallet providers to build wallet Recovery mechanisms into contracts, cutting down on the number of users effect by loss of funds from the mismanagement of EOA's private keys."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Improved user experience"),":  ERC-4337 supports sponsor transactions for other users by introducing an actor called Paymasters. Paymasters can allow dapp developers to subsidize fees for their users, allowing users to pay fees with ERC-20 tokens on a monthly/yearly basis and many other use cases waiting for discovery.")),(0,r.kt)("h2",{id:"honoring-the-legacy-of-eoas-as-ethereum-evolves"},"Honoring the Legacy of EOAs as Ethereum Evolves"),(0,r.kt)("p",null,"Externally Owned Accounts (EOAs) have played a crucial role in developing the Ethereum ecosystem and have enabled users to participate in the network since its inception. EOAs have allowed for the easy transfer of Ether and other tokens on the Ethereum network and have allowed users to interact with decentralized applications (dApps) simply and intuitively. The ease of use and accessibility of EOAs has been instrumental in driving the initial growth of the Ethereum ecosystem and have helped to build a strong community around the technology."),(0,r.kt)("p",null,"However, as the Ethereum ecosystem has grown and matured, it has become clear that EOAs have some limitations that make it difficult to support the mass adoption of the technology. EOAs need more programmability and flexibility to make them well-suited for more complex use cases that require the execution of custom code or the management of more complex financial instruments."),(0,r.kt)("p",null,"As a result, the Ethereum ecosystem has begun to move away from EOAs and towards smart contract accounts, which are programmable accounts that can execute code on the Ethereum network. Smart contract accounts offer a wide range of functionality and flexibility, and can be used to build complex decentralized applications that can manage assets, execute code, and interact with other smart contracts on the network."),(0,r.kt)("p",null,"While the move towards smart contract accounts is necessary to support the growth of the Ethereum ecosystem and enable mass adoption of the technology, it is important to remember the important role that EOAs have played in developing the technology. EOAs have been instrumental in building the Ethereum community and enabled users to participate in the network from the beginning. While the focus has shifted towards smart contract accounts, EOAs will continue to play an important role in the Ethereum ecosystem and will remain an essential tool for interacting with the network."))}d.isMDXComponent=!0}}]);