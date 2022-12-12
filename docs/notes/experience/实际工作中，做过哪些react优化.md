
# 实际工作中，做过哪些react优化

### 修改 CSS 模拟 v-show
``` js
// 模拟v-show 1
{!flag && <myComponent style={{display: 'none'}} />}
{flag && <myComponent />}

// 模拟v-show 2
{<myComponent style={{display: flag?'block':'none'}} />}
```

### 循环使用 key
``` js
// key 不用 index
const todoItems = todoList.map((todo) => 
    <li key={todo.id}>{todo.text}</li>
)
```

### JSX 中不要定义函数
``` js
// bad
<button onClick={()=>{/* ... */}}>点击</button>

// good
class MyComponent extends React.Component {
    clickHandler = () => {/* */}
    render() {
        return <>
            <button onClick={this.clickHandler}>点击</button>
        </>
    }
}
```

### 使用 Fragment 减少层级
``` js
render() {
    return <>
        <p>hello</p>
        <p>world</p>
    </>
}
```
### 在构造函数中bind this
``` js
class MyComponent extends React.Component {
    constructor() {
        // 要在构造函数中 bind this，而不是在 JSX 中
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        // 如果 JSX 中直接调用，则 this 不是当前组件。所以要bind this
        // ...
    }
    clickHandler1 = () => {
        // 使用箭头函数，不用bind this, this指向当前组件
        // ...
    }
    render() {
        return <>
            <button onClick={this.clickHandler}>点击</button>
        </>
    }
}
```

### 使用 shouldComponentUpdate
- 使用 shouldComponentUpdate 判断组件是否要更新
- 或者使用 React.PureComponent
- 函数组件使用 React.memo
