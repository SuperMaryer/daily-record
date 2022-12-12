
# 实际工作中，做过哪些vue优化

### 积累的业务上的优化
- v-if 和 v-show
- v-for 使用key
- computed 缓存数据
- keep-alive 缓存组件
- 异步组件 路由懒加载
- SSR

### v-if 和 v-show
- v-if 彻底销毁创建组件
- v-show 使用 css 隐藏显示组件 （display: none/block）
- 大部分情况下使用 v-if 更好，不要过度优化

### v-for 使用 key
- key 的作用：高效的更新虚拟DOM
- 使用v-for，更新已渲染的元素列表时，默认用就地复用策略
- 列表数据修改的时候，会根据key值判断某个值是否修改
- 修改则重新渲染这一项，否则复用之前的元素

所以我们需要使用key来给每个节点做一个唯一标识，更新时Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点

::: details 点击查看
``` vue
<template>
    <div v-for="(item, index) in list" :key="item.id">{{item.name}}</div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {id: 1, name: 'name1'},
                {id: 2, name: 'name2'},
                {id: 3, name: 'name3'},
                {id: 4, name: 'name4'},
                {id: 5, name: 'name5'},
            ]
        }
    }
}
</script>
```
:::
#### 不建议用index作为v-for的key
使用index作为key，diff比较时，插入数据index发生变化，会被认为dom发生了变化，执行更新过程，造成不必要的性能开销。

dom更新很消耗浏览器性能，特别是如果for里面dom比较复杂，多层嵌套的情况下，对性能的开销还是不容小觑的。

### 使用 computed 缓存
- 参考: <a :href="$withBase('/notes/basic/computed和watch')">computed和watch</a>

::: details 点击查看
``` vue
<script>
export default {
    data() {
        return {
            newsList: [...] // 新闻列表
        }
    },
    compted: {
        // 未读新闻数量
        unreadCount() {
            return this.msgList.filter(x => !x.read).length;
        }
    }
}
</script>
```
:::

### keep-alive 缓存组件
- 频繁切换的组件，eg: tabs
- 不要乱用，缓存太多会占内存，且不好 debug 

### 异步组件
使用 Vue3 的 DefileAsyncComponent功能可让我们懒加载组件，说白了就是创建一个只有在需要时才会加载的异步组件。

- 针对体积较大的组件，eg：编辑器、复杂表格、复杂表单等
- 拆包，需要时异步加载，不需要是不加载
- 减少主包的体积，首页加载更快
- 用法参考：[Vue defineAsyncComponent Api](https://juejin.cn/post/6987909222646153246)>

::: details 点击查看
``` vue
<template>
    <Child></Child>
</template>

<script>
import { definedAsyncComponent } from 'vue';

export default {
    name: 'AsyncComponent',
    components: {
        Child: definedAsyncComponent(() => import(/* webpackChunkName: "async-child" */ './Child.vue))
    }
}
</script>
```
控制台效果：

<img :src="$withBase('/assets/notes-images/experience/async-component.png')" alt="async-component" width="600">
:::

### 路由懒加载
路由懒加载: 延迟加载或按需加载，即在需要的时候的时候进行加载

使用路由懒加载可以给客户更好的客户体验，首屏组件加载速度更快一些，解决白屏问题。

路由和组件常用两种懒加载方式：
- vue异步组件实现路由懒加载: `component：resolve=>(['需要加载的路由的地址'，resolve])`
- ES提出的import(推荐使用这种方式): `const HelloWorld = （）=>import('需要加载的模块地址')`

::: details 点击查看
1. vue异步组件实现路由懒加载: `component：resolve=>(['需要加载的路由的地址'，resolve])`

``` js
import Vue from 'vue'
import VueRouter from 'vue-router'
/* 此处省去之前导入的Home About模块 */
Vue.use(VueRouter)

const routerConfig = [
    {
      path: '/',
      name: 'Home',
      component: resolve=>(require(["@/components/Home"], resolve))
    },
    {
      path: '/',
      name: 'About',
      component: resolve=>(require(["@/components/About"], resolve))
    },
]

export default new VueRouter({
  routes: routerConfig
})
```

2. ES提出的import(推荐使用这种方式): `const HelloWorld = （）=>import('需要加载的模块地址')`

``` js
import Vue from 'vue'
import VueRouter from 'vue-router'
/* 此处省去之前导入的Home About模块 */
Vue.use(VueRouter)

const routerConfig = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "login" */'@/components/Home')
    },
    {
      path: '/',
      name: 'About',
      component: () => import(/* webpackChunkName: "login" */'@/components/About')
    },
]

export default new VueRouter({
  routes: routerConfig
})

```
:::

### SSR 服务端渲染
- 可使用 Nuxt.js 
- 按需优化，使用 SSR 的成本比较高
