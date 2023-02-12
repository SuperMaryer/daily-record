
# 手写代码表示new一个对象的过程

### new 一个对象的过程
- 创建一个空对象 obj，该对象继承构造函数
- this 指向该对象，执行构造函数
- 返回这个对象 obj


#### 创建一个空对象 obj，该对象继承构造函数，有两种实现方式
- 使用Object.create(proto, propObj)创建，推荐
- 先创建一个空对象，然后将该对象的原型(__proto__)指向构造函数的原型(prototype)


#### 拓展
<a :href="$withBase('/notes/codes/Object.create和{}区别')">object.create() 和 {} / new Object() 的区别 </a>

### 实现

#### 使用Object.create实现
```js 
function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const res = constructor.apply(obj, args);
    return typeof obj === 'object' && res !== null ? res : obj;
}

class Foo {
    constructor(name, sex) {
        this.name = name;
        this.city = 'shenzhen';
        this.sex = sex;
    }

    getName() {
        return this.name;
    }
}

const res = myNew(Foo, 'ffhou', 'woman');
console.log(res.getName); // 'ffhou'    

const res1 = myNew(Array, 1, 2, 3); 
console.log(res1);// [1, 2, 3]
```

#### 使用obj.__proto__ = fn.prototype实现
``` js
function create(...args) {
    const obj = {};
    const fn = args.shift();
    obj.__proto__ = fn.prototype;
    const res = fn.apply(obj, args)
    return typeof obj === 'object' && res !== null ? res : obj;
}

const res = create(Array, 1, 2, 3);
console.log(res);
```
