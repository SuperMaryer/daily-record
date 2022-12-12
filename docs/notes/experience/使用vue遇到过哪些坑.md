
# 使用vue遇到过哪些坑

### 内存泄漏
- 全局变量，全局事件，全局定时器
- 自定义事件
- Vue2 响应式的缺陷，Vue3 不再出现，用了Proxy

### 路由切换时scroll到顶部
点击下一页返回时保持页面的滚动位置

- SPA 的通病， 不仅仅时 Vue
- eg：列表页、滚动到第二屏，点击进入详情页，再返回到列表页就scroll到顶部了，因为组件重新渲染了

路由切换时 scroll 到顶部的解决方案

- 在列表页缓存数据和scrollTop 的值
- 当再次返回列表页时，渲染组件，执行scrollTop()
- 终极方案：MPA + App WebView

其他方案
- keep-alive 包裹，缓存组件
- 使用history模式scrollBehavior

::: details 点击查看
1. keep-alive 包裹， 缓存组件
``` html
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

2. 使用history模式scrollBehavior
在路由文件router.js，此时模式为history。需要记录位置。

``` js
let routes = [
    {
        path: '/',
        name: 'home',
        component: home, 
        meta: {
            title: 'home',
            keepAlive: true
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop
            }
            return {x: 0, y: to.meta.savedPosition || 0}
        }
    }
})
```
:::

