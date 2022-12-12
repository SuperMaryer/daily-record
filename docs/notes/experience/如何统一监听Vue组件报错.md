
# 如何统一监听Vue组件报错

### 统一监听
- errorCaptured 监听下级组件错误，返回 false 会组织向上传播
- errorHandler 监听全局Vue组件的错误，一旦捕抓到，会停止向window.onerror传播
- window.onerror 监听其他JS错误，eg: 异步

### window.onerror
- 全局监听所有 JS 错误
- JS 级别的，识别不了 Vue 组件信息
- 可用于捕捉一些 Vue 监听不到的错误

``` vue
<template>
    <div>
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
    </div>
</template>
<script>
export default {
    mounted() {
        // window.onerror = function (msg, source, line, column, error) {
        //     console.log('window.onerror:', msg, source, line, column, error)
        // }

        window.addEventListener('error', event => {
            console.log('window.onerror:', event)
        })
    }
}
</script>
```


### errorCaptured 生命周期
- 监听所有下级组件的错误，自己组件的错误无法监听
- 返回 false 会组织向上传播

``` vue
<script>
export default {
    mounted() {
        // window.onerror = function (msg, source, line, column, error) {
        //     console.log('window.onerror:', msg, source, line, column, error)
        // }

        window.addEventListener('error', event => {
            console.log('window.onerror:', event)
        })
    },
    errorCaptured: (err, vm, info) => {
        console.log('errorCaptured:', err, vm, info) // 错误，组件，字符串信息
    }
}
</script>
```

### errorHandler 配置
- Vue 全局错误监听， 所有组件错误都会汇总到这里
- errorCaptured 返回false, 不会传播到这里

``` js
// main.js

import { createApp } from 'vue';
import App from './App';
import router from './router';

const app = createApp(App);

app.config.errorHandler = (err, vm, info) {
    console.log('errorHandler: ', err, vm, info); // 错误，组件，错误信息
}

app.use(router).mount('#app')
```


### 异步错误
- 异步、setTimeOut、Promise回调的错误、errorHandler 都无法监听到
- 需要使用 window.onerror