# Vue中的DOM-diff

## DOM-diff
VNode最大的用途就是在数据变化前后生成真实DOM对应的虚拟DOM节点，然后就可以对比新旧两份VNode，找出差异所在，然后更新有差异的DOM节点，最终达到以最少操作真实DOM更新视图的目的。

对比新旧两份VNode并找出差异的过程就是所谓的DOM-Diff过程
DOM-Diff算法是整个虚拟DOM的核心所在

## patch过程做了什么
以新的VNode为基准，改造旧的oldVNode使之成为跟新的VNode一样

- 创建节点：newVNode有、旧的oldVNode中没有，就在旧的oldVNode中创建。
- 删除节点：newVNode没有、旧的oldVNode中有，就从旧的oldVNode中删除。
- 更新节点：newVNode和旧的oldVNode中都有，就以新的VNode为准，更新旧的oldVNode。

### 创建节点
VNode类可以描述6种类型的节点，而实际上只有3种类型的节点能够被创建并插入到DOM中，它们分别是：元素节点、文本节点、注释节点。

``` js
// 源码位置: /src/core/vdom/patch.js
function createElm (vnode, parentElm, refElm) {
    const data = vnode.data
    const children = vnode.children
    const tag = vnode.tag
    if (isDef(tag)) {
      	vnode.elm = nodeOps.createElement(tag, vnode)   // 创建元素节点
        createChildren(vnode, children, insertedVnodeQueue) // 创建元素节点的子节点
        insert(parentElm, vnode.elm, refElm)       // 插入到DOM中
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text)  // 创建注释节点
      insert(parentElm, vnode.elm, refElm)           // 插入到DOM中
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)  // 创建文本节点
      insert(parentElm, vnode.elm, refElm)           // 插入到DOM中
    }
  }

```
- 判断是否为元素节点：判断该VNode节点是否有tag标签
    如果有tag属性即认为是元素节点，则调用createElement方法创建元素节点，通常元素节点还会有子节点，那就递归遍历创建所有子节点，将所有子节点创建好之后insert插入到当前元素节点里面，最后把当前元素节点插入到DOM中。

- 判断是否为注释节点：只需判断VNode的isComment属性是否为true
    若为true则为注释节点，则调用createComment方法创建注释节点，再插入到DOM中。

- 如果既不是元素节点，也不是注释节点，那就认为是文本节点，则调用createTextNode方法创建文本节点，再插入到DOM中。

<img :src="$withBase('/assets/frame/vue2/dom-diff-create.png')" alt="dom-diff-update" width="700">

### 删除节点
在要删除节点的父元素上调用removeChild方法即可

```js
function removeNode (el) {
    const parent = nodeOps.parentNode(el)  // 获取父节点
    if (isDef(parent)) {
        nodeOps.removeChild(parent, el)  // 调用父节点的removeChild方法
    }
}
```

### 更新节点
需要细致比较一下，找出不一样的地方进行更新。

1. VNode 和 oldVNode 均为`静态节点`
静态节点无论数据发生任何变化都与它无关 => 都为静态节点的话则直接跳过，无需处理。

``` html
<!-- 静态节点：节点里只包含纯文字，没有任何变量，数据发生任何变化都与它无关 -->
<p>我是不会变化的文字</p>
```

2. VNode 是`文本节点`
VNode是文本节点, 即表示这个节点内只包含纯文本
=> 只需看oldVNode是否也是文本节点

- 是: 比较两个文本是否不同 => 不同则把 oldVNode 里的文本改成跟 VNode 的文本一样
- 不是: 不论 oldVNode 是什么，直接调用 setTextNode 方法把它改成文本节点，并且文本内容跟VNode相同。

3. VNode 是`元素节点`

分以下两种情况：
- 新节点包含子节点 => 旧的节点是否包含子节点
    + 包含: 递归对比更新子节点
    + 不包含：旧节点有可能是空节点或者是文本节点
      - 空节点：把新的节点里的子节点创建一份然后插入到旧的节点里面
      - 文本节点：把文本清空，然后把新的节点里的子节点创建一份然后插入到旧的节点里面
- 新节点不包含子节点 => 同时它又不是文本节点，说明该节点是个空节点 => 不管旧节点之前里面都有啥，直接清空即可


``` js
// 更新节点
function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
  // vnode与oldVnode是否完全一样？若是，退出程序
  if (oldVnode === vnode) {
    return
  }
  const elm = vnode.elm = oldVnode.elm

  // vnode与oldVnode是否都是静态节点？若是，退出程序
  if (isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    return
  }

  const oldCh = oldVnode.children
  const ch = vnode.children
  // vnode有text属性？若没有：
  if (isUndef(vnode.text)) {
    // vnode的子节点与oldVnode的子节点是否都存在？
    if (isDef(oldCh) && isDef(ch)) {
      // 若都存在，判断子节点是否相同，不同则更新子节点
      if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
    }
    // 若只有vnode的子节点存在
    else if (isDef(ch)) {
      /**
       * 判断oldVnode是否有文本？
       * 若没有，则把vnode的子节点添加到真实DOM中
       * 若有，则清空Dom中的文本，再把vnode的子节点添加到真实DOM中
       */
      if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
    }
    // 若只有oldnode的子节点存在
    else if (isDef(oldCh)) {
      // 清空DOM中的子节点
      removeVnodes(elm, oldCh, 0, oldCh.length - 1)
    }
    // 若vnode和oldnode都没有子节点，但是oldnode中有文本
    else if (isDef(oldVnode.text)) {
      // 清空oldnode文本
      nodeOps.setTextContent(elm, '')
    }
    // 上面两个判断一句话概括就是，如果vnode中既没有text，也没有子节点，那么对应的oldnode中有什么就清空什么
  }
  // 若有，vnode的text属性与oldVnode的text属性是否相同？
  else if (oldVnode.text !== vnode.text) {
    // 若不相同：则用vnode的text替换真实DOM的文本
    nodeOps.setTextContent(elm, vnode.text)
  }
}
```

