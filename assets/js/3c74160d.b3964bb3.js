"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3580],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,u(u({ref:t},p),{},{components:r})):n.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27320:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],a={sidebar_position:3,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 XMLHttpRequest\u3002"},c="XMLHttpRequest",s={unversionedId:"user-guide/multithread/thread-http",id:"version-3.0.0/user-guide/multithread/thread-http",title:"XMLHttpRequest",description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 XMLHttpRequest\u3002",source:"@site/versioned_docs/version-3.0.0/user-guide/multithread/thread-http.md",sourceDirName:"user-guide/multithread",slug:"/user-guide/multithread/thread-http",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-http",draft:!1,tags:[],version:"3.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 XMLHttpRequest\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u97f3\u9891\u7cfb\u7edf",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-audio-system"},next:{title:"WebSocket",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-ws"}},p={},l=[],d={toc:l};function f(e){var t=e.components,a=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xmlhttprequest"},"XMLHttpRequest"),(0,i.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,i.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u793e\u533a\u7248\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u52fe\u9009 ",(0,i.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u9a71\u52a8 XMLHttpRequest"),"\uff0c\u5373\u53ef\u542f\u7528\u8fd9\u4e00\u7279\u6027\u3002"),(0,i.kt)("p",null,"\u542f\u7528\u540e\uff0c\u6709\u5173\u4e8e XMLHttpRequest \u7684\u64cd\u4f5c\u5c06\u4f1a\u5728 Worker \u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u5b8c\u5168\u91ca\u653e\u5bf9\u4e3b\u7ebf\u7a0b\u7684\u5360\u7528\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u5728 Android \u8bbe\u5907\u4e0a\uff0c\u5728\u5f00\u542f\u524d\u5bf9\u6e38\u620f\u5e27\u8017\u65f6\u7684\u5206\u6790\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:r(84840).Z,width:"956",height:"554"})),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u5f00\u542f\u591a\u7ebf\u7a0b\u652f\u6301\u540e\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:r(64971).Z,width:"1040",height:"672"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6bcf\u6b21\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\u7684\u8017\u65f6\u4ece 15.2ms \u964d\u4f4e\u81f3 0.5ms\u3002"))}f.isMDXComponent=!0},84840:function(e,t,r){t.Z=r.p+"assets/images/th-a-43ba586902b19815b61b8cce0f86cc79.png"},64971:function(e,t,r){t.Z=r.p+"assets/images/th-b-05ee80487105c3238cd150edd0223719.png"}}]);