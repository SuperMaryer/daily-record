
# promise.then 代码题

### 让人失眠的promise.then代码题
``` js
Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
}).then((res) => {
    console.log(res); // 4
})


Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
})


// 0 1 2 3 4 5 6
```

### 分析
#### 几个概念
- 单线程，同步和异步
- 事件循环 event loop
- 宏任务和微任务

#### then 交替执行
- 如果有多个 fulfilled promise 实例，同时执行 then 链式调用
- then 会交替执行
- 这是编译器的优化，防止一个 promise 占据的时间太长

#### then 中返回 promise 实例
- 相当于多出一个 promise 实例
- 也会遵守 "交替执行"
- 但和直接声明一个 promise 实例，结果会有些差异

#### 交替执行慢两拍
- then 中返回 promise 实例，会出现 "慢两拍" 的效果
- 第一拍： promise 需要由 pedding 变为 fulfilled
- 第二拍： then 函数挂载到 MicroTaskQueue 



