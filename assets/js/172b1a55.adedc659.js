"use strict";(self.webpackChunkcs_engineering=self.webpackChunkcs_engineering||[]).push([[9590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="postman",l={unversionedId:"utils/debug/postman",id:"utils/debug/postman",title:"postman",description:"Postman\u662f\u4e00\u79cd\u7f51\u9875\u8c03\u8bd5\u4e0e\u53d1\u9001\u7f51\u9875http\u8bf7\u6c42\u7684chrome\u63d2\u4ef6\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u6765\u5f88\u65b9\u4fbf\u7684\u6a21\u62dfget\u6216\u8005post\u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u7684\u8bf7\u6c42\u6765\u8c03\u8bd5\u63a5\u53e3\u3002\u5728Postman\u4e2d\uff0c\u8bf7\u6c42\u53ef\u4ee5\u4fdd\u5b58\uff0c\u4e5f\u5c31\u7c7b\u4f3c\u4e8e\u6587\u4ef6\u3002\u800cCollection\u7c7b\u4f3c\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u628a\u540c\u4e00\u4e2a\u9879\u76ee\u7684\u8bf7\u6c42\u653e\u5728\u4e00\u4e2aCollection\u91cc\u65b9\u4fbf\u7ba1\u7406\u548c\u5206\u4eab\uff0cCollection\u91cc\u9762\u4e5f\u53ef\u4ee5\u518d\u5efa\u6587\u4ef6\u5939\u3002",source:"@site/docs/utils/debug/postman.md",sourceDirName:"utils/debug",slug:"/utils/debug/postman",permalink:"/cs-engineering/docs/utils/debug/postman",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/utils/debug/postman.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"curl",permalink:"/cs-engineering/docs/utils/debug/curl"},next:{title:"\u5f00\u53d1\u7ba1\u7406\u7c7b",permalink:"/cs-engineering/docs/category/\u5f00\u53d1\u7ba1\u7406\u7c7b"}},c={},s=[{value:"\u77e5\u8bc6\u70b9\u5411\u5bfc",id:"\u77e5\u8bc6\u70b9\u5411\u5bfc",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postman"},"postman"),(0,o.kt)("p",null,"Postman\u662f\u4e00\u79cd\u7f51\u9875\u8c03\u8bd5\u4e0e\u53d1\u9001\u7f51\u9875http\u8bf7\u6c42\u7684chrome\u63d2\u4ef6\u3002\u6211\u4eec\u53ef\u4ee5\u7528\u6765\u5f88\u65b9\u4fbf\u7684\u6a21\u62dfget\u6216\u8005post\u6216\u8005\u5176\u4ed6\u65b9\u5f0f\u7684\u8bf7\u6c42\u6765\u8c03\u8bd5\u63a5\u53e3\u3002\u5728Postman\u4e2d\uff0c\u8bf7\u6c42\u53ef\u4ee5\u4fdd\u5b58\uff0c\u4e5f\u5c31\u7c7b\u4f3c\u4e8e\u6587\u4ef6\u3002\u800cCollection\u7c7b\u4f3c\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u628a\u540c\u4e00\u4e2a\u9879\u76ee\u7684\u8bf7\u6c42\u653e\u5728\u4e00\u4e2aCollection\u91cc\u65b9\u4fbf\u7ba1\u7406\u548c\u5206\u4eab\uff0cCollection\u91cc\u9762\u4e5f\u53ef\u4ee5\u518d\u5efa\u6587\u4ef6\u5939\u3002"),(0,o.kt)("h3",{id:"\u77e5\u8bc6\u70b9\u5411\u5bfc"},"\u77e5\u8bc6\u70b9\u5411\u5bfc"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"get/post/"),(0,o.kt)("li",{parentName:"ol"},"\u56fe\u7247\u7684\u53d1\u9001"),(0,o.kt)("li",{parentName:"ol"},"\u8868\u5355\u7684\u53d1\u9001"),(0,o.kt)("li",{parentName:"ol"},"\u9274\u6743(cookie,token)"),(0,o.kt)("li",{parentName:"ol"},"params\u548cbody\u4f20\u53c2\u7684\u533a\u522b")))}m.isMDXComponent=!0}}]);