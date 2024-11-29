"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4436],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],p={sidebar_position:4,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 WebSocket\u3002"},i="WebSocket",s={unversionedId:"user-guide/multithread/thread-ws",id:"version-2.4.0/user-guide/multithread/thread-ws",title:"WebSocket",description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 WebSocket\u3002",source:"@site/versioned_docs/version-2.4.0/user-guide/multithread/thread-ws.md",sourceDirName:"user-guide/multithread",slug:"/user-guide/multithread/thread-ws",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-ws",draft:!1,tags:[],version:"2.4.0",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"\u5728\u591a\u7ebf\u7a0b\u4e2d\u4f7f\u7528 WebSocket\u3002"},sidebar:"tutorialSidebar",previous:{title:"XMLHttpRequest",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-http"},next:{title:"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55",permalink:"/cocos-enhance-kit/docs/user-guide/multithread/thread-custom"}},u={},c=[{value:"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790",id:"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790",level:2},{value:"\u89e3\u51b3\u7ec6\u8282\u95ee\u9898",id:"\u89e3\u51b3\u7ec6\u8282\u95ee\u9898",level:2}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"websocket"},"WebSocket"),(0,a.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u793e\u533a\u7248\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u52fe\u9009 ",(0,a.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u9a71\u52a8 WebSocket"),"\uff0c\u5373\u53ef\u542f\u7528\u8fd9\u4e00\u7279\u6027\u3002"),(0,a.kt)("p",null,"\u542f\u7528\u540e\uff0c\u6709\u5173\u4e8e WebSocket \u7684\u64cd\u4f5c\u5c06\u4f1a\u5728 Worker \u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u5b8c\u5168\u91ca\u653e\u5bf9\u4e3b\u7ebf\u7a0b\u7684\u5360\u7528\u3002"),(0,a.kt)("p",null,"\u5e76\u4e14\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"./thread-custom"},"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55")," \u4f60\u8fd8\u53ef\u4ee5\u5c06\u9879\u76ee\u672c\u8eab\u7684 WebSocket \u6570\u636e\u89e3\u6790\u64cd\u4f5c\u8f6c\u79fb\u81f3\u7ebf\u7a0b\u5185\u6267\u884c\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u7528\u4e00\u4e2a\u4f8b\u5b50\u6765\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u5728 Android \u8bbe\u5907\u4e0a\uff0c\u5728\u4f18\u5316\u524d\u5bf9\u6e38\u620f\u5e27\u8017\u65f6\u7684\u5206\u6790\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(73430).Z,width:"1332",height:"558"})),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4f18\u5316\u540e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt text",src:n(56749).Z,width:"1098",height:"558"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u7f51\u7edc\u8bf7\u6c42\u7684\u8017\u65f6\u4ece 5.8ms \u964d\u4f4e\u81f3 0.7ms\u3002"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9700\u6ce8\u610f\uff0c\u4e0d\u662f\u4efb\u4f55\u60c5\u51b5\u4e0b\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301\u90fd\u80fd\u5f97\u5230\u6027\u80fd\u63d0\u5347\uff0c\u56e0\u4e3a\u7ebf\u7a0b\u4e4b\u95f4\u6709\u901a\u4fe1\u6210\u672c\uff0c\u5982\u679c\u6536\u53d1\u5927\u91cf\u6570\u636e\u53ef\u80fd\u5bfc\u81f4\u5361\u987f\uff0c\u8bf7\u5b9e\u9645\u6d4b\u8bd5\u6027\u80fd\u662f\u5426\u6709\u63d0\u5347\uff01"))),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790"},"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5\u4e00\u4e2a\u4f7f\u7528 Protobuf + WebSocket \u8fdb\u884c\u7f51\u7edc\u901a\u4fe1\u7684\u6e38\u620f\u4e3a\u4f8b\u5b50\u6765\u4ecb\u7ecd\u5982\u4f55\u5c06\u6240\u6709\u7f51\u7edc\u5c42\u903b\u8f91\u90fd\u79fb\u81f3\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9996\u5148\u542f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u9a71\u52a8 WebSocket"),"\uff0c\u8fd9\u65f6\u5019\uff0c\u9879\u76ee\u65e0\u9700\u4efb\u4f55\u6539\u52a8\uff0cWebSocket \u5b9e\u9645\u64cd\u4f5c\u5373\u5df2\u5728\u7ebf\u7a0b\u4e2d\u8fdb\u884c\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u5728\u53d1\u9001\u6570\u636e\u5230 WebSocket \u524d\uff1b\u6216\u8005\u4ece WebSocket \u63a5\u6536\u5230\u6570\u636e\u540e\uff0c\u90fd\u9700\u8981\u9996\u5148\u4f7f\u7528 Protobuf \u8fdb\u884c\u7f16\u89e3\u7801\uff0c\u8fd9\u90e8\u5206\u7684\u903b\u8f91\u4e5f\u5e94\u8be5\u79fb\u81f3\u7ebf\u7a0b\u4e2d\u8fdb\u884c\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa ",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55"),"\uff0c\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ws-parser.js")," \u811a\u672c\u6587\u4ef6\uff0c\u5148\u7f16\u5199\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"globalThis.hookWSSend = function (data) {\n    return data;\n}\n\nglobalThis.hookWSRecv = function (data) {\n    return data;\n}\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e0d\u8981\u5fd8\u8bb0\u5728\u6269\u5c55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," \u5165\u53e3\u811a\u672c\u4e2d\u5bfc\u5165\u8be5\u6587\u4ef6"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hookWSSend")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"hookWSRecv")," \u662f\u793e\u533a\u7248\u589e\u52a0\u7684\u4e24\u4e2a\u7279\u6b8a\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"WebSocket \u5728\u53d1\u9001\u65f6\u4f1a\u5c1d\u8bd5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hookWSSend")," \u51fd\u6570\uff0c\u5e76\u4f20\u5165\u5373\u5c06\u53d1\u9001\u7684\u6570\u636e\uff0c\u5e76\u5b9e\u9645\u53d1\u9001\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"),(0,a.kt)("p",null,"WebSocket \u5728\u63a5\u6536\u65f6\u4f1a\u5c1d\u8bd5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hookWSRecv")," \u51fd\u6570\uff0c\u5e76\u4f20\u5165\u6536\u5230\u7684\u6570\u636e\uff0c\u5e76\u5b9e\u9645\u8fd4\u56de\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5230\u4e3b\u7ebf\u7a0b\u4e2d\u3002"),(0,a.kt)("p",null,"\u6709\u4e86\u8fd9\u4e24\u4e2a\u63a5\u53e3\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u5c06\u6570\u636e\u89e3\u6790\u79fb\u81f3\u7ebf\u7a0b\u4e2d\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u4ee5\u4e0b\u662f\u4e3b\u7ebf\u7a0b\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"net.ts")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { protocol } from './proto';\n\nexport function login(obj) {\n    const buffer = protocol.LoginRequest.encode(obj);\n    webSocket.send(buffer);\n}\n\nexport function onMessage(data) {\n    const obj = protocol.LoginRespone.decode(data);\n    console.log(\"login result:\", obj);\n}\n")),(0,a.kt)("p",null,"\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5c06\u89e3\u6790\u79fb\u81f3\u521a\u521a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ws-parser.js")," \u6587\u4ef6\uff0c\u5e76\u6ce8\u91ca\u6389\u539f\u6765\u7684\u89e3\u6790\u4ee3\u7801\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ws-parser.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const protocol = require("./proto");\n\nglobalThis.hookWSSend = function (data) {\n    return protocol.LoginRequest.encode(data);\n}\n\nglobalThis.hookWSRecv = function (data) {\n    return protocol.LoginRespone.decode(data);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"net.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// import { protocol } from './proto';\n\nexport function login(obj) {\n    // \u76f4\u63a5\u53d1\u9001\u5bf9\u8c61\u5373\u53ef\uff0c\u4f1a\u76f4\u63a5\u53d1\u9001\u7ed9 hookWSSend \u51fd\u6570\u8fdb\u884c\u7f16\u7801\n    // const buffer = protocol.LoginRequest.encode(obj);\n    webSocket.send(obj);\n}\n\nexport function onMessage(data) {\n    // WebSocket onmessage \u56de\u8c03\u7684\u53c2\u6570\u5373\u662f hookWSRecv \u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\n    // const obj = protocol.LoginRespone.decode(data);\n    console.log(\"login result:\", data);\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u5df2\u7ecf\u5c06\u6570\u636e\u89e3\u6790\u7684\u64cd\u4f5c\u79fb\u81f3 Worker \u7ebf\u7a0b\u4e2d\u6267\u884c\uff0c\u5f7b\u5e95\u91ca\u653e\u4e3b\u7ebf\u7a0b\u4e86\uff01"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u7ec6\u8282\u95ee\u9898"},"\u89e3\u51b3\u7ec6\u8282\u95ee\u9898"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u4ee5\u4e0a\u662f\u60c5\u51b5\u7b80\u5355\uff0c\u6bd4\u8f83\u7406\u60f3\u7684\u4f2a\u4ee3\u7801\uff0c\u5982\u679c\u4f60\u4e5f\u662f\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/protobufjs"},"protobufjs")," \u5e93\uff0c\u5b9e\u9645\u4e0a\u8fd8\u6709\u4ee5\u4e0b\u7ec6\u8282\u95ee\u9898\u9700\u8981\u89e3\u51b3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 Protobuf \u4ece node_modules \u4e2d\u62bd\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u5c06 Protobuf \u5f15\u7528\u7684 Long \u5e93\u4ece node_modules \u4e2d\u62bd\u79bb"),(0,a.kt)("li",{parentName:"ul"},"\u65e2\u8981\u517c\u5bb9\u4e0d\u652f\u6301 Worker \u7684\u8bbe\u5907\uff0c\u4e5f\u8981\u907f\u514d\u52a0\u8f7d\u4e24\u4efd\u4ee3\u7801")),(0,a.kt)("p",null,"\u9996\u5148\u5982\u679c\u76f4\u63a5\u5c06\u4ece proto \u6587\u4ef6\u7f16\u8bd1\u51fa\u6765\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u653e\u5230 worker \u76ee\u5f55\u4e2d\u5f15\u7528\uff0c\u4f1a\u56e0\u4e3a\u8be5\u6587\u4ef6\u5f15\u7528 npm \u5e93\u800c\u62a5\u9519\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u6bcf\u6b21\u7f16\u8bd1\u51fa\u6765\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u5c06\u91cc\u9762\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var $protobuf = require("protobufjs/minimal");\n')),(0,a.kt)("p",null,"\u4fee\u6539\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var $protobuf = require("./protobuf.js");\n')),(0,a.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u9ebb\u70e6\uff0c\u53ef\u4ee5\u5199\u4e00\u4e2a\u81ea\u52a8\u811a\u672c\u8fdb\u884c\u7f16\u8bd1\u5e76\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u6211\u4eec\u628a\u9879\u76ee\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/protobufjs/dist/minimal/protobuf.min.js")," \u6587\u4ef6\u590d\u5236\u4e00\u4efd\u5230 worker \u76ee\u5f55\u4e2d\uff0c\u5e76\u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf.js"),"\u3002"),(0,a.kt)("p",null,"\u9700\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf.js")," \u7684\u9996\u884c\u63d2\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export let protobuf;\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u5927\u6bb5\u4ee3\u7801\u4e2d\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},'"object"==typeof module&&module&&module.exports&&(module.exports=n)'),"\uff0c\u5728\u672b\u5c3e\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},",protobuf=n"),"\uff0c\u8fd9\u6837 ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf.js")," \u5c31\u53ef\u4ee5\u4f5c\u4e3a\u5355\u72ec\u7684\u811a\u672c\u6587\u4ef6\u8fdb\u884c\u5bfc\u5165\u4e86\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u4e0d\u540c\u65f6\u52a0\u8f7d\u4e24\u4efd Protobuf \u5e93\u548c\u534f\u8bae\u6587\u4ef6\uff0c\u53ef\u4ee5\u5148\u5c06 workers \u8bbe\u4e3a\u5b50\u5305\uff0c\u65b9\u6cd5\u662f\u5728\u8bbe\u7f6e\u9762\u677f\u5f00\u542f ",(0,a.kt)("strong",{parentName:"p"},"\u8bbe\u4e3a\u5c0f\u6e38\u620f\u5b50\u5305"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5c06 Protobuf \u5e93\u79fb\u81f3\u9879\u76ee\u7684\u5b50\u5305\u4e2d\uff0c\u5e76\u4fee\u6539\u9879\u76ee\u7684\u534f\u8bae\u6587\u4ef6\u4ee5\u5f15\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf.js")," \u800c\u4e0d\u662f npm \u5e93\u3002"),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b8f\u6765\u5b9e\u73b0\u652f\u6301 Worker \u65f6\u4e0d\u5728\u4e3b\u7ebf\u7a0b\u52a0\u8f7d Protobuf \u5b50\u5305\uff0c\u4e0d\u652f\u6301\u65f6\u5219\u56de\u9000\u5230\u539f\u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'if(cc.sys.platform === cc.sys.WECHAT_GAME && CC_WORKER_WEBSOCKET) {\n    webSocket.send(obj);\n} else {\n    cc.assetManager.loadBundle("protobuf", async (err, bundle) => {\n        const { protocol } = await import("./proto");\n        webSocket.send(protocol.LoginRequest.encode(obj));\n    });\n}\n')),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u5904\u7406 long \u5e93\uff0c\u8fd9\u662f protobufjs \u4f9d\u8d56\u7684\u5927\u6570\u5e93\u3002"),(0,a.kt)("p",null,"\u6240\u5e78 long \u5e93\u7684\u7f16\u5199\u6bd4\u8f83\u73b0\u4ee3\u5316\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/long/index.js")," \u6587\u4ef6\u590d\u5236\u4e00\u4efd\u5230 worker \u76ee\u5f55\u4e2d\uff0c\u5e76\u91cd\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"long.js"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf.js")," \u6587\u4ef6\u4e2d\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},'inquire("long")'),"\uff0c\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},'inquire("./long.js")'),"\uff0c\u5373\u53ef\u5b8c\u6210\u4fee\u6539\u6b63\u5e38\u5bfc\u5165\u3002"))}m.isMDXComponent=!0},56749:function(e,t,n){t.Z=n.p+"assets/images/tws_1-2f2f6b1a9e3bcbd797061af7596cc0a4.png"},73430:function(e,t,n){t.Z=n.p+"assets/images/tws_2-979f7202b7d4c4a542626c5cdef2e04a.png"}}]);