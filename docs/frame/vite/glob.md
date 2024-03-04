# Glob 导入

### glob
Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块

``` js
const modules = import.meta.glob('./dir/*.js')


// 将会被转译为下面的样子：
// vite 生成的代码
// const modules = {
//   './dir/foo.js': () => import('./dir/foo.js'),
//   './dir/bar.js': () => import('./dir/bar.js'),
// }


// 可以遍历 modules 对象的 key 值来访问相应的模块
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}

/**
 * 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。
 * 如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），
 * 可以传入 { eager: true } 作为第二个参数
*/

const modules = import.meta.glob('./dir/*.js', { eager: true })

// 将会被转译为下面的样子：
// vite 生成的代码
import * as __glob__0_0 from './dir/foo.js'
import * as __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
}

```

更多使用查看[vite文档](https://cn.vitejs.dev/guide/features.html#glob-import)
