"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6776],{3905:function(A,e,n){n.d(e,{Zo:function(){return i},kt:function(){return D}});var g=n(7294);function M(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function t(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);e&&(g=g.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,g)}return n}function r(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){M(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function a(A,e){if(null==A)return{};var n,g,M=function(A,e){if(null==A)return{};var n,g,M={},t=Object.keys(A);for(g=0;g<t.length;g++)n=t[g],e.indexOf(n)>=0||(M[n]=A[n]);return M}(A,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(g=0;g<t.length;g++)n=t[g],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(M[n]=A[n])}return M}var B=g.createContext({}),w=function(A){var e=g.useContext(B),n=e;return A&&(n="function"==typeof A?A(e):r(r({},e),A)),n},i=function(A){var e=w(A.components);return g.createElement(B.Provider,{value:e},A.children)},Y={inlineCode:"code",wrapper:function(A){var e=A.children;return g.createElement(g.Fragment,{},e)}},G=g.forwardRef((function(A,e){var n=A.components,M=A.mdxType,t=A.originalType,B=A.parentName,i=a(A,["components","mdxType","originalType","parentName"]),G=w(n),D=M,l=G["".concat(B,".").concat(D)]||G[D]||Y[D]||t;return n?g.createElement(l,r(r({ref:e},i),{},{components:n})):g.createElement(l,r({ref:e},i))}));function D(A,e){var n=arguments,M=e&&e.mdxType;if("string"==typeof A||M){var t=n.length,r=new Array(t);r[0]=G;var a={};for(var B in e)hasOwnProperty.call(e,B)&&(a[B]=e[B]);a.originalType=A,a.mdxType="string"==typeof A?A:M,r[1]=a;for(var w=2;w<t;w++)r[w]=n[w];return g.createElement.apply(null,r)}return g.createElement.apply(null,n)}G.displayName="MDXCreateElement"},8972:function(A,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return B},default:function(){return D},frontMatter:function(){return a},metadata:function(){return w},toc:function(){return Y}});var g=n(7462),M=n(3366),t=(n(7294),n(3905)),r=["components"],a={sidebar_position:2,description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002"},B="\u590d\u7528 Culling \u6570\u636e",w={unversionedId:"user-guide/tiledmap/tiledmap-culling",id:"version-1.2.0/user-guide/tiledmap/tiledmap-culling",title:"\u590d\u7528 Culling \u6570\u636e",description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002",source:"@site/versioned_docs/version-1.2.0/user-guide/tiledmap/tiledmap-culling.md",sourceDirName:"user-guide/tiledmap",slug:"/user-guide/tiledmap/tiledmap-culling",permalink:"/cocos-enhance-kit/docs/user-guide/tiledmap/tiledmap-culling",draft:!1,tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u50cf\u5176\u5b83\u6e32\u67d3\u7ec4\u4ef6\u4e00\u6837\u5728 Spine \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u52a8\u6001\u5408\u56fe\u3002"},sidebar:"tutorialSidebar",previous:{title:"TiledMap",permalink:"/cocos-enhance-kit/docs/user-guide/tiledmap/tiledmap-intro"},next:{title:"\u539f\u7406\u6587\u6863",permalink:"/cocos-enhance-kit/docs/theory-guide/theory-guide-intro"}},i={},Y=[{value:"\u5927\u81f4\u539f\u7406",id:"\u5927\u81f4\u539f\u7406",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2}],G={toc:Y};function D(A){var e=A.components,a=(0,M.Z)(A,r);return(0,t.kt)("wrapper",(0,g.Z)({},G,a,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"\u590d\u7528-culling-\u6570\u636e"},"\u590d\u7528 Culling \u6570\u636e"),(0,t.kt)("p",null,"\u4e00\u4e2a TiledMap \u53ef\u80fd\u4f1a\u6709\u5f88\u591a TiledLayer\uff0c\u5982\u679c\u5f00\u542f\u4e86 Culling\uff0c\u90a3\u8fd9\u4e9b Layer \u90fd\u9700\u8981\u5355\u72ec\u8ba1\u7b97 Culling \u6570\u636e\uff0c\u589e\u5f3a\u5305\u65b0\u589e\u4e86\u5728\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u590d\u7528 Culling \u6570\u636e\u7684\u7279\u6027\uff0c\u4ee5\u51cf\u5c11 CPU \u7684\u6027\u80fd\u6d88\u8017\u3002"),(0,t.kt)("h2",{id:"\u5927\u81f4\u539f\u7406"},"\u5927\u81f4\u539f\u7406"),(0,t.kt)("p",null,"\u901a\u8fc7\u4e3a TiledLayer \u6307\u5b9a\u53e6\u4e00\u4e2a TiledLayer\uff0c\u6765\u590d\u7528\u6307\u5b9a\u7684 TiledLayer \u7684 Culling \u6570\u636e\u3002"),(0,t.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4e24\u8005\u7684\u4e16\u754c\u77e9\u9635\uff08\u4e5f\u662f\u5927\u5c0f\u3001\u4f4d\u7f6e\u3001\u7f29\u653e\u7b49\u5c5e\u6027\uff09\u4e00\u81f4"),(0,t.kt)("li",{parentName:"ul"},"\u4e24\u8005\u6240\u7528\u7684 Camera \u4e00\u81f4"),(0,t.kt)("li",{parentName:"ul"},"\u4e24\u8005\u7684 TiledLayer \u7c7b\u578b\u3001\u5c5e\u6027\u4e00\u81f4"),(0,t.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u88ab\u590d\u7528\u7684 Layer \u4f1a\u66f4\u65e9\u8fdb\u884c\u6e32\u67d3\uff08\u5426\u5219 Culling \u6570\u636e\u540c\u6b65\u53ef\u80fd\u4f1a\u5ef6\u8fdf\u4e00\u5e27\uff09 ")),(0,t.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6ce8\u610f")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"\u590d\u7528\u53ef\u4ee5\u662f\u4e0d\u540c TiledMap \u7684 TiledLayer\uff0c\u4f46\u4e00\u5b9a\u8981\u6ee1\u8db3\u4e0a\u9762\u51e0\u4e2a\u6761\u4ef6\uff0c\u5426\u5219 Culling \u7ed3\u679c\u53ef\u80fd\u4e0d\u6b63\u786e\u3002"))),(0,t.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,t.kt)("p",null,"\u5047\u8bbe\u9879\u76ee\u4e2d\u6709 TiledMap \u7531 5 \u4e2a TiledLayer \u7ec4\u5408\u6210\u4e00\u5f20\u5730\u56fe\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(9061).Z,width:"550",height:"254"})),(0,t.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u5982\u679c\u9700\u8981\u590d\u7528 Culling \u6570\u636e\u53ea\u9700\u8981\u591a\u9009\u540e\u56db\u4e2a\u8282\u70b9\uff0c\u7136\u540e\u5c06\u7b2c\u4e00\u4e2a\u8282\u70b9\u62d6\u5165\u8fd9\u56db\u4e2a\u8282\u70b9\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"Culling Layer")," \u5c5e\u6027\u4e2d\u5373\u53ef\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(555).Z,width:"606",height:"648"})),(0,t.kt)("p",null,"\u8fd9\u6837\u5c31\u4f7f\u540e\u56db\u4e2a Layer \u590d\u7528\u7b2c\u4e00\u4e2a Layer \u7684 Culling \u6570\u636e\u4e86\u3002"))}D.isMDXComponent=!0},555:function(A,e,n){e.Z=n.p+"assets/images/tiledmap-inspector-a3e53bb62769339c5c2bbcafe7be3875.png"},9061:function(A,e){e.Z="data:image/png;base64,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"}}]);