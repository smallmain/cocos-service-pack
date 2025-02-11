"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8652],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=u(t),d=a,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},10189:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={sidebar_position:5,description:"\u8f7b\u677e\u5730\u5c06\u9879\u76ee\u903b\u8f91\u591a\u7ebf\u7a0b\u5316\u3002"},p="\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55",u={unversionedId:"user-guide/multithread/thread-custom",id:"version-3.0.0/user-guide/multithread/thread-custom",title:"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55",description:"\u8f7b\u677e\u5730\u5c06\u9879\u76ee\u903b\u8f91\u591a\u7ebf\u7a0b\u5316\u3002",source:"@site/versioned_docs/version-3.0.0/user-guide/multithread/thread-custom.md",sourceDirName:"user-guide/multithread",slug:"/user-guide/multithread/thread-custom",permalink:"/cocos-enhance-kit/docs/3.0.0/user-guide/multithread/thread-custom",draft:!1,tags:[],version:"3.0.0",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"\u8f7b\u677e\u5730\u5c06\u9879\u76ee\u903b\u8f91\u591a\u7ebf\u7a0b\u5316\u3002"},sidebar:"tutorialSidebar",previous:{title:"WebSocket",permalink:"/cocos-enhance-kit/docs/3.0.0/user-guide/multithread/thread-ws"},next:{title:"Profiler",permalink:"/cocos-enhance-kit/docs/3.0.0/user-guide/profiler/profiler-intro"}},c={},s=[{value:"\u542f\u7528\u591a\u7ebf\u7a0b\u6269\u5c55",id:"\u542f\u7528\u591a\u7ebf\u7a0b\u6269\u5c55",level:2},{value:"\u521b\u5efa\u591a\u7ebf\u7a0b\u6269\u5c55",id:"\u521b\u5efa\u591a\u7ebf\u7a0b\u6269\u5c55",level:2},{value:"\u521d\u8bc6\u591a\u7ebf\u7a0b\u67b6\u6784",id:"\u521d\u8bc6\u591a\u7ebf\u7a0b\u67b6\u6784",level:2},{value:"\u7f16\u5199\u591a\u7ebf\u7a0b\u811a\u672c",id:"\u7f16\u5199\u591a\u7ebf\u7a0b\u811a\u672c",level:2},{value:"\u521b\u5efa\u811a\u672c",id:"\u521b\u5efa\u811a\u672c",level:3},{value:"\u7f16\u5199\u51fd\u6570",id:"\u7f16\u5199\u51fd\u6570",level:3},{value:"\u5bfc\u51fa\u51fd\u6570\u5230\u4e3b\u7ebf\u7a0b",id:"\u5bfc\u51fa\u51fd\u6570\u5230\u4e3b\u7ebf\u7a0b",level:3},{value:"\u5bfc\u51fa\u7684\u5185\u90e8\u539f\u7406",id:"\u5bfc\u51fa\u7684\u5185\u90e8\u539f\u7406",level:3},{value:"\u66f4\u591a\u5bfc\u51fa\u573a\u666f",id:"\u66f4\u591a\u5bfc\u51fa\u573a\u666f",level:3},{value:"\u7f16\u8bd1\u591a\u7ebf\u7a0b\u6269\u5c55",id:"\u7f16\u8bd1\u591a\u7ebf\u7a0b\u6269\u5c55",level:2}],k={toc:s};function d(e){var n=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55"},"\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\uff0c\u5982\u679c\u60f3\u4e3a\u9879\u76ee\u7f16\u5199\u4efb\u4f55\u7684\u591a\u7ebf\u7a0b\u4ee3\u7801\uff0c\u56e0\u4e3a Worker \u672c\u8eab\u7684\u6613\u7528\u6027\u5dee\uff0c\u52a0\u4e0a\u5e73\u53f0\u4e4b\u95f4\u5b9e\u73b0\u7684\u5dee\u5f02\uff0c\u90fd\u4f1a\u975e\u5e38\u9ebb\u70e6\u3002"),(0,l.kt)("p",null,"\u4e3a\u6b64\uff0c\u793e\u533a\u7248\u65b0\u589e\u4e86\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55\u7684\u652f\u6301\uff0c\u4ee5\u7b80\u5316\u591a\u7ebf\u7a0b\u4ee3\u7801\u7684\u7f16\u5199\uff0c\u4e0b\u9762\u4ee5\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u51fd\u6570\u4e3a\u4f8b\u6f14\u793a\u5982\u4f55\u8f7b\u677e\u7f16\u5199\u591a\u7ebf\u7a0b\u4ee3\u7801\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u591a\u7ebf\u7a0b\u6269\u5c55"},"\u542f\u7528\u591a\u7ebf\u7a0b\u6269\u5c55"),(0,l.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u793e\u533a\u7248\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u52fe\u9009 ",(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee\u591a\u7ebf\u7a0b\u6269\u5c55")," \u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u591a\u7ebf\u7a0b\u6269\u5c55"},"\u521b\u5efa\u591a\u7ebf\u7a0b\u6269\u5c55"),(0,l.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,l.kt)("strong",{parentName:"p"},"\u6269\u5c55 - \u521b\u5efa\u65b0\u6269\u5c55\u63d2\u4ef6... - \u9879\u76ee\u591a\u7ebf\u7a0b\u6269\u5c55"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u4f1a\u5728\u9879\u76ee\u5185\u7684 worker \u76ee\u5f55\u4e2d\u4ee5\u9ed8\u8ba4\u6a21\u677f\u521b\u5efa\u4e00\u4e2a\u591a\u7ebf\u7a0b\u6269\u5c55\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"custom worker struct",src:t(75162).Z,width:"936",height:"282"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src")," \u591a\u7ebf\u7a0b\u6e90\u7801\u76ee\u5f55",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index.js")," \u5165\u53e3\u811a\u672c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"math.js")," \u542b\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"add")," \u52a0\u6cd5\u51fd\u6570\u7684\u793a\u8303\u811a\u672c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"creator-worker.d.ts")," \u63d0\u4f9b\u4ee3\u7801\u7c7b\u578b\u63d0\u793a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"jsconfig.json")," JavaScript \u8bed\u8a00\u670d\u52a1\u5668\u914d\u7f6e")),(0,l.kt)("h2",{id:"\u521d\u8bc6\u591a\u7ebf\u7a0b\u67b6\u6784"},"\u521d\u8bc6\u591a\u7ebf\u7a0b\u67b6\u6784"),(0,l.kt)("p",null,"\u5728\u7f16\u5199\u591a\u7ebf\u7a0b\u4ee3\u7801\u65f6\uff0c\u4f60\u9700\u8981\u65f6\u523b\u6e05\u695a",(0,l.kt)("strong",{parentName:"p"},"\u591a\u7ebf\u7a0b\u6269\u5c55\u5185\u7684\u811a\u672c\u4f1a\u5728 Worker \u7ebf\u7a0b\u4e2d\u6267\u884c"),"\uff0c\u6240\u4ee5\u4e0d\u80fd\u76f4\u63a5\u5bfc\u5165\u9879\u76ee\u5185\u7684\u811a\u672c\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"math.js")," \u7684\u5185\u5bb9\uff0c\u867d\u7136\u53ea\u6709\u51e0\u53e5\u4ee3\u7801\uff0c\u4f46\u8fd9\u5c31\u5df2\u7ecf\u662f\u4e00\u4e2a\u591a\u7ebf\u7a0b\u51fd\u6570\u7684\u5b8c\u6574\u5b9e\u73b0\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { registerHandler } = require("ipc-worker.js");\n\nexport function add(x, y, callback) {\n    callback(x + y);\n}\n\nregisterHandler("math", {\n    add,\n});\n')),(0,l.kt)("p",null,"\u4f60\u5df2\u7ecf\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"worker.math.add([1, 2], ([v]) => {\n    console.log('Worker math add result:', v);\n});\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5c06\u5728 Worker \u7ebf\u7a0b\u5185\u6267\u884c\uff0c\u800c\u4e0d\u4f1a\u963b\u585e\u4e3b\u7ebf\u7a0b\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u5728 Worker \u7ebf\u7a0b\u4e2d\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u51fd\u6570\uff0c\u6765\u6df1\u5165\u4e86\u89e3\u591a\u7ebf\u7a0b\u4ee3\u7801\u7684\u7f16\u5199\uff01"),(0,l.kt)("h2",{id:"\u7f16\u5199\u591a\u7ebf\u7a0b\u811a\u672c"},"\u7f16\u5199\u591a\u7ebf\u7a0b\u811a\u672c"),(0,l.kt)("h3",{id:"\u521b\u5efa\u811a\u672c"},"\u521b\u5efa\u811a\u672c"),(0,l.kt)("p",null,"\u6211\u4eec\u5148\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fibonacci.js")," \u811a\u672c\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js")," \u6dfb\u52a0\u65b0\u7684\u4e00\u884c\u6765\u5bfc\u5165\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'require("fibonacci.js");\n')),(0,l.kt)("p",null,"\u8fd9\u6837\u5f15\u64ce\u5728\u521b\u5efa Worker \u65f6\u624d\u4f1a\u6267\u884c\u8fd9\u4e2a\u65b0\u811a\u672c\u3002"),(0,l.kt)("h3",{id:"\u7f16\u5199\u51fd\u6570"},"\u7f16\u5199\u51fd\u6570"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"fibonacci.js")," \u811a\u672c\u4e2d\u5b9e\u73b0\u8ba1\u7b97\u6590\u6ce2\u90a3\u5951\u7684\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function _fibonacci(n) {\n    if (n <= 0) return 0;\n    if (n === 1) return 1;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n")),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u51fd\u6570\u5230\u4e3b\u7ebf\u7a0b"},"\u5bfc\u51fa\u51fd\u6570\u5230\u4e3b\u7ebf\u7a0b"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u867d\u7136\u5728 Worker \u7ebf\u7a0b\u4e2d\u6211\u4eec\u6709\u4e86\u8fd9\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u6211\u4eec\u65e0\u6cd5\u5728\u4e3b\u7ebf\u7a0b\u8c03\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u4e0e Worker \u7ebf\u7a0b\u7684\u901a\u4fe1\u901a\u5e38\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"postMessage")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"onMessage")," \u8fdb\u884c\uff0c\u4f46\u662f\u9700\u8981\u5904\u7406\u5f88\u591a\u8fb9\u7f18\u60c5\u51b5\uff0c\u800c\u4e14\u8fd9\u6837\u7684\u5f00\u53d1\u4f53\u9a8c\u4e5f\u8f83\u5dee\uff0c\u6240\u4ee5\u793e\u533a\u7248\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5c01\u88c5\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5bfc\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerHandler")," \u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { registerHandler } = require("ipc-worker.js");\n')),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u7b7e\u540d\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export function registerHandler(name: string, handler: object): void;\n")),(0,l.kt)("p",null,"\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u51fd\u6570\u4f1a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5168\u5c40\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"worker")," \u7684\u5bf9\u8c61\u4e0a\u589e\u52a0\u4e00\u4e2a\u4e0e\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u4e00\u6837\u7684\u5bf9\u8c61\u5c5e\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u5386\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"handler")," \u5bf9\u8c61\u4e0a\u7684\u6240\u6709\u5c5e\u6027\uff0c\u6309\u89c4\u5219\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"worker.<name>")," \u5bf9\u8c61\u4e0a\u521b\u5efa\u5bf9\u5e94\u7684\u51fd\u6570\u3002")),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"fibonacci")," \u51fd\u6570\u4f20\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerHandler")," \u51fd\u6570\u5e76\u8c03\u7528\uff0c\u51fd\u6570\u5c31\u53ef\u4ee5\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u8c03\u7528\u4e86\uff01"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"fibonacci.js")," \u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { registerHandler } = require("ipc-worker.js");\n\nfunction _fibonacci(n) {\n    if (n <= 0) return 0;\n    if (n === 1) return 1;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}\n\nfunction fibonacci(n, callback) {\n    callback(_fibonacci(n));\n}\n\nregisterHandler("utils", {\n    fibonacci,\n});\n')),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u7684\u5185\u90e8\u539f\u7406"},"\u5bfc\u51fa\u7684\u5185\u90e8\u539f\u7406"),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\u6211\u4eec\u5bfc\u51fa\u7684\u662f\u53e6\u4e00\u4e2a\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5bfc\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"_fibonacci")," \u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u8fd9\u662f\u5b9e\u73b0\u4e00\u4e2a\u8de8\u7ebf\u7a0b\u8c03\u7528\u51fd\u6570\u65f6\u9700\u8981\u9075\u5faa\u7684\u89c4\u8303\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"postMessage")," \u7684\u8981\u6c42\u4e00\u6837\uff0c\u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\u5fc5\u987b\u662f\u53ef\u5e8f\u5217\u5316\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u4f1a\u5728\u51fd\u6570\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5f53\u9700\u8981\u8fd4\u56de\u5230\u4e3b\u7ebf\u7a0b\u65f6\uff0c\u8bf7\u8c03\u7528\u8be5\u51fd\u6570\u3002")),(0,l.kt)("p",null,"\u50cf\u4e0a\u9762 ",(0,l.kt)("inlineCode",{parentName:"p"},"fibonacci")," \u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"_fibonacci")," \u62ff\u5230\u8ba1\u7b97\u7ed3\u679c\u540e\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"callback(v)")," \u5c06\u503c\u8fd4\u56de\u5230\u4e3b\u7ebf\u7a0b\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u4e3b\u7ebf\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u50cf\u8fd9\u6837\u4ece\u4e3b\u7ebf\u7a0b\u8c03\u7528 Worker \u7ebf\u7a0b\u4e2d\u7684\u8fd9\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"worker.utils.fibonacci([10], ([v]) => {\n    console.log('Worker fibonacci result:', v);\n});\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u6ce8\u610f\u5230\u4e86\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6570\u7ec4\uff0c\u800c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u56de\u8c03\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e5f\u662f\u6570\u7ec4\uff0c\u8fd9\u4e5f\u662f\u89c4\u8303\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u8de8\u7ebf\u7a0b\u901a\u4fe1\u7684\u6027\u80fd\uff0c\u51cf\u5c11\u5783\u573e\u56de\u6536\u7684\u9891\u7387\uff0c\u6240\u4ee5\u9009\u62e9\u4e86\u8fd9\u79cd\u8c03\u7528\u7684\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"worker.xxx.xxx()")," \u7684\u8c03\u7528\u7b7e\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"worker.utils.fibonacci(args, (values) => ...);\n\n// utils: \u8981\u8c03\u7528\u7684 handler \u540d\u79f0\n// fibonacci: \u8981\u8c03\u7528 handler \u4e2d\u7684 Worker \u51fd\u6570\u540d\u79f0\n// args: \u4f20\u5165\u5230 Worker \u51fd\u6570\u7684\u6240\u6709\u53c2\u6570\n// values: Worker \u51fd\u6570\u8fd4\u56de\u65f6\u7684\u56de\u8c03\uff0c\u53c2\u6570\u662f\u8fd4\u56de\u503c\u6570\u7ec4\n")),(0,l.kt)("p",null,"\u8fd9\u5f88\u597d\u7406\u89e3\uff0c\u6211\u4eec\u518d\u4e3e\u4e2a\u591a\u53c2\u6570\u8c03\u7528\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Worker \u7ebf\u7a0b\u7684\u51fd\u6570\nfunction handle(a, b, c, callback) {\n    // a = "ye.", b = {}, c = 1000\n    callback(1, "text", { prop: 2 });\n}\n\n// \u4e3b\u7ebf\u7a0b\u7684\u8c03\u7528\u65b9\u5f0f\nworker.utils.handle(["ye.", {}, 1000], ([v1, v2, v3]) => {\n    // v1 = 1, v2 = "text", v3 = { prop: 2 }\n});\n')),(0,l.kt)("h3",{id:"\u66f4\u591a\u5bfc\u51fa\u573a\u666f"},"\u66f4\u591a\u5bfc\u51fa\u573a\u666f"),(0,l.kt)("p",null,"\u65e0\u53c2\u6570\u51fd\u6570\u7684\u5b9e\u73b0\u4e0e\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Worker \u7ebf\u7a0b\u7684\u51fd\u6570\nfunction setValue(callback) {\n    // ...\n    callback();\n}\n\n// \u4e3b\u7ebf\u7a0b\u7684\u8c03\u7528\u65b9\u5f0f\nworker.utils.setValue(() => {\n    // ok.\n});\n")),(0,l.kt)("p",null,"\u65e0\u9700\u8fd4\u56de\u7684\u51fd\u6570\u7684\u5b9e\u73b0\u4e0e\u8c03\u7528\uff08\u8fd9\u540c\u65f6\u80fd\u8282\u7701 Worker \u7684\u901a\u4fe1\u5f00\u9500\uff0c\u56e0\u4e3a\u53ea\u9700\u8981\u5355\u5411\u901a\u4fe1\uff01\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Worker \u7ebf\u7a0b\u7684\u51fd\u6570\nfunction setValue(v) {\n    // ...\n    // \u6267\u884c\u5b8c\u6210\u4e4b\u540e\u4e0d\u8c03\u7528 callback\uff0c\u751a\u81f3\u4e0d\u7528\u58f0\u660e\n}\n\n// \u4e3b\u7ebf\u7a0b\u7684\u8c03\u7528\u65b9\u5f0f\nworker.utils.setValue(["ye."]);\n')),(0,l.kt)("p",null,"\u65e0\u53c2\u6570\u4e5f\u65e0\u8fd4\u56de\u7684\u51fd\u6570\u7684\u5b9e\u73b0\u4e0e\u8c03\u7528\uff08\u8fd9\u540c\u65f6\u80fd\u8282\u7701 Worker \u7684\u901a\u4fe1\u5f00\u9500\uff0c\u56e0\u4e3a\u53ea\u9700\u8981\u5355\u5411\u901a\u4fe1\uff01\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Worker \u7ebf\u7a0b\u7684\u51fd\u6570\nfunction setValue() {\n    // ...\n    // \u6267\u884c\u5b8c\u6210\u4e4b\u540e\u4e0d\u8c03\u7528 callback\uff0c\u751a\u81f3\u4e0d\u7528\u58f0\u660e\n}\n\n// \u4e3b\u7ebf\u7a0b\u7684\u8c03\u7528\u65b9\u5f0f\nworker.utils.setValue();\n")),(0,l.kt)("p",null,"\u9664\u4e86\u51fd\u6570\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5bfc\u51fa\u503c\u3001getter/setter \u5c5e\u6027\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u9700\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"get_xxx"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"set_xxx")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"write_xxx")," \u4e09\u4e2a\u4ee3\u7406\u51fd\u6570\u8fdb\u884c\u8bbf\u95ee\u4e0e\u4fee\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Worker \u7ebf\u7a0b\u4e2d\uff1a\n\nregisterHandler("Date", {\n    time: 1,\n});\n\n// \u4e3b\u7ebf\u7a0b\u4e2d\uff1a\n\n// \u83b7\u53d6\u503c\nworker.Date.get_time(([v]) => {\n    // v is 1.\n});\n\n// \u4fee\u6539\u503c\uff0c\u4e0d\u4f1a\u56de\u8c03\uff0c\u6027\u80fd\u6bd4 write \u66f4\u9ad8\nworker.Date.set_time([100]);\n\n// \u4fee\u6539\u503c\uff0c\u4f1a\u56de\u8c03\u4ee5\u901a\u77e5\u64cd\u4f5c\u5df2\u6267\u884c\u5b8c\u6bd5\nworker.Date.write_time([100], () => {\n    // finish.\n});\n')),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u591a\u7ebf\u7a0b\u6269\u5c55"},"\u7f16\u8bd1\u591a\u7ebf\u7a0b\u6269\u5c55"),(0,l.kt)("p",null,"\u6bcf\u6b21\u4fee\u6539\u6269\u5c55\u4ee3\u7801\u4e4b\u540e\uff0c\u9700\u8981\u624b\u52a8\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u91cd\u65b0\u7f16\u8bd1\u591a\u7ebf\u7a0b\u6269\u5c55")," \u4ee5\u751f\u6548\u3002"),(0,l.kt)("p",null,"\u7279\u522b\u6ce8\u610f\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u5c31\u50cf\u4fee\u6539\u591a\u7ebf\u7a0b\u7684\u8bbe\u7f6e\u4f1a\u5f71\u54cd\u5230\u6240\u6709\u9879\u76ee\u4e00\u6837\uff0c\u591a\u7ebf\u7a0b\u6269\u5c55\u7684\u7f16\u8bd1\u7ed3\u679c\u4e5f\u662f\u6240\u6709\u9879\u76ee\u5171\u7528\u7684\uff01")),(0,l.kt)("p",null,"\u6240\u4ee5\u5f53\u4f60",(0,l.kt)("strong",{parentName:"p"},"\u6784\u5efa\u67d0\u4e2a\u9879\u76ee\u4e4b\u524d\uff0c\u5fc5\u987b\u786e\u4fdd\u6700\u540e\u4e00\u6b21\u7f16\u8bd1\u662f\u5f53\u524d\u9879\u76ee\u7684\u591a\u7ebf\u7a0b\u6269\u5c55"),"\uff01"))}d.isMDXComponent=!0},75162:function(e,n,t){n.Z=t.p+"assets/images/custom_worker_struct-80bd570e270783db7d11ab575cef834f.png"}}]);