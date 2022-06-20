"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7892:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),i=r(6010),o=r(9960),c=r(2802),a="cardContainer_S8oU",u="cardTitle_HoSo",l="cardDescription_c27F";r(5999);function s(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",a)},r)}function p(e){var t=e.href,r=e.icon,o=e.title,c=e.description;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l),title:c},c))}function f(e){var t,r=e.item,i=((0,c.xz)(null!=(t=r.docId)?t:void 0),(0,c.Wl)(r));return i?n.createElement(p,{href:i,icon:"",title:r.label,description:r.description}):null}function m(e){var t,r=e.item,i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:"",title:r.label,description:null==i?void 0:i.description})}function d(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.items,r=e.className;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{key:t,item:e}))})))}},971:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),c=r(7892),a=r(2802),u=["components"],l={},s="Spine",p={unversionedId:"user-guide/spine/spine-intro",id:"user-guide/spine/spine-intro",title:"Spine",description:"\u670d\u52a1\u5305\u89e3\u51b3\u4e86 Spine \u5728 Cocos Creator \u4e2d\u7684\u4e09\u5927\u75db\u70b9\uff1a",source:"@site/docs/user-guide/spine/spine-intro.mdx",sourceDirName:"user-guide/spine",slug:"/user-guide/spine/spine-intro",permalink:"/cocos-service-pack/docs/user-guide/spine/spine-intro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe",permalink:"/cocos-service-pack/docs/user-guide/dynamic-batcher/dynamic-batcher-manual"},next:{title:"\u52a8\u6001\u5408\u56fe",permalink:"/cocos-service-pack/docs/user-guide/spine/spine-batch"}},f={},m=[],d={toc:m};function y(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spine"},"Spine"),(0,o.kt)("p",null,"\u670d\u52a1\u5305\u89e3\u51b3\u4e86 Spine \u5728 Cocos Creator \u4e2d\u7684\u4e09\u5927\u75db\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4e0e\u5176\u5b83\u7ec4\u4ef6\u5408\u6279"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u4f7f\u7528 SpriteFrame \u6362\u88c5")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u9605\u8bfb\u4e0b\u9762\u7684\u6587\u6863\u4e86\u89e3\u8be6\u60c5\uff1a"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);