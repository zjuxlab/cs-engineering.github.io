"use strict";(self.webpackChunkcs_engineering=self.webpackChunkcs_engineering||[]).push([[4069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=o(n),d=l,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(v,p(p({ref:t},s),{},{components:n})):r.createElement(v,p({ref:t},s))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var o=2;o<a;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={},p="Vue",i={unversionedId:"frontend/frame/vue",id:"frontend/frame/vue",title:"Vue",description:"@cr",source:"@site/docs/frontend/frame/vue.md",sourceDirName:"frontend/frame",slug:"/frontend/frame/vue",permalink:"/cs-engineering/docs/frontend/frame/vue",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/frame/vue.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/cs-engineering/docs/frontend/frame/react"},next:{title:"CSS",permalink:"/cs-engineering/docs/category/css"}},u={},o=[{value:"Vue \u4e0e React \u7684\u533a\u522b",id:"vue-\u4e0e-react-\u7684\u533a\u522b",level:2},{value:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",id:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e",level:2},{value:"Vite \u6846\u67b6",id:"vite-\u6846\u67b6",level:2},{value:"Vue \u662f\u600e\u4e48\u7ec4\u7ec7\u7684",id:"vue-\u662f\u600e\u4e48\u7ec4\u7ec7\u7684",level:2},{value:"\u5355\u4e2a vue \u6587\u4ef6\u7684\u5404\u4e2a\u90e8\u5206",id:"\u5355\u4e2a-vue-\u6587\u4ef6\u7684\u5404\u4e2a\u90e8\u5206",level:2},{value:"\u5165\u53e3 App.vue",id:"\u5165\u53e3-appvue",level:3},{value:"\u7ec4\u4ef6(Component)HelloWorld.vue",id:"\u7ec4\u4ef6componenthelloworldvue",level:3},{value:"main.js",id:"mainjs",level:3},{value:"Vue \u4ea7\u751f\u7684\u6587\u4ef6\u5728\u505a\u4ec0\u4e48",id:"vue-\u4ea7\u751f\u7684\u6587\u4ef6\u5728\u505a\u4ec0\u4e48",level:2},{value:"\u4f7f\u7528 vite \u8fdb\u884c\u6253\u5305",id:"\u4f7f\u7528-vite-\u8fdb\u884c\u6253\u5305",level:3},{value:"\u4f60\u9700\u8981\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u638c\u63e1\u7684\u5185\u5bb9",id:"\u4f60\u9700\u8981\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u638c\u63e1\u7684\u5185\u5bb9",level:2},{value:"\u8fdb\u9636\u5185\u5bb9",id:"\u8fdb\u9636\u5185\u5bb9",level:2}],s={toc:o},c="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vue"},"Vue"),(0,l.kt)("p",null,"@cr"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/"},"https://cn.vuejs.org/")),(0,l.kt)("p",null,"\u6309\u7167\u4e0a\u9762\u7684\u5b98\u65b9\u6587\u6863\u5199\u4e00\u4e2a\u7b80\u5355\u7684\u7f51\u9875\u662f\u4e0d\u96be\u7684\uff0c\u6240\u4ee5\u5982\u679c\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u4e00\u6b65\u4e00\u6b65\u8bb2 vue \u600e\u4e48\u5199\u5c31\u6709\u4e9b\u8d58\u4f59\u3002\u8fd9\u7bc7\u6587\u7ae0\u4f1a\u5173\u6ce8\u4e00\u4e9b\u522b\u7684\u4e1c\u897f"),(0,l.kt)("h2",{id:"vue-\u4e0e-react-\u7684\u533a\u522b"},"Vue \u4e0e React \u7684\u533a\u522b"),(0,l.kt)("p",null,"Vue \u662f\u5c24\u96e8\u6eaa\u5728\u5438\u6536\u4e86 React\u3001Angular \u7684\u90e8\u5206\u5185\u5bb9\u540e\u5f00\u53d1\u7684\u8f7b\u91cf\u7ea7\u524d\u7aef\u6846\u67b6\u3002\u4e0e React \u76f8\u6bd4\uff0cVue \u7684\u5b98\u65b9\u6587\u6863\u8d28\u91cf\u66f4\u597d\uff0c\u4e5f\u66f4\u7b80\u5355\u6613\u4e0a\u624b\u3002React \u5728\u7f16\u7801\u4e0a\u66f4\u52a0 OOP\uff0c\u6709\u7528\u5230 js class\u3001state\u3001\u51fd\u6570\u5f0f\u7f16\u7a0b\u7b49\u6982\u5ff5\uff0c\u7531\u540e\u7aef\u5165\u624b\u4f1a\u66f4\u5bb9\u6613\u7406\u89e3\u3002\u5e76\u4e14\u7531\u4e8e React \u662f Facebook \u5f00\u53d1\u7684\uff0c\u5728\u5168\u7403\u8303\u56f4\u5185\u7684\u751f\u6001\u66f4\u597d\uff0c\u5404\u4e2a\u5927\u5382\u57fa\u672c\u4e0a\u7528\u7684\u524d\u7aef\u6280\u672f\u6808\u90fd\u662f React\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\u6211\u4e2a\u4eba\u63a8\u8350\u7684\u5b66\u4e60\u8def\u7ebf\u662f\uff0c\u81ea\u5df1\u4f7f\u7528 Vue \u8fdb\u884c\u8f7b\u91cf\u7ea7\u7684\u7f51\u9875\u5f00\u53d1\uff0c\u518d\u8f6c\u800c\u4f7f\u7528 React\uff0c\u4ece\u800c\u5bf9 js \u548c oop \u6709\u66f4\u6df1\u7684\u7406\u89e3\uff0c\u5728\u5c31\u4e1a\u9762\u8bd5\u5927\u5382\u4e0a\u4e5f\u6709\u66f4\u5927\u4f18\u52bf\u3002"),(0,l.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e"},"\u5f00\u53d1\u73af\u5883\u914d\u7f6e"),(0,l.kt)("p",null,"\u5305\u542b vscode \u5404\u7c7b\u63d2\u4ef6\u7b49"),(0,l.kt)("p",null,"\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://xn4zlkzg4p.feishu.cn/wiki/wikcnry4frFfO1pCvuMcpYAYTDd"},"\u5f00\u53d1\u73af\u5883\u642d\u5efa")),(0,l.kt)("h2",{id:"vite-\u6846\u67b6"},"Vite \u6846\u67b6"),(0,l.kt)("p",null,"\u8fdb\u884c\u8f83\u5927\u89c4\u6a21\u7684 vue \u9879\u76ee\u5f00\u53d1\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528 vite \u811a\u624b\u67b6\uff0c\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://xn4zlkzg4p.feishu.cn/wiki/wikcnLErEIZLBOrnn6iYwssw0Lg"},"vite")),(0,l.kt)("h2",{id:"vue-\u662f\u600e\u4e48\u7ec4\u7ec7\u7684"},"Vue \u662f\u600e\u4e48\u7ec4\u7ec7\u7684"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init vue@latest")," \u547d\u4ee4\u6765\u6784\u5efa\u6211\u4eec\u7684 vue \u9879\u76ee\uff08\u4e2a\u4eba\u611f\u89c9\u8fd9\u4e2a\u662f\u6700\u597d\u4e0a\u624b\u7684\uff0c\u5b9e\u9645\u4e0a\u5df2\u7ecf\u5728\u4f7f\u7528 vite \u6846\u67b6\u4e86\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7116).Z,width:"639",height:"234"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(6256).Z,width:"664",height:"226"})),(0,l.kt)("p",null,"\u6587\u4ef6\u57fa\u672c\u67b6\u6784\u5982\u56fe\u6240\u793a"),(0,l.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u6211\u4eec\u5c06\u9759\u6001\u5a92\u4f53\u6587\u4ef6\uff08\u56fe\u7247\u3001\u89c6\u9891\uff09\u7b49\u653e\u5728 public \u76ee\u5f55\u4e0b\uff0c\u5c06 vue \u6e90\u6587\u4ef6\u7f6e\u4e8e src \u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("p",null,"\u800c src \u76ee\u5f55\u4e2d\uff0cviews \u7528\u4e8e\u5b58\u653e\u5404\u4e2a\u4e3b\u9875\u9762\uff0ccomponents \u5b58\u653e\u7ec4\u4ef6\uff0crouter \u7528\u4e8e\u5b58\u653e vue-router \u8def\u7531\uff0cassets \u5219\u662f\u5b58\u653e\u4e00\u4e9b\u5176\u4ed6\u9759\u6001\u5a92\u4f53\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u800c main.js \u4e3b\u8981\u7528\u4e8e\u5f15\u5165\u5916\u90e8 package \u7684\u5185\u5bb9\uff0cApp.vue \u5219\u662f\u4f5c\u4e3a\u8be5\u9875\u9762\u7684\u4e3b\u5165\u53e3"),(0,l.kt)("h2",{id:"\u5355\u4e2a-vue-\u6587\u4ef6\u7684\u5404\u4e2a\u90e8\u5206"},"\u5355\u4e2a vue \u6587\u4ef6\u7684\u5404\u4e2a\u90e8\u5206"),(0,l.kt)("p",null,"\u4e00\u4e2a vue \u6587\u4ef6\u4e0e\u5c06 html+css+js \u96c6\u5408\u5728\u4e00\u8d77\u7684 html \u6587\u4ef6\u975e\u5e38\u7c7b\u4f3c\uff0c\u5927\u81f4\u5206\u4e3a\u4e09\u90e8\u5206:template script style\u3002"),(0,l.kt)("h3",{id:"\u5165\u53e3-appvue"},"\u5165\u53e3 App.vue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTML"},'<script setup>\nimport { RouterLink, RouterView } from \'vue-router\'\nimport HelloWorld from \'./components/HelloWorld.vue\'\n<\/script>\n\n<template>\n    <div class="AppContainer">\n        <HelloWorld :msg="myMsg">\n        </HelloWorld>\n    </div>\n</template>\n<script>\nexport default {\n  name:"App",\n  data:(){\n      return{\n          myMsg:"Hello!"\n      }\n  },\n  mounted(){\n      this.InitMsg()\n  },\n  methods:(){\n      InitMsg(){\n          this.myMsq="Hi!"\n      }\n  }\n}\n<\/script>\n<style scoped>\n.AppContainer{\n    display:flex;\n}\n</style>\n')),(0,l.kt)("h3",{id:"\u7ec4\u4ef6componenthelloworldvue"},"\u7ec4\u4ef6(Component)HelloWorld.vue"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTML"},'<template>\n  <div class="greetings">\n    <h1 class="green">{{ msg }}</h1>\n    <h3>\n      You\u2019ve successfully created a project with\n      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +\n      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.\n    </h3>\n  </div>\n</template>\n<script>\n\nexport default {\n  name:"HelloWorld",\n  props:{\n      msg:{\n          type:String,\n          required:true,\n          default:()=>{\n              return ""\n          }\n      }\n  }\n}\n<\/script>\n<style scoped>\nh1 {\n  font-weight: 500;\n  font-size: 2.6rem;\n  top: -10px;\n}\n\nh3 {\n  font-size: 1.2rem;\n}\n\n.greetings h1,\n.greetings h3 {\n  text-align: center;\n}\n\n@media (min-width: 1024px) {\n  .greetings h1,\n  .greetings h3 {\n    text-align: left;\n  }\n}\n</style>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"script setup",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u90e8\u5206\u4e3b\u8981\u7528\u4e8e import\uff0c\u5305\u62ec\u7ec4\u4ef6\uff08Component\uff09\u4ee5\u53ca\u4e00\u4e9b\u5305"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u5f15\u7528\u4e86 VueRouter \u63d2\u4ef6\u4ee5\u53ca\u6211\u4eec\u81ea\u5b9a\u4e49\u7684 HelloWorld \u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},"template",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u4e86\u8fd9\u4e2a\u9875\u9762\u7684\u5404\u4e2a\u5143\u7d20\u7684\u6811\u5f62\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u5e38\u5efa\u8bae\u5728\u7ec4\u4ef6\u5916\u9762\u5305\u4e00\u5c42 div\uff0c\u56e0\u4e3a template \u76f8\u5f53\u4e8e\u628a template \u4e2d\u7684\u5185\u5bb9\u7c98\u8d34\u81f3\u7236\u7ec4\u4ef6\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u518d\u5957\u4e00\u5c42 div\uff0c\u5f88\u5bb9\u6613\u5728\u6392\u5e03\u4e0a\u4e0e\u7236\u7ec4\u4ef6\u7684 css \u4ea7\u751f\u51b2\u7a81"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},'":msg"'),'\u662f"v-bind:msg"\u7684\u7b80\u5199\uff0c\u8fd9\u662f\u5bf9\u7ec4\u4ef6\u5c5e\u6027\u8fdb\u884c\u52a8\u6001\u4f20\u53c2\uff0c\u5c06 data \u4e2d\u7684 msg \u5bf9\u8c61\u4f20\u5165\u81f3\u7ec4\u4ef6\u7684 props \u4e2d\u5e94\u7528'))),(0,l.kt)("li",{parentName:"ul"},"script export default",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u5b9a\u4e49\u4e86\u7ec4\u4ef6\u7684 js \u884c\u4e3a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"props:"),"\u5c5e\u6027\uff0c\u7528\u4e8e\u4ece\u7236\u7ec4\u4ef6\u63a5\u53d7\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data():"),"\u53ef\u4ee5\u52a8\u6001\u4fee\u6539\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"methods:"),"\u51fd\u6570\uff0c\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0cInitMsg \u51fd\u6570\u4fee\u6539\u4e86 msg \u7684\u503c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"mounted:"),"\u5728\u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\u89e6\u53d1\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u7684\u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u8c03\u7528\u4e86 InitMsg \u51fd\u6570\u6765\u4fee\u6539 msg \u7684\u503c\uff0c\u4ece\u800c\u5c06\u8be5\u503c\u4f20\u9012\u5230 HelloWorld \u7ec4\u4ef6\u7684 props \u4e2d\uff0c\u8fdb\u884c\u4e86\u52a8\u6001\u4fee\u6539"))),(0,l.kt)("li",{parentName:"ul"},"style scoped",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"scoped \u8868\u793a\u4ec5\u4ec5\u5728\u8be5\u7ec4\u4ef6\u4e2d\u751f\u6548",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981\u4fee\u6539 ui \u5e93\uff08\u5982 element-plus\uff09\u7684\u7ec4\u4ef6\u683c\u5f0f\uff0c\u9700\u8981\u53e6\u8d77\u4e00\u5757 style\uff0c\u5e76\u4e14\u4e0d\u4f7f\u7528 scoped"))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u91cc\u786e\u5b9a\u7ec4\u4ef6\u7684 css"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u4f53\u600e\u6837\u8fdb\u884c css \u8bbe\u8ba1\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0",(0,l.kt)("a",{parentName:"li",href:"https://xn4zlkzg4p.feishu.cn/wiki/wikcnj36uUJfJS98nW9jSUp4eIh"},"\u5982\u4f55\u4f18\u96c5\u5730\u4f7f\u7528 CSS"))))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5185\u5bb9\u5747\u4e3a\u8f83\u4e3a\u6d45\u663e\u7c97\u66b4\u7684\u8bf4\u660e\uff0c\u4ec5\u4ec5\u662f\u4fbf\u4e8e\u4e0a\u624b\u5f00\u53d1\u7406\u89e3\u3002\u6df1\u5c42\u6b21\u7684\u7406\u89e3\u9700\u8981\u9605\u8bfb\u5b98\u65b9\u6587\u6863"),(0,l.kt)("h3",{id:"mainjs"},"main.js"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JavaScript"},"import { createApp } from 'vue'\nimport App from './App.vue'//\u8fd9\u91cc\u5c31\u8c03\u7528\u4e86\u6211\u4eec\u7684App.vue\u4f5c\u4e3a\u5165\u53e3\nimport router from './router'\n//\u4e0a\u4e09\u884c\u5f15\u5165\u5404\u7c7b\u7ec4\u4ef6\nimport './assets/main.css'\n//\u5f15\u5165\u9875\u9762\u4e3bcss\nconst app = createApp(App)\n//\u7531\u8fd9\u4e2a\u5165\u53e3\u6587\u4ef6\u6784\u5efaApp\n\napp.use(router)\n//\u4f7f\u7528router\u7ec4\u4ef6\n\napp.mount('#app')\n// \u6839\u636e\u4f20\u5165\u7684\u6839\u7ec4\u4ef6App\u521b\u5efavnode\uff1b\u6e32\u67d3vnode\u3002\n")),(0,l.kt)("h2",{id:"vue-\u4ea7\u751f\u7684\u6587\u4ef6\u5728\u505a\u4ec0\u4e48"},"Vue \u4ea7\u751f\u7684\u6587\u4ef6\u5728\u505a\u4ec0\u4e48"),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u4e09\u5757\u4ee3\u7801\u5176\u5b9e\u5df2\u7ecf\u63ed\u793a\u4e86\u4e00\u4e2a Vite \u6846\u67b6\u4e0b\u7684 Vue \u9879\u76ee\u7684\u6d41\u7a0b\u3002\u5728 index.html \u5185\uff0c\u6839\u636e\u4f20\u5165\u7684\u6839\u7ec4\u4ef6 App \u521b\u5efa vnode\uff0c\u518d\u53bb\u6e32\u67d3 vnode\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a vnode \u7684\u5185\u5bb9\u5c31\u5728 App.vue \u91cc\uff0c\u800c App.vue \u53c8\u8c03\u7528\u4e86 HelloWorld.vue \u7ec4\u4ef6\uff0c\u5e76\u9760\u4e0b\u65b9\u7684 js \u8fdb\u884c\u52a8\u6001\u66f4\u65b0\uff0c\u5e76\u4e14\u5728\u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u8c03\u7528 InitMsg \u51fd\u6570\u6765\u5bf9 HelloWorld \u4e2d\u7684 prop\u2014\u2014msg \u8fdb\u884c\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-vite-\u8fdb\u884c\u6253\u5305"},"\u4f7f\u7528 vite \u8fdb\u884c\u6253\u5305"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"npm run build"),"\u547d\u4ee4\u8fdb\u884c\u6253\u5305\u540e\uff0c\u4f1a\u751f\u6210 dist \u6587\u4ef6\u5939\uff0c\u5c06\u8fd9\u4e2a\u6587\u4ef6\u5939\u90e8\u7f72\u5728\u670d\u52a1\u5668\u5bf9\u5e94\u76ee\u5f55\u4e0b\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u6253\u5305\u540e\u7684\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7350).Z,width:"640",height:"173"})),(0,l.kt)("p",null,"\u5176\u4e2d index.html \u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(849).Z,width:"813",height:"366"})),(0,l.kt)("p",null,"index.html \u4e2d\u7559\u6709"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTML"},'<div id="app"></div>\n')),(0,l.kt)("p",null,"\u4f5c\u4e3a js \u63a7\u5236\u5165\u53e3\uff0cjs \u7ecf\u7531\u8fd9\u4e2a\u5165\u53e3\u6765\u6e32\u67d3\u6574\u4e2a\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u5728\u7b2c\u516b\u884c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u91cc\u5f15\u5165\u4e86 assets \u4e2d\u7684 js \u6587\u4ef6\uff0c\u6765\u5bf9\u9875\u9762\u5185\u5bb9\u8fdb\u884c\u63a7\u5236\u3002"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0cdist \u5185\u6ca1\u6709\u5199\u6b7b\u7684 html \u6587\u4ef6\uff0c\u90fd\u662f\u7531 js \u6765\u5bf9 DOM \u8fdb\u884c\u6e32\u67d3\u63a7\u5236\u7684\u3002"),(0,l.kt)("h2",{id:"\u4f60\u9700\u8981\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u638c\u63e1\u7684\u5185\u5bb9"},"\u4f60\u9700\u8981\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u638c\u63e1\u7684\u5185\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"props"),(0,l.kt)("li",{parentName:"ul"},"data"),(0,l.kt)("li",{parentName:"ul"},"computed"),(0,l.kt)("li",{parentName:"ul"},"v-if v-for v-bind v-on v-model"),(0,l.kt)("li",{parentName:"ul"},"methods")),(0,l.kt)("h2",{id:"\u8fdb\u9636\u5185\u5bb9"},"\u8fdb\u9636\u5185\u5bb9"),(0,l.kt)("p",null,"Vue Router"),(0,l.kt)("p",null,"vuex"))}m.isMDXComponent=!0},7116:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vue-1-23fab057e8d8aadfdaf2090b15099c9d.png"},6256:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vue-2-713ab984367b41d2bf440630829e458f.png"},849:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vue-3-cd71ce7e711d982f13efbd3d26e0ea73.png"},7350:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vue-4-8a8f01c7b6ec26fc7aac2ef83722d01a.png"}}]);