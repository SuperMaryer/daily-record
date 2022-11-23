
# 虚拟DOM(vdom)

### vDOM
virtual DOM,虚拟dom  用js对象模拟DOM节点数据  react最先推广使用

- vdom 并不快，JS 直接操作 DOM 才是最快的
- 但 数据驱动视图 要有合适的技术方案，不能全部 DOM 重建
- vdom 就是目前最合适的技术方案，并不是因为它快，而是适合

### 过程
- data 变化
- diff 算法 比较 vnode  oldVnode (vdom)
- 更新 DOM
