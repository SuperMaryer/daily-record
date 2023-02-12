
# react中setState  setState是微任务还是宏任务

### setState 本质是同步，既不属于微任务也不是宏任务
- setState 是同步， 只不过让 React 做成了异步的样子
- 因为考虑到性能，多次 State 修改，只进行一次 DOM 渲染
- 日常说的 "异步" 是不严谨的，但沟通成本低
- 在微任务 开始之前，state已经计算完了，只是多次修改只进行一次DOM渲染


