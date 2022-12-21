
# 用js实现二分查找

### 思路
- 递归： 代码逻辑更加清晰
- 非递归：性能更好
- 时间复杂度：O(logn) 已经很快了


### 递归
``` js
/**
 * @param arr
 * @param target
 * @return index
*/
function binarySearch(arr: Array, target: number, startIdx?: number, endIdx?: number): number {
    const len = arr.length;
    if (len === 0) return -1;

    if (startIdx === null) startIdx = 0;
    if (endIdx === null) endIdx = len - 1;

    if (startIdx > endIdx) return -1;
    
    const midIdx = Math.floor((startIdx + endIdx)/2);
    const midValue = arr[midIdx];

    if (target < midValue) {
        return binarySearch(arr, target, startIdx,  midIdx - 1)
    } else if (target > midValue) {
        return binarySearch(arr, target, midIdx + 1, endIdx)
    } else {
        return midIdx;
    }
}
```

### 非递归
``` js
/**
 * @param arr
 * @param target
 * @return index
*/
function binarySearch(arr: Array, target: number): number {
    const len = arr.length;
    if (len === 0) return -1;

    let startIdx = 0;
    let endIdx = len - 1;
    
    while (startIdx <= endIdx) {
        const midIdx = Math.floor((startIdx + endIdx)/2);
        const midValue = arr[midIdx];
        if (target < midValue) {
            endIdx = midIdx - 1;
        } else if (target > midValue) {
            startIdx = midIdx + 1;
        } else {
            return midIdx;
        }
    }
    return -1;
}
```

### 对比
- 时间复杂度O(logn)
- 循环只调用一次函数，性能更好
- 递归调用多次函数
- 调用函数也需要开销，但是影响不大
- 递归代码逻辑更加清晰，理解更容易
