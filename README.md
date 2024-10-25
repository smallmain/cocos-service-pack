<h1 align="center">Cocos Enhance Kit</h1>

<p align="center">
	<img src="/media/logo-round.png" width="200"></img>
</p>

<p align="center">
这是 <a herf="https://www.cocos.com/creator">Cocos Creator</a> v2.x 社区分叉版本，<b>提供了大量的新特性、性能改进与修复</b>。
</p>

<p align="center">
未来将继续秉持着<b>完全开源、完全兼容</b>的理念提供新特性、优化与修复。
</p>

<p align="center">
非常欢迎你能和我们一起来完善这个项目！
</p>

## 主要特性

### 完全兼容

社区版的现在乃至未来都会做到以下几点：

- 兼容旧项目，无需改动项目代码即可切换到社区版。
- 不会对项目本身进行任何改动，随时可以切换回官方版。
- 任何特性都可以选择性开启，保证项目的可控性。

并且全平台兼容！

### 支持多纹理渲染

在之前，每个相邻的节点使用不同的纹理渲染时会打断合批，我们一般通过调节节点顺序、合并图集的方式来避免这个问题。

但是实际应用起来情况复杂，且操作麻烦，无法优化到极致，而较高的 DrawCall 数量会导致设备性能下降、发热的问题。

现在，由于支持了多纹理渲染，可允许多达 8 张不同纹理进行渲染时也不会打断合批，**在最坏的情况下，也能将项目的 DrawCall 数量减少至 1/8**！

并且，该特性在使用动态合图时会自动启用，无需任何改动即可得到优化效果。

![demo1](/docs/static/demo-imgs/demo1.png)

### 支持高清文本渲染

在之前，Cocos Creator 引擎默认以 1x 的分辨率渲染字体，所以有时候在某些 `Retina` 设备上会感觉到字体很模糊。

由于引擎本身不支持对其进行调节，我们会通过将 Label 的 `fontSize` 放大一倍，然后将 `scale` 缩小一倍的方式解决字体渲染模糊的问题。

现在，增加了高清文本渲染的支持，你只需要通过一句代码：

```ts
cc.sp.labelRetinaScale = 2;
```

即可调整引擎文本渲染的分辨率，获得高清的文本渲染效果。

![demo4](/docs/static/demo-imgs/demo4.png)

### 动态合图增强

除了上面提到将动态合图支持了自动多纹理渲染之外，我们其实几乎重构了整个动态合图模块。

现在的动态合图即优化了算法，还**支持废弃空间复用**，这对于项目的性能优化空间的提升是巨大的。

并且，**Spine 现在也可以参与动态合图**了！

![demo2](/docs/static/demo-imgs/demo2.png)

### Label 组件增强

Label 一直是项目优化的最难点，因为它完全不能和其它的渲染组件进行合批，甚至大部分情况下也不能和其它 Label 组件合批。

在之前，使用 `Bitmap` 模式可以加入动态合图，以达到合批的目的，但受引擎动态合图不能复用废弃空间的限制，导致项目越运行，可以动态合图的空间就越小，很容易就会将动态图集塞满，所以基本不会在实际的项目中使用。

`Char` 模式也有类似的问题，内部的字符纹理即不支持复用，还最高仅支持 1 张纹理，纹理很容易就被填满导致无法渲染文本，不会在实际项目中使用。

但是现在，Label 得到了以下重大的改进：

- 重构后的动态合图支持复用，`Bitmap` 模式的使用不再受限！
- `Char` 模式得到重构，**支持废弃空间复用，支持最多 8 张字符纹理，支持自动多纹理合批**！
- RichText 也得到同样的所有改进，并且开放了自定义材质的设置。

![demo3](/docs/static/demo-imgs/demo3.png)

### Spine 组件增强

除了 Label 之外，如果你的项目用到了 Spine 组件，那么它大概率会成为项目第二个优化难点。

现在，Spine 也得到了重大改进，**支持与其它组件合批，支持参与动态合图，还能无缝使用 SpriteFrame 进行换装**！

