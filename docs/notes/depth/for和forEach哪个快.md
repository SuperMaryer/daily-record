
# for和forEach哪个快

### 比较
- for 更快
- forEach 每次都要创建一个函数来调用，for 不会创建函数
- 函数需要独立的作用域，会有额外的开销

``` js
const arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(i);
}
const len = arr.length;

// for
console.time('for');
let n1 = 0;
for (let i = 0; i < len; i++) {
    n1++;
}
console.timeEnd('for');// 3.7ms

// forEach
console.time('forEach');
let n2 = 0;
arr.forEach(()=>n2++)
console.timeEnd('forEach'); // 15.1ms

```

<img :src="$withBase('/assets/notes-images/depth/for-and-foreach.png')" alt="for-and-foreach" width="800">


- 越`低级`的代码，性能往往越好
- 日常开发别只考虑性能，forEach 代码可读性更好
