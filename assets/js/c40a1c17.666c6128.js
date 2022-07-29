"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[131],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1669:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=["components"],l={sidebar_position:2,description:"\u968f\u5fc3\u6240\u6b32\u5730\u63a7\u5236\u52a8\u6001\u5408\u56fe\u7684\u4f7f\u7528\u3002"},o="\u624b\u52a8\u7ba1\u7406\u5408\u56fe",u={unversionedId:"user-guide/dynamic-batcher/dynamic-batcher-manual",id:"version-1.2.0/user-guide/dynamic-batcher/dynamic-batcher-manual",title:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe",description:"\u968f\u5fc3\u6240\u6b32\u5730\u63a7\u5236\u52a8\u6001\u5408\u56fe\u7684\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.2.0/user-guide/dynamic-batcher/dynamic-batcher-manual.md",sourceDirName:"user-guide/dynamic-batcher",slug:"/user-guide/dynamic-batcher/dynamic-batcher-manual",permalink:"/cocos-enhance-kit/docs/user-guide/dynamic-batcher/dynamic-batcher-manual",draft:!1,tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\u968f\u5fc3\u6240\u6b32\u5730\u63a7\u5236\u52a8\u6001\u5408\u56fe\u7684\u4f7f\u7528\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u6574\u5408\u56fe\u8bbe\u7f6e",permalink:"/cocos-enhance-kit/docs/user-guide/dynamic-batcher/dynamic-batcher-basics"},next:{title:"Spine",permalink:"/cocos-enhance-kit/docs/user-guide/spine/spine-intro"}},p={},s=[{value:"\u8bbf\u95ee\u56fe\u96c6\u6570\u7ec4\u4e0e\u5df2\u7528\u7a7a\u95f4\u96c6\u5408",id:"\u8bbf\u95ee\u56fe\u96c6\u6570\u7ec4\u4e0e\u5df2\u7528\u7a7a\u95f4\u96c6\u5408",level:2},{value:"\u6dfb\u52a0 SpriteFrame \u5230\u52a8\u6001\u56fe\u96c6",id:"\u6dfb\u52a0-spriteframe-\u5230\u52a8\u6001\u56fe\u96c6",level:2},{value:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664 SpriteFrame",id:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664-spriteframe",level:2},{value:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664 Texture",id:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664-texture",level:2},{value:"\u66f4\u591a\u63a5\u53e3",id:"\u66f4\u591a\u63a5\u53e3",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u624b\u52a8\u7ba1\u7406\u5408\u56fe"},"\u624b\u52a8\u7ba1\u7406\u5408\u56fe"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u53ef\u80fd\u9700\u8981\u66f4\u7ec6\u81f4\u5730\u53bb\u63a7\u5236\u54ea\u4e9b\u7eb9\u7406\u52a0\u5165\u52a8\u6001\u56fe\u96c6\uff0c\u8003\u8651\u5230\u8fd9\u4e00\u70b9\uff0c\u589e\u5f3a\u5305\u5728\u4fdd\u7559\u539f\u6765\u6240\u6709\u63a5\u53e3\u7684\u57fa\u7840\u4e0a\u5b8c\u5168\u5f00\u653e\u4e86\u52a8\u6001\u56fe\u96c6\u76f8\u5173\u7684\u6240\u6709\u63a5\u53e3\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u8bbf\u95ee\u56fe\u96c6\u6570\u7ec4\u4e0e\u5df2\u7528\u7a7a\u95f4\u96c6\u5408"},"\u8bbf\u95ee\u56fe\u96c6\u6570\u7ec4\u4e0e\u5df2\u7528\u7a7a\u95f4\u96c6\u5408"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.atlases\n")),(0,i.kt)("p",null,"\u548c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.rects\n")),(0,i.kt)("p",null,"\u5206\u522b\u8bbf\u95ee\u5230\u56fe\u96c6\u6570\u7ec4\u4e0e\u6240\u6709\u56fe\u96c6\u7684\u5df2\u7528\u7a7a\u95f4\u96c6\u5408\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u6dfb\u52a0-spriteframe-\u5230\u52a8\u6001\u56fe\u96c6"},"\u6dfb\u52a0 SpriteFrame \u5230\u52a8\u6001\u56fe\u96c6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.insertSpriteFrame(spriteFrame);\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u5c06 SpriteFrame \u6240\u4f7f\u7528\u7684\u7eb9\u7406\u6dfb\u52a0\u5230\u52a8\u6001\u56fe\u96c6\uff0c\u8fd9\u662f\u5f15\u64ce\u539f\u6709\u63a5\u53e3\uff0c\u4f46\u589e\u5f3a\u5305\u5bf9\u5176\u505a\u4e86\u4e00\u70b9\u4fee\u6539\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4e0d\u518d\u4f1a\u68c0\u67e5\u7eb9\u7406\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"packable")," \u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u53d8\u6210\u4e86\u4e00\u4e2a\u5f3a\u5236\u6dfb\u52a0\u7684\u63a5\u53e3\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u8bbe\u8ba1\u7684\u539f\u56e0\u662f\u4f60\u53ef\u4ee5\u5c06\u6240\u6709\u7eb9\u7406\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"packable")," \u90fd\u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u6216\u8005\u76f4\u63a5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxFrameSize")," \u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u7136\u540e\u5b8c\u5168\u624b\u52a8\u5730\u8fdb\u884c\u52a8\u6001\u5408\u56fe\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664-spriteframe"},"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664 SpriteFrame"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.deleteSpriteFrame(spriteFrame);\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f SpriteFrame \u53d6\u6d88\u4f7f\u7528\u52a8\u6001\u56fe\u96c6\u7eb9\u7406\uff0c\u8fd9\u4e0d\u4e00\u5b9a\u4f1a\u5c06 SpriteFrame \u7684\u7eb9\u7406\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664\uff0c\u56e0\u4e3a\u53ef\u80fd\u8fd8\u4f1a\u6709\u5176\u5b83 SpriteFrame \u5728\u4f7f\u7528\uff0c\u53ea\u6709\u6ca1\u6709 SpriteFrame \u5728\u4f7f\u7528\u65f6\u624d\u4f1a\u5220\u9664\u7eb9\u7406\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664-texture"},"\u4ece\u52a8\u6001\u56fe\u96c6\u5220\u9664 Texture"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.deleteTexture(texture);\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u63a5\u53e3\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteSpriteFrame")," \u76f8\u4f3c\uff0c\u4f46\u662f\u5b83\u4f1a\u76f4\u63a5\u5220\u9664\u7eb9\u7406\uff0c\u5e76\u4e14\u4f1a\u4f7f\u4f7f\u7528\u8be5\u7eb9\u7406\u7684 SpriteFrame \u5168\u90e8\u6062\u590d\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u66f4\u591a\u63a5\u53e3"},"\u66f4\u591a\u63a5\u53e3"),(0,i.kt)("p",null,"\u867d\u7136\u8fd8\u66b4\u9732\u4e86\u5176\u5b83\u63a5\u53e3\u51fa\u6765\uff0c\u4f46\u56e0\u4e3a\u592a\u8fc7\u4e8e\u5e95\u5c42\u6240\u4ee5\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u53ef\u4ee5\u9605\u8bfb\u539f\u7406\u6587\u6863\u3002"))}d.isMDXComponent=!0}}]);