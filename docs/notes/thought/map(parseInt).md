
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
`parseInt(string, radix)` 该函数可将字符串string转换成radix进制的整数

- 语法： parseInt(string, radix)
- 参数：
    + string: 必传，被解析的字符串
    + radix: 可选，表示要解析的数字的基数
    + 根据进制的定义，string要小于radix，否则会返回NaN
- 返回值：整数，该返回值是十进制