<img :src="$withBase('/assets/frame/vue2/dom-diff-update.png')" alt="dom-diff-update" width="700">



### 更新子节点

新VNode 与 旧oldVNode 都是`元素节点`并且`都包含子节点`时，那么这两个节点的VNode实例上的`children`属性就是所包含的`子节点数组`。

把newChildren里面的元素与oldChildren里的元素一一进行对比, 看有没有与之相同的子节点

Vue在更新子节点时是外层循环newChildren数组，内层循环oldChildren数组，把newChildren数组里的每一个元素分别与oldChildren数组里的每一个元素匹配，根据不同情况作出创建子节点、删除子节点、更新子节点以及移动子节点的操作。

``` js
for (let i = 0; i < newChildren.length; i++) {
  const newChild = newChildren[i];
  for (let j = 0; j < oldChildren.length; j++) {
    const oldChild = oldChildren[j];
    if (newChild === oldChild) {
      // ...
    }
  }
}
```

以上这个过程将会存在以下四种情况：

#### 1. 创建子节点
如果 newChildren 里某个子节点 在oldChildren里找不到与之相同的子节点
=> 之前没有 => 创建 => 插入到DOM中所有未处理节点之前

tips: 合适的位置是所有`未处理节点之前`，而并非`所有已处理节点之后`

#### 2. 删除子节点
newChildren 里每一个子节点都循环完毕后，oldChildren 还有未处理的子节点
=> 多余废弃的 => 删除

#### 3. 移动子节点
newChildren 里某个子节点在 oldChildren 里找到了与之相同的子节点，但是所处的位置不同
=> 调整该子节点的位置
=> 以 newChildren 里子节点的位置为基准，调整 oldChildren 里该节点的位置，使之与在newChildren里的位置相同。

tips: 所有未处理节点之前就是我们要移动的目的位置

#### 4. 更新节点
newChildren 里某个子节点在 oldChildren 里找到了与之相同的子节点，并且所处的位置也相同
=> 更新oldChildren里该节点，使之与newChildren里的该节点相同。

``` js
// 源码位置： /src/core/vdom/patch.js
if (isUndef(idxInOld)) {    // 如果在oldChildren里找不到当前循环的newChildren里的子节点
    // 新增节点并插入到合适位置
    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
} else {
    // 如果在oldChildren里找到了当前循环的newChildren里的子节点
    vnodeToMove = oldCh[idxInOld]
    // 如果两个节点相同
    if (sameVnode(vnodeToMove, newStartVnode)) {
        // 调用patchVnode更新节点
        patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
        oldCh[idxInOld] = undefined
        // canmove表示是否需要移动节点，如果为true表示需要移动，则移动节点，如果为false则不用移动
        canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
    }
}
```

### 优化更新子节点
假如我们现有一份新的newChildren数组和旧的oldChildren数组，如下所示：

``` js
newChildren = ['新子节点1','新子节点2','新子节点3','新子节点4']
oldChildren = ['旧子节点1','旧子节点2','旧子节点3','旧子节点4']
```

for in 遍历的策略，极端一点，如果newChildren数组和oldChildren数组里前三个节点都没有变化，只是第四个节点发生了变化，那么我们就会循环16次。

当子节点数量很多的时候，算法的时间复杂度就会非常高，很不利于性能提升。

<img :src="$withBase('/assets/frame/vue2/dom-diff-update1.png')" alt="更新子节点" width="700">

- 新前：`newChildren`数组里的所有未处理子节点的`第一个子节点`称为；
- 新后：`newChildren`数组里的所有未处理子节点的`最后一个子节点`称为；
- 旧前：`oldChildren`数组里的所有未处理子节点的`第一个子节点`称为；
- 旧后：`oldChildren`数组里的所有未处理子节点的`最后一个子节点`称为；

=> 不要按顺序去循环newChildren和oldChildren这两个数组，可以先比较这两个数组里特殊位置的子节点
1. `新前` 和 `旧前` 做比对
- 相同: 进入更新节点的操作
- 不同: => 2
2. `新后` 和 `旧后` 做比对
- 相同: 进入更新节点的操作
- 不同: => 3
3. `新后` 和 `旧前` 做比对
- 相同: 进入更新节点的操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置
- 不同: => 4
4. `新前` 和 `旧后` 做比对
- 相同: 进入更新节点的操作，更新完后再将oldChildren数组里的该节点移动到与newChildren数组里节点相同的位置
- 不同: => 5
5. 按照之前`循环`的方式来查找节点。

<img :src="$withBase('/assets/frame/vue2/dom-diff-update2.png')" alt="更新子节点" width="700">
