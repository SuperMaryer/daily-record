
# 旋转数组K步

### 题干
写一个方法, 输入数组arr, 旋转步数为数字K, 返回旋转后的结果 
### pop + shift 复杂度O(n) 不推荐
``` ts
/**
* 旋转数组k步 使用pop + shift
* @param arr 数组
* @param k 步数
* @return arr 返回数组
*/
function rotate (arr: Array, k: number): Array {
    const len = arr.length;
    if (!k || len === 0) return arr;

    const step = Math.abs(k % len); // abs 取绝对值

    // O(n^2)
    for (var i = 0; i < step; i++) {
        const n = arr.pop();
        if (n !== null) {
            // 数组是一个有序结构，unshift 操作非常慢
            arr.unshift(n);
        }
    }
    return arr;
}
```

### slice  + concat  复杂度O(1) 推荐
``` js
/**
* 旋转数组k步 使用slice  + concat
* @param arr 数组
* @param k 步数
* @return arr 返回数组
*/
function rotate (arr: Array, k: number): Array {
    const len = arr.length;
    if (!k || len === 0) return arr;

    const step = Math.abs(k % len); // abs 取绝对值

    // O(1)
    const part1 = arr.slice(-step)
    const part2 = arr.slice(0, len-step)
    const res = part1.concat(part2)

    return res;
}
```

### 总结比较
- 思路一：时间复杂度O(n^2)，空间复杂度O(1)
- 思路二：时间复杂度O(n)，空间复杂度O(n)
- 选择思路二，拆分数组，最后concat拼接，返回结果
- 重时间，轻空间：时间复杂度O(1)足够快，空间复杂度O(n)并不那么重要

<img :src="$withBase('/assets/notes-images/algorithm/rotate.png')" alt="rotate" width="700">


- 识破内置API的时间复杂度，unshift、shift等数组操作耗性能，pop、push不那么耗
- 单元测试，考虑参数非法情况，提升代码健壮性
- 还有思路三，如下图思路，仅作介绍，不推荐

<img :src="$withBase('/assets/notes-images/algorithm/rotate1.png')" alt="rotate" width="700">