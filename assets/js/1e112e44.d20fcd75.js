"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3296],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67892:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a=n(86010),i=n(39960),l=n(52802),o="cardContainer_S8oU",c="cardTitle_HoSo",p="cardDescription_c27F";n(95999);function u(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},n)}function s(e){var t=e.href,n=e.icon,i=e.title,l=e.description;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",c),title:i},n," ",i),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:l},l))}function m(e){var t,n=e.item,a=((0,l.xz)(null!=(t=n.docId)?t:void 0),(0,l.Wl)(n));return a?r.createElement(s,{href:a,icon:"",title:n.label,description:n.description}):null}function d(e){var t,n=e.item,a=(0,l.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(s,{href:n.href,icon:"",title:n.label,description:null==a?void 0:a.description})}function k(e){var t=e.item;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,l.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(k,{key:t,item:e}))})))}},53819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(67892),o=n(52802),c=["components"],p={},u="\u591a\u7ebf\u7a0b\u652f\u6301",s={unversionedId:"user-guide/multithread/thread-intro",id:"user-guide/multithread/thread-intro",title:"\u591a\u7ebf\u7a0b\u652f\u6301",description:"\u672c\u7ae0\u8282\u6240\u6709\u591a\u7ebf\u7a0b\u7279\u6027\u6682\u65f6\u4ec5\u9002\u7528\u4e8e\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0\u3002",source:"@site/docs/user-guide/multithread/thread-intro.mdx",sourceDirName:"user-guide/multithread",slug:"/user-guide/multithread/thread-intro",permalink:"/cocos-enhance-kit/docs/next/user-guide/multithread/thread-intro",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u590d\u7528 Culling \u6570\u636e",permalink:"/cocos-enhance-kit/docs/next/user-guide/tiledmap/tiledmap-culling"},next:{title:"\u8d44\u6e90\u7ba1\u7ebf",permalink:"/cocos-enhance-kit/docs/next/user-guide/multithread/thread-asset-pipeline"}},m={},d=[{value:"\u4f7f\u7528\u4ee3\u7801\u8c03\u6574\u8bbe\u7f6e",id:"\u4f7f\u7528\u4ee3\u7801\u8c03\u6574\u8bbe\u7f6e",level:2},{value:"\u5c06 workers \u4ee3\u7801\u76ee\u5f55\u8bbe\u4e3a\u5b50\u5305",id:"\u5c06-workers-\u4ee3\u7801\u76ee\u5f55\u8bbe\u4e3a\u5b50\u5305",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],k={toc:d};function f(e){var t=e.components,p=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u591a\u7ebf\u7a0b\u652f\u6301"},"\u591a\u7ebf\u7a0b\u652f\u6301"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u7ae0\u8282\u6240\u6709\u591a\u7ebf\u7a0b\u7279\u6027\u6682\u65f6\u4ec5\u9002\u7528\u4e8e\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5e76\u4e14\u5728\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0\u4e0b\u8fd8\u6709\u4ee5\u4e0b\u6539\u8fdb\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u542f\u7528\u7f51\u7edc\u63a5\u53e3\u548c\u97f3\u9891\u63a5\u53e3\u7684\u9ad8\u6027\u80fd\u6a21\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u63a5\u53e3\u652f\u6301 HTTP/2\u3001HTTP/3(QUIC) \u534f\u8bae")))),(0,i.kt)("p",null,"\u793e\u533a\u7248\u4e3a\u5f15\u64ce\u7684\u90e8\u5206\u7cfb\u7edf\u589e\u52a0\u4e86\u591a\u7ebf\u7a0b\u652f\u6301\uff0c\u542f\u7528\u540e\u53ef\u4ee5\u91ca\u653e\u5176\u5bf9\u4e3b\u7ebf\u7a0b\u7684\u5360\u7528\uff0c\u51cf\u5c11\u5361\u987f\u73b0\u8c61\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u793e\u533a\u7248\u7684\u8bbe\u7f6e\u9762\u677f\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"thread-settings",src:n(42858).Z,width:"1102",height:"1384"})),(0,i.kt)("h2",{id:"\u4f7f\u7528\u4ee3\u7801\u8c03\u6574\u8bbe\u7f6e"},"\u4f7f\u7528\u4ee3\u7801\u8c03\u6574\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/publish/custom-project-build-template.html"},"\u6784\u5efa\u6a21\u677f")," \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"game.js")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"__globalAdapter.init();")," \u8bed\u53e5\u6267\u884c\u4e4b\u524d\u58f0\u660e\u5b8f\u6765\u8c03\u6574\u8bbe\u7f6e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_ASSET_PIPELINE\uff08\u662f\u5426\u542f\u7528 Worker \u9a71\u52a8\u8d44\u6e90\u7ba1\u7ebf\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_AUDIO_SYSTEM\uff08\u662f\u5426\u542f\u7528 Worker \u9a71\u52a8\u97f3\u9891\u7cfb\u7edf\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_DEBUG\uff08\u662f\u5426\u542f\u7528 Worker \u8c03\u8bd5\u6a21\u5f0f\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_CUSTOM_WORKER\uff08\u662f\u5426\u542f\u7528\u81ea\u5b9a\u4e49 Worker\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_AUDIO_SYSTEM_SYNC_INTERVAL\uff08Worker \u97f3\u9891\u7cfb\u7edf\u540c\u6b65\u97f3\u9891\u5c5e\u6027\u7684\u95f4\u9694\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_WEBSOCKET\uff08\u662f\u5426\u542f\u7528 Worker \u9a71\u52a8 WebSocket\uff09"),(0,i.kt)("li",{parentName:"ul"},"CC_WORKER_HTTP_REQUEST\uff08\u662f\u5426\u542f\u7528 Worker \u9a71\u52a8 HTTP \u8bf7\u6c42\uff09")),(0,i.kt)("p",null,"\u4f8b\u5982\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// game.js\nrequire('adapter-js-path');\n// --- \u5728 init \u6267\u884c\u4e4b\u524d\u8bbe\u7f6e ---\nglobalThis.CC_WORKER_ASSET_PIPELINE = isAndroid;\n// --------------------------\n__globalAdapter.init();\n")),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," \u6267\u884c\u4e4b\u540e\uff0c\u7531\u4e8e\u5f15\u64ce\u5df2\u7ecf\u521d\u59cb\u5316\u5b8c\u6bd5\uff0c\u5c31\u4e0d\u80fd\u518d\u5bf9\u8bbe\u7f6e\u8fdb\u884c\u4fee\u6539\u4e86\u3002"),(0,i.kt)("h2",{id:"\u5c06-workers-\u4ee3\u7801\u76ee\u5f55\u8bbe\u4e3a\u5b50\u5305"},"\u5c06 workers \u4ee3\u7801\u76ee\u5f55\u8bbe\u4e3a\u5b50\u5305"),(0,i.kt)("p",null,"\u4f9d\u6b21\u70b9\u51fb\u7f16\u8f91\u5668\u7684\u83dc\u5355\u9879 ",(0,i.kt)("strong",{parentName:"p"},"\u9879\u76ee - \u793e\u533a\u7248\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u52fe\u9009 ",(0,i.kt)("strong",{parentName:"p"},"\u8bbe\u4e3a\u5c0f\u6e38\u620f\u5b50\u5305"),"\uff0c\u5373\u53ef\u542f\u7528\u8fd9\u4e00\u7279\u6027\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"\u5f53\u4f60\u91cd\u542f\u7f16\u8f91\u5668\uff0c\u6216\u8005\u542f\u7528/\u7981\u7528\u591a\u7ebf\u7a0b\u652f\u6301\u65f6\uff0c\u53ef\u80fd\u51fa\u73b0\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7981\u7528\u591a\u7ebf\u7a0b\u652f\u6301\u65f6\u8f93\u51fa\u7684\u5305\u4f53\u5927\u5c0f\u8b66\u544a\uff1a")),(0,i.kt)("p",null,"\u7531\u4e8e\u8981\u5b9e\u73b0\u591a\u7ebf\u7a0b\u652f\u6301\uff0c\u793e\u533a\u7248\u5728\u5305\u4f53\u5185\u589e\u52a0\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"workers")," \u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e Worker \u7ebf\u7a0b\u7684\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u5927\u5c0f\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"30-50KB")," \u5de6\u53f3\uff0c\u5f53\u4f60\u7981\u7528\u591a\u7ebf\u7a0b\u65f6\uff0c\u8fd9\u4e2a\u76ee\u5f55\u53ef\u4ee5\u88ab\u5220\u9664\u4ee5\u51cf\u5c11\u5305\u4f53\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u7f16\u8f91\u5668\u754c\u9762\u53f3\u4e0a\u89d2\u7684 ",(0,i.kt)("strong",{parentName:"li"},"\u7f16\u8f91\u5668")," \u6309\u94ae\uff0c\u5e76\u8df3\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources/builtin/adapters/platforms/wechat/res")," \u76ee\u5f55\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664\u8be5\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"workers")," \u76ee\u5f55\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6253\u5f00\u8be5\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"game.json"),"\uff0c\u5220\u9664 ",(0,i.kt)("inlineCode",{parentName:"li"},"workers")," \u5b57\u6bb5\u5e76\u4fdd\u5b58\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301\u65f6\u8f93\u51fa\u7684\u68c0\u6d4b\u9519\u8bef\uff1a")),(0,i.kt)("p",null,"\u8fd9\u662f\u7531\u4e8e\u4f60\u6309\u7167\u4e0a\u9762\u7684\u6b65\u9aa4\u5220\u9664\u4e86\u591a\u7ebf\u7a0b\u6240\u9700\u7684\u6587\u4ef6\u548c\u914d\u7f6e\uff0c\u6240\u4ee5\u65e0\u6cd5\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301\uff0c\u53ea\u9700\u6062\u590d\u6216\u8005\u91cd\u65b0\u5b89\u88c5\u5b8c\u6574\u7684\u793e\u533a\u7248\u5373\u53ef\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u4ed8\u8d39\u6269\u5c55\uff0c\u5219\u65e0\u9700\u624b\u52a8\u5220\u9664\u6216\u91cd\u65b0\u5b89\u88c5\uff0c\u4e5f\u4e0d\u4f1a\u8f93\u51fa\u4efb\u4f55\u8b66\u544a\u6216\u8005\u9519\u8bef\u3002")),(0,i.kt)("p",{parentName:"div"},"\u56e0\u4e3a\u4ed8\u8d39\u6269\u5c55\u4f1a\u5b58\u50a8\u5df2\u5b89\u88c5\u7248\u672c\u7684\u5907\u4efd\u6587\u4ef6\uff0c\u6240\u4ee5\u80fd\u591f\u81ea\u52a8\u5220\u9664\u6216\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4ed8\u8d39\u6269\u5c55\u4f9d\u7136\u8f93\u51fa\u9519\u8bef\u5219\u53ef\u80fd\u662f\u6587\u4ef6\u635f\u574f\uff0c\u91cd\u65b0\u4e00\u952e\u5b89\u88c5\u5373\u53ef\u3002"))),(0,i.kt)("p",null,"\u9605\u8bfb\u4e0b\u9762\u7684\u6587\u6863\u4e86\u89e3\u8be6\u60c5\uff1a"),(0,i.kt)(l.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},42858:function(e,t,n){t.Z=n.p+"assets/images/thread-settings-db7938f60a4ef88a3c244e23aef57afe.png"}}]);