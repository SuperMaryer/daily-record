# 创建项目

### vite创建vue3项目
**1. yarn create vite**

**2. 设置Project name**： 自定义一个名字，eg: vite-vue3

**3. Select a framework**: 选择 Vue  (指的就是vue3)

**4. Select a variant**: 根据自己需求选择

**5. init后，进入项目**：cd vite-vue3

**6. 装包**：yarn

**7. 本地运行**：yarn dev


`如果需要使用jsx，可以通过plugin扩展`



**1. 安装vue-jsx**： yarn add @vitejs/plugin-vue-jsx -D

**2. 根目录vite.config.js, 引入plugin-vue-jsx**

``` js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), 
        vueJsx(), // 调用
    ],
})
```

**3. 新建App.jsx 文件，写入以下代码**
``` jsx
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return () => {
            return <div>hello Vue3 Jsx</div>
        }
    }
})
```

**4. main.js 文件把原来的App.vue 指向替换成 App.jsx**
``` js
import { createApp } from 'vue'
import './style.css'
// import App from './App.vue'
import App from './App.jsx'

createApp(App).mount('#app')
```

**最后文件目录如下**  
<img :src="$withBase('/assets/vite-images/vite-vue3.png')" alt="vite-vue3" width="800">


### vite创建vue2项目
由于vite 没有直接提供init vue2 模板，但是提供了plugin 去支持
**1. yarn create vite**

**2. 设置Project name**: 自定义一个名字，eg: vite-vue2

**3. Select a framework**: 选择 Vanilla 表示指定任何框架类型

**4. Select a variant**：根据自己需求选择

**5. init后，进入项目**：cd vite-vue2

**6. 装包**：yarn

**7. 本地运行**：yarn dev


`初始化后进行改造`


**1. 按装vue**： yarn add vue@2.7.0 -S

**2. 安装vue-jsx**：yarn add vite-plugin-vue2 -D

**3. 根目录新增vite.config.js文件, 引入plugin**

``` js
import { createVuePlugin } from 'vite-plugin-vue2';

export default {
    plugins: [createVuePlugin()]
}

```
**4. src 下新建App.vue 文件，写入以下代码**
``` vue
<template>
    <div> hello vite-vue2 </div>
</template>
<script>
export default {
    
}
</script>
```
**5. src 下新建main.js，写入以下代码**
``` js
import Vue from "vue";
import App from "./App.vue";


new Vue({
    el: '#app',
    render: (h) => h(App)
}).$mount();
```
**6. 根目录index.html 文件修改script 的src指向'/src/main.js'**

**最后文件目录如下** 
<img :src="$withBase('/assets/vite-images/vite-vue2.png')" alt="vite-vue2" width="800">


### vite创建react项目
#### react 热更新
- react-hot-loader
- fastRefresh，优势更明显，如下：
    + 解决很多react-hot-loader无法解决的问题
    + 速度更快
    + 支持局部更新

#### 创建项目
**1. yarn create vite**

**2. 设置Project name**: 自定义一个名字，eg: vite-react

**3. Select a framework**: 选择 React

**4. Select a variant**：根据自己需求选择

**5. init后，进入项目**：cd vite-react

**6. 装包**：yarn

**7. 本地运行**：yarn dev


**最后文件目录如下**
<img :src="$withBase('/assets/vite-images/vite-react.png')" alt="vite-react" width="800">




### vite 项目的index.html
**初始化后的文件结构如下**
<img :src="$withBase('/assets/vite-images/vite-vue3.png')" alt="vite-vue3" width="600">

#### index.html 入口文件
- Vite 项目中，index.html 在项目最外层，而不是在 public 文件夹内         
- 这是有意而为之：开发中 Vite 是一个服务器，而 index.html 是项目的入口文件   
- Vite 解析 `<script type="module" src="..."><script>` ，src 指向 JS 源码
- script type 为module, 也就是它是通过module 来加载js 模块的

#### 入口文件script src 路径后缀
- 注意到 `<script type="module" src="..."><script>` 的src路径可以是.jsx后缀
- 是因为script 它不关心后缀，只关心返回的内容，并且会根据type 去进行解析
- 而vite 运行时会启动一个本地服务，根据路径拿到文件，进行一系列的解析后返回合适的内容

