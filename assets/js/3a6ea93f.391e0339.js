"use strict";(self.webpackChunkcs_engineering=self.webpackChunkcs_engineering||[]).push([[709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,d=m["".concat(s,".").concat(c)]||m[c]||k[c]||r;return n?l.createElement(d,i(i({ref:t},o),{},{components:n})):l.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={},i="Markdown",p={unversionedId:"utils/writing/markdown",id:"utils/writing/markdown",title:"Markdown",description:"1. \u6807\u9898",source:"@site/docs/utils/writing/markdown.md",sourceDirName:"utils/writing",slug:"/utils/writing/markdown",permalink:"/cs-engineering/docs/utils/writing/markdown",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/utils/writing/markdown.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Latex",permalink:"/cs-engineering/docs/utils/writing/latex"}},s={},u=[{value:"1. \u6807\u9898",id:"1-\u6807\u9898",level:3},{value:"This is an H2",id:"this-is-an-h2",level:2},{value:"2. \u5b57\u4f53",id:"2-\u5b57\u4f53",level:3},{value:"3. \u5206\u5272\u7ebf",id:"3-\u5206\u5272\u7ebf",level:3},{value:"4. \u5f15\u7528",id:"4-\u5f15\u7528",level:3},{value:"5. \u5217\u8868",id:"5-\u5217\u8868",level:3},{value:"6. \u8868\u683c",id:"6-\u8868\u683c",level:3},{value:"7. \u4ee3\u7801",id:"7-\u4ee3\u7801",level:3},{value:"8. \u6bb5\u843d\u548c\u6362\u884c",id:"8-\u6bb5\u843d\u548c\u6362\u884c",level:3},{value:"9. \u8d85\u94fe\u63a5",id:"9-\u8d85\u94fe\u63a5",level:3},{value:"10. \u81ea\u52a8\u94fe\u63a5",id:"10-\u81ea\u52a8\u94fe\u63a5",level:3},{value:"11. \u63d2\u5165\u56fe\u7247",id:"11-\u63d2\u5165\u56fe\u7247",level:3},{value:"12. \u8c03\u6574\u56fe\u7247\u683c\u5f0f",id:"12-\u8c03\u6574\u56fe\u7247\u683c\u5f0f",level:3},{value:"\u4e8c\u3001Markdown \u7eaf\u6587\u672c\u8fdb\u9636\u8bed\u6cd5",id:"\u4e8cmarkdown-\u7eaf\u6587\u672c\u8fdb\u9636\u8bed\u6cd5",level:2},{value:"1. \u6309\u952e",id:"1-\u6309\u952e",level:3},{value:"2. \u9ad8\u4eae\u6587\u5b57",id:"2-\u9ad8\u4eae\u6587\u5b57",level:3},{value:"3. \u76ee\u5f55",id:"3-\u76ee\u5f55",level:3},{value:"4. \u4e0a\u4e0b\u6807",id:"4-\u4e0a\u4e0b\u6807",level:3},{value:"5. \u6570\u5b66\u516c\u5f0f",id:"5-\u6570\u5b66\u516c\u5f0f",level:3}],o={toc:u},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown"},"Markdown"),(0,a.kt)("h3",{id:"1-\u6807\u9898"},"1. \u6807\u9898"),(0,a.kt)("p",null,"Markdown \u652f\u6301\u4e24\u79cd\u6807\u9898\u7684\u8bed\u6cd5\uff0c\u7c7b Setext \u548c\u7c7b atx \u5f62\u5f0f\u3002 \u7c7b Setext \u5f62\u5f0f\u662f\u7528\u5e95\u7ebf\u7684\u5f62\u5f0f\uff0c\u5229\u7528 = \uff08\u6700\u9ad8\u9636\u6807\u9898\uff09\u548c - \uff08\u7b2c\u4e8c\u9636\u6807\u9898\uff09\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"This is an H1\n=======\n\nThis is an H2\n----------\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("h1",{id:"this-is-an-h1"},"This is an H1"),(0,a.kt)("h2",{id:"this-is-an-h2"},"This is an H2"),(0,a.kt)("p",null,"\u4efb\u4f55\u6570\u91cf\u7684 = \u548c - \u90fd\u53ef\u4ee5\u6709\u6548\u679c\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff0c\u7531\u4e8e\u5206\u5272\u7ebf\u4e5f\u662f \u201c----\u201d\uff0c \u56e0\u6b64\u5728\u4f7f\u7528\u5206\u5272\u7ebf\u65f6\uff0c\u4e00\u5b9a\u8981\u7a7a\u4e00\u884c\uff0c\u4e0d\u7136\u4f1a\u628a\u4e0a\u65b9\u7684\u6587\u5b57\u8bc6\u522b\u4e3a\u7b2c\u4e8c\u9636\u6807\u9898\u3002")),(0,a.kt)("p",null,"\u7c7b Atx \u5f62\u5f0f\u5219\u662f\u5728\u884c\u9996\u63d2\u5165 1 \u5230 6 \u4e2a # \uff0c\u5bf9\u5e94\u5230\u6807\u9898 1 \u5230 6 \u9636\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# this is H1\n## this is H2\n###### this is H6\n")),(0,a.kt)("p",null,"\u4e00\u822c\u5728 # \u540e\u8ddf\u4e2a\u7a7a\u683c\u518d\u5199\u6587\u5b57\uff0c\u4e0d\u7136\u53ef\u80fd\u4f1a\u65e0\u6cd5\u8bc6\u522b\u3002"),(0,a.kt)("h3",{id:"2-\u5b57\u4f53"},"2. \u5b57\u4f53"),(0,a.kt)("p",null,"Markdown \u4f7f\u7528\u661f\u53f7\uff08","*","\uff09\u548c\u4e0b\u5212\u7ebf\uff08_\uff09\u4f5c\u4e3a\u6807\u8bb0\u5f3a\u8c03\u5b57\u8bcd\u7684\u7b26\u53f7\uff0c\u4f60\u53ef\u4ee5\u968f\u4fbf\u7528\u4f60\u559c\u6b22\u7684\u6837\u5f0f\uff0c\u552f\u4e00\u7684\u9650\u5236\u662f\uff0c\u4f60\u7528\u4ec0\u4e48\u7b26\u53f7\u5f00\u542f\u6807\u7b7e\uff0c\u5c31\u8981\u7528\u4ec0\u4e48\u7b26\u53f7\u7ed3\u675f\u3002\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"**\u8fd9\u662f\u52a0\u7c97**\n__\u8fd9\u4e5f\u662f\u52a0\u7c97__\n*\u8fd9\u662f\u503e\u659c*\n_\u8fd9\u4e5f\u662f\u503e\u659c_\n***\u8fd9\u662f\u52a0\u7c97\u503e\u659c***\n~~\u8fd9\u662f\u52a0\u5220\u9664\u7ebf~~\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u52a0\u7c97")," ",(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u4e5f\u662f\u52a0\u7c97")," ",(0,a.kt)("em",{parentName:"p"},"\u8fd9\u662f\u503e\u659c")," ",(0,a.kt)("em",{parentName:"p"},"\u8fd9\u4e5f\u662f\u503e\u659c")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u8fd9\u662f\u52a0\u7c97\u503e\u659c"))," ",(0,a.kt)("del",{parentName:"p"},"\u8fd9\u662f\u52a0\u5220\u9664\u7ebf")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5f3a\u8c03\u4e5f\u53ef\u4ee5\u76f4\u63a5\u63d2\u5728\u6587\u5b57\u4e2d\u95f4\uff0c\u4f46\u662f\u5982\u679c\u4f60\u7684 ","*"," \u548c _ \u4e24\u8fb9\u90fd\u6709\u7a7a\u767d\u7684\u8bdd\uff0c\u5b83\u4eec\u5c31\u53ea\u4f1a\u88ab\u5f53\u6210\u666e\u901a\u7684\u7b26\u53f7\u3002 \u5982\u679c\u8981\u5728\u6587\u5b57\u524d\u540e\u76f4\u63a5\u63d2\u5165\u666e\u901a\u7684\u661f\u53f7\u6216\u5e95\u7ebf\uff0c\u4f60\u53ef\u4ee5\u7528\u53cd\u659c\u7ebf \\ \u6765\u8f6c\u4e49\u3002"),(0,a.kt)("h3",{id:"3-\u5206\u5272\u7ebf"},"3. \u5206\u5272\u7ebf"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e00\u884c\u4e2d\u7528\u4e09\u4e2a\u4ee5\u4e0a\u7684\u661f\u53f7\u3001\u51cf\u53f7\u3001\u5e95\u7ebf\u6765\u5efa\u7acb\u4e00\u4e2a\u5206\u9694\u7ebf\uff0c\u884c\u5185\u4e0d\u80fd\u6709\u5176\u4ed6\u4e1c\u897f\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u661f\u53f7\u6216\u662f\u51cf\u53f7\u4e2d\u95f4\u63d2\u5165\u7a7a\u683c\u3002\u4e0b\u9762\u6bcf\u79cd\u5199\u6cd5\u90fd\u53ef\u4ee5\u5efa\u7acb\u5206\u9694\u7ebf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"* * *\n***\n**********\n- - -\n_________________\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"4-\u5f15\u7528"},"4. \u5f15\u7528"),(0,a.kt)("p",null,"\u5728\u5f15\u7528\u7684\u6587\u5b57\u524d\u52a0 > \u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\nconsectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\nVestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n\n> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\nid sem consectetuer libero luctus adipiscing.\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\nDonec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing. ")),(0,a.kt)("p",null,"\u533a\u5757\u5f15\u7528\u53ef\u4ee5\u5d4c\u5957\uff08\u4f8b\u5982\uff1a\u5f15\u7528\u5185\u7684\u5f15\u7528\uff09\uff0c\u53ea\u8981\u6839\u636e\u5c42\u6b21\u52a0\u4e0a\u4e0d\u540c\u6570\u91cf\u7684 > \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"> This is the first level of quoting.\n>\n> > This is nested blockquote.\n>\n> Back to the first level.\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the first level of quoting."),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"This is nested blockquote.")),(0,a.kt)("p",{parentName:"blockquote"},"Back to the first level.")),(0,a.kt)("p",null,"\u5f15\u7528\u7684\u533a\u5757\u5185\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u7684 Markdown \u8bed\u6cd5\uff0c\u5305\u62ec\u6807\u9898\u3001\u5217\u8868\u3001\u4ee3\u7801\u533a\u5757\u7b49\u3002"),(0,a.kt)("h3",{id:"5-\u5217\u8868"},"5. \u5217\u8868"),(0,a.kt)("p",null,"Markdown \u652f\u6301\u6709\u5e8f\u5217\u8868\u548c\u65e0\u5e8f\u5217\u8868\u3002 \u65e0\u5e8f\u5217\u8868\u4f7f\u7528\u661f\u53f7\u3001\u52a0\u53f7\u6216\u662f\u51cf\u53f7\u4f5c\u4e3a\u5217\u8868\u6807\u8bb0\u3002 \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"- \u5217\u8868\u5185\u5bb9\n+ \u5217\u8868\u5185\u5bb9\n* \u5217\u8868\u5185\u5bb9\n\n\u6ce8\u610f\uff1a- + * \u8ddf\u5185\u5bb9\u4e4b\u95f4\u90fd\u8981\u6709\u4e00\u4e2a\u7a7a\u683c\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5217\u8868\u5185\u5bb9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5217\u8868\u5185\u5bb9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5217\u8868\u5185\u5bb9")),(0,a.kt)("p",null,"\u6709\u5e8f\u5217\u8868\u5219\u4f7f\u7528\u6570\u5b57\u63a5\u7740\u4e00\u4e2a\u82f1\u6587\u53e5\u70b9\u4f5c\u4e3a\u6807\u8bb0\u3002 \u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"1. \u5217\u8868\u5185\u5bb9\n2. \u5217\u8868\u5185\u5bb9\n3. \u5217\u8868\u5185\u5bb9\n\n\u6ce8\u610f\uff1a\u5e8f\u53f7\u8ddf\u5185\u5bb9\u4e4b\u95f4\u8981\u6709\u7a7a\u683c\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a 1. \u5217\u8868\u5185\u5bb9 2. \u5217\u8868\u5185\u5bb9 3. \u5217\u8868\u5185\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff0c\u4f60\u5728\u5217\u8868\u6807\u8bb0\u4e0a\u4f7f\u7528\u7684\u6570\u5b57\u5e76\u4e0d\u4f1a\u5f71\u54cd\u8f93\u51fa\u7684 HTML \u7ed3\u679c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4f60\u7684\u6807\u8bb0\u5199\u6210\uff1a\n1.  Bird\n1.  McHale\n1.  Parish\n\n\u751a\u81f3\uff1a\n\n8. Bird\n1. McHale\n4. Parish\n\n\u6548\u679c\u90fd\u4e00\u6837\u3002\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u4f60\u7684\u6807\u8bb0\u5199\u6210\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bird"),(0,a.kt)("li",{parentName:"ol"},"McHale"),(0,a.kt)("li",{parentName:"ol"},"Parish")),(0,a.kt)("p",null,"\u751a\u81f3\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bird"),(0,a.kt)("li",{parentName:"ol"},"McHale"),(0,a.kt)("li",{parentName:"ol"},"Parish")),(0,a.kt)("p",null,"\u6548\u679c\u90fd\u4e00\u6837\u3002"),(0,a.kt)("p",null,"\u5217\u8868\u90fd\u53ef\u4ee5\u5d4c\u5957\uff0c\u7f29\u8fdb\u4e0d\u540c\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"* \u4e00\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9\n   * \u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9\n   * \u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9\n   * \u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u5185\u5bb9")))),(0,a.kt)("p",null,"\u8981\u8ba9\u5217\u8868\u770b\u8d77\u6765\u66f4\u6f02\u4eae\uff0c\u4f60\u53ef\u4ee5\u628a\u5185\u5bb9\u7528\u56fa\u5b9a\u7684\u7f29\u8fdb\u6574\u7406\u597d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\n    viverra nec, fringilla in, laoreet vitae, risus.\n*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\n    Suspendisse id sem consectetuer libero luctus adipiscing\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a ",(0,a.kt)("em",{parentName:"p"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.")," Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscin"),(0,a.kt)("p",null,"\u6709\u4e00\u79cd\u5077\u61d2\u7684\u5199\u6cd5\u4e5f\u53ef\u4ee5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\nAliquam hendrerit mi posuere lectus. Vestibulum enim wisi,\nviverra nec, fringilla in, laoreet vitae, risus.\n*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.\nSuspendisse id sem consectetuer libero luctus adipiscing.\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing."))),(0,a.kt)("p",null,"\u5217\u8868\u9879\u76ee\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6bb5\u843d\uff0c\u6bcf\u4e2a\u9879\u76ee\u4e0b\u7684\u6bb5\u843d\u90fd\u5fc5\u987b\u7f29\u8fdb\u7b49\u91cf\u7684\u7a7a\u683c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"1. This is a list item with two paragraphs. Lorem ipsum dolor\n   sit amet, consectetuer adipiscing elit. Aliquam hendrerit\n   mi posuere lectus.\n\n   Vestibulum enim wisi, viverra nec, fringilla in, laoreet\n   vitae, risus. Donec sit amet nisl. Aliquam semper ipsum\n   sit amet velit.\n\n2. Suspendisse id sem consectetuer libero luctus adipiscing.\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This is a list item with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus."),(0,a.kt)("p",{parentName:"li"},"Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Suspendisse id sem consectetuer libero luctus adipiscing."))),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6bcf\u884c\u90fd\u6709\u7f29\u8fdb\uff0c\u770b\u8d77\u6765\u4f1a\u770b\u597d\u5f88\u591a\uff0c\u5f53\u7136\uff0c\u518d\u6b21\u5730\uff0c\u5982\u679c\u4f60\u5f88\u61d2\u60f0\uff0cMarkdown \u4e5f\u5141\u8bb8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"*   This is a list item with two paragraphs.\n\n    This is the second paragraph in the list item. You're\nonly required to indent the first line. Lorem ipsum dolor\nsit amet, consectetuer adipiscing elit.\n\n*   Another item in the same list.\n")),(0,a.kt)("p",null,"\u6548\u679c\u4e0d\u518d\u5c55\u793a\u3002 \u6b64\u5916\uff1a ",(0,a.kt)("em",{parentName:"p"},"\u5982\u679c\u8981\u5728\u5217\u8868\u9879\u76ee\u5185\u653e\u8fdb\u5f15\u7528\uff0c\u90a3 > \u5c31\u9700\u8981\u7f29\u8fdb\uff0c")," \u5982\u679c\u8981\u653e\u4ee3\u7801\u533a\u5757\u7684\u8bdd\uff0c\u8be5\u533a\u5757\u5c31\u9700\u8981\u7f29\u8fdb\u4e24\u6b21\uff0c\u4e5f\u5c31\u662f 8 \u4e2a\u7a7a\u683c\u6216\u662f 2 \u4e2a\u5236\u8868\u7b26\u3002"),(0,a.kt)("h3",{id:"6-\u8868\u683c"},"6. \u8868\u683c"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8868\u5934|\u8868\u5934|\u8868\u5934\n---|:--:|---:\n\u5185\u5bb9|\u5185\u5bb9|\u5185\u5bb9\n\u5185\u5bb9|\u5185\u5bb9|\u5185\u5bb9\n\n\u7b2c\u4e8c\u884c\u5206\u5272\u8868\u5934\u548c\u5185\u5bb9\u3002\n- \u6709\u4e00\u4e2a\u5c31\u884c\uff0c\u4e3a\u4e86\u5bf9\u9f50\uff0c\u591a\u52a0\u4e86\u51e0\u4e2a\n\u6587\u5b57\u9ed8\u8ba4\u5c45\u5de6\n-\u4e24\u8fb9\u52a0\uff1a\u8868\u793a\u6587\u5b57\u5c45\u4e2d\n-\u53f3\u8fb9\u52a0\uff1a\u8868\u793a\u6587\u5b57\u5c45\u53f3\n\u6ce8\uff1a\u539f\u751f\u7684\u8bed\u6cd5\u4e24\u8fb9\u90fd\u8981\u7528 | \u5305\u8d77\u6765\u3002\u6b64\u5904\u7701\u7565\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8868\u5934"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8868\u5934"),(0,a.kt)("th",{parentName:"tr",align:"right"},"\u8868\u5934"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:"right"},"\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:"right"},"\u5185\u5bb9")))),(0,a.kt)("h3",{id:"7-\u4ee3\u7801"},"7. \u4ee3\u7801"),(0,a.kt)("p",null,"\u5728 Markdown \u4e2d\u52a0\u5165\u4ee3\u7801\u5757\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a \u7b2c\u4e00\u79cd\uff0c\u53ea\u8981\u7b80\u5355\u5730\u7f29\u8fdb 4 \u4e2a\u7a7a\u683c\u6216\u662f 1 \u4e2a\u5236\u8868\u7b26\u5c31\u53ef\u4ee5\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u6bb5\u843d\uff1a\n\n    \u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u533a\u5757\u3002\n\n(\u5f53\u7136\uff0c\u524d\u9762\u8981\u6709\u4e00\u4e2a\u7a7a\u884c\u548c\u524d\u9762\u7684\u6587\u5b57\u5206\u9694\u5f00)\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u6bb5\u843d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8fd9\u662f\u4e00\u4e2a\u4ee3\u7801\u533a\u5757\u3002\n")),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f3c\u4e4e\u662f\u66f4\u4e3a\u5e38\u7528\uff0c\u5c06\u4ee3\u7801\u7528\u4e00\u5bf9\u53cd\u5f15\u53f7\u5305\u8d77\u6765\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u8fd9\u91cc\u6709\u4e00\u53e5\u4ee3\u7801`\u4ee3\u7801\u5185\u5bb9`\u3002\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a \u8fd9\u91cc\u6709\u4e00\u53e5\u4ee3\u7801",(0,a.kt)("inlineCode",{parentName:"p"},"\u4ee3\u7801\u5185\u5bb9"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u5757"),"\uff1a\u4ee3\u7801\u4e4b\u95f4\u5206\u522b\u7528\u4e09\u4e2a\u53cd\u5f15\u53f7\u5305\u8d77\u6765\uff0c\u4e14\u4e24\u8fb9\u7684\u53cd\u5f15\u53f7\u5355\u72ec\u5360\u4e00\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"```\n\u4ee3\u7801...\n  \u4ee3\u7801...\n \u4ee3\u7801...\n```\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4ee3\u7801...\n  \u4ee3\u7801...\n \u4ee3\u7801...\n")),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5728\u4e0a\u9762\u7684 ``` \u540e\u9762\u6ce8\u660e\u4f60\u7684\u4ee3\u7801\u7c7b\u578b\uff0c\u53ef\u4ee5\u4ea7\u751f\u76f8\u5e94\u7684\u4ee3\u7801\u9ad8\u4eae\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int main(int argc, char* argv) {}\n")),(0,a.kt)("h3",{id:"8-\u6bb5\u843d\u548c\u6362\u884c"},"8. \u6bb5\u843d\u548c\u6362\u884c"),(0,a.kt)("p",null,"\u4e00\u4e2a Markdown \u6bb5\u843d\u662f\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u8fde\u7eed\u7684\u6587\u672c\u884c\u7ec4\u6210\uff0c\u5b83\u7684\u524d\u540e\u8981\u6709\u4e00\u4e2a\u4ee5\u4e0a\u7684\u7a7a\u884c\uff08\u7a7a\u884c\u7684\u5b9a\u4e49\u662f\u663e\u793a\u4e0a\u770b\u8d77\u6765\u50cf\u662f\u7a7a\u7684\uff0c\u4fbf\u4f1a\u88ab\u89c6\u4e3a\u7a7a\u884c\u3002\u6bd4\u65b9\u8bf4\uff0c\u82e5\u67d0\u4e00\u884c\u53ea\u5305\u542b\u7a7a\u683c\u548c\u5236\u8868\u7b26\uff0c\u5219\u8be5\u884c\u4e5f\u4f1a\u88ab\u89c6\u4e3a\u7a7a\u884c\uff09\u3002\u666e\u901a\u6bb5\u843d\u4e0d\u8be5\u7528\u7a7a\u683c\u6216\u5236\u8868\u7b26\u6765\u7f29\u8fdb\u3002 ",(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u6587\u5b57\u5757\u4e4b\u95f4\uff0c\u4e00\u5b9a\u8981\u7a7a\u884c\u4ee5\u793a\u533a\u5206\uff0c\u4e0d\u7136\u5c31\u4f1a\u88ab\u5f52\u5165\u540c\u4e00\u6587\u5b57\u5757\u4e2d\u3002")," Markdown \u5141\u8bb8\u6bb5\u843d\u5185\u7684\u5f3a\u8feb\u6362\u884c\uff08\u63d2\u5165\u6362\u884c\u7b26\uff09\u3002 \u5982\u679c\u60f3\u8981\u7a7a\u4e00\u884c\uff0c\u5728\u63d2\u5165\u5904\u5148\u6309\u5165\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7a7a\u683c\u7136\u540e\u56de\u8f66\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"9-\u8d85\u94fe\u63a5"},"9. \u8d85\u94fe\u63a5"),(0,a.kt)("p",null,"Markdown \u652f\u6301\u4e24\u79cd\u5f62\u5f0f\u7684\u94fe\u63a5\u8bed\u6cd5\uff1a \u884c\u5185\u5f0f\u548c\u53c2\u8003\u5f0f\u4e24\u79cd\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"\u4e0d\u7ba1\u662f\u54ea\u4e00\u79cd\uff0c\u94fe\u63a5\u6587\u5b57\u90fd\u662f\u7528 ","[\u65b9\u62ec\u53f7]"," \u6765\u6807\u8bb0\u3002"),(0,a.kt)("p",null,"\u8981\u5efa\u7acb\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u884c\u5185\u5f0f"),"\u7684\u94fe\u63a5\uff0c\u53ea\u8981\u5728\u65b9\u5757\u62ec\u53f7\u540e\u9762\u7d27\u63a5\u7740\u5706\u62ec\u53f7\u5e76\u63d2\u5165\u7f51\u5740\u94fe\u63a5\u5373\u53ef\uff0c\u6ce8\u610f\u65b9\u62ec\u53f7\u548c\u5706\u62ec\u53f7\u4e4b\u95f4\u4e00\u5b9a\u4e0d\u80fd\u6709\u7a7a\u683c\uff0c\u5982\u679c\u4f60\u8fd8\u60f3\u8981\u52a0\u4e0a\u94fe\u63a5\u7684 title \u6587\u5b57\uff0c\u53ea\u8981\u5728\u7f51\u5740\u540e\u9762\uff0c\u7528\u53cc\u5f15\u53f7\u628a title \u6587\u5b57\u5305\u8d77\u6765\u5373\u53ef\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'This is [an example](http://example.com/ "Title") inline link.\n\n[This link](http://example.net/) has no title attribute.\n')),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a This is ",(0,a.kt)("a",{parentName:"p",href:"http://example.com/",title:"Title"},"an example")," inline link."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://example.net/"},"This link")," has no title attribute."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u5f0f"),"\u7684\u94fe\u63a5\u662f\u5728\u94fe\u63a5\u6587\u5b57\u7684\u62ec\u53f7\u540e\u9762\u518d\u63a5\u4e0a\u53e6\u4e00\u4e2a\u65b9\u62ec\u53f7\uff0c\u800c\u5728\u7b2c\u4e8c\u4e2a\u65b9\u62ec\u53f7\u91cc\u9762\u8981\u586b\u5165\u7528\u4ee5\u8fa8\u8bc6\u94fe\u63a5\u7684\u6807\u8bb0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"This is [an example][id] reference-style link.\n")),(0,a.kt)("p",null,"\u63a5\u7740\uff0c\u5728\u6587\u4ef6\u7684\u4efb\u610f\u5904\uff0c\u4f60\u53ef\u4ee5\u628a\u8fd9\u4e2a\u6807\u8bb0\u7684\u94fe\u63a5\u5185\u5bb9\u5b9a\u4e49\u51fa\u6765:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'[id]: http://example.com/  "Optional Title Here"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id")," \u53ef\u4ee5\u6709\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7a7a\u767d\u548c\u6807\u70b9\u7b26\u53f7\uff0c\u4f46\u662f\u5e76\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,a.kt)("p",null,"\u94fe\u63a5\u7684\u5b9a\u4e49\u53ef\u4ee5\u653e\u5728\u6587\u4ef6\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u5730\u65b9\uff0c\u5efa\u8bae\u653e\u5728\u94fe\u63a5\u51fa\u73b0\u7684\u6bb5\u843d\u7ed3\u675f\u4e4b\u540e\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728\u6574\u4e2a\u6587\u4ef6\u7684\u6700\u540e\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u7528\u8fd9\u4e2a\u65b9\u6cd5\u8fd8\u53ef\u4ee5\u5c06\u56fe\u7247\u8f6c\u5316\u4e3a base64 \u7f16\u7801\u4fdd\u5b58\u5728.md \u6587\u4ef6\u4e2d\uff0c\u8fd9\u5c06\u5728\u63d2\u5165\u56fe\u7247\u4e2d\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53c2\u8003\u5f0f\u94fe\u63a5\u7684\u8303\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'I get 10 times more traffic from [Google] [1] than from\n[Yahoo] [2] or [MSN] [3].\n\n  [1]: http://google.com/        "Google"\n  [2]: http://search.yahoo.com/  "Yahoo Search"\n  [3]: http://search.msn.com/    "MSN Search"\n')),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u76f4\u63a5\u7528\u94fe\u63a5\u540d\u79f0\u7684\u65b9\u5f0f\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'I get 10 times more traffic from [Google][] than from\n[Yahoo][] or [MSN][].\n\n  [google]: http://google.com/        "Google"\n  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"\n  [msn]:    http://search.msn.com/    "MSN Search"\n')),(0,a.kt)("p",null,"\u8981\u77e5\u9053\uff0c\u53c2\u8003\u5f0f\u7684\u94fe\u63a5\u5176\u5b9e\u91cd\u70b9\u4e0d\u5728\u4e8e\u5b83\u6bd4\u8f83\u597d\u5199\uff0c\u800c\u662f\u5b83\u6bd4\u8f83\u597d\u8bfb\u3002 \u4f7f\u7528 Markdown \u7684\u53c2\u8003\u5f0f\u94fe\u63a5\uff0c\u53ef\u4ee5\u8ba9\u6587\u4ef6\u66f4\u50cf\u662f\u6d4f\u89c8\u5668\u6700\u540e\u4ea7\u751f\u7684\u7ed3\u679c\uff0c\u8ba9\u4f60\u53ef\u4ee5\u628a\u4e00\u4e9b\u6807\u8bb0\u76f8\u5173\u7684\u5143\u6570\u636e\u79fb\u5230\u6bb5\u843d\u6587\u5b57\u4e4b\u5916\uff0c\u4f60\u5c31\u53ef\u4ee5\u589e\u52a0\u94fe\u63a5\u800c\u4e0d\u8ba9\u6587\u7ae0\u7684\u9605\u8bfb\u611f\u89c9\u88ab\u6253\u65ad\u3002"),(0,a.kt)("h3",{id:"10-\u81ea\u52a8\u94fe\u63a5"},"10. \u81ea\u52a8\u94fe\u63a5"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0a\u9762\u7684\u8d85\u94fe\u63a5\u65b9\u5f0f\uff0cMarkdown \u8fd8\u652f\u6301\u4ee5\u6bd4\u8f83\u7b80\u77ed\u7684\u81ea\u52a8\u94fe\u63a5\u5f62\u5f0f\u6765\u5904\u7406\u7f51\u5740\u548c\u7535\u5b50\u90ae\u4ef6\u4fe1\u7bb1\uff0c\u53ea\u8981\u662f\u7528\u5c16\u62ec\u53f7\u5305\u8d77\u6765\uff0c Markdown \u5c31\u4f1a\u81ea\u52a8\u628a\u5b83\u8f6c\u6210\u94fe\u63a5\u3002 \u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<https://example.com/>\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://example.com/"},"https://example.com/")),(0,a.kt)("h3",{id:"11-\u63d2\u5165\u56fe\u7247"},"11. \u63d2\u5165\u56fe\u7247"),(0,a.kt)("p",null,"\u5f88\u660e\u663e\u5730\uff0c\u8981\u5728\u7eaf\u6587\u5b57\u5e94\u7528\u4e2d\u8bbe\u8ba1\u4e00\u4e2a\u300c\u81ea\u7136\u300d\u7684\u8bed\u6cd5\u6765\u63d2\u5165\u56fe\u7247\u662f\u6709\u4e00\u5b9a\u96be\u5ea6\u7684\u3002 Markdown \u4f7f\u7528\u4e00\u79cd\u548c\u94fe\u63a5\u5f88\u76f8\u4f3c\u7684\u8bed\u6cd5\u6765\u6807\u8bb0\u56fe\u7247\uff0c\u540c\u6837\u4e5f\u5141\u8bb8\u4e24\u79cd\u6837\u5f0f\uff1a ",(0,a.kt)("strong",{parentName:"p"},"\u884c\u5185\u5f0f"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u5f0f"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u884c\u5185\u5f0f"),"\u7684\u56fe\u7247\u8bed\u6cd5\u770b\u8d77\u6765\u50cf\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'![Alt pic](/path/to/img.jpg)\n![Alt pic](/path/to/img.jpg "Optional title")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u8003\u5f0f"),"\u7684\u56fe\u7247\u8bed\u6cd5\u5219\u957f\u5f97\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"![Alt pic][id]\n")),(0,a.kt)("p",null,"\u56fe\u7247\u53c2\u8003\u7684\u5b9a\u4e49\u65b9\u5f0f\u5219\u548c\u94fe\u63a5\u53c2\u8003\u4e00\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'[id]: url/to/image  "Optional title attribute"\n')),(0,a.kt)("h3",{id:"12-\u8c03\u6574\u56fe\u7247\u683c\u5f0f"},"12. \u8c03\u6574\u56fe\u7247\u683c\u5f0f"),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c Markdown \u8fd8\u6ca1\u6709\u529e\u6cd5\u76f4\u63a5\u6307\u5b9a\u56fe\u7247\u7684\u5bbd\u9ad8\uff0c\u5982\u679c\u9700\u8981\u7684\u8bdd\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u666e\u901a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")," \u6807\u7b7e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'<img src="..." width="100" height="100" />\n')),(0,a.kt)("h2",{id:"\u4e8cmarkdown-\u7eaf\u6587\u672c\u8fdb\u9636\u8bed\u6cd5"},"\u4e8c\u3001Markdown \u7eaf\u6587\u672c\u8fdb\u9636\u8bed\u6cd5"),(0,a.kt)("h3",{id:"1-\u6309\u952e"},"1. \u6309\u952e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<kbd>Space</kbd>\n")),(0,a.kt)("p",null,"\u6548\u679c\uff1a"),(0,a.kt)("kbd",null,"Space"),(0,a.kt)("h3",{id:"2-\u9ad8\u4eae\u6587\u5b57"},"2. \u9ad8\u4eae\u6587\u5b57"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"==\u9ad8\u4eae==\n")),(0,a.kt)("p",null,"\u6548\u679c\uff1a"),(0,a.kt)("p",null,"==\u9ad8\u4eae=="),(0,a.kt)("h3",{id:"3-\u76ee\u5f55"},"3. \u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[TOC]\n")),(0,a.kt)("h3",{id:"4-\u4e0a\u4e0b\u6807"},"4. \u4e0a\u4e0b\u6807"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"H~2~O  CO~2~\n\u7206\u7c73^TM^\n")),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"H~2~O CO~2~ \u7206\u7c73^TM"),(0,a.kt)("h3",{id:"5-\u6570\u5b66\u516c\u5f0f"},"5. \u6570\u5b66\u516c\u5f0f"),(0,a.kt)("p",null,"\u8bed\u6cd5\u57fa\u4e8e LaTeX / MathJax / KaTeX\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ E = mc^2 $\n\n$$\nE = mc^2\n$$\n")),(0,a.kt)("p",null,"\u6548\u679c\uff1a"),(0,a.kt)("p",null,"$ E = mc^2 $"),(0,a.kt)("p",null,"$$\nE = mc^2\n$$"))}k.isMDXComponent=!0}}]);