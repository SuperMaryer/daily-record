
# js实现快速排序并说明时间复杂度

### 思路
- 找到中间位置 midValue
- 遍历数组，小于 midValue 放在左边left, 否则放在右边right
- 继续递归，最后concat 拼接，返回

### 细节
- 获取midValue 的两种方式
- splice截取，会修改原数组
- slice获取，不会修改原数组，返回新数组，推荐该方法
- 使用slice 要注意===midIdx 对应的值需要忽略

### splice 实现
``` js
/**
 * @param arr
 * @return arr 
*/
function quickSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;

    let left = [];
    let right = [];
    let midIdx = Math.floor(len / 2);
    let midValue = arr.splice(midIdx, 1);
    
    for (var i=0; i<len; i++) {
        const n = arr[i];
        // 和中间这个基准值比较，小于基准值放左边
        if (n < midValue) {
            left.push(n);
        } else { // 大于基准值放右边
            right.push(n);
        }
    }
    
    return quickSort(left, type).concat(midValue, quickSort(right, type));
}
```
### slice 实现
``` js
/**
 * @param arr
 * @return arr 
*/
function quickSort(arr) {
    const len = arr.length;
    if (len <= 1) return arr;

    let left = [];
    let right = [];
    let midIdx = Math.floor(len / 2);
    let midValue = arr.slice(midIdx, midIdx + 1)[0];
    
    for (var i=0; i<len; i++) {
        if (i !== midIdx) {
            const n = arr[i];
            // 和中间这个基准值比较，小于基准值放左边
            if (n < midValue) {
                left.push(n);
            } else { // 大于基准值放右边
                right.push(n);
            }
        }
    }

    return quickSort(left, type).concat(midValue, quickSort(right, type));
}
```

### 时间复杂度
- 有遍历，有二分————O(n*logn)
- 常规排序、嵌套排序————O(n^2)

### 比较splice slice
- 算法本身的时间复杂度已经够高O(n*logn)
- 另外，splice是逐步二分之后执行的，二分会快速削减数量级
- 如果单独比较splice 和 slice, 效果会明显，slice更推荐


