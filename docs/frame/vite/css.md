### css 样式
#### 引入
- 可使用 import(url) 引入
- 可使用 @import url() 引入
- alias: 可配置alias, 方便引入


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