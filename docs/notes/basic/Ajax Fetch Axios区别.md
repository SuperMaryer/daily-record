# Ajax Fetch Axios

### 三者的区别
三者都用于网络请求，但是是不同维度
- Ajax 是一种技术统称。asynchronous javascript and xml的首字母缩写
- Fetch 是一个具体的API。 控制台可以打印，是浏览器原生API
- Axios 是一个第三方库。是常用的网络请求lib，可以用XMLHttpRequest或Fetch实现

### 用XML或Fetch实现Ajax
::: details 点击查看代码
```js
    // xhr
    function ajax1(url, successFn) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                successFn(xhr.responseText);
            }
        }
        xhr.send(null);
    }

    // fetch
    // 浏览器原生API和XMLHttpRequest一个级别，语法更加简洁易用，支持promise
    function ajax2(url, successFn) {
        return fetch(url).then(res => successFn(res));
    }
```
:::

### xhr.readyState 的五个状态
- 0-未初始化：还没有调send方法
- 1-载入：已调用send方法，正在发送请求
- 2-载入完成：send方法执行完成，已经接收到全部响应请求
- 3-交互：正在解析响应内容
- 4-完成：响应内容解析完成，可以在客户端调用

### lib和API区别
- lib：第三方库，一般要基于原生API实现
- API：是原生函数
- 实际项目中，使用现成的lib，可以大大提高开发效率