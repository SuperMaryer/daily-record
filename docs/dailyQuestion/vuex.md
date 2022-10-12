# Vuex

### 什么是Vuex?
`官方解释：`   
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

`通俗的讲：`   
Vuex就是专为Vue.js开发的状态管理工具，用于解决组件之间数据共享的需求。Vuex把组件共享状态抽取出来以一个全局单例模式管理，把共享的数据函数放进Vuex中，任何组件都可以进行使用。


### Vuex解决了什么问题？（Vuex应用场景）
`两类问题：`
- 多个组件共同依赖同一状态，组件间传值复杂：多层嵌套组件传值繁琐或者为兄弟组件状态传值不友好的情况
- 不同组件的行为共同作用于某一个状态：使用父子组件或者事件传递来变更和同步状态，不好维护的情况


### Vuex有哪些核心概念
`五个核心概念：`
- State：Vuex的单一状态树，用于存数据
- Getter：store的计算属性
- Mutation：同步更新数据的方法
- Action：异步更新数据的方法，Action=>Mutation，Mutation=>State
- Modules：模块化思想，项目特别复杂的时候，可以让每一个模块拥有自己的State、Mutation、Action、Getter，使得结构非常清晰，方便管理


### dispatch与commit区别
- dispatch：是跟Action一块用的，含有异步操作，例如向后台提交数据。写法：this.$store.dispatch('mutation的方法名'，获取值)
- commit：是跟Mutation一块用的，同步操作。写法：this.$store.commit('mutation的方法名'，获取值)

### 刷新页面vuex的数据会丢失吗？
刷新页面Vuex的数据会丢失属于正常现象。因为这符合浏览器的运行机制，JS的数据都是保存在浏览器的堆栈内存里，刷新浏览器页面，以前堆栈申请的内存会被释放，那么堆栈里的数据自然就清空了。

### Vuex页面刷新数据丢失问题的多种解决方法
1. 本地存储sessionStorage：
> - localStorage则会一直存在，cookie又太小，sessionStorage当浏览器关闭会话时结束，所以常用sessionStorage
> - 将接口返回的数据保存在sessionStorage里，同时也保存在Vuex的store里   
> - 由于Vuex中的变量是响应式的，而sessionStorage不是
> - 当改变Vuex中的状态时，组件会检测到改变，但sessionStorage就不会了，页面要重新刷新才可以看到改变
> - ==》要让Vuex中的状态从sessionStorage中得到，这样组件就可以响应式的变化

::: details 点击查看store对应js文件代码
``` js
// Vuex中的状态从sessionStorage中得到，这样组件就可以响应式的变化
const state = {
  userInfo: JSON.parse(sessionStorage.getItem("USER_INFO")) || {}
}

const getters = {
  userInfo: state => state.userInfo,
}

const mutations = {
// 改变状态值，只需更新sessionStorage的值
  SET_USER_INFO(state, data) {
    state.userInfo = data
    sessionStorage.setItem("USER_INFO", JSON.stringify(data))
  }
}

//actions 模块里无需使用 sessionStorage

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  //actions,
}
```
:::

2. 页面刷新时将vuex里的信息保存到sessionStorage里
::: details 点击查看App.vue文件代码
``` vue
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'App',
  created() {
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    if (sessionStorage.getItem('store') && this.$store.getters.token) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload', () => {
      // 清空互斥
      this.$store.dispatch('mutex/clear')
      if (sessionStorage.getItem('islogout')) {
        sessionStorage.removeItem('islogout')
        return
      }
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    const theme = window.clientConfig.theme
    if (theme) {
      this.$store.dispatch('updateTheme', theme)
    }
  }
}
</script>
```
:::

3. 插件: 类似的插件有vuex-persist、vuex-persistedstate，内部的实现就是通过订阅mutation变化做统一处理，通过插件的选项控制哪些变量需要持久化
