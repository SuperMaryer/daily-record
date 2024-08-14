
# Object.create和{}区别

### 创建对象的方法
1. 字面量
    var obj = {name: 'ffhou'}
    var obj1 = new Object({name: 'ffhou'})
2. 构造函数
    var M = function(name) {
        this.name = name
    }
    var obj2 = new M('ffhou')
3. Object.create
    var p = {name: 'ffhou'}
    var obj3 = Object.create(p)


<img :src="$withBase('/assets/notes-images/codes/object-create-type.png')" alt="object" width="300">
<img :src="$withBase('/assets/notes-images/codes/object-create-type1.png')" alt="object" width="700">

### Object.create介绍
#### 作用
Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。
#### 语法
``` js
Object.create(proto)
Object.create(proto, propertiesObject)
```
#### 参数
- proto: 新创建对象的原型对象
- propertiesObject: 可选。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。（这些属性描述符的结构与Object.defineProperties()的第二个参数一样）

属性描述对象：
    {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false,
        get: undefined,
        set: undefined
    }

#### 返回值
- 返回一个新对象，带着指定的原型对象及其属性

#### 实现
``` js
var Object.myCreate =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
}
```

### 区别：原型指向不同
- {}: 创建空对象，原型指向 Object.prototype
- new Object(): 创建空对象，原型指向 Object.prototype
- Object.create(proto, objectProp): 创建空对象，原型指向传入的第一个参数
- Object.create(null) 没有隐式原型  `VS`  new Object(null)有隐式原型


### 区别：添加属性挂载位置不同

- {}: 将属性添加到自身
- new Object: 将属性添加到自身
- Object.create: 将属性添加到隐式原型`proto([[prototype]])`上


``` js 
const obj1 = {
    a: 1,
    b: 2,
    getSum() {
        return this.a + this.b;
    }
}

const obj2 = new Object({
    a: 1,
    b: 2,
    getSum() {
        return this.a + this.b;
    }
})

const obj21 = new Object(obj1);

console.log(obj1 === obj2); // false
console.log(obj1 === obj21); // true

console.log(obj1);
console.log(obj2);
console.log(obj21);
```

打印结果：   

<img :src="$withBase('/assets/notes-images/codes/object1.png')" alt="object1" width="500">


``` js 
const obj1 = { // 同上obj1
    a: 1,
    b: 2,
    getSum() {
        return this.a + this.b;
    }
}
const obj3 = Object.create(null) // 没有隐式原型__proto__
const obj4 = Object.create({}) // 有隐式原型
const obj5 = Object.create({// 属性值在隐式原型上
    a: 1,
    b: 2,
    getSum() {
        return this.a + this.b;
    }
})  

const obj51 = Object.create(obj1);
console.log(obj51 === obj1); // false，一个在__proto__中，一个在自身属性

console.log(obj1);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj51);

```

打印结果：   

<img :src="$withBase('/assets/notes-images/codes/object2.png')" alt="object2" width="700">
