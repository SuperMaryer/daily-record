
# instanceof原理

### 介绍
#### 用途
instanceof 运算符用于检测`构造函数的 prototype 属性`是否出现在某个`实例对象`的原型链上。

#### 语法
```js 
object instanceof constructor
```
- object: 实例对象
- constructor: 构造函数

返回一个布尔值

``` js
null instanceof Object // false

1 instanceof Number // false => instanceof判断一个对象是否是另一个对象的实例，数字1是基本数据类型，不是对象
new Number(1) instanceof Number // true 对象实例 返回true
new Number(1) instanceof Object // true 对象实例 返回true

'ffhou' instanceof String // false 同number
new String('ffhou') instanceof String // true 对象实例 返回true
new String('ffhou') instanceof Object // true 对象实例 返回true

Object.create(null) instanceof Object // false  一种创建非 Object 实例的对象的方法

new Date() instanceof Date  // true
new Date() instanceof Object  // true
new Date() instanceof Number  // false
new Date() instanceof String  // false
```


### 实现
```js 
function myInstanceof(instance, constructor) {
    // null 返回 false
    if (instance === null) return false;

    // 值类型 返回false
    const type = typeof instance;
    if (type !== 'object' && type !== 'function') return false;

    let left = instance;
    while(left) {
        if (left.__proto__ === constructor.prototype) {
            return true; // 找到了，返回
        }
        
        // 没找到，顺着原型链，往上找
        left = left.__proto__;
    }
}
```