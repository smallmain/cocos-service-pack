"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4637],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7892:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),i=n(6010),a=n(9960),o=n(2802),c="cardContainer_S8oU",l="cardTitle_HoSo",u="cardDescription_c27F";n(5999);function s(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},n)}function p(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(s,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",u),title:o},o))}function m(e){var t,n=e.item,i=((0,o.xz)(null!=(t=n.docId)?t:void 0),(0,o.Wl)(n));return i?r.createElement(p,{href:i,icon:"",title:n.label,description:n.description}):null}function d(e){var t,n=e.item,i=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:"",title:n.label,description:null==i?void 0:i.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{key:t,item:e}))})))}},3917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(7892),c=n(2802),l=["components"],u={},s="Spine",p={unversionedId:"user-guide/spine/spine-intro",id:"version-1.1.0/user-guide/spine/spine-intro",title:"Spine",description:"\u589e\u5f3a\u5305\u89e3\u51b3\u4e86 Spine \u5728 Cocos Creator \u4e2d\u7684\u4e09\u5927\u75db\u70b9\uff1a",source:"@site/versioned_docs/version-1.1.0/user-guide/spine/spine-intro.mdx",sourceDirName:"user-guide/spine",slug:"/user-guide/spine/spine-intro",permalink:"/cocos-enhance-kit/docs/1.1.0/user-guide/spine/spine-intro",draft:!1,tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe",permalink:"/cocos-enhance-kit/docs/1.1.0/user-guide/dynamic-batcher/dynamic-batcher-manual"},next:{title:"\u52a8\u6001\u5408\u56fe",permalink:"/cocos-enhance-kit/docs/1.1.0/user-guide/spine/spine-batch"}},m={},d=[],f={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spine"},"Spine"),(0,a.kt)("p",null,"\u589e\u5f3a\u5305\u89e3\u51b3\u4e86 Spine \u5728 Cocos Creator \u4e2d\u7684\u4e09\u5927\u75db\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4e0e\u5176\u5b83\u7ec4\u4ef6\u5408\u6279"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528 SpriteFrame \u6362\u88c5")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u9605\u8bfb\u4e0b\u9762\u7684\u6587\u6863\u4e86\u89e3\u8be6\u60c5\uff1a"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7531\u4e8e\u5f15\u64ce\u8fd9\u90e8\u5206\u7684 C++ \u5b9e\u73b0\u4e0e JavaScript \u5b9e\u73b0\u5728\u4e00\u4e9b\u7ec6\u8282\u4e0a\u4e0d\u592a\u4e00\u6837\uff0c\u6bd4\u5982\u4e00\u4e9b\u5185\u90e8\u51fd\u6570\u7684\u6267\u884c\u65f6\u673a\u3002"),(0,a.kt)("p",{parentName:"div"},"\u6240\u4ee5\u5f53\u4f60\u5728 Web \u5e73\u53f0\u4e0a\u6d4b\u8bd5\u5f97\u51fa\u7684\u4e00\u4e9b\u7ed3\u8bba\u8bf7\u4e0d\u8981\u60f3\u5f53\u7136\u5730\u4ee5\u4e3a\u5728\u539f\u751f\u5e73\u53f0\u4e0a\u4e5f\u4e00\u6837\uff0c\u5177\u4f53\u5b9e\u73b0\u5dee\u5f02\u8bf7\u9605\u8bfb Spine \u7684\u539f\u7406\u6587\u6863\u3002"))))}v.isMDXComponent=!0}}]);