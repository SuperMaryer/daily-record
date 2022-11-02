# NaN 

### 如何判断一个数据是NaN
1. isNaN(A): 返回true表示A为NaN      
2. Object.is(A,B)方法判断两个值是否为同一个值：Object.is(A, NaN)返回true表示A为NaN     
3. includes可以判断数组中是否包含NaN：返回true表示A为NaN   
    function isNaNFn(A) {
        return [A].includes(NaN) 
    }   
4. 利用NaN是唯一一个不等于自身的特点：返回true表示A为NaN   
    function isNaNFn1(A) {
        return A!==A
    }   

### 如何判断一个数组是否包含NaN

- 不能用indexOf判断数组中是否含有NaN
- 可以用includes判断数组中是否含有NaN


### Object.is(A, B)
Object.is() 方法判断两个值是否为同一个值。一个布尔值，表示两个参数是否是同一个值。

满足以下任意条件则两个值相等:

- 都是 undefined
- 都是 null
- 都是 true 或都是 false
- 都是相同长度、相同字符、按相同顺序排列的字符串
- 都是相同对象（意味着都是同一个对象的值引用）
- 都是数字且
    - 都是 +0
    - 都是 -0
    - 都是 NaN
    - 都是同一个值，非零且都不是 NaN

1. Object.is() VS == ： 
 **==** 运算符在判断相等前, 如果两边的变量不是同一类型，会进行强制转换，而 Object.is 不会强制转换两边的值。

2. Object.is() VS ===：
 对待有符号的零和 NaN 不同，eg：**===** （也包括 **==** ）将数字 -0 和 +0 视为相等，而将 Number.NaN 与 NaN 视为不相等。


::: details 查看示例
```js
Object.is(undefined, undefined);  // true
Object.is(null, null);            // true
Object.is('hello', 'hello');          // true
Object.is('hello', 'yeah');          // false
Object.is([], []);                // false
Object.is({}, {});                // false
Object.is(window, window);        // true
var obj1 = { a: 1 };
var obj2 = { a: 1 };
Object.is(obj1, obj1);              // true
Object.is(obj1, obj2);              // false

// Case 3: Number and Signed zero
Object.is(1, 1);                // true
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true

```
:::