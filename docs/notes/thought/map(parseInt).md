
# ['1','2','3'].map(parseInt)输出结果是什么？

### 答案： [1, NaN, NaN]

理解

``` js
const arr = ['1','2','3'];

// const res = arr.map(parseInt);
// map() 里面其实是一个回调函数，三个参数分别为当前值、下标和原始数组
// 这么看它其实是简写，完整写法如下：

const res = arr.map((item, index, arr) => {
    return parseInt(item, index);
});

// 依次执行
// item: '1', index: 0 => parseInt('1', 0) => 1
// item: '2', index: 1 => parseInt('2', 1) => NaN
// item: '3', index: 2 => parseInt('3', 2) => NaN

console.log(res); // [1, NaN, NaN]
```

### parseInt 函数
`parseInt(string, radix)` 该函数可将字符串string转换成radix进制的整数，radix 为介于2-36之间的数。最后都是以十进制形式返回。

- 语法： parseInt(string, radix)
- 参数：
    + string: 必传，被解析的字符串，如果传入非字符串类型，会调用toString方法转成字符串
    + radix: 可选，表示要解析的数字的基数，介于 2 ~ 36 之间
    + 根据进制的定义，string要小于radix，否则会返回NaN
- 返回值：整数，该返回值是十进制


``` js
parseInt('1', 0) // 1
parseInt('2', 1) // NaN 
parseInt('3', 2) // NaN

parseInt('1.33') // 1
parseInt('10', 10) // 10
parseInt(' 10') // 10  开头和结尾的空格是允许的
parseInt(' 10 12') // 10   开头和结尾的空格是允许的
parseInt('A10 12') // NaN  如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN
parseInt('-10 12') // -10 可以理解正负号
parseInt('-10A') // -10 
parseInt(".12") // NaN

parseInt('618', 6) // NaN
parseInt('618', -1) // NaN
parseInt('618', 38) // NaN
parseInt('618', '6') // NaN 
parseInt('618', '10') // 618
parseInt('618', '10') // 618
parseInt('618', 0.0001) // 618
parseInt('618', -0.1) // 618

// radix为 undefined、0 或未指定的
parseInt("0x15"); // 21  字符串以`0x`或`0X`开头，0x会解析为16，其余字符会以16为基数来解析
parseInt("066"); // 66 字符串以`0`开头，ES5 规定使用十进制
parseInt("12xf"); // 123 会被假定以10为基数来解析

```

#### 疑惑1：进制是介于2-26之间的值，怎么理解`parseInt('1', 0) 结果为 1？` 

首先我们了解一下进制和radix参数的特性


`进制` 
- 即进位计数制，是人为定义的带进位的计数方法
- 对于任何一种进制---X进制，就表示每一位上的数运算时都是逢X进一位
- 十进制是逢十进一，十六进制是逢十六进一，二进制就是逢二进一
- 以此类推，x进制就是逢x进位


`radix参数`

- 根据给定radix，parseInt函数产生一个由字符串参数内容解析过来的整数值
- 字符串中开头的空白会被忽略
- 如果radix为 undefined、0 或未指定的，会按照以下情况做出不同处理
    + 如果字符串以`0x`或`0X`开头，0x会解析为16，其余字符会以16为基数来解析
    + 如果字符串以`0`开头，ES5 规定使用十进制，但并非所有的浏览器都支持
    + 其他情况参数会被假定以10为基数来解析


所以parseInt('1', 0) 或者 parseInt('1') 的结果都为1


#### 如何计算转换值

``` js
parseInt('432', 5); // 117

// 数学计算：
// 4*5^2 + 3*5^1 + 2*5^0 = 100 + 15 + 2 = 117

// js计算：
4*Math.pow(5, 2) + 3*Math.pow(5, 1) + 4*Math.pow(5, 2)  // 117

```

<img :src="$withBase('/assets/notes-images/thought/parseInt.png')" alt="parseInt" width="800">


### 拓展

#### 问题1：parseInt (0.0000005) === 5 ？

``` js
parseInt (0.0000005) === 5 // true

// parseInt 第一个参数如果不是String类型，会调用toString方法转换成字符串
// 实际可以拆解成以下两步

(0.0000005).toString() // 5e-7
parseInt ('5e-7') === 5 // true

// 另外
parseInt (0.0000005) // 5
parseInt ('0.0000005') // 5e-7

```

当数字过小/过大时，toString 输出的结果是科学计数法形式

``` js
parseInt('999999999999999999999') // 1e+21
parseInt(999999999999999999999) // 1

// parseInt(999999999999999999999)实际可以拆解成以下两步

(999999999999999999999).toString() '1e+21'
parseInt('1e+21') // 1
```

#### ['10', '10', '10', '10'].map(parseInt) 输出什么？

``` js
const arr = ['10', '10', '10', '10''];

// const res = arr.map(parseInt);
// map() 里面其实是一个回调函数，三个参数分别为当前值、下标和原始数组
// 这么看它其实是简写，完整写法如下：

const res = arr.map((item, index, arr) => {
    return parseInt(item, index);
});

// 依次执行
// item: '10', index: 0 => parseInt('10', 0) => 10
// item: '10', index: 1 => parseInt('10', 1) => NaN
// item: '10', index: 2 => parseInt('10', 2) => 2
// item: '10', index: 3 => parseInt('10', 3) => 3

console.log(res); // [10, NaN, 2,3 ]
```