![demo5](/docs/static/demo-imgs/demo5.png)

### TiledMap 组件优化

单个 TiledMap 组件可能存在多个 TiledLayer，启用 Culling 特性后，每个 Layer 都需要单独计算 Culling 数据。

现在在满足条件的情况下可以复用 Culling 数据，以减少项目 CPU 的性能消耗。

### 多线程支持

现在，引擎的部分系统增加了多线程支持，启用后可以释放其对主线程的占用，减少卡顿现象。

## 演示

[Web Desktop](https://smallmain.github.io/cocos-enhance-kit/demo/v1.0.0/web-desktop/index.html)

[Web Mobile](https://smallmain.github.io/cocos-enhance-kit/demo/v1.0.0/web-mobile/index.html)（请将设备横屏）

## 文档

请前往 [文档](https://smallmain.github.io/cocos-enhance-kit/docs/intro)。

## 使用方法

请阅读文档的 [一键安装](https://smallmain.github.io/cocos-enhance-kit/docs/installation/installation-auto)。

## 更新日志

请前往 [Github Release](https://github.com/smallmain/cocos-enhance-kit/releases) 查看。

## 贡献指南

- 如果你有任何问题或者想法请建立新的 `Issues`，我们会尽自己所能帮助你！
- 如果你有新的代码提交，请建立新的 `Pull requests` 以完成合并。

## 常见问题

**为什么要直接修改引擎？**

官方对 2.x 版本已经停止了更新（仅做一些维护工作），修改引擎不会遇到在官方新版本发布后需要用大量时间去适配，或者特性冲突的问题。

如果不自定义引擎，则无法兼容原生平台，即使不兼容，使用 Hack 的方式，某些特性的实现需要大量拷贝代码，包体会增大，可维护性会降低。

最后，我们希望它接近 “原生” 的使用体验，就像只是一次引擎的无痛升级。

**启动 Cocos Creator 报 Error: Can not parse this input:undefined 错误**

你可能忘记安装配套的引擎扩展，所以没有找到社区版的内置资源，导致报错，请仔细阅读文档重新安装。

**原生平台或模拟器报错：Assertion failed: (_type == Type::String), function toString, file Value.cpp, line 496.**

你可能没有替换引擎的 `jsb-adapter` 部分，或者说没有重启以使替换生效。

并且原生平台需额外注意，升级后的首次构建可能需先删除原有的构建工程才会生效。

**使用模拟器预览时出现各种问题**

可能是因为模拟器没有重新编译导致的，请按照官方的 [引擎定制文档](https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/engine-customization.html#25-%E7%BC%96%E8%AF%91%E6%A8%A1%E6%8B%9F%E5%99%A8) 重新编译原生模拟器即可。

**Spine 组件出现 Uncaught TypeError: Cannot read property ‘load’ of null, location: src/cocos2d-jsb.b5158.js 等问题**

这是引擎自身的问题，由于释放 Spine 资源，然后再次加载相同 Spine 资源时导致，具体请看：

[问题讨论](https://forum.cocos.org/t/topic/137649/148)

截止 v2.4.12，引擎仍未修复此问题，暂时的解决方案有三种：

1. 引擎已经有一个修复此问题的 PR，但还未合入，可自行合入：[PR #4307](https://github.com/cocos/engine-native/pull/4307)
2. 需要进行释放的 spine 资源，不让其参与动态合图（通过控制 Spine 组件的合图开关）。
3. 不释放需要参与动态合图的 spine 资源。

该问题已在 v2.4.13 版本修复，请升级社区版至 v2.0.0 以上。

## 支持我们

社区版的开发需要大量的工作来进行，你的支持是我们最大的动力：

- 请给我们的项目仓库一个 [Star](https://github.com/smallmain/cocos-enhance-kit)！
- 购买可有可无的 [一键安装扩展](https://store.cocos.com/app/detail/3824) 赞助我们！
