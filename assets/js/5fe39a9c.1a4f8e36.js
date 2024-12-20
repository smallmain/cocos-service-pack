"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),o=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return l.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),m=r,d=s["".concat(u,".").concat(m)]||s[m]||k[m]||a;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],p={sidebar_position:1,description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002"},u="\u63d0\u5347\u6e38\u620f\u6027\u80fd",o={unversionedId:"best-practices/performance-guide",id:"best-practices/performance-guide",title:"\u63d0\u5347\u6e38\u620f\u6027\u80fd",description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002",source:"@site/docs/best-practices/performance-guide.md",sourceDirName:"best-practices",slug:"/best-practices/performance-guide",permalink:"/cocos-enhance-kit/docs/next/best-practices/performance-guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u52a8\u5b89\u88c5",permalink:"/cocos-enhance-kit/docs/next/installation/installation-manual"},next:{title:"\u63d0\u5347\u6e38\u620f\u8d28\u91cf",permalink:"/cocos-enhance-kit/docs/next/best-practices/quality-guide"}},c={},k=[{value:"\u4f7f\u7528\u52a8\u6001\u5408\u56fe",id:"\u4f7f\u7528\u52a8\u6001\u5408\u56fe",level:2},{value:"\u4f7f\u7528 Label \u7f13\u5b58\u6a21\u5f0f",id:"\u4f7f\u7528-label-\u7f13\u5b58\u6a21\u5f0f",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u8fdb\u884c\u6587\u672c\u6e32\u67d3\u70d8\u7119",id:"\u8fdb\u884c\u6587\u672c\u6e32\u67d3\u70d8\u7119",level:2},{value:"\u542f\u7528 Spine \u5408\u6279",id:"\u542f\u7528-spine-\u5408\u6279",level:2},{value:"\u63d0\u5347 TiledMap \u6027\u80fd",id:"\u63d0\u5347-tiledmap-\u6027\u80fd",level:2},{value:"\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301",id:"\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301",level:2}],s={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63d0\u5347\u6e38\u620f\u6027\u80fd"},"\u63d0\u5347\u6e38\u620f\u6027\u80fd"),(0,a.kt)("p",null,"\u5efa\u8bae\u5148\u9605\u8bfb\u5b98\u65b9\u6587\u6863\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/ui-auto-batch.html"},"UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357")," \u4e86\u89e3\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\u3002"),(0,a.kt)("p",null,"\u793e\u533a\u7248\u5bf9\u52a8\u6001\u5408\u56fe\u3001\u6587\u672c\u6e32\u67d3\u7b49\u529f\u80fd\u8fdb\u884c\u4e86\u5927\u91cf\u7684\u6539\u8fdb\uff0c\u73b0\u5728\uff0c\u4f60\u53ea\u9700\u8981\u786e\u4fdd\u4ee5\u4e0b\u51e0\u70b9\u5c31\u53ef\u4ee5\u5927\u5e45\u63d0\u5347\u6e38\u620f\u7684\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u52a8\u6001\u5408\u56fe"},"\u4f7f\u7528\u52a8\u6001\u5408\u56fe"),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\uff0c\u52a8\u6001\u5408\u56fe\u4e0d\u652f\u6301\u590d\u7528\u56fe\u96c6\u7684\u5e9f\u5f03\u533a\u57df\uff0c\u6240\u4ee5\u6211\u4eec\u901a\u5e38\u4f1a\u5173\u95ed\u8be5\u7279\u6027\uff0c\u503e\u5411\u4e8e\u9760\u9759\u6001\u56fe\u96c6\u6216\u8005\u81ea\u52a8\u56fe\u96c6\u8fbe\u5230\u964d\u4f4e Draw Call \u7684\u76ee\u7684\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u793e\u533a\u7248\u51e0\u4e4e\u91cd\u6784\u4e86\u6574\u4e2a\u52a8\u6001\u5408\u56fe\u7cfb\u7edf\uff0c\u5b9e\u7528\u6027\u5f97\u5230\u5927\u5e45\u63d0\u5347\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u590d\u7528\u5e9f\u5f03\u533a\u57df"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u53c2\u4e0e\u591a\u7eb9\u7406\u6e32\u67d3 "),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Spine \u53c2\u4e0e\u52a8\u6001\u5408\u56fe")),(0,a.kt)("p",null,"\u4f60\u53ea\u9700\u8981\u91cd\u65b0\u542f\u7528\u52a8\u6001\u5408\u56fe\uff0c\u5e76\u5c3d\u91cf\u8ba9\u66f4\u591a\u7684\u7eb9\u7406\u90fd\u53c2\u4e0e\u5408\u56fe\uff0c\u5373\u53ef\u5927\u5e45\u964d\u4f4e DrawCall \u7684\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u5efa\u8bae\u505a\u4ee5\u4e0b\u8c03\u6574\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.maxFrameSize = 1024;     // \u63a8\u8350 512\u30011024 \u751a\u81f3 2048\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u6e38\u620f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u6240\u4f7f\u7528\u7684\u52a8\u6001\u56fe\u96c6\u6570\u91cf\uff0c\u6765\u9010\u6b65\u653e\u5bbd\u9650\u5236\uff0c\u53d6\u5f97\u4e00\u4e2a\u5e73\u8861\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u5316\u52a8\u6001\u56fe\u96c6\u7684\u4f7f\u7528\u7387")),(0,a.kt)("p",null,"\u5f53\u6e38\u620f\u4f7f\u7528\u7684\u52a8\u6001\u56fe\u96c6\u6570\u91cf\u592a\u591a\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u67d0\u4e2a\u7ec4\u4ef6\u6216\u7eb9\u7406\u4e0d\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u6574\u7eb9\u7406\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"packable")," \u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u6574\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"allowDynamicAtlas")," \u5c5e\u6027")),(0,a.kt)("p",null,"\u901a\u8fc7\u8ba9\u67d0\u4e9b\u4f18\u5316\u6027\u4ef7\u6bd4\u8f83\u4f4e\u7684\u7eb9\u7406\u4e0d\u53c2\u4e0e\u5408\u56fe\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5927\u5c3a\u5bf8\u3001\u5355\u72ec\u51fa\u73b0\u7684\u7eb9\u7406\uff1a\u6bd4\u5982\u80cc\u666f\u56fe\uff0c\u5c3a\u5bf8\u8f83\u5927\u4f7f\u5f97\u5360\u7528\u56fe\u96c6\u7684\u7a7a\u95f4\u5927\uff0c\u5e76\u4e14\u4e00\u4e2a\u573a\u666f\u5185\u53ef\u80fd\u53ea\u6709\u5355\u4e2a\u8282\u70b9\u4f1a\u663e\u793a\uff0c\u4e0d\u5b58\u5728\u9700\u8981\u5927\u91cf\u5408\u6279\u7684\u60c5\u51b5\u3002")),(0,a.kt)("p",null,"\u6765\u4f18\u5316\u56fe\u96c6\u7684\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ca\u65f6\u91ca\u653e\u65e0\u7528\u8d44\u6e90")),(0,a.kt)("p",null,"\u7531\u4e8e\u793e\u533a\u7248\u652f\u6301\u4e86\u56fe\u96c6\u7a7a\u95f4\u7684\u590d\u7528\uff0c\u6240\u4ee5\u91ca\u653e\u8d44\u6e90\u7684\u540c\u65f6\u4e5f\u4f1a\u5c06\u5176\u5360\u7528\u7684\u56fe\u96c6\u7a7a\u95f4\u91ca\u653e\uff0c\u4ee5\u63d0\u4f9b\u7ed9\u5176\u5b83\u7eb9\u7406\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5efa\u8bae\u5728\u4e0d\u7528\u7684\u65f6\u5019\u53ca\u65f6\u91ca\u653e\u4e00\u4e9b\u51b7\u95e8\u8d44\u6e90\uff0c\u5e38\u7528\u7684\u8d44\u6e90\u5219\u4e0d\u8fdb\u884c\u91ca\u653e\uff0c\u907f\u514d\u9891\u7e41\u91ca\u653e\u540e\u52a0\u8f7d\u5bfc\u81f4\u7684\u6027\u80fd\u6d88\u8017\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-label-\u7f13\u5b58\u6a21\u5f0f"},"\u4f7f\u7528 Label \u7f13\u5b58\u6a21\u5f0f"),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\uff0c\u5f15\u64ce\u63d0\u4f9b\u7684\u7f13\u5b58\u6a21\u5f0f\u90fd\u5404\u6709\u95ee\u9898\uff0c\u65e0\u6cd5\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u4f7f\u7528\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bitmap \u6a21\u5f0f\uff1a\u867d\u7136\u80fd\u591f\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\uff0c\u4f46\u65e0\u6cd5\u590d\u7528\u5e9f\u5f03\u7a7a\u95f4\uff0c\u968f\u7740\u6e38\u620f\u7684\u8fd0\u884c\uff0c\u5e9f\u5f03\u5b57\u7b26\u7684\u7eb9\u7406\u5360\u6ee1\u56fe\u96c6\u540e\u5c31\u5931\u53bb\u4e86\u4f18\u5316\u6548\u679c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Char \u6a21\u5f0f\uff1a\u4f9d\u7136\u662f\u65e0\u6cd5\u590d\u7528\u7684\u95ee\u9898\uff0c\u4ec5\u6709\u4e00\u5f20\u5b57\u7b26\u7eb9\u7406\uff0c\u5f53\u7eb9\u7406\u88ab\u586b\u6ee1\u540e\u751a\u81f3\u65e0\u6cd5\u6e32\u67d3\u51fa\u6587\u672c\u3002"))),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u7531\u4e8e\u793e\u533a\u7248\u4f7f\u52a8\u6001\u5408\u56fe\u652f\u6301\u4e86\u590d\u7528\uff0c\u5e76\u4e14\u8fd8\u91cd\u6784\u4e86 Char \u6a21\u5f0f\u7684\u5b9e\u73b0\uff0c\u4f7f\u5f97 \u4f60\u53ea\u9700\u8981\u5408\u7406\u8fd0\u7528\u8fd9\u4e24\u79cd\u7f13\u5b58\u6a21\u5f0f\u5373\u53ef\u5b8c\u6210\u5bf9 Label \u7684\u4f18\u5316\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9996\u9009 Char \u7f13\u5b58\u6a21\u5f0f")),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae Label \u9ed8\u8ba4\u4f7f\u7528 Char \u7f13\u5b58\u6a21\u5f0f\uff0c\u76f8\u6bd4 Bitmap \u6a21\u5f0f\uff0cChar \u6a21\u5f0f\u662f\u6309\u5b57\u7b26\u8fdb\u884c\u590d\u7528\u7684\uff0c\u6709\u7740\u66f4\u9ad8\u7684\u6027\u80fd\u4f18\u52bf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5907\u9009 Bitmap \u7f13\u5b58\u6a21\u5f0f")),(0,a.kt)("p",null,"\u5982\u679c\u9047\u5230\u4ee5\u4e0b\u573a\u666f\uff0c\u5219\u4e0d\u9002\u5408\u4f7f\u7528 Char \u6a21\u5f0f\u8fdb\u884c\u6e32\u67d3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u663e\u793a\u50cf Emoji \u8fd9\u79cd\u5b57\u7d20\u7c07\u7684\u5b57\u7b26\u4e32\uff0c\u7531\u4e8e\u5185\u90e8\u5b9e\u73b0\u65e0\u6cd5\u5206\u5272\u4e3a\u5355\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u4e0d\u80fd\u6b63\u5e38\u663e\u793a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d85\u5927\u5b57\u4f53\uff0c\u53ef\u80fd\u77ac\u95f4\u5360\u6ee1\u5b57\u7b26\u7eb9\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u663e\u793a\u804a\u5929\u6d88\u606f\u3001\u8f93\u5165\u6846\u3001\u73a9\u5bb6\u540d\u79f0\u8fd9\u7c7b\u4e0d\u53ef\u63a7\u7684\u5185\u5bb9\uff0c\u7531\u4e8e\u7b2c\u4e00\u6761\u9650\u5236\uff0c\u6240\u4ee5\u4e3a\u4e86\u4fdd\u8bc1 Label \u80fd\u6b63\u5e38\u663e\u793a\uff0c\u5219\u4e0d\u5efa\u8bae\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u6539\u7528 Bitmap \u6a21\u5f0f\u8fdb\u884c\u6e32\u67d3\uff0c\u4f9d\u7136\u80fd\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u8fdb\u884c\u5408\u6279\u3002"),(0,a.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u52ff\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"fontSize")," \u5c5e\u6027\u8fdb\u884c\u52a8\u753b\u6216\u8005\u7f13\u52a8"))),(0,a.kt)("p",null,"\u65e0\u8bba\u662f\u5426\u4f7f\u7528\u7f13\u5b58\u6a21\u5f0f\uff0c\u4e5f\u4e0d\u5efa\u8bae\u9891\u7e41\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize")," \u5c5e\u6027\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6bcf\u5e27\u90fd\u9700\u8981\u91cd\u65b0\u751f\u6210\u6587\u5b57\u7eb9\u7406\uff0c\u9020\u6210\u5927\u91cf\u7684\u6027\u80fd\u6d88\u8017\uff0c\u53ef\u4ee5\u8f6c\u4e3a\u4f7f\u7528\u8282\u70b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"scale")," \u6765\u4ee3\u66ff\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Char \u7f13\u5b58\u6a21\u5f0f\u4f9d\u65e7\u4e0d\u80fd\u5728\u5185\u90e8\u5b57\u7b26\u7eb9\u7406\u586b\u6ee1\u65f6\u6b63\u5e38\u6e32\u67d3"))),(0,a.kt)("p",null,"\u8fd9\u662f\u5f15\u64ce\u539f\u672c\u7684\u9650\u5236\uff0c\u6211\u4eec\u672a\u5bf9\u5176\u8fdb\u884c\u4fee\u590d\uff0c\u539f\u56e0\u662f\u6211\u4eec\u8ba4\u4e3a 8 \u5f20\u6570\u91cf\u5df2\u7ecf\u591f\u591a\u4e86\uff0c8 \u5f20\u90fd\u7528\u5b8c\u7684\u60c5\u51b5\u5927\u90e8\u5206\u662f\u6ca1\u6709\u5408\u7406\u642d\u914d\u4f7f\u7528\u4e24\u79cd\u7f13\u5b58\u6a21\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u884c\u6587\u672c\u6e32\u67d3\u70d8\u7119"},"\u8fdb\u884c\u6587\u672c\u6e32\u67d3\u70d8\u7119"),(0,a.kt)("p",null,"\u5728\u4e4b\u524d\uff0c\u5373\u4f7f\u6ca1\u6709 Drawcall \u9ad8\u7684\u95ee\u9898\uff0c\u5f15\u64ce\u6587\u672c\u6e32\u67d3\u672c\u8eab\u7684\u6027\u80fd\u6d88\u8017\u4e5f\u5e76\u4e0d\u4f4e\u3002"),(0,a.kt)("p",null,"\u4e3a\u6b64\uff0c\u793e\u533a\u7248\u65b0\u589e\u4e86\u70d8\u7119\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u63a5\u53e3\u5c06\u6587\u672c\u6e32\u67d3\u7684\u6027\u80fd\u63d0\u5347 10 \u500d\u4ee5\u4e0a\uff01"),(0,a.kt)("p",null,"\u53ef\u524d\u5f80 ",(0,a.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/next/user-guide/text-render/text-baking"},"\u6587\u672c\u6e32\u67d3\u70d8\u7119")," \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528-spine-\u5408\u6279"},"\u542f\u7528 Spine \u5408\u6279"),(0,a.kt)("p",null,"Spine \u7ec4\u4ef6\u73b0\u5728\u4e0d\u4ec5\u53ef\u4ee5\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\uff0c\u8fd8\u80fd\u4e0e\u5176\u4ed6\u6e32\u67d3\u7ec4\u4ef6\u8fdb\u884c\u5408\u6279\u3002"),(0,a.kt)("p",null,"\u53ea\u9700\u542f\u7528\u7ec4\u4ef6\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Batch")," \u5c5e\u6027\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u63d0\u5347-tiledmap-\u6027\u80fd"},"\u63d0\u5347 TiledMap \u6027\u80fd"),(0,a.kt)("p",null,"\u4e00\u4e2a TiledMap \u53ef\u80fd\u4f1a\u6709\u5f88\u591a\u4e2a TiledLayer\uff0c\u5982\u679c\u5f00\u542f\u4e86 TiledMap \u7684 Culling \u7279\u6027\uff0c\u5219\u9700\u8981\u6bcf\u4e2a Layer \u90fd\u5355\u72ec\u8ba1\u7b97 Culling \u6570\u636e\u3002"),(0,a.kt)("p",null,"\u793e\u533a\u7248\u65b0\u589e\u4e86\u5728\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u590d\u7528 Culling \u6570\u636e\u7684\u7279\u6027\uff0c\u4ee5\u51cf\u5c11 CPU \u7684\u6027\u80fd\u6d88\u8017\u3002"),(0,a.kt)("p",null,"\u53ef\u524d\u5f80 ",(0,a.kt)("a",{parentName:"p",href:"/cocos-enhance-kit/docs/next/user-guide/tiledmap/tiledmap-culling"},"\u590d\u7528 Culling \u6570\u636e")," \u6587\u6863\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301"},"\u542f\u7528\u591a\u7ebf\u7a0b\u652f\u6301"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u73b0\u5728\uff0c\u4ee5\u4e0b\u5f15\u64ce\u7684\u90e8\u5206\u589e\u52a0\u4e86\u591a\u7ebf\u7a0b\u652f\u6301\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8d44\u6e90\u7ba1\u7ebf\uff08\u4e0b\u8f7d\u4e0e\u7f13\u5b58\u90e8\u5206\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u97f3\u9891\u7cfb\u7edf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"XMLHttpRequest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WebSocket"))),(0,a.kt)("p",null,"\u542f\u7528\u540e\u53ef\u4ee5\u91ca\u653e\u5176\u5bf9\u4e3b\u7ebf\u7a0b\u7684\u5360\u7528\uff0c\u51cf\u5c11\u5361\u987f\u73b0\u8c61\u3002"),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8fd8",(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u81ea\u5b9a\u4e49\u591a\u7ebf\u7a0b\u6269\u5c55"),"\uff0c\u5927\u5e45\u7b80\u5316\u4e86\u5c06\u9879\u76ee\u903b\u8f91\u591a\u7ebf\u7a0b\u5316\u6240\u9700\u7684\u6b65\u9aa4\uff01"),(0,a.kt)("p",null,"\u5e76\u4e14\u5728\u5fae\u4fe1\u5c0f\u6e38\u620f\u5e73\u53f0\u4e0b\u8fd8\u6709\u4ee5\u4e0b\u6539\u8fdb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u542f\u7528\u7f51\u7edc\u63a5\u53e3\u548c\u97f3\u9891\u63a5\u53e3\u7684\u9ad8\u6027\u80fd\u6a21\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7f51\u7edc\u63a5\u53e3\u652f\u6301 HTTP/2\u3001HTTP/3(QUIC) \u534f\u8bae"))),(0,a.kt)("p",null,"\u8be6\u60c5\u8bf7\u9605\u8bfb\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"../user-guide/multithread/thread-intro"},"\u591a\u7ebf\u7a0b\u652f\u6301"),"\u3002"))}m.isMDXComponent=!0}}]);