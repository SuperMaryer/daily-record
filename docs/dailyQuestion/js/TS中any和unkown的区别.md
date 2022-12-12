# TS 中 any 和 unkown 的区别

<!-- 参考文章 -->
<!-- https://www.jianshu.com/p/124787a71561 -->

### unknown 类型会更加严格
在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查。unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。

``` ts
let foo: any = 123;
console.log(foo.msg); // 符合TS的语法
let a_value1: unknown = foo;   // OK
let a_value2: any = foo;      // OK
let a_value3: string = foo;   // OK


let bar: unknown = 222; // OK 
console.log(bar.msg); // Error
let k_value1: unknown = bar;   // OK
let K_value2: any = bar;      // OK
let K_value3: string = bar;   // Error
```

### 联合类型中，unknown 类型会吸收任何类型，意外是 any 类型
如果任一组成类型是 unknown，联合类型也会相当于 unknown

``` ts
type UnionType1 = unknown | null;       // unknown
type UnionType2 = unknown | undefined;  // unknown
type UnionType3 = unknown | string;     // unknown
type UnionType4 = unknown | number[];   // unknown
```

意外是 any 类型。如果至少一种组成类型是 any，联合类型会相当于 any

``` ts
type UnionType5 = unknown | any;  // any
```

### 交叉类型中包含 unknown 不会改变结果

``` ts
type IntersectionType1 = unknown & null;       // null
type IntersectionType2 = unknown & undefined;  // undefined
type IntersectionType3 = unknown & string;     // string
type IntersectionType4 = unknown & number[];   // number[]
type IntersectionType5 = unknown & any;        // any
```