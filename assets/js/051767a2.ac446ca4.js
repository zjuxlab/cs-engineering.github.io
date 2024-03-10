"use strict";(self.webpackChunkcs_engineering=self.webpackChunkcs_engineering||[]).push([[1037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var i=2;i<p;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={},l="\u524d\u7aef\u5165\u95e8",o={unversionedId:"frontend/frontend-intro",id:"frontend/frontend-intro",title:"\u524d\u7aef\u5165\u95e8",description:"\u5165\u95e8\u65b9\u6848",source:"@site/docs/frontend/frontend-intro.md",sourceDirName:"frontend",slug:"/frontend/frontend-intro",permalink:"/cs-engineering/docs/frontend/frontend-intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/frontend-intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSS pseudo elements",permalink:"/cs-engineering/docs/frontend/css/pseudo-element"},next:{title:"\u524d\u7aef\u5165\u95e8\u5b9e\u8df5",permalink:"/cs-engineering/docs/frontend/frontend-practice"}},s={},i=[{value:"\u5165\u95e8\u65b9\u6848",id:"\u5165\u95e8\u65b9\u6848",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u7f51\u9875\u5e03\u5c40\u2014\u2014 HTML \u548c CSS",id:"\u7f51\u9875\u5e03\u5c40-html-\u548c-css",level:4},{value:"\u7f51\u9875\u884c\u4e3a\u2014\u2014 JavaScript",id:"\u7f51\u9875\u884c\u4e3a-javascript",level:4},{value:"\u6846\u67b6",id:"\u6846\u67b6",level:3},{value:"<strong>HTTP \u534f\u8bae</strong>",id:"http-\u534f\u8bae",level:3},{value:"Fetch API",id:"fetch-api",level:3},{value:"<strong>SWR</strong>",id:"swr",level:3}],c={toc:i},u="wrapper";function d(e){let{components:t,...p}=e;return(0,a.kt)(u,(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u7aef\u5165\u95e8"},"\u524d\u7aef\u5165\u95e8"),(0,a.kt)("h2",{id:"\u5165\u95e8\u65b9\u6848"},"\u5165\u95e8\u65b9\u6848"),(0,a.kt)("p",null,"\u5728\u524d\u7aef\u5165\u95e8\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u4f1a\u6d89\u53ca\u5230\u7684\u90e8\u5206\uff0c\u5176\u5b9e\u4e5f\u5c31\u662f\u4e0b\u56fe\u4e2d\u7684\u8fd9\u4e9b\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e09\u4ef6\u5957\uff08\u57fa\u7840\uff09"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u6846\u67b6"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42"),"\u3002\u6211\u4eec\u63a8\u8350\u4f60\u7528\u4e00\u79cd\u201c\u6574\u4f53\u201d\u7684\u89c6\u89d2\u770b\u5f85\u8fd9\u4e09\u4e2a\u90e8\u5206\uff0c\u610f\u601d\u662f\u8bf4\uff0c\u660e\u767d\u5b83\u4eec\u5728\u4e00\u4e2a\u9875\u9762\u7684\u6784\u5efa\u4e2d\u5206\u522b\u8d77\u5230\u4e86\u4ec0\u4e48\u6837\u7684\u4f5c\u7528\uff08\u8bd5\u7740\u8bbe\u60f3\u6ca1\u6709\u5b83\u4eec\u4e2d\u7684\u4e00\u4e2a\uff0c\u60c5\u51b5\u4f1a\u5982\u4f55\uff1f\uff09\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u5728\u4e00\u4e2a\u6846\u67b6\u4e2d\u53bb\u8fd0\u7528\u5b83\u4eec\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230914225838602",src:n(8624).Z,width:"730",height:"219"})),(0,a.kt)("p",null,"\u56e0\u4e3a\u53ea\u662f\u201c\u65b9\u6848\u201d\uff0c\u6240\u4ee5\u8fd9\u4e2a\u6587\u6863\u91cc\u53ea\u4f1a\u5217\u51fa\u5757\u72b6\u7684\u77e5\u8bc6\u70b9\uff0c\u4ee5\u53ca\u7b80\u5355\u8bb2\u8bb2\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4e3a\u4e4b\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u5927\u5bb6\u5728\u5165\u95e8\u9636\u6bb5\u9700\u8981\uff08\u6216\u8005\u8bf4\u5c06\u8981\uff09\u5b66\u4e60\u7684\u5185\u5bb9\u63d0\u4f9b\u53c2\u8003\u3002\u6211\u4eec\u4f1a\u5728\u6bcf\u4e00\u90e8\u5206\u9644\u4e0a\u4e00\u4e9b\u53ef\u4f9b\u81ea\u5b66\u7684\u6750\u6599\uff0c\u5728\u9700\u8981\u65f6\u4f5c\u4e3a\u53c2\u8003\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,a.kt)("p",null,"\u524d\u7aef\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4e09\u4ef6\u5957\uff08HTML"),"/",(0,a.kt)("strong",{parentName:"p"},"CSS"),"/",(0,a.kt)("strong",{parentName:"p"},"JavaScript\uff09"),"\u5b9e\u9645\u4e0a\u662f\u4e00\u5207\u524d\u7aef\u7684\u57fa\u7840\u3002\u6bd4\u5982\uff0c\u6211\u4eec\u4ec5\u4ec5\u4f7f\u7528\u4e00\u4e2a.HTML\u6587\u4ef6\u3001\u4e00\u4e2a\u5916\u90e8\u5bfc\u5165\u7684.CSS\u6587\u4ef6\u548c.js\u6587\u4ef6\uff0c\u628a\u5b83\u4eec\u6839\u636ehtml\u8981\u6c42\u7684\u5185\u5bb9\u62fc\u5728\u4e00\u8d77\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u6709\u57fa\u672c\u6837\u5f0f\u548c\u884c\u4e3a\u7684\u9875\u9762\uff0c\u8fd9\u4e5f\u662f\u524d\u7aef\u4e09\u4ef6\u5957\u7684\u521d\u59cb\u4f7f\u7528\u5f62\u6001\uff08\u5176\u5b9e\u53ef\u4ee5\u5c1d\u8bd5\u4e00\u4e0b\u7528\u8fd9\u79cd\u65b9\u5f0f\u5199\u9875\u9762\uff0c\u8fd9\u4ecd\u7136\u662f\u53ef\u884c\u800c\u4e14\u975e\u5e38\u5bb9\u6613\u4e0a\u624b\u7684\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230914224933698",src:n(1741).Z,width:"577",height:"188"})),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u73b0\u5728\u6211\u4eec\u4e0d\u8fd9\u4e48\u5e72\uff0c\u4e00\u822c\u4f1a\u4f7f\u7528\u524d\u7aef\u6846\u67b6\u63d0\u4f9b\u7684\u6587\u4ef6\u7ed3\u6784\u548c\u6784\u5efa\u5de5\u5177\u6765\u642d\u5efa\u524d\u7aef\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u6211\u4eec\u5176\u5b9e\u53ef\u4ee5\u628a\u524d\u7aef\u6846\u67b6\u7406\u89e3\u6210\u5bf9\u539f\u59cb\u7684\u4e09\u4ef6\u5957\u8fdb\u884c\u7684\u201c",(0,a.kt)("strong",{parentName:"p"},"\u5305\u88c5"),"\u201d\uff0c\u8fd9\u4e00\u5c42\u5305\u88c5\u4e3a\u9875\u9762\u7f16\u5199\u63d0\u4f9b\u4e86\u5f88\u591a\u597d\u7684\u6027\u8d28\u4e0e\u5de5\u5177\uff0c\u6bd4\u5982\uff1a\u6570\u636e\u4e0e\u89c6\u56fe\u53cc\u5411\u7ed1\u5b9a\u3001\u63d0\u4f9b\u4e86\u8def\u7531\u3001\u72b6\u6001\u7ba1\u7406\u5e93\u7b49\u7b49\u3002\u4f46\u662f\u5728\u8fd9\u5c42\u6846\u67b6\u4e0b\uff0c\u7528\u6765\u7f16\u5199\u9875\u9762\u7684\u4e1c\u897f\uff0c\u5f52\u6839\u7ed3\u5e95\u8fd8\u662fHTML\u3001CSS \u548c JavaScript\u6216\u8005\u5b83\u4eec\u7684\u53d8\u4f53\uff08\u5982JSX\uff09\u3002"),(0,a.kt)("p",null,"\u5bf9\u8fd9\u4e9b\u6982\u5ff5\u6709\u4e86\u4e00\u5b9a\u7684\u8ba4\u77e5\u4e4b\u540e\uff0c\u6211\u4eec\u5c55\u5f00\u4e00\u4e0b\u201c\u4e09\u4ef6\u5957\u201d\u5185\u90e8\u7684\u5173\u7cfb\uff0c\u7b80\u5355\u6982\u62ec\u5c31\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTML\u548cCSS\u786e\u5b9a\u4e86\u9875\u9762\u5185\u5bb9\u548c\u6837\u5f0f\uff0cJavaScript\u521b\u5efa\u4e86\u9875\u9762\u7684\u884c\u4e3a\u3002")),(0,a.kt)("h4",{id:"\u7f51\u9875\u5e03\u5c40-html-\u548c-css"},"\u7f51\u9875\u5e03\u5c40\u2014\u2014 HTML \u548c CSS"),(0,a.kt)("p",null," HTML \u548c CSS \u5b9a\u4e49\uff1a\u628a\u9f20\u6807\u79fb\u5230\u8fd9\u4e24\u4e2a\u8bcd\u4e0a\u5c31\u80fd\u770b\u5230\u7b80\u5355\u5b9a\u4e49\u4e86\uff0c\u5c31\u4e0d\u624b\u52a8\u5217\u51fa\u4e86\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8eHTML\u548cCSS\u5728\u9875\u9762\u4e2d\u7684\u7528\u9014\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u63cf\u8ff0\uff1aHTML\u662f\u9aa8\u67b6\uff0cCSS\u8d1f\u8d23\u5728\u9aa8\u67b6\u4e0a\u627e\u5230\u5408\u9002\u7684\u201c\u751f\u957f\u70b9\u201d\uff0c\u957f\u51fa\u9700\u8981\u7684\u76ae\u8089\uff08\u597d\u9732\u9aa8\u7684\u6bd4\u55bbx\uff09\uff0c\u4e5f\u5c31\u662f\u505a\u51fa\u4f60\u60f3\u8981\u7684\u5916\u89c2\u3002"),(0,a.kt)("p",null,"HTML\u7684\u5404\u7c7b\u6807\u7b7e\u3001CSS\u4e2d\u7684\u5f88\u591a\u5c5e\u6027\u53ca\u5176\u7528\u9014\uff0c\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0\uff0c\u56e0\u4e3a\u5b83\u4eec\u66f4\u50cf\u662f\u7eaf\u7cb9\u8bb0\u5fc6\u6027\u800c\u975e\u7406\u89e3\u6027\u7684\u4e1c\u897f\uff0c\u6211\u4eec\u5728\u9700\u8981\u7528\u5230\u7684\u65f6\u5019\u80fd\u591f\u5584\u7528\u641c\u7d22\u5f15\u64ce\u627e\u5230\u5b83\u4eec\u7684\u7528\u6cd5\u5c31\u597d\u4e86\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u60f3\u4e00\u60f3\uff1a\u6211\u4eec\u6700\u7ec8\u8981\u4f7f\u7528 HTML \u548c CSS \uff08\u4e14\u4ec5\u4f7f\u7528\uff09\u505a\u51fa\u7684\u4e1c\u897f\u662f\u4ec0\u4e48\uff1f\u7b54\u6848\u662f\u4e00\u4e2a\u65e0\u884c\u4e3a\u4f46\u5916\u89c2\u5b8c\u5907\u7684\u9875\u9762\u3002\u4e3a\u8fbe\u5230\u201c",(0,a.kt)("strong",{parentName:"p"},"\u5916\u89c2\u5b8c\u5907"),"\u201d\uff0c\u8fd9\u4e9b\u5e03\u5c40\u65b9\u5f0f\u4f60\u9700\u8981\u4e86\u89e3\uff1a"),(0,a.kt)("p",null,"\u76d2\u5b50\u6a21\u578b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model"},"\u76d2\u6a21\u578b - MDN")),(0,a.kt)("p",null,"\u8fd9\u662f\u4f7f\u7528CSS\u5e03\u5c40\u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u5bf9\u4e8e\u4e00\u4e2a\u7ed9\u5b9a\u7684\u9875\u9762\u8bbe\u8ba1\uff0c\u9996\u5148\u5c31\u9700\u8981\u7528\u76d2\u5b50\u6a21\u578b\u7684\u601d\u8def\u53bb\u5206\u6790\u5982\u4f55\u6784\u5efa\u5b83\u3002"),(0,a.kt)("p",null,"flex\u5f39\u6027\u76d2\u5b50 ",(0,a.kt)("a",{parentName:"p",href:"https://ruanyifeng.com/blog/2015/07/flex-grammar.html"},"Flex - \u962e\u4e00\u5cf0")," "),(0,a.kt)("p",null,"grid\u7f51\u683c\u5e03\u5c40 ",(0,a.kt)("a",{parentName:"p",href:"https://ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html"},"grid - \u962e\u4e00\u5cf0")," "),(0,a.kt)("p",null,"\u5584\u7528\u8fd9\u4e24\u79cd\u5e03\u5c40\u65b9\u5f0f\u90fd\u53ef\u4ee5\u8ba9\u201c\u753b\u9875\u9762\u201d\u7684\u8fc7\u7a0b\u66f4\u65b9\u4fbf\u5feb\u901f\uff0c\u5e76\u4e14\u5b9e\u73b0\u9875\u9762\u81ea\u9002\u5e94\u7b49\u9700\u6c42\u3002"),(0,a.kt)("h4",{id:"\u7f51\u9875\u884c\u4e3a-javascript"},"\u7f51\u9875\u884c\u4e3a\u2014\u2014 JavaScript"),(0,a.kt)("p",null,"\u5728\u9875\u9762\u7684\u5916\u89c2\u641e\u5b9a\u4e4b\u540e\uff0c\u9700\u8981\u7ed9\u9875\u9762\u52a0\u884c\u4e3a\uff0c\u4e8e\u662f\u5c31\u9700\u8981\u4f7f\u7528JS\u7528\u7f16\u7a0b\u7684\u65b9\u5f0f\u89c4\u5b9a\u9875\u9762\u7684\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"JavaScript\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u7f16\u7a0b\u8bed\u8a00\uff08HTML \u53ea\u662f\u4e00\u79cd\u6807\u8bb0\u8bed\u8a00\uff09\uff0c\u76f8\u6bd4\u4e8eC\u8bed\u8a00\u7b49\uff0c\u7701\u7565\u4e86\u5f88\u591a\u6570\u636e\u7c7b\u578b\u7684\u5904\u7406\uff08\u539f\u751fJS\u4e2d\u6570\u636e\u5b9a\u4e49\u7edf\u4e00\u4e3avar\u3001let\u548cconst\uff09\u3002"),(0,a.kt)("p",null,"\u6700\u539f\u59cb\u7684\u4f7f\u7528JS\u4e3a\u9875\u9762\u6dfb\u52a0\u884c\u4e3a\u7684\u65b9\u5f0f\u662f\u4f7f\u7528DOM\uff0c\u83b7\u53d6\u9875\u9762\u5185\u5143\u7d20\u540e\u6dfb\u52a0\u76f8\u5e94\u7684\u52a8\u4f5c\uff0c\u6bd4\u5982\u6dfb\u52a0\u3001\u4fee\u6539\u3001\u79fb\u9664\u7b49\u7b49\uff0c\u5f53\u7136\uff0c\u5728\u4f7f\u7528\u6846\u67b6\u7f16\u5199\u9875\u9762\u65f6\uff0c\u7531\u4e8e\u6846\u67b6\u5df2\u7ecf\u5c01\u88c5\u4e86\u8fd9\u4e9b\u529f\u80fd\uff0c\u6240\u4ee5\u53ef\u4ee5\u6bd4\u8f83\u8212\u670d\u5730\u76f4\u63a5\u4f7f\u7528JS\u8fdb\u884c\u7b26\u5408\u5f00\u53d1\u903b\u8f91\u7684\u9875\u9762\u884c\u4e3a\u3002\u5bf9\u6b64\uff0c\u4e0d\u540c\u7684\u6846\u67b6\u5bf9JS\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5165\u95e8\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u662fReact\u6846\u67b6\u3002\u5728React\u6846\u67b6\u4e2d\uff0cJS \u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"JSX"),"\u7684\u5f62\u5f0f\u8868\u793a\u5e76\u8fdb\u884c\u7f51\u9875\u903b\u8f91\u5904\u7406\u3002JSX \u662f JavaScript \u8bed\u6cd5\u6269\u5c55\uff0c\u53ef\u4ee5\u5728 JavaScript \u6587\u4ef6\u4e2d\u4e66\u5199\u7c7b\u4f3c HTML \u7684\u6807\u7b7e\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u7528\u8fd9\u6bb5\u4ee3\u7801\u8fdb\u884c\u611f\u6027\u8ba4\u77e5\uff08",(0,a.kt)("strong",{parentName:"p"},"JSX =")," ",(0,a.kt)("strong",{parentName:"p"},"JS")," ",(0,a.kt)("strong",{parentName:"p"},"+")," ",(0,a.kt)("strong",{parentName:"p"},"HTML"),"\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"    return (\n        <div className='container'>\n            <Form addComment={addComment}></Form>\n            <div className='bar'>\n                {commentList}\n            </div>\n        </div>\n    );\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u53ef\u4ee5\u7b80\u5355\u4e00\u63d0",(0,a.kt)("strong",{parentName:"p"},"TypeScript"),"\uff0c\u5b83\u662fJS\u589e\u52a0\u4e86\u7c7b\u578b\u6ce8\u89e3\u540e\u7684\u8d85\u96c6\uff08\u6211\u4eec\u5728\u524d\u9762\u8bf4\u4e86JS\u662f\u5f31\u7c7b\u578b\u7684\uff09\uff0c\u4ec5\u5728\u7f16\u8f91\u9636\u6bb5\u8d77\u5230\u4e3a\u7a0b\u5e8f\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u7684\u4f5c\u7528\uff0c\u7f16\u8bd1\u540e\u4f1a\u8f6c\u5316\u4e3aJS\u3002\u5584\u7528TS\uff0c\u53ef\u4ee5\u5728\u5f00\u53d1\u9636\u6bb5\u63d0\u524d\u53d1\u73b0\u5f88\u591a\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u6846\u67b6"},"\u6846\u67b6"),(0,a.kt)("p",null,"\u5728\u5b9e\u4e60\u9636\u6bb5\uff0c\u6211\u4eec\u5c06\u4e3b\u8981\u5b66\u4e60\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"React"),"\u6846\u67b6\u3002"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u5df2\u7ecf\u8bf4\u4e86\uff0c\u524d\u7aef\u6846\u67b6\u53ef\u4ee5\u7406\u89e3\u6210\u662f\u5bf9\u539f\u59cb\u7684\u4e09\u4ef6\u5957\u8fdb\u884c\u7684\u201c",(0,a.kt)("strong",{parentName:"p"},"\u5305\u88c5"),"\u201d\uff0c\u4e0d\u540c\u7684\u5305\u88c5\u65b9\u5f0f\u4f1a\u5177\u6709\u4e0d\u540c\u7684\u7279\u6027\u548c\u4ee3\u7801\u98ce\u683c\u3002\u800cReact\u8fd9\u79cd\u5305\u88c5\u65b9\u5f0f\uff0c\u4e3a\u7f51\u9875\u7f16\u5199\u8005\u63d0\u4f9b\u7684\u7279\u6027\u6709\uff1a\u7ec4\u4ef6\u5c42\u7ea7\u80fd\u529b\u3001\u5355\u5411\u6570\u636e\u6d41\u3001\u51fd\u6570\u5f0f\u7f16\u7a0b\u3001\u54cd\u5e94\u5f0f\u66f4\u65b0\u3001\u72b6\u6001\u4e0d\u53ef\u53d8\u2026\u2026"),(0,a.kt)("p",null,"srds\uff0c\u6846\u67b6\u8fd9\u79cd\u4e1c\u897f\uff0c\u5982\u679c\u4e0d\u4e0a\u624b\u5199\u8fc7\uff0c\u5f88\u96be\u5bf9\u8fd9\u4e9b\u6982\u5ff5\u6709\u4ec0\u4e48\u5207\u5b9e\u7684\u4f53\u4f1a\uff0c\u6240\u4ee5\u5efa\u8bae\u5728\u5165\u95e8\u9879\u76ee\u4e2d\u4eb2\u81ea\u53bb\u4f53\u4f1a\u5427\uff01\u90a3\u91cc\u4f1a\u6709\u6bd4\u8fd9\u91cc\u66f4\u8be6\u7ec6\u7684\u9762\u5411\u5f00\u53d1\u8fc7\u7a0b\u7684\u8bf4\u660e\u3002"),(0,a.kt)("p",null,"\u76f8\u5173\u5b66\u4e60\u6750\u6599\uff08\u5f53\u7136\u4e0d\u6b62\u8fd9\u4e9b\uff01\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.react.dev/learn/thinking-in-react"},"React \u54f2\u5b66 \u2013 React"),"\uff08\u611f\u89c9\u8bb2\u5f97\u4e5f\u633a\u62bd\u8c61\u7684\uff0c\u5c31\u59d1\u5984\u770b\u4e4b\u5427\uff09"),(0,a.kt)("p",null,"\u63a8\u8350\u9605\u8bfb\uff1a"),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.react.dev/learn"},"\u5feb\u901f\u5165\u95e8")),(0,a.kt)("p",null,"MDN\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"},"React\u5165\u95e8")),(0,a.kt)("h3",{id:"http-\u534f\u8bae"},(0,a.kt)("strong",{parentName:"h3"},"HTTP \u534f\u8bae")),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u9700\u8981\u5199\u7684\u9875\u9762\u5df2\u7ecf\u5916\u89c2\u5b8c\u5907\u3001\u5177\u6709\u4e00\u5b9a\u7684\u9875\u9762\u884c\u4e3a\u3002\u4f46\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\u2014\u2014\u7f51\u9875\u4e0a\u7684\u6570\u636e\u4ece\u54ea\u91cc\u83b7\u5f97\uff1f\u6211\u4eec\u53ef\u4ee5\u5047\u5b9a\u6709\u4e00\u4e2a\u5b58\u5728\u4e8e\u8fdc\u7aef\u7684\u201c",(0,a.kt)("strong",{parentName:"p"},"\u5e93"),"\u201d\uff0c\u5f53\u524d\u7aef\u9700\u8981\u6570\u636e\u65f6\uff0c\u5c31\u5411\u8fd9\u4e2a\u201c\u5e93\u201d\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u201c\u5e93\u201d\u5728\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u6839\u636e\u524d\u7aef\u7684\u9700\u8981\uff0c\u4e3a\u5176\u63d0\u4f9b\u6240\u9700\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4e0a\u9762\u8bb2\u7684\u8fd9\u4e00\u7cfb\u5217\u6d41\u7a0b\uff0c\u5176\u5b9e\u6a21\u62df\u7684\u5c31\u662f\u524d\u7aef\u4e0e\u540e\u7aef\u534f\u4f5c\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42"),"\u662f\u8fde\u63a5\u524d\u7aef\u548c\u540e\u7aef\u7684\u201c\u6865\u6881\u201d\u3002\u5f53\u524d\u7aef\u9700\u8981\u5728\u7f51\u9875\u4e0a\u52a8\u6001\u6e32\u67d3\u6570\u636e\u7684\u65f6\u5019\uff0c\u524d\u7aef\u5411\u540e\u7aef\u53d1\u9001 HTTP \u8bf7\u6c42\u4ee5\u83b7\u53d6\u6570\u636e\u3002\u50cf\u6d4f\u89c8\u5668\u8fd9\u6837\u7684\u5ba2\u6237\u7aef\u53d1\u51fa\u7684\u6d88\u606f\u53eb\u505a",(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u6c42\uff08request\uff09"),"\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u6d88\u606f\u53eb\u505a",(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\uff08response\uff09"),"\u3002"),(0,a.kt)("p",null,"HTTP\u534f\u8bae\u662f\u4e00\u79cd\u65e0\u72b6\u6001\u534f\u8bae\uff0c\u201c\u65e0\u72b6\u6001\u201d\u7684\u610f\u601d\u662f\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u662f\u72ec\u7acb\u7684\u3002"),(0,a.kt)("p",null,"\u4e00\u6761HTTP\u8bf7\u6c42\u7684\u57fa\u672c\u90e8\u5206\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u6cd5\uff1a\u5e38\u7528\u7684\u8bf7\u6c42\u65b9\u6cd5\u6709GET\uff0cPOST",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GET"),"\uff1aGET \u8bf7\u6c42\u7528\u4e8e\u4ece\u670d\u52a1\u5668\u83b7\u53d6\u8d44\u6e90\u3002\u5b83\u901a\u5e38\u7528\u4e8e\u8bfb\u53d6\u670d\u52a1\u5668\u4e0a\u7684\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u5bf9\u670d\u52a1\u5668\u72b6\u6001\u9020\u6210\u5f71\u54cd\u3002GET \u8bf7\u6c42\u5c06\u53c2\u6570\uff08params\uff09\u9644\u52a0\u5728 URL \u7684\u672b\u5c3e\uff0c\u4ee5\u4fbf\u670d\u52a1\u5668\u6839\u636e\u8fd9\u4e9b\u53c2\u6570\u8fd4\u56de\u6240\u9700\u7684\u8d44\u6e90\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"POST"),"\uff1aPOST \u8bf7\u6c42\u7528\u4e8e\u5c06\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u521b\u5efa\u6216\u66f4\u65b0\u8d44\u6e90\u3002\u4e0e GET \u8bf7\u6c42\u4e0d\u540c\uff0cPOST \u8bf7\u6c42\u5c06\u6570\u636e\u4f5c\u4e3a\u8bf7\u6c42\u7684\u4e3b\u4f53\uff08body\uff09\u53d1\u9001\uff0c\u800c\u4e0d\u662f\u5c06\u6570\u636e\u9644\u52a0\u5728 URL \u7684\u672b\u5c3e\u3002\u8fd9\u4f7f\u5f97 POST \u8bf7\u6c42\u53ef\u4ee5\u53d1\u9001\u66f4\u5927\u91cf\u7684\u6570\u636e\uff0c\u800c\u4e14\u76f8\u5bf9\u66f4\u5b89\u5168\u2014\u2014\u56e0\u4e3a POST \u8bf7\u6c42\u4e2d\u7684\u6570\u636e\u65e2\u4e0d\u4f1a\u51fa\u73b0\u5728 URL \u4e2d\uff0c\u4e5f\u4e0d\u4f1a\u88ab\u7f13\u5b58\u3002"))),(0,a.kt)("li",{parentName:"ul"},"URLs\uff1aURL \u662f\u7528\u4e8e\u5728\u4e92\u8054\u7f51\u4e0a\u5b9a\u4f4d\u548c\u8bbf\u95ee\u8d44\u6e90\u7684\u5b57\u7b26\u4e32\uff0c\u901a\u5e38\u7531\u591a\u4e2a\u90e8\u5206\u7ec4\u6210\uff0c\u5305\u62ec\u534f\u8bae\uff08\u5982HTTP\u6216HTTPS\uff09\u3001\u4e3b\u673a\u540d\uff08\u57df\u540d\uff09\u3001\u7aef\u53e3\u53f7\uff08\u53ef\u7701\u7565\uff09\u3001\u8def\u5f84\u3001\u67e5\u8be2\u53c2\u6570\u7b49\u3002\u4e00\u822c\u683c\u5f0f\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"<scheme>://<authority><path>?<query>")),(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u7801\uff1a\u72b6\u6001\u7801\u7531\u670d\u52a1\u7aef\u8fd4\u56de\uff0c\u4e0d\u540c\u7684\u72b6\u6001\u7801\u8868\u73b0\u4e86\u670d\u52a1\u5668\u7684\u4e0d\u540c\u72b6\u6001\uff0c\u4f8b\u5982\u6211\u4eec\u719f\u6089\u7684404\uff0c\u8868\u793a\u7684\u662f\u6240\u8bbf\u95ee\u7684\u8d44\u6e90\u4e0d\u5b58\u5728\u3002")),(0,a.kt)("p",null,"HTTP | MDN \uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP"},"HTTP")),(0,a.kt)("h3",{id:"fetch-api"},"Fetch API"),(0,a.kt)("p",null,"\u5728HTTP\u534f\u8bae\u90e8\u5206\uff0c\u6211\u4eec\u8bb2\u4e86\u6982\u5ff5\u5316\u7684\u8bf7\u6c42\uff0c\u800cFetch API \u662f\u4e00\u4e2a\u5177\u4f53\u7684\u8bf7\u6c42\u63a5\u53e3\uff0c\u7528\u4e8e\u8bbf\u95ee\u548c\u64cd\u7eb5 HTTP \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u7b49\u90e8\u5206\uff0c\u5b83\u4e5f\u662f\u6211\u4eec\u5728React\u6846\u67b6\u4e2d\u4e00\u822c\u7528\u6765\u53d1\u9001\u8bf7\u6c42\u7684\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"Fetch API \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"fetch()"))," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u3001\u5408\u7406\u7684\u65b9\u5f0f\u6765\u8de8\u7f51\u7edc\u5f02\u6b65\u83b7\u53d6\u8d44\u6e90\uff0c\u66ff\u4ee3\u4e86\u539f\u5148\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"\u7684\u65b9\u5f0f\uff0c\u7528\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u7684\u5f02\u6b65\uff08.then()\uff0c\u6216\u662f async, await \uff09\u4ee3\u66ff\u4e86\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"\u7684\u5f02\u6b65\uff0c\u4f7f\u5f97\u5f02\u6b65\u8bf7\u6c42\u4e0d\u9700\u8981\u8fc7\u591a\u5d4c\u5957\u5c42\u6570\u3002\u5f53\u7136\uff0c\u5b83\u8fd8\u63d0\u4f9b\u4e86\u5f88\u591a\u522b\u7684\u4f18\u70b9\uff0c\u5728\u6b64\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,a.kt)("p",null,"\u4e3e\u4f8b\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),"\u7684\u4f7f\u7528\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const arg = { userId: 1 };\nconst data = await fetch('https://example.com/profile', {\n  method: 'POST', // or 'PUT'\u8bf7\u6c42\u65b9\u6cd5\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(arg),//\u8bf7\u6c42\u4f53\n})\n.then(response => response.json());//\u628a\u8fd4\u56de\u683c\u5f0f\u8f6c\u6210json\n")),(0,a.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u53ef\u53c2\u89c1\uff08\u9996\u5148\u4f1a\u7528\u5c31\u53ef\u4ee5\u5566\uff09\uff1a"),(0,a.kt)("p",null,"\u4f7f\u7528Fetch\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"},"Using Fetch")),(0,a.kt)("h3",{id:"swr"},(0,a.kt)("strong",{parentName:"h3"},"SWR")),(0,a.kt)("p",null,"\u7ec8\u4e8e\u5230\u4e86\u6700\u540e\u4e00\u90e8\u5206\uff01\u6211\u4eec\u5df2\u7ecf\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),"\u65b9\u6cd5\u5411\u540e\u7aef\u53d1\u9001\u8bf7\u6c42\u6765\u83b7\u53d6\u9700\u8981\u7684\u6570\u636e\u4e86\uff0c\u56e0\u6b64\u4e00\u4e2a\u5b8c\u6574\u7684web\u9875\u9762\uff08\u524d\u7aef\u90e8\u5206\uff09\u5df2\u7ecf\u53ef\u4ee5\u88ab\u6784\u5efa\u8d77\u6765\u3002\u6211\u4eec\u53ef\u4ee5\u628aSWR\u7406\u89e3\u6210\u662f\u5bf9\u5df2\u6709\u7684\u8fd9\u4e00\u5957\u8bf7\u6c42\u8fc7\u7a0b\u7684\u8fdb\u4e00\u6b65\u4f18\u5316\u3002"),(0,a.kt)("p",null,"SWR \u662f\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),"\uff08React \u6846\u67b6\uff09\u80cc\u540e\u7684\u540c\u4e00\u56e2\u961f\u521b\u5efa\u7684",(0,a.kt)("strong",{parentName:"p"},"\u7528\u4e8e\u6570\u636e\u8bf7\u6c42\u7684 React Hooks \u5e93\uff0c"),"\u5b83\u89e3\u51b3\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"fetch()"),"\u5728React\u5e94\u7528\u4e2d\uff0c\u591a\u4e2a\u7ec4\u4ef6\u540c\u65f6\u53d1\u9001\u540c\u4e00\u4e2a\u8bf7\u6c42\u4ee5\u83b7\u53d6\u6570\u636e\u7684\u95ee\u9898\uff0c\u5728\u8fd9\u4e00\u60c5\u5883\u4e0b\uff0c\u591a\u6b21\u53d1\u9001\u540c\u4e00\u4e2a\u8bf7\u6c42\u4f1a\u5bfc\u81f4\u7f51\u7edc\u6d41\u91cf\u7684\u6d6a\u8d39\u3002\u5f53\u7136\u6211\u4eec\u4e5f\u53ea\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u6240\u83b7\u5f97\u7684\u6570\u636e\u901a\u8fc7\u900f\u4f20\u7684\u65b9\u5f0f\u4f20\u9012\u7ed9\u5176\u4ed6\u7ec4\u4ef6\u8fdb\u884c\u6e32\u67d3\uff0c\u4f46\u8fd9\u4e0eReact\u7684\u5355\u5411\u6570\u636e\u6d41\u7684\u539f\u5219\u662f\u76f8\u6096\u7684\uff0c\u5e76\u4e0d\u662f\u4e00\u79cd\u4f18\u96c5\u7684\u5904\u7406\u529e\u6cd5\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e00\u60c5\u666f\u4e0b\uff0c",(0,a.kt)("strong",{parentName:"p"},"SWR")," \u88ab\u63d0\u51fa\u7528\u4e8e\u89e3\u51b3 React \u5f00\u53d1\u4e2d\u7684\u8fd9\u4e00\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5b83\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"useSWR()"),"\u94a9\u5b50\uff0c\u63d0\u4f9b\u4e86\u4e00\u5c42\u7f13\u5b58\u5c42\u7528\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff08\u53ef\u4ee5\u7406\u89e3\u4e3a\uff0c\u628a\u7b2c\u4e00\u4e2a\u83b7\u5f97\u7684\u8bf7\u6c42\u7ed3\u679c\u653e\u5165\u7f13\u5b58\u5c42\uff0c\u4e4b\u540e\u5bf9\u4e8e\u76f8\u540c\u7684\u8bf7\u6c42\u53ef\u4ee5\u76f4\u63a5\u5411\u7f13\u5b58\u5c42\u53d6\u6570\u636e\uff09\uff0cSWR\u9ed8\u8ba4\u53ea\u6709 ",(0,a.kt)("strong",{parentName:"p"},"GET")," \u8bf7\u6c42\uff08\u5982\u679c\u9700\u8981\u53d1\u9001 POST \u8bf7\u6c42\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u5c06 POST \u8bf7\u6c42\uff0c\u7136\u540e\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"mutate"),"\u4fee\u6539\u7f13\u5b58\uff09"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// ./components/Avatar.jsx\nimport { useUser } from '../modal.js';\nconst { user, isLoading, isError } = useUser(id)\n\n// ./modal.js\nexport function useUser(id) {\n  const { data, error, isLoading } = useSWR(`/api/user/${id}`, fetcher)\n \n  return {\n    user: data,\n    isLoading,\n    isError: Boolean(error),\n  }\n}\n")),(0,a.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://swr.vercel.app/zh-CN"},"SWR")))}d.isMDXComponent=!0},8624:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/frontend-intro-6-3aa6e6c4b21ddfc7050359d2cdae28ad.png"},1741:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/frontend-intro-7-9f92b8dd06c4d7add15c221570e30a05.png"}}]);