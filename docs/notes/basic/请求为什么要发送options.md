
# 请求为什么要发送options

### 发送options的原因
经常会遇到跨域的情况，所以先发送method为options的请求，看服务器返回什么跨域信息。  

- options 请求是跨域请求之前的预检查
- 浏览器自行发起的，无需我们干预
- 不会影响实际功能

<img :src="$withBase('/assets/notes-images/basic/options.png')" alt="tcp" width="700">

### 跨域请求
浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都是跨域

<img :src="$withBase('/assets/notes-images/basic/跨域.png')" alt="tcp" width="700">   

- 浏览器同源策略
- 同源策略一般限制 Ajax 网络请求，不能跨域请求 server
- 不会限制 `<link>` `<img>` `<script>` `<iframe>` 加载第三方资源

### 同源策略限制内容有
- Cookie、LocalStorage、IndexedDB 等存储性内容
- DOM 节点
- AJAX 请求发送后，结果被浏览器拦截了

### 如何跨域

- JSONP
- CORS

1. JSONP: 原理就是通过添加一个`<script>`标签，向服务器请求JSON数据，这样不受同源政策限制。

::: details 点击查看代码
``` js
    // www.a.com 网页
    <script>
        window.onSuccess = function (data) {
            console.log(data)
        }
    </script>
    <script src="https://www.b.com/api/getData"></script>
```

``` javascript
    // https://www.b.com/api/getData 返回一段字符串
    'onSuccess({code: 200, data: {}})'
```
:::

`优点：`
- 兼容性比较好，可用于解决主流浏览器的跨域数据访问的问题
- 不受到同源策略的限制，在请求完毕后可以通过调用 callback 的方式回传结果

`缺点：`
- 仅支持get请求；
- 具有局限性，不安全，可能会受到XSS攻击；
- 只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 Javascript 调用的问题


2. CORS
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

CORS需要浏览器和服务器同时支持。浏览器端IE10+及现代浏览器均支持，整个CORS通信过程，都是浏览器自动完成，不需要用户参与。

``` js
// CORS 配置允许跨域（服务端）
response.setHeader("Access-Control-Allow-Origin: http://localhost:1011") // 或者 '*', 允许的跨域源
response.setHeader("Access-Control-Allow-Headers", 'X-Custom-Header')  // 允许携带的头
response.setHeader("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTIONS") // 允许访问的方式
response.setHeader("Access-Control-Allow-Credentials", true) // 是否允许携带cookie，默认情况下，cors不会携带cookie，除非这个值是true

```

CORS是规范化的跨域请求解决方案，安全可靠

`优势：`
- 在服务端进行控制是否允许跨域，可自定义规则
- 支持各种请求方式

`缺点：`
- 会产生额外的请求