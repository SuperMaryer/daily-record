### vite 中的 ts

### 注意
vite 可以直接引用.ts文件，并能够使用，但是不会进行校验js语法有没有错误，直接通过

### 如何使用ts
需要正常校验需要配置ts, 或者在init 项目的时候，选择typescript类型

#### 一、创建项目时设置ts
<a :href="$withBase('/frame/vite/create')">创建项目操作步骤</a>

在选择 Select a variant** 时 选择 typescript 即可

#### 二、配置ts
1. 安装ts

``` md
yarn add typescript - D
```

2. 新建 

3. 配置校验规则，可以复制一个使用 ts 初始化的项目的配置内容

``` json
// tsconfig.json 文件
// 这里是直接拷贝的init 时，选择typescript 类型创建的配置
{
    "compilerOptions": {
      "target": "ESNext", //指定编译之后的版本目录 ESNext: es 使用比较新的 es 语法
      "useDefineForClassFields": true,
      "module": "ESNext", // ESNext:使用比较新的es语法的模板标准    commonjs: 使用commonjs
      "moduleResolution": "Node", // 通过node方式来解析模块module
      "strict": true, // 严格模式
      "jsx": "preserve", // 使用插件来编译语法，ts不编译jsx语法
      "sourceMap": true, // 开启sourceMap，调试时可以直接看到ts代码 
      "resolveJsonModule": true, // 是否可以improt json
      "isolatedModules": true, // 编译器会将每个文件作为单独的模块来使用
      "esModuleInterop": true, // 允许使用commonjs的方式import默认文件， eg: import React from 'react'
      "lib": ["ESNext", "DOM"], // 支持的内置的对象
      "skipLibCheck": true,
      "noEmit": true //表示当发生错误的时候，编译器不会生成JavaScript代码
    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"], // 要编译的ts目标源
    "references": [{ "path": "./tsconfig.node.json" }]
  }

```

- 配置详情请查看[官网](https://www.tslang.cn/docs/handbook/compiler-options.html)，或者[tsconfig.json配置详解](https://blog.csdn.net/qq_40588413/article/details/104318265?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104318265-blog-115750351.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-104318265-blog-115750351.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=1)

- 为何要开启esModuleInterop 为 true 可查看该文章[tsconfig编译属性isolatedModules的作用](https://blog.csdn.net/weixin_40013817/article/details/127125777)

4. 在package.json 文件里命令加上tsc指令
``` json
    {
        "scripts": {
            "dev": "vite",
            // "build": "vite build",
            // "build": "tsc --noEmit && vite build",
            "build": "vue-tsc -- noEmit && tsc --noEmit && vite build ",
            "preview": "vite preview"
        },
    }
```

由于ts本身不会对vue文件起校验作用，所以对于vue文件，想要对.vue文件做ts校验， 需要使用vue-tsc来做这个事情。[vue-tsc](https://www.baidu.com/link?url=M_n6unqmlssiWHcLn2aKfUYd5qNpIibKF3xkbbHBwodeUN3fobRy42Mesp2SrpK9&wd=&eqid=a0e131af0000d6b3000000066409a185)

5. 安装vue-ts
``` md
    yarn add vue-ts -D
```

**alias 配置**: vite.config.js中defineConfig: resolve.alias

``` js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {// 映射设置
            '@styles': '/src/styles'
        }
    }
})
```

### 方案
#### 1. 原生css + CSS var() 函数
``` css
/* CSS var() 函数*/
:root {
    --main-bg-color: pink;
}

.root {
    /* color: pink; */
    color: var(--main-bg-color);
}
```

#### 2. css module
样式文件以 *.module.css* 结尾的文件，会被识别为css module

test.module.css 文件写入
``` css
.moduleClass {
    color: yellow;
}
```

App.jsx 文件使用
``` jsx
import { defineComponent } from 'vue';
// import './styles/index.css';

// 去vite.config.js 中resolve.alias配置@styles映射到/src/styles
import '@styles/index.css';

import classes from '@styles/test.module.css';

export default defineComponent({
    setup() {
        return () => {
            // return <div class="root">hello Vue3 Jsx</div>
            return <div class={`root ${classes.moduleClass}`}>hello Vue3 Jsx</div>
        }
    }
})
```

#### 3. 预编译less
装包：yarn add less    
引入：import 'url' 或者 @import (url)

#### 4. 预编译sass
装包：yarn add sass    
引入：import 'url' 或者 @import (url)