
# event-bus

### 介绍
`EventBus`又称为`事件总线`

- 事件总线也是一种通信方式
- 它不局限于父传子或兄弟组件之间通信
- 可以跨组件通信，通过事件总线传递的值，不管哪个组件都可以获取到

`注意`   
EventBus虽然使用起来方便，但如果使用不当，会出现难以维护的情况   
所以有了更完善的Vuex，用作状态管理中心，将通知的概念上升到共享状态层次   


事件总线属于一种`观察者模式`，包括`三种角色`

- 发布者（Publisher）: 发布事件
- 订阅者（Subscriber）:订阅事件，会进行响应
- 事件总线（EventBus）: 发布者和订阅者通过事件总线作为中台联系


### 实现

#### 分析
- on/once：注册函数，存储起来
- emit：找到对应的函数，执行
- off：找到对应的函数，删除

#### 划重点
- 区分 on 和 once
- 合理的数据结构，比算法优化更有效

#### 实现一：on 和 once 分开
``` js
/**
 * events: {key1: [f1, f2], key2: [f3, f4] ...}
 * onceEvents {key1: [f1, f2], key2: [f3, f4] ...}
*/
class EventBus {
    construct() {
        this.events = {};
        this.onceEvents = {};
    }

    on(type, fn) {
        const events = this.events;
        if (!events[type]) {
            events[type] = [];
        }
        events[type].push(fn);
    }

    once(type, fn) {
        const onceEvents = this.onceEvents;
        if (!onceEvents[type]) {
            onceEvents[type] = [];
        }
        onceEvents.push(fn);
    }

    off(type, fn) {
        // 解绑所有type对应fn
        if (!fn) {
            this.events[type] = [];
            this.onceEvents[type] = [];
        } else {
            const fnList = this.events[type];
            const onceFnList = this.onceEvents[type];

            if (fnList) {
                this.events[type] = fnList.filter(f => f !== fn);
            }
            if (onceFnList) {
                this.onceEvents[type] = onceFnList.filter(f => f !== fn);
            }
        }
    }

    emit(type, ...args) {
        const fnList = this.events[type];
        const onceFnList = this.onceEvents[type];

        if (fnList) {
            fnList.forEach(f => f(...args));
        }
        if (onceFnList) {
            onceFnList.filter(f => f(...args));
        }
    }
}
```


#### 实现一：on 和 once 合并
``` js
/**
 * events: {
 *    key1: [{fn: f1, isOnce: true}, fn: {fn: f2, isOnce: false}],
 *    key2: [{fn: f3, isOnce: true}, fn: {fn: f4, isOnce: false}],
 *    ...
 * }
*/
class EventBus {
    constructor() {
        this.events = {};
    }

    on(type, fn, isOnce) {
        const events = this.events[type];
        if (!events) events[type] = [];
        events.push({ fn, isOnce });
    }

    once(type, fn) {
        this.on(type, fn, true);
    }

    off(type, fn) {
        if (!fn) {
            this.events[type] = [];
        } else {
            const fnList = this.events[type];
            if (fnList) {
                this.events[type] = fnList.filter(f => f !== fn);
            }
        }
    }

    emit(type, ...args) {
        const fnList = this.events[type];

        if (fnList) {
            // once 类型，执行一次就要解绑
            this.events[type] = fnList.filter(f => {
                const {fn, isOnce} = f;
                fn(...args);
                return !isOnce;
            })
        } 
    }
}
```


### 使用

#### vue2
Vue2默认有事件总线的功能，因为vue实例自带了$on $once $off $emit方法

1. 在main.js中注册
```js
// 创建一个总线，挂载到实例中，全局可用
Vue.prototype.$bus = new Vue();
```

2. 组件A中触发事件
```vue
<template>
    <h3>组件A</h3>
    <button @click="btnClick">触发事件</button>
    <button @click="onceBtnClick">触发Once事件</button>
</template>
<script> 
export default {
    methods: {
        btnClick() {
            this.$bus.$emit('test', '组件A点击了Button');
        },
        onceBtnClick() {
            this.$bus.$emit('testOnce', '组件A点击了once Button');
        }
    }
};
</script> 
```

3. 组件B中监听事件
```vue
<template>
    <h3>组件B</h3>
</template>
<script> 
export default {
    mounted() {
        this.$bus.$on('test', testHandler);
        this.$bus.$once('testOnce', testOnceHandler);
    },
    methods: {
        testHandler(data) {
            console.log(data); // 组件A点击了Button
        },
        testOnceHandler(data) {
            console.log(data); // 组件A点击了once Button
        }
    },
    // 组件销毁前，移除事件
    beforeDestroy() {
        this.$bus.$off('test', testHandler);
        this.$bus.$off('testOnce', testOnceHandler);
    }
};
</script> 
```

#### vue3中
vue3 推荐使用第三方库实现，eg: mitt

- on: 添加事件
- off: 移除事件 
- clear: 清空所有事件


1. 装包
``` 
npm install mitt
```

2. 封装

先新建eventBus.js文件

``` js
// 引入
import mitt from 'mitt';
// 创建
const emitter = mitt();
// 导出
export default emitter;
```

这里也可以不用插件，直接把源码拷贝出来，替换 import mitt form 'mitt', 如下

::: detail 点击查看代码
``` js
function mitt (n) {
    return {
        all: n = n || new Map,
        on: function (e, t) {
            var i = n.get(e);
            i ? i.push(t) : n.set(e, [t])
        },
        off: function (e, t) {
            var i = n.get(e);
            i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []))
        },
        emit: function (e, t) {
            var i = n.get(e);
            i && i.slice().map(function (n) {
                n(t)
            }), (i = n.get("*")) && i.slice().map(function (n) {
                n(e, t)
            })
        }
    }
};

const emitter = new mitt();
export default emitter;
```


3. 触发事件
``` vue
<template>
    <h3>组件A</h3>
    <button @click="btnClick">触发事件</button>
</template>
<script> 
// 导入封装的js
import emitter from '../global/eventBus';
export default {
    name: 'compA',
    methods: {
        btnClick() {
            emitter.emit('test', '组件A点击了Button');
        }
    }
};
</script> 
```
:::

4. 组件B中监听事件
```vue
<template>
    <h3>组件B</h3>
</template>
<script> 
// 导入封装的js
import emitter from '../global/eventBus';
export default {
    name: 'compB',
    mounted() {
        emitter.on('test', testHandler);

        // * 表示监听所有事件；type: 事件名  info: 数据
        // 如果有两个事件，会执行两次，不会有冲突
        // emitter.on('*', (type, info) => {
        //     console.log('* listener', type, info);
        // })
    },
    methods: {
        testHandler(data) {
            console.log(data); // 组件A点击了Button
        }
    },
    // 组件销毁前，移除事件
    unMounted() {
        // 移除某个
        mitter.off('test', testHandler);

        // 清除所有
        emitter.all.clear();
    }
};
</script> 
```