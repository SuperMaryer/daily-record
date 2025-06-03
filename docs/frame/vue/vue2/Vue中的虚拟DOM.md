# Vue中的虚拟DOM

## 什么是虚拟DOM
- 虚拟DOM就是用JS来描述一个真实的DOM节点, 对应Vue中的VNode类
- VNode类中包含了描述一个真实DOM节点所需要的一系列属性

``` js
// 源码位置：src/core/vdom/vnode.js

export default class VNode {
  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag                                /*当前节点的标签名*/
    this.data = data        /*当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息*/
    this.children = children  /*当前节点的子节点，是一个数组*/
    this.text = text     /*当前节点的文本*/
    this.elm = elm       /*当前虚拟节点对应的真实dom节点*/
    this.ns = undefined            /*当前节点的名字空间*/
    this.context = context          /*当前组件节点对应的Vue实例*/
    this.fnContext = undefined       /*函数式组件对应的Vue实例*/
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key           /*节点的key属性，被当作节点的标志，用以优化*/
    this.componentOptions = componentOptions   /*组件的option选项*/
    this.componentInstance = undefined       /*当前节点对应的组件的实例*/
    this.parent = undefined           /*当前节点的父节点*/
    this.raw = false         /*简而言之就是是否为原生HTML或只是普通文本，innerHTML的时候为true，textContent的时候为false*/
    this.isStatic = false         /*静态节点标志*/
    this.isRootInsert = true      /*是否作为根节点插入*/
    this.isComment = false             /*是否为注释节点*/
    this.isCloned = false           /*是否为克隆节点*/
    this.isOnce = false                /*是否有v-once指令*/
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

  get child (): Component | void {
    return this.componentInstance
  }
}
```

## VNode的类型
- 注释节点
- 文本节点
- 元素节点
- 组件节点
- 函数式组件节点
- 克隆节点

### 注释节点
``` js
// 创建注释节点
export const createEmptyVNode = (text: string = '') => {
  const node = new VNode()
  node.text = text
  node.isComment = true
  return node
}
```
描述一个注释节点只需两个属性，分别是：text和isComment。其中text属性表示具体的注释信息，isComment是一个标志，用来标识一个节点是否是注释节点。

### 文本节点
``` js
// 创建文本节点
export function createTextVNode (val: string | number) {
  return new VNode(undefined, undefined, undefined, String(val))
}
```
描述一个文本节点只需一个属性：text属性，用来表示具体的文本信息


### 元素节点
元素节点更贴近于我们通常看到的真实DOM节点，它有描述节点标签名词的tag属性，描述节点属性如class、attributes等的data属性，有描述包含的子节点信息的children属性等

源码中没有像前三种节点一样直接写死（当然也不可能写死），那就举个简单例子说明一下
``` js
// 真实DOM节点
<div id='a'><span>难凉热血</span></div>

// VNode节点
{
  tag:'div',
  data:{},
  children:[
    {
      tag:'span',
      text:'难凉热血'
    }
  ]
}
```


### 组件节点
组件节点除了有元素节点具有的属性之外，它还有两个特有的属性

- componentOptions :组件的option选项，如组件的props等
- componentInstance :当前组件节点对应的Vue实例


### 函数式组件节点

函数式组件节点相较于组件节点，它又有两个特有的属性：

- fnContext: 函数式组件对应的Vue实例
- fnOptions: 组件的option选项

### 克隆节点
克隆节点就是把一个已经存在的节点复制一份出来，在原来节点的基础上加上isCloned为true。
它主要是为了做模板编译优化时使用

``` js
// 创建克隆节点
export function cloneVNode (vnode: VNode): VNode {
  const cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}
```

以上就是VNode可以描述的多种节点类型，它们本质上都是VNode类的实例，只是在实例化的时候传入的属性参数不同而已

## VNode的作用------以JS的计算性能来换取操作真实DOM所消耗的性能

- 在视图渲染之前，把写好的template模板先编译成VNode并缓存下来，
- 等到数据发生变化页面需要重新渲染的时候，我们把数据发生变化后生成的VNode与前一次缓存下来的VNode进行对比，找出差异，
- 然后有差异的VNode对应的真实DOM节点就是需要重新渲染的节点，
- 最后根据有差异的VNode创建出真实的DOM节点再插入到视图中，
- 最终完成一次视图更新