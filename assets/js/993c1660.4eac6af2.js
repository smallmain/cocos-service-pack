"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3042],{3905:function(A,g,I){I.d(g,{Zo:function(){return c},kt:function(){return m}});var C=I(7294);function e(A,g,I){return g in A?Object.defineProperty(A,g,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[g]=I,A}function n(A,g){var I=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);g&&(C=C.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),I.push.apply(I,C)}return I}function t(A){for(var g=1;g<arguments.length;g++){var I=null!=arguments[g]?arguments[g]:{};g%2?n(Object(I),!0).forEach((function(g){e(A,g,I[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(I)):n(Object(I)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(I,g))}))}return A}function a(A,g){if(null==A)return{};var I,C,e=function(A,g){if(null==A)return{};var I,C,e={},n=Object.keys(A);for(C=0;C<n.length;C++)I=n[C],g.indexOf(I)>=0||(e[I]=A[I]);return e}(A,g);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(C=0;C<n.length;C++)I=n[C],g.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(A,I)&&(e[I]=A[I])}return e}var i=C.createContext({}),r=function(A){var g=C.useContext(i),I=g;return A&&(I="function"==typeof A?A(g):t(t({},g),A)),I},c=function(A){var g=r(A.components);return C.createElement(i.Provider,{value:g},A.children)},l={inlineCode:"code",wrapper:function(A){var g=A.children;return C.createElement(C.Fragment,{},g)}},o=C.forwardRef((function(A,g){var I=A.components,e=A.mdxType,n=A.originalType,i=A.parentName,c=a(A,["components","mdxType","originalType","parentName"]),o=r(I),m=e,p=o["".concat(i,".").concat(m)]||o[m]||l[m]||n;return I?C.createElement(p,t(t({ref:g},c),{},{components:I})):C.createElement(p,t({ref:g},c))}));function m(A,g){var I=arguments,e=g&&g.mdxType;if("string"==typeof A||e){var n=I.length,t=new Array(n);t[0]=o;var a={};for(var i in g)hasOwnProperty.call(g,i)&&(a[i]=g[i]);a.originalType=A,a.mdxType="string"==typeof A?A:e,t[1]=a;for(var r=2;r<n;r++)t[r]=I[r];return C.createElement.apply(null,t)}return C.createElement.apply(null,I)}o.displayName="MDXCreateElement"},5457:function(A,g,I){I.r(g),I.d(g,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return l}});var C=I(7462),e=I(3366),n=(I(7294),I(3905)),t=["components"],a={sidebar_position:1,description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002"},i="\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",r={unversionedId:"user-guide/dynamic-batcher/dynamic-batcher-basics",id:"user-guide/dynamic-batcher/dynamic-batcher-basics",title:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002",source:"@site/docs/user-guide/dynamic-batcher/dynamic-batcher-basics.md",sourceDirName:"user-guide/dynamic-batcher",slug:"/user-guide/dynamic-batcher/dynamic-batcher-basics",permalink:"/cocos-service-pack/docs/user-guide/dynamic-batcher/dynamic-batcher-basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u4e86\u89e3\u8c03\u6821\u52a8\u6001\u5408\u56fe\u7684\u65b9\u5f0f\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001\u5408\u56fe",permalink:"/cocos-service-pack/docs/user-guide/dynamic-batcher/dynamic-batcher-intro"},next:{title:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe",permalink:"/cocos-service-pack/docs/user-guide/dynamic-batcher/dynamic-batcher-manual"}},c={},l=[{value:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f 7",id:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f-7",level:2},{value:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",id:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",level:2},{value:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",id:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe",level:2},{value:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279",id:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279",level:2},{value:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6",id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6",level:2},{value:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f",id:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f",level:2}],o={toc:l};function m(A){var g=A.components,a=(0,e.Z)(A,t);return(0,n.kt)("wrapper",(0,C.Z)({},o,a,{components:g,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e"},"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f-7"},"\u52a8\u6001\u56fe\u96c6\u6700\u5927\u6570\u91cf\u4e3a\u4ec0\u4e48\u662f 7"),(0,n.kt)("p",null,"\u5728\u524d\u9762\u7684\u6587\u6863\u4e2d\u6709\u63d0\u5230\u52a8\u6001\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u9ed8\u8ba4\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u80fd\u540c\u65f6\u91c7\u6837\u7eb9\u7406\u6570 - Char \u7f13\u5b58\u6a21\u5f0f\u81ea\u52a8\u5408\u6279\u56fe\u96c6\u6570"),"\u3002"),(0,n.kt)("p",null,"\u56e0\u4e3a\u8bbe\u5907\u80fd\u540c\u65f6\u91c7\u6837\u7eb9\u7406\u6570\u56fa\u5b9a\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"8"),"\uff0c\u800c Char \u7f13\u5b58\u6a21\u5f0f\u81ea\u52a8\u5408\u6279\u56fe\u96c6\u6570\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u6240\u4ee5\u52a8\u6001\u5408\u56fe\u7684\u6700\u5927\u6570\u91cf\u9ed8\u8ba4\u503c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"7"),"\u3002"),(0,n.kt)("p",null,"\u8fd9\u6837\u5c31\u53ea\u9700\u8981\u4f7f\u7528 1 \u4e2a\u6750\u8d28\uff0c\u4e5f\u5c31\u662f\u80fd\u5728 1 Draw Call \u91cc\u5b8c\u6210\u6240\u6709\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u7684\u7eb9\u7406\uff08\u5305\u62ec Bitmap \u7f13\u5b58\u6a21\u5f0f Label\uff09\u4e0e Char \u7f13\u5b58\u6a21\u5f0f Label \u7684\u6e32\u67d3\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u63a8\u8350\u76f4\u63a5\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"maxAtlasCount"),"\uff0c\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/user-guide/text-render/text-char-mode#%E4%B8%8E%E5%8A%A8%E6%80%81%E5%9B%BE%E9%9B%86%E5%90%88%E6%89%B9%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"\u65b0\u7684 Char \u7f13\u5b58\u6a21\u5f0f")," \u6587\u6863\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u96be\u9053\u771f\u6b63\u7684\u539f\u56e0\u662f..."),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"7\u7684\u610f\u5fd7",src:I(4731).Z,width:"32",height:"28"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"},"\u63a7\u5236\u7eb9\u7406\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5728\u7f16\u8f91\u5668\u4e0a\u8c03\u6574\u7eb9\u7406\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"packable")," \u5c5e\u6027\uff0c\u6216\u8005\u7528\u4ee3\u7801\u63a7\u5236\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"texture.packable = false;\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"},"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,n.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u9ed8\u8ba4\u6fc0\u6d3b\u52a8\u6001\u5408\u56fe\u673a\u5236\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"cc.sp.allowDynamicAtlas = false;\n")),(0,n.kt)("p",null,"\u4e5f\u53ef\u4ee5\u63a7\u5236\u5355\u7ec4\u4ef6\u662f\u5426\u6fc0\u6d3b\u52a8\u6001\u5408\u56fe\u673a\u5236\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dynamic-batch-settings",src:I(5180).Z,width:"880",height:"1014"})),(0,n.kt)("p",null,"\u9664\u4e86\u5728\u7f16\u8f91\u5668\u8c03\u6574\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u63a7\u5236\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// cc.RenderComponent.EnableType\n// GLOBAL: \u5168\u5c40\u9ed8\u8ba4\u503c\n// ENABLE: \u5f00\u542f\n// DISABLE: \u5173\u95ed\nlabel.allowDynamicAtlas = cc.RenderComponent.EnableType.ENABLE;\n")),(0,n.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7eb9\u7406\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u4f46\u662f\u7ec4\u4ef6\u4e0d\u53c2\u4e0e\uff0c\u90a3\u4e48\u4f7f\u7528\u8be5\u7ec4\u4ef6\u8fdb\u884c\u6e32\u67d3\u65f6\u5c31\u4e0d\u4f1a\u53c2\u4e0e\uff0c\u4f46\u5982\u679c\u540c\u65f6\u5728\u5176\u5b83\u53c2\u4e0e\u7684\u7ec4\u4ef6\u4e0a\u6e32\u67d3\uff0c\u90a3\u4e48\u4f9d\u7136\u4f1a\u88ab\u6253\u5165\u52a8\u6001\u56fe\u96c6\u3002"),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"\u7ec4\u4ef6\u6709\u810f\u68c0\u67e5\u6807\u8bb0\uff0c\u4fee\u6539\u540e\u53ef\u80fd\u9700\u8981\u5bf9\u6e32\u67d3\u7ec4\u4ef6\u8c03\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"comp.setVertsDirty()")," \u624d\u4f1a\u751f\u6548\u3002"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279"},"\u662f\u5426\u81ea\u52a8\u591a\u7eb9\u7406\u5408\u6279"),(0,n.kt)("p",null,"\u63a7\u5236\u56fe\u96c6\u7eb9\u7406\u662f\u5426\u4f1a\u81ea\u52a8\u6dfb\u52a0\u5230\u591a\u7eb9\u7406\u5408\u6279\u7ba1\u7406\u5668\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\uff0c\u5982\u679c\u5173\u95ed\u4e5f\u5c31\u610f\u5473\u7740",(0,n.kt)("strong",{parentName:"p"},"\u5931\u53bb\u4e86\u81ea\u52a8\u8fdb\u884c\u591a\u4e2a\u56fe\u96c6\u7eb9\u7406\u5408\u6279\u7684\u7279\u6027"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.autoMultiBatch = false;\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6"},"\u5728\u573a\u666f\u5207\u6362\u65f6\u6e05\u7a7a\u6240\u6709\u56fe\u96c6"),(0,n.kt)("p",null,"\u63a7\u5236\u5728\u573a\u666f\u5207\u6362\u65f6\u662f\u5426\u4f1a\u6e05\u7a7a\u6240\u6709\u7684\u52a8\u6001\u56fe\u96c6\uff0c\u9ed8\u8ba4\u4e3a\u5f00\u542f\u72b6\u6001\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.autoResetBeforeSceneLoad = false;\n")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"\u5728\u5f15\u64ce\u539f\u6765\u7684\u8bbe\u8ba1\u4e2d\uff0c\u8be5\u673a\u5236\u4e0d\u53ef\u88ab\u5173\u95ed\uff0c\u7531\u4e8e\u65e7\u52a8\u6001\u5408\u56fe\u4e0d\u652f\u6301\u590d\u7528\u5e9f\u5f03\u7684\u7a7a\u95f4\uff0c\u56fe\u96c6\u7ec8\u7a76\u4f1a\u88ab\u7528\u5b8c\uff0c\u6240\u4ee5\u5f15\u64ce\u52a0\u5165\u4e86\u8fd9\u4e2a\u6cbb\u6807\u4e0d\u6cbb\u672c\u7684\u529f\u80fd\u3002"),(0,n.kt)("p",{parentName:"div"},"\u4f46\u73b0\u5728\uff0c\u6211\u4eec\u8ba4\u4e3a\u8be5\u673a\u5236\u53ef\u4ee5\u5173\u95ed\uff0c\u4f60\u53ea\u9700\u8981\u7ba1\u7406\u597d\u7eb9\u7406\u8d44\u6e90\u7684\u91ca\u653e\u5373\u53ef\uff0c\u56e0\u4e3a\u7eb9\u7406\u8d44\u6e90\u91ca\u653e\u7684\u540c\u65f6\u4f1a\u91ca\u653e\u4f7f\u7528\u7684\u52a8\u6001\u56fe\u96c6\u7a7a\u95f4\u3002"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f"},"\u4e0d\u8fdb\u884c\u590d\u7528\u7684\u533a\u57df\u7a7a\u95f4\u5927\u5c0f"),(0,n.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u6d4b\u8bd5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5e9f\u5f03\u7a7a\u95f4\u51fa\u73b0\u788e\u7247\u5316\u7684\u73b0\u8c61\uff0c\u6bd4\u5982\u5c3a\u5bf8 5 * 2 \u8fd9\u6837\u7684\u975e\u5e38\u5c0f\u7684\u5e9f\u5f03\u7a7a\u95f4\uff0c\u5f53\u788e\u56fe\u5c1d\u8bd5\u52a0\u5165\u56fe\u96c6\u7684\u65f6\u5019\u4f1a\u5728\u8fd9\u4e9b\u5e9f\u5f03\u7a7a\u95f4\u4e2d\u5bfb\u627e\uff0c\u8fd9\u4e9b\u6570\u91cf\u591a\u7684\u5c0f\u5e9f\u5f03\u7a7a\u95f4\u65e0\u6cd5\u88ab\u590d\u7528\uff0c\u5374\u8981\u5728\u6bcf\u6b21\u52a0\u5165\u65f6\u904d\u5386\u5224\u65ad\u4e00\u6b21\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u52a0\u5165\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"ignoreRectSize")," \u8bbe\u7f6e\uff0c\u5f53\u5e9f\u5f03\u7a7a\u95f4\u5c3a\u5bf8\u5c0f\u4e8e\u8fd9\u4e2a\u503c\u5c31\u4e0d\u4f1a\u88ab\u904d\u5386\u5230\uff08\u4f46\u662f\u80fd\u5408\u5e76\u4e3a\u5927\u7684\u5e9f\u5f03\u7a7a\u95f4\u65f6\u8fd8\u662f\u4f1a\u5408\u5e76\uff09\uff0c\u8fd9\u80fd\u63d0\u5347\u5927\u7ea6 50% \u7684\u7406\u8bba\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u503c\u9ed8\u8ba4\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"10"),"\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u6709\u5f88\u591a\u5c0f\u4e8e 10 * 10 \u7684\u7eb9\u7406\uff0c\u53ef\u4ee5\u8003\u8651\u8fdb\u884c\u8c03\u6574\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.Atlas.ignoreRectSize = 2;\n")))}m.isMDXComponent=!0},4731:function(A,g){g.Z="data:image/png;base64,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a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmY3ZmY2YTQ5LTU0ZWEtNDkzMi05NmUzLTE4YmY4OGI0NDg0NyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMTA3ODcxYS00ZjRkLTRiNDYtYWY0Zi1iNjhkZDlkOTgwMzciCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmQ3ZTVhOS0wMmUxLTQzODMtODEzZC00NTg2MDQ0MTY2YjAiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJNYWMgT1MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjU1Mzg4OTE1MTY0Njc1IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzAiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2U5YTE2YTItMmQ0OS00ZDExLWJhOWYtNzA0Y2RlYjE4OGEwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKE1hYyBPUykiCiAgICAgIHN0RXZ0OndoZW49IjIwMjItMDYtMTZUMjI6MTU6MTUrMDg6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+eGPl5gAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+YGEA4PD84p3FQAAAkjSURBVEjHVZbbb1xZlcZ/+3Iudb/bLjvOpeOQjhPU3WoCPTSE0NO8MJlW9wwCwRM88cA/gRCCf4BnEA88jDSakRBBQoJmmjSIdDNDmomdmxMcnNiJHdtVZVfVqXPZi4dTSYcjrbO3zj7a+1vr+751jvrhD34ga6s3ED6+lAKVz57dlVLPjerjUf/jOpDvJeDE4URwIiiRpyvP3kmcw07GY66/dwURAaXQSqGUoFAYbTFa58+1RhuNNQZjPIy1eNbi+Ra0RukpIHR+QCqkccxkEpEmEeISnDiQHGySxgzHY+zHWWsUoJXGKo0xBqUVxhiM0mitsMZi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"},5180:function(A,g,I){g.Z=I.p+"assets/images/dynamic-batch-settings-e4b81a63896766eb0ef2e42b840eaa2e.png"}}]);