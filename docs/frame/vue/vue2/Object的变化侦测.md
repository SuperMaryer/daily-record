# vue2源码分析——Object的变化侦测

## 前言
Vue最大的特点之一就是数据驱动视图
UI = render(state)

- state: 状态，输入
- UI: 页面，输出
- render: vue实现，数据驱动视图

## 数据变化侦测--------Observer
JS提供了Object.defineProperty方法，通过该方法我们就可以轻松的知道数据在什么时候发生变化

::: details
``` js
let ffhou = {}
let age = 18

Object.defineProperty(ffhou, 'age', {
    enumerable: true,
    configurable: true,
    get() {
        console.log('age属性被读取了')
    }
})
```
:::
通过 Object.defineProperty 给 ffhou 对象添加属性 age, 并把这个属性的读取使用 get 和 set 方法拦截，当对该属性进行读或写操作时就会触发 get 和 set


完善：
把对象的所有属性都变得可观测
=> Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象

::: details
``` js
// 源码位置：src/core/observer/index.js
export class Observer {
    constructor(value) {
        this.value = value
        // 给value新增一个__ob__属性，值为该value的Observer实例
        // 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作
        def(value, '__ob_', this)

        if (Array.isArray(value)) {
            // value 为array 处理逻辑
        } else {
            this.walk(value)
        }
    }
    
    walk(object: Object) {
        const keys = Object.keys(object)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
    
    /**
     * 使一个对象转化成可观测对象
     * @param { Object } obj 对象
     * @param { String } key 对象的key
     * @param { Any } val 对象的某个key的值
     */
    defineReactive(obj, key, val) {
        // 如果只传了obj和key，那么val = obj[key]
        if (arguments.length === 2) {
            val = obj[key]
        }

        // 递归转化
        if(typeof val === 'object'){
            new Observer(val)
        }

        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get(){
                console.log(`${key}属性被读取了`);
                return val;
            },
            set(newVal){
                if(val === newVal){
                    return
                }
                console.log(`${key}属性被修改了`);
                val = newVal;
            }
        })
    }
}
```
:::

``` js
let ffhou = new Observer({
    age: 18,
    type: 1
})
// 对象ffhou的属性都变得可观测了
```

## 依赖收集
- 给每个数据都建一个依赖数组-------依赖管理器Def
- 谁用到了这个数据，那么当这个数据变化时就通知谁-------get set中处理
- 谁就可以去更新

=> 在 getter 中收集依赖，在 setter 中通知依赖更新


1. 首先实现一个依赖管理器
``` js
// 源码位置：src/core/observer/dep.js
export class Def {
    constructor() {
        this.subs = []
    }
    addSub (sub) {
        this.subs.push(sub)
    }
    // 删除一个依赖
    removeSub (sub) {
        remove(this.subs, sub)
    }
    // 添加一个依赖
    depend () {
        if (window.target) {
            this.addSub(window.target)
        }
    }
    // 通知所有依赖更新
    notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

/**
 * Remove an item from an array
 */
export function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
```

2. 有了依赖管理器后，就可以在getter中收集依赖，在setter中通知依赖更新了，代码如下：

``` js
function defineReactive (obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key];
    }
    if(typeof val === 'object'){
        new Observer(val);
    }

    // 实例化一个依赖管理器，生成一个依赖管理数组dep
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            dep.depend()    // 在getter中收集依赖
            return val;
        },
        set(newVal) {
            if(val === newVal) return;
            val = newVal;
            dep.notify();   // 在setter中通知依赖更新
        }
    })

}
```
getter中调用了dep.depend()方法收集依赖，在setter中调用dep.notify()方法通知所有依赖更新。

3. 依赖 watcher
- 谁用到了数据，谁就是依赖，我们就为谁创建一个Watcher实例
- 在之后数据变化时，我们不直接去通知依赖更新，而是通知依赖对应的Watch实例
- 由Watcher实例去通知真正的视图
``` js
    export class Watcher {
        /**
         * vm: Vue 实例，表示当前的组件实例
         * expOrFn：一个字符串或函数，用于指定要观察的数据路径
         * cb：当数据变化时调用的回调函数
         */
        constructor(vm, expOrFn, cb) {
            this.vm = vm; // 保存 Vue 实例
            this.cb = cb; // 保存回调函数，用于数据变化时的通知
            this.getter = parsePath(expOrFn); // 解析表达式或函数，生成获取数据的函数
            this.value = this.get(); // 获取初始值
        }
        // 获取被观察的数据值
        get () {
            window.target = this; // 将当前的 Watcher 实例设置为全局目标，以便在 getter 中收集依赖
            // 调用 getter 函数，传入 Vue 实例，获取当前值   会通过dep.depend()存入依赖数组
            let value = this.getter.call(vm, vm); 
            window.target = undefined; // 清除 window.target，以避免后续的依赖收集错误
            return value;
        }
        // 在数据变化时调用，触发setter, setter中调用了dep.notify()方法
        // dep.notify()方法中 会遍历所有依赖(即watcher实例)，执行依赖的update()方法
        // 也就是Watcher 的update方法

        // 用于更新 Watcher 的值并执行回调
        update () {
            const oldValue = this.value // 保存当前的值，以便在回调中使用
            this.value = this.get() // 更新当前值
            this.cb.call(this.vm, this.value, oldValue)
        }
    }

    /**
     * Parse simple path.
     * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
     * 例如：
     * data = {a:{b:{c:2}}}
     * parsePath('a.b.c')(data)  // 2
     */
    const bailRE = /[^\w.$]/;
    export function parsePath (path) {
        if (bailRE.test(path)) {
            return;
        }
        const segments = path.split('.');
        return function (obj) {
            for (let i = 0; i < segments.length; i++) {
                if (!obj) return;
                obj = obj[segments[i]];
            }
            return obj;
        }
    }
```

总结： Watcher先把自己设置到全局唯一的指定位置（window.target），然后读取数据。因为读取了数据，所以会触发这个数据的getter。接着，在getter中就会从全局唯一的那个位置读取当前正在读取数据的Watcher，并把这个watcher收集到Dep中去。收集好之后，当数据发生变化时，会向Dep中的每个Watcher发送通知。通过这样的方式，Watcher可以主动去订阅任意一个数据的变化。


流程：
其整个流程大致如下：


- Data通过observer转换成了getter/setter的形式来追踪变化。
- 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
- 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
- Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。


