# Vue组件写name选项有什么好处

### 递归组件
DOM 做递归组件时需调用自身 name，也就是一个组件要用自己的时候，可以通过自己的名字来使用自己

::: details 点击查看递归组件使用
```vue
<template>
 <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.label }}
        <!-- 当数据中有children属性时，说明是一个多级菜单，对组件本身进行循环递归 -->
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
      default: [],
    }
  }
}
</script>
<style lang="less" scoped>
  .item-children {
    margin-left: 20px;
  }
</style>
```
list 数据如下
``` js
list: [
        {
          label: "一级 1"
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1"
            },
            {
              label: "二级 2-2"
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                }
              ]
            }
          ]
        }
      ]
```

效果：

<img :src="$withBase('/assets/dairy-question/component-name.png')" alt="component-name" width="250">
:::


### 使用 keep-alive 时，可搭配组件 name 进行缓存过滤
`exclude="name"`：移除keep-alive状态下组件自动缓存功能

使用 keep-alive 后，第二次进入页面时不会触发`mounted()函数`，此时想要进行数据请求可以使用`activated()函数`，也可以利用这个`name属性增加一个过滤器`

::: details 点击查看
```js
export default {
  name:'Detail'
},
mounted(){
  this.getDetail();
},

// activated()(){
//   this.getDetail();
// },
methods:{
  getDetail(){
    axios.get('/xx/detail.json',{
      params:{
       id:this.$route.params.id
      }
    }).then(this.getDetailSuccess)
  },
  getDetailSuccess() {
      // ...
  }
}
```
``` vue
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>
```
:::


###  vue 开发者工具检查页面组件的时候可以直接定位组件名字
vue 开发者工具里显示的组见名称是由 Vue 中组件 name 决定的


<img :src="$withBase('/assets/dairy-question/component-name1.png')" alt="component-name" width="500">