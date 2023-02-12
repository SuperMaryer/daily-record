
# 实现数组扁平化ArrayFlatten函数

### 思路
- 定义一个空数组 res = []
- 遍历传入数组
- 如果当前元素为非数组，累加到 res
- 如果当前元素为数组，则扁平化后再累加到 res

### 实现
``` js
function ArrayFlatten(arr) {
    const len = arr.length;
    if (len === 0) return arr;

    const res = [];
    for (let i = 0; i < len; i++) {
        const n = arr[i];
        if (Array.isArray(n)) {
            const list = ArrayFlatten(n);
            res = res.concat(list);

            // list.forEach(e => res.push(e)); // 也可以用这种方式逐个加入
        } else {
            res.push(n);
        }
    }
    return res;
}
```


### 拓展：巧妙的解决方案
如果是纯数字/纯字符串元素的数组，可以使用该方案

- 使用toString()
- 注意：如果数组元素是 {x: 1} 等引用类型，就不可以了

``` js
/**
 * @param arr 数组
 * @param type 类型，数组元素均为纯数字（num）/纯字符串元素(str)
*/
function ArrayFlatten(arr, type) {
    const list = [1, 2, [11, 22, [111, 222], 33], 3];
    const str = list.toString(); // '1, 2, 11, 22, 111, 222, 33, 3'
    const res = [];
    for (const i = 0; i < str.length; i++) {
        const n = str[i];
        if (n !== ',') {
            const v = type === 'num' ? Number(n) : n.toString();
            res.push(v);
        }
    }
    return v;
}


```
