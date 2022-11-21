
# 如何实现网页多标签tab通讯

### 场景说明
tab 列表页待处理数量和详情页待处理数量同步统一

<img :src="$withBase('/assets/notes-images/breadth/tab.png')" alt="tab" width="500">


### 1. WebSocket 实现
WebSocket 特性：
- 无跨域限制
- 需要服务器支持，成本高
- 实现方式：网页操作后，发送到服务器，服务器接收到消息后，同步到其他页面中
- 如果遇到断网的情况，也会有不同步的情况


### 2. localStorage 实现
适用于同域通讯，localStorage 跨域不共享

- 同域的 A 和 B 页面
- A 页面设置localStorage，window.setLocalStorage('name', value)
- B 页面可监听到 localStorage 值的变化, 通过 storage 方法监听

``` js
// 页面A
window.setLocalStorage('score', 100);

// 页面B
window.addEventListener('storage', event=> {
    console.log('key', event.key); // score
    console.log('value', event.value); // 100
})

```

### SharedWorker
必须是同域，不支持跨域

- SharedWorker 是 WebWorker 的一种
- WebWorker 可开启子进程执行 JS，但不能操作 DOM
- SharedWorker 可单独开启一个进程，用于`同域`页面通讯


<img :src="$withBase('/assets/notes-images/breadth/shareWorker.png')" alt="shareWorker" width="500">


### 比较
- WebSocket 需要服务端支持，成本较高，无跨域限制
- localStorage 简单易用，推荐，默认跨域不共享
- SharedWorker 调试不方便，不兼容IE11，跨域限制