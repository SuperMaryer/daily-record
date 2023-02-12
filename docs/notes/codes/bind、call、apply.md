
# bind、call、apply

### 思考：如何在函数执行时绑定this
``` js
const obj = {
    x: 1,
    fn() {
        console.log(this.x);
    }
}

// 可以借此来实现函数绑定 this
```

### call
#### 介绍
call(thisArg, ...args) 方法使用一个指定的 this 值和参数（单独给出的一个或多个）来调用一个函数。

- 改变this指向，执行函数
- 使用 thisArg 作为函数的this
- ...args（单独给出的一个或多个）作为参数

`语法`

``` js
fn.call(thisArg, arg1, arg2, ...)
```

`参数`
- thisArg：可选，在 fn 函数运行时使用的 this 值
- arg1, arg2, ...： 指定的参数列表

`返回值`
- 使用调用者提供的 this 值和参数，调用该函数的返回值 
- 若该方法没有返回值，则返回 undefined

`注意`
- this可能不是该方法看到的实际值
- 函数处于非严格模式下，thisArg传入 null 或 undefined 时，this会自动替换为全局对象

#### 实现call
精简版

``` js
Function.prototype.myCall = function(context, ...args) {
    context = context || window;
    context.myFn = this;
    return context[myFn](...args);
}
```

优化版
``` js
Function.prototype.customCall = function(context, ...args) {
    // 传null 或者 undefined 的时候，指向window
    if (!context) context = window;
    // 传数字、字符串、布尔等值类型时，指向对应的构造函数Number、String、Boolean等
    if (typeof context !== 'object') context = New Object(context);

    // 防止出现属性名称相同，覆盖掉原有属性
    const fnKey = Symbol();
    context[fnKey] = this;

    const res = context[fnKey](...args); // 通过Obj.fn() 的方式，绑定this并调用
    delete context[fnKey];// 清理，防止污染
    return res; // 返回结果
}
```

### apply
#### 介绍
apply(thisArg, argsArray): 该方法使用一个指定的 this 值和参数（以数组或类数组对象形式）来调用一个函数。

- 改变this指向，执行函数
- 使用 thisArg 作为函数的this
- argsArray（以数组或类数组对象形式）作为参数

`语法`

``` js
fn.apply(thisArg, argsArray)
```

`参数`
- thisArg：可选，在 fn 函数运行时使用的 this 值
- argsArray： 一个数组或者类数组对象，数组元素将作为单独的参数传给 fn 函数

如果argsArray的值为 null 或 undefined，则表示不需要传入任何参数

`返回值`
- 使用调用者提供的 this 值和参数，调用该函数的返回值 
- 若该方法没有返回值，则返回 undefined

`注意`
- 与call类似
- this可能不是该方法看到的实际值
- 函数处于非严格模式下，thisArg传入 null 或 undefined 时，this会自动替换为全局对象

#### call vs apply
两者几乎相同，区别在于：call 接受一个参数列表逐个传，而apply 接受一个参数数组。 

#### 实现apply
精简版

``` js
Function.prototype.myApply = function(context, args) {
    context = context || window;
    context.myFn = this;
    return context[myFn](...args);
}
```

优化版
``` js
Function.prototype.customApply = function(context, args) {
    // 传null 或者 undefined 的时候，指向window
    if (!context) context = window;
    // 传数字、字符串、布尔等值类型时，指向对应的构造函数Number、String、Boolean等
    if (typeof context !== 'object') context = New Object(context);

    // 防止出现属性名称相同，覆盖掉原有属性
    const fnKey = Symbol();
    context[fnKey] = this;

    const res = context[fnKey](...args); // 通过Obj.fn() 的方式，绑定this并调用
    delete context[fnKey];// 清理，防止污染
    return res; // 返回结果
}
```
### bind
#### 介绍
bind(thisArg, bindArgs) 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

- 创建一个新的函数
- 使用 thisArg 作为函数的this
- bindArgs作为函数的绑定参数
- 返回一个新函数
- 新函数执行需要调用

`语法`

``` js
fn.bind(thisArg, bindArgs)
```

`参数`
- thisArg：可选，在 fn 函数运行时使用的 this 值
- bindArgs：生成新函数时新绑定的参数

`返回值`
- 返回一个新函数

#### 实现bind
``` js
/**
 * 实现bind函数
 * @param context 绑定的this
 * @param bindArgs 绑定时，传入的参数
 * @return 一个新函数
*/
Function.prototype.myBind = function(context, ...bindArgs) {
    const self = this;
    return function(...args) {
        const curArgs = bindArgs.concat(args);
        return self.apply(context, curArgs);
    }
}

const fn = function (a, b, c) {
    console.log('a, b, c:',a, b, c);
    console.log('this:', this);
    console.log('this.name, this.city:',this.name, this.city);
}

fn(); 
// a, b, c: undefined undefined undefined
// this: window
// this.name, this.city: undefined undefined

const obj = {
    name: 'ffhou',
    city: 'ShenZhen'
}

const fn1 = fn.myBind(obj, 1, 2);

fn1();  
// a, b, c: 1, 2, undefined
// this: {name: 'ffhou',city: 'ShenZhen'}
// this.name, this.city: ffhou ShenZhen

fn1(10, 20) 
// a, b, c: 1, 2, 10
// this: {name: 'ffhou',city: 'ShenZhen'}
// this.name, this.city: ffhou ShenZhen
```