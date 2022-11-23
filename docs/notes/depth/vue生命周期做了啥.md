
# vue生命周期都做了啥

### vue生命周期

<img :src="$withBase('/assets/notes-images/depth/vue生命周期.png')" alt="vue生命周期" width="800">

### Ajax 应该在哪个生命周期？
- 有两个选择：created、mounted
- 推荐：mounted，created可能就比mounted快10ms，ajax执行可能要1000ms，意义不大

### Vue什么时候操作DOM比较合适？
- mounted 和 updated 都不能保证子组件全部挂载完成
- 使用 $nextTick 渲染 DOM

### Vue3 Composition API 生命周期有何区别？
- 用setup 代替了 beforeCreate 和 created

::: details 点击查看 Composition API setup 写法
``` js 
setup() {
    onMounted(()=> {
        console.log('mounted');
    })
    onUpdated(()=> {
        console.log('updated');
    })
}
```
:::