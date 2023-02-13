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


### 简述 Vuex 的数据传递流程
1. new Vuex.store()创建一个仓库state，存储公共的状态
2. this.$store.state 或者 getter 获取公共状态，进行页面渲染
3. 组件需要修改状态时，通过dispatch来派发动作修改状态，进行页面渲染
4. action会派发commit来触发mutation里面的方法
5. mutation里面的方法修改state里面的数据


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


### 为什么 Vuex 的 mutation 中不能做异步操作?
在 mutation 中混合异步调用会导致你的程序很难调试。
eg：当你调用了两个包含异步回调的 mutation 来改变状态，怎么知道什么时候回调和哪个先回调呢？   
=》所以我们要区分这两个概念
=》 在 Vuex 中，状态改变用同步方式实现（mutation）。异步操作都放在actions中。


- 区分 actions 和 mutations 并不是为了解决竞态问题，而是为了能用 devtools 追踪状态变化。
- 事实上在 vuex 里面 actions 只是一个架构性的概念，并不是必须的，说到底只是一个函数，你在里面想干嘛都可以，只要最后触发 mutation 就行。异步竞态怎么处理那是用户自己的事情。
- vuex 真正限制你的只有 mutation 必须是同步的这一点

同步的意义在于这样每一个 mutation 执行完成后都可以对应到一个新的状态，这样 devtools 就可以打个快照存下来。如果你开着 devtool 调用一个异步的 action，你可以清楚地看到它所调用的 mutation 是何时被记录下来的，并且可以立刻查看它们对应的状态。


简言之：
Vuex 中所有的状态更新的唯一途径都是 mutation，异步操作通过 Action 来提交 mutation 实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解应用每个 mutation 执行完成后都会对应到一个新的状态变更，这样 detools 就可以打个快照存下来，可以跟踪到状态修改。如果在 mutation 里异步修改，detools 就追踪不到，给调试带来困难


### Vuex 与 Localstorage 的区别
1. 存储位置: Vuex存在内存，localStorage 存在本地，读取内存比读取硬盘速度快
2. 存储数据类型：Vuex以对象形式存储各种类型数据，localStorage只能存储字符串，储存对象需要JSON的Stringify 和 parse 方法进行处理
3. 应用场景: 


  对比维度        | Vuex                         | localStorage                 | 备注
------------- | ---------------------------- | ---------------------------- | ---------
存储位置      | 内存                       | 本地                        |读取内存比读取硬盘速度快
存储数据类型  | 以对象形式存储各种类型数据  |只能存储字符串               |后者储存对象需要JSON的Stringify 和 parse 方法进行处理
应用场景     | vue状态管理、组件之间的传值 | 跨页面传递数据             |
响应式       | 响应式                      | 非响应式                   |
时效性       | 刷新页面时vuex存储的值会丢失 | 刷新页面不会丢失          |