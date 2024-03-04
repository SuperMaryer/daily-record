# hmr热更新

### hot
Vite 通过特殊的 import.meta.hot 对象暴露手动 HMR API。

### 必需的条件守卫
用一个条件语句守护所有 HMR API 的使用，这样代码就可以在生产环境中被 tree-shaking 优化

``` js
if (import.meta.hot) {
  // HMR 代码
}
```

### hot.accept(cb)

不选任何框架初始化的项目中， main.js 中写入
``` js
export function render() {
    document.getElementById('#app').innerHTML = `
        <div>
            <h1>Hello</h1>
            <p>ffhou</p>
        </div>
    `
}

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (newModule) {
        // newModule is undefined when SyntaxError happened
        newModule.render();
    }
  })
}
```

### 页面如何实现hmr
- 更新代码
- 在server端发现了文件更新
- server 通过 websocket 推送一个事件到 client 浏览器中
- 事件包含 更新的文件
- 浏览器根据事件内容，重新请求更新后的文件
- 浏览器拿到新文件后，替换在浏览器中运行的老的模块

1. 打开 控制台=>Network=>WS ，可以看到有一个 websocket

<img :src="$withBase('/assets/vite-images/hot-ws.png')" alt="hot-ws" width="600">

2. App.jsx更新代码后，websocket 多了一条 message 更新。（server监听到更新，给客户端推送信息）  

<img :src="$withBase('/assets/vite-images/hot-ws1.png')" alt="hot-ws1" width="600">

3. 切换到 js, 同步加载了更新后的 App.jsx   

<img :src="$withBase('/assets/vite-images/hot-js.png')" alt="hot-js" width="600">


#### 注意
对于没有通过hot.accept的模块文件，一旦文件更新了，会导致vite去重新渲染这个页面，因为vite不知道如何处理这个文件的更新，只能通过页面刷新的方式进行处理
