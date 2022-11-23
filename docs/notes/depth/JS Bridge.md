
# JS Bridge

### 介绍
JSBridge是一座用JavaScript搭建起来的桥，是JS和Native之间的一种通信方式，其中Native只通过一个固定的桥对象调用JS，而JS也只通过固定的桥对象调用Native。

- JS 无法直接调用 Native API
- 需要通过一些特定的 "格式" 来调用
- 这些 "格式" 就统称为 JS Bridge，eg：微信JSSDK

<img :src="$withBase('/assets/notes-images/depth/js-bridge.png')" alt="js-bridge" width="800">

<!-- ### 开源的JSBridge
- DSBridge：主要通过注入API的形式，DSBridge for Android、DSBridge for IOS
- JsBridge：主要通过拦截URL Schema，JsBridge -->

### JSBridge 的双向通信原理
`JS 调用 Native`：JS 调用 Native 的实现方式较多，主要有拦截 URL Scheme 、重写 prompt 、注入 API 等方法。
`Native 调用 JS`：Native 调用 JS 比较简单，只要 H5 将 JS 方法暴露在 Window 上给 Native 调用即可。
