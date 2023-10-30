# Cocos Enhance Kit

![logo](/docs/static/img/logo2.png)

这是一个提供 Cocos Creator 引擎特性增强、修复与优化的**开源非官方增强包**。

该项目使用自定义引擎的方式在符合原始引擎架构设计的基础上为 Cocos Creator 引擎加入新的特性、修复已知问题以及性能优化。

正因为如此，增强包中的大部分特性能像升级引擎版本一样无需改动项目代码即可生效。

<br>

> 项目的起源
> 
>2021 年 2 月，Cocos 发布 Cocos Creator 3.0，之后不会再开发 2.x 版本的新特性，但 2.x 在一些方面还并不完善，所以这个非官方的引擎“魔改”合集应运而生。
>
>给项目取名的时候想到相似的事情发生在 2014 年 4 月，官方停止了对 Windows XP 的维护，之后 Harkaz 发布了一个非官方增强包 Service Pack 4 (SP4)。
>
>受到这个命名的启发，遂想将项目取名为 Service Pack。
>
>但是这个名字有点怪怪的，最后在 麒麟子(Kylins) 的帮助下，我们为项目想到了一个更好的名字，Enhance Kit，再次感谢 麒麟子(Kylins)。

<br>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [重要特性](#重要特性)
- [功能演示](#功能演示)
- [使用方法](#使用方法)
- [更新日志](#更新日志)
  - [Enhance Kit v1.2.0](#enhance-kit-v120)
  - [Enhance Kit v1.1.0](#enhance-kit-v110)
  - [Enhance Kit v1.0.0](#enhance-kit-v100)
- [贡献指南](#贡献指南)
- [常见问题](#常见问题)
  - [为什么要直接修改引擎？](#为什么要直接修改引擎)
  - [启动 Cocos Creator 报 Error: Can not parse this input:undefined 错误](#启动-cocos-creator-报-error-can-not-parse-this-inputundefined-错误)
  - [原生平台或模拟器报错：Assertion failed: (_type == Type::String), function toString, file Value.cpp, line 496.](#原生平台或模拟器报错assertion-failed-_type--typestring-function-tostring-file-valuecpp-line-496)
  - [使用模拟器预览时出现各种问题](#使用模拟器预览时出现各种问题)
  - [Spine 组件出现 Uncaught TypeError: Cannot read property ‘load’ of null, location: src/cocos2d-jsb.b5158.js 等问题](#spine-组件出现-uncaught-typeerror-cannot-read-property-load-of-null-location-srccocos2d-jsbb5158js-等问题)

<!-- /code_chunk_output -->

## 重要特性

- **支持多纹理渲染**（多纹理材质、多纹理合批）
  ![demo1](/docs/static/demo-imgs/demo1.png)

- **支持高 DPI 文本渲染**（Label、RichText 组件）
  ![demo4](/docs/static/demo-imgs/demo4.png)

- **重构动态合图**（支持自动多纹理合批、优化算法、复用废弃空间等特性）
  ![demo2](/docs/static/demo-imgs/demo2.png)

- **重构 Label 组件的 CHAR 缓存模式**（支持自动多纹理合批、多图集、复用废弃空间等特性）
  ![demo3](/docs/static/demo-imgs/demo3.png)

- **Spine 组件支持与其它组件合批、合入动态图集与 SpriteFrame 换装**
  ![demo5](/docs/static/demo-imgs/demo5.png)

## 功能演示

[Web Desktop 演示项目](https://smallmain.gitee.io/cocos-enhance-kit/demo/v1.0.0/web-desktop/index.html)

[Web Mobile 演示项目](https://smallmain.gitee.io/cocos-enhance-kit/demo/v1.0.0/web-mobile/index.html)（请将设备横屏）

> 增强包对引擎的改动完全开源，每个改动会带有原理说明文档，当你发现问题时请与我们进行反馈，如果你有兴致，可以默默帅气地提交一个 PR，帮助我们一起完善这个项目。

## 使用方法

请阅读文档的 [安装指南](https://smallmain.gitee.io/cocos-enhance-kit/docs/installation-guide/installation-intro) 与 [入门教程](https://smallmain.gitee.io/cocos-enhance-kit/docs/start-guide/start-guide-intro)。

## 更新日志

### Enhance Kit v1.2.0

- **[新特性] cc.TiledLayer 支持复用 Culling 数据**
- [修复] 修复 MotionStreak 初始化报错的问题
- [修复] 修复勾选延迟加载资源时资源不会加载的问题

### Enhance Kit v1.1.0

- **[新特性] 动态合图在符合条件的情况下会忽略 padding 将纹理加入动态图集**
- [修复] 修复动态图集 maxFrameSize 能设置为超出图集尺寸大小的问题
- [修复] 修复 Spine 动态合图时未判断 attachment 是否存在 region 对象导致报错的问题
- [修复] 修复 Android 平台打包出现 Implicit instantiation of undefined template 错误

### Enhance Kit v1.0.0

- **[新特性] 支持多纹理渲染**
- **[新特性] 重构动态图集，支持多个新特性**
- **[新特性] 重构 cc.Label 的 Char 缓存模式，支持多个新特性**
- **[新特性] 支持高 DPI 文本渲染**
- **[新特性] Spine 组件支持参与动态图集、与其它组件合批、使用 SpriteFrame 换装**
- [新特性] cc.Label、cc.RichText、cc.Sprite、cc.MotionStreak、Spine 组件支持使用多纹理材质，并支持自动切换材质机制
- [新特性] cc.RichText 支持使用自定义材质
- [修复] 直接修改 Effect 的属性不回导致其变体的 hash 值刷新
- [修复] CHAR 缓存模式 hash 计算可能会有重复的问题
- [调整] 默认禁用 Label 原生 TTF 渲染器

[点此](https://smallmain.gitee.io/cocos-enhance-kit/docs/update-log) 查看所有的更新日志。

## 贡献指南

非常欢迎你能和我们一起来完善这个项目，请通过 Github 进行：

- 如果你发现了问题请建立 `Issues`
- 如果你有好的想法，请进入 `Discussions`
- 如果你有新的代码提交，请建立 `Pull requests`

**原则上你提交的任何修改都不能影响引擎原有功能，不允许删除引擎原有的特性，请认真思考代码设计。**

## 常见问题

### 为什么要直接修改引擎？

直接修改引擎可能是大部分人认为的下下策，比如我们常听到的：

- 可以通过 “修改对象原型” 等编程技巧将改动做成一个插件脚本
- 没接触过自定义引擎，不知道该如何使用
- 已经修改过引擎了，不能直接进行标准安装，会覆盖原有的修改

以上问题我们都思考过，首先，现在引擎的 2.x 版本已经停止了更新（仅做一些维护工作），也就是说修改引擎不会遇到在官方新版本发布后需要用大量时间去适配的情况。

其次，即使增强包的所有改动都能做成一个插件脚本，但无法兼容原生平台，并且一般都需要大量拷贝代码，包体会增大，可维护性会大幅降低。

最后，我们希望它接近 “原生” 的使用体验，就像引擎本来就有的功能一样，对于没有接触过自定义引擎的人，可以通过引擎扩展一键安装。

对于已经修改过引擎的人，由于增强包提供的是 Git Patch，所以可以让你在原有的基础上轻松应用增强包的改动，你甚至可以只选取你想要的特性进行应用。

### 启动 Cocos Creator 报 Error: Can not parse this input:undefined 错误

这是你可能忘记安装配套的引擎扩展，所以没有找到增强包的内置资源导致的报错。

### 原生平台或模拟器报错：Assertion failed: (_type == Type::String), function toString, file Value.cpp, line 496.

这是你没有替换引擎的 `jsb-adapter` 部分，或者说没有重启以生效。

注意：原生平台构建时可能需要先删除原有的 build 文件，替换操作才会生效。

### 使用模拟器预览时出现各种问题

可能是因为模拟器没有重新编译导致的，请按照官方的 [引擎定制文档](https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/engine-customization.html#25-%E7%BC%96%E8%AF%91%E6%A8%A1%E6%8B%9F%E5%99%A8) 重新编译模拟器即可。

### Spine 组件出现 Uncaught TypeError: Cannot read property ‘load’ of null, location: src/cocos2d-jsb.b5158.js 等问题

这是引擎自身的问题，由于释放 Spine 资源，然后再次加载相同 Spine 资源时导致，具体请看：

[问题讨论](https://forum.cocos.org/t/topic/137649/148)

截止 v2.4.12，引擎仍未修复此问题，暂时的解决方案有三种：

1. 引擎已经有一个修复此问题的 PR，但还未合入，可自行合入：[PR #4307](https://github.com/cocos/engine-native/pull/4307)
2. 需要进行释放的 spine 资源，不让其参与动态合图（通过控制 Spine 组件的合图开关）。
3. 不释放需要参与动态合图的 spine 资源。
