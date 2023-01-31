# 数组 sort 排序

### Array.prototype.sort()
`sort()方法`用类似map原地算法实现对数组元素排序，返回数组，会改变原数组为排序后的数组。

使用：
``` js
// compareFn: 排序函数
arr.sort([compareFn])
```

1. 不传compareFn
- 按转换为字符串的第一个不同字符的Unicode编码值进行升序排列
- 调用一次toString()转换为字符串
- 升序排列

``` js
let arr = ['bd','a','ba','f','dy'];
arr.sort();
console.log(arr); // ['a','ba','bd','dy', 'f']

let arr1 = [200, 10, 1, 20, 1001];
arr1.sort();
console.log(arr); // [1, 10, 1001, 20, 200]
```

2. 传compareFn
- 形式为function(a, b) => {return callbackValue}
- 参数a b：每次比较的值
- callbackValue：
    * 零：a 和 b 相对位置不变
    * 负数：a 会被排在 b 之前，升序 a-b
    * 正数：a 会被排在 b 之后，降序 b-a

``` js 
let list = [
  { name: 'jack', age: 32 },
  { name: 'sam', age: 23 },
  { name: 'Susan', age: 45 },
  { name: 'ruse', age: 18 },
  { name: 'David', age: 18 },
  { name: 'beck', age: 37 }
];

// 按名字name进行降序操作
list.sort(function(a, b) {
    // 转为大写进行比较
    let nameA = a.name.toUpperCase(); 
    let nameB = b.name.toUpperCase();  

    // nameA 小于 B 则位置不比变
    if (nameA < nameB) { 
        return -1;
    }
    if (nameA > nameB) { // 如果name A 大于 B 则B 与 A 交换位置
        return 1;
    }

    // 名字相同时 不变
    return 0;
});

// 按age数值进行升序
items.sort(function (a, b) {
    return a.age - b.age;
});

// 按age数值进行降序
items.sort(function (a, b) {
    return b.age - a.age;
});

```
