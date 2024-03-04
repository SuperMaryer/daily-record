
# JS Bridge

### 介绍
如今移动端盛行，技术选型上基本都是混合开发（Hybrid）。混合开发是一种开发模式，即使用多种开发模型开发App，通常会涉及到两大类技术：原生Native(ios android)、Web H5。


JSBridge是一座用JavaScript搭建起来的桥，是JS和Native之间的一种通信方式，其中Native只通过一个固定的桥对象调用Web，而Web也只通过固定的桥对象调用Native。

- Web 无法直接调用 Native API
- 需要通过一些特定的 "格式" 来调用
- 这些 "格式" 就统称为 JS Bridge，eg：微信JSSDK

<img :src="$withBase('/assets/notes-images/depth/js-bridge.png')" alt="js-bridge" width="740">

<img :src="$withBase('/assets/notes-images/depth/js-bridge1.png')" alt="js-bridge1" width="800">


### JSBridge 的双向通信原理
`Web 调用 Native`：将Native端原生接口封装成 JS 接口, 主要有:
- 拦截 Webview 的 URL Scheme 
- 注入 API 
- 重写 prompt 

`Native 调用 Web`：将 Web 端 JS 接口封装成原生接口，较简单
- 只要 Web 将 JS 方法暴露在 window 上给 Native 调用即可
- Native 调用时：=> 让 Webview 执行 window.goToWebPageById(id)

#### Web 调用 Native : URL scheme
- URL scheme是App提供给外部的可以直接操作App的规则
- 方便在网页端打开自己的App
- 如：微信提供了打开扫一扫的URL scheme。weixin://dl/scan 
- 如：转账、打开某个页面等url scheme

<img :src="$withBase('/assets/notes-images/depth/scheme.png')" alt="scheme" width="400">


对于开发者而言
- 可开发从自己的App跳转到另一款App的功能
- 可开发从网页跳转到App的功能

Native 加载 WebView 后，Web 发送的所有请求都会经过 WebView 组件，所以 Native 可以重写 WebView 里的方法，用来拦截 Web 发起的请求。

就可以对请求格式进行判断是否符合自定义URL Schema:

- 符合：解析URL => 匹配操作类型 => 执行，从而调用 Native 方法
- 不符合：转发，请求真正的服务


<img :src="$withBase('/assets/notes-images/depth/scheme1.png')" alt="scheme1" width="724">



#### Web 调用 Native : 注入 API
通过 Webview 提供的接口，App 将 Native 相关接口注入到Web JS 的 Context（window）中，一般注入后的方法名与 Native 对应方法名是相同的。  
Web 端就可以直接在全局 window 下使用这个暴露的全局JS对象，进而调用原生端的方法。

Web 端调用： window.NativeBridge.showNativePageById('home')


### 开源的JSBridge
- DSBridge：主要通过注入API的形式，DSBridge for Android、DSBridge for IOS
- JsBridge：主要通过拦截URL Schema，JsBridge