
# js的几种常用排序方法

### 常用排序方法
- 冒泡排序
- 选择排序
- 快速排序
- 插入排序


1. 冒泡排序
``` js
// 升序，a-b, 从小到大排序
// 依次比较两个相邻的元素，如果左边的数比右边的数大，就交换位置
// 比较完第一轮最后一个元素是最大的元素，所以就不需要在比较最后一个元素了

// 降序，a-b, 从大到小排序
// 依次比较两个相邻的元素，如果左边的数比右边的数小，就交换位置
// 比较完第一轮最后一个元素是最小的元素，所以就不需要在比较最后一个元素了

/**
 * @param arr
 * @param type 升序：'a-b', 降序'b-a'
 * @return arr
*/
function bubbleSort(arr, type) {
    const len = arr.length;
    const typeError = type !== 'a-b' && type !== 'b-a';
    if (len <= 1 || typeError) return arr;
    // 升序: 
    if (type === 'a-b') {
        // 外层循环决定比较的轮数
        for (var i = 0; i < len-1; i++) {
            // 内层循环决定每轮比较的次数
            for (var j = 0; j < len-i-1; j++) {
                // 升序: 如果左边的比右边一个元素大，则交换位置
                // 每轮找到最大的元素（最后一个）
                if (arr[j] > arr[j+1]) {
                    const temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    } else {
        // 外层循环决定比较的轮数
        for (var i = 0; i < len-1; i++) {
            // 内层循环决定每轮比较的次数
            for (var j = 0; j < len-i-1; j++) {
                // 降序: 变成小于号，如果左边的比右边一个元素小，则交换位置
                // 每轮找到最小的元素（最后一个）
                if (arr[j] < arr[j+1]) {
                    const temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }
    return arr;
}
```

2. 选择排序
``` js
// 升序，a-b, 从小到大排序
// 首先在元素中找到最小的元素，把它放到最左边
// 然后再从剩下的元素中继续找最小的元素，依次放到左边

/**
 * @param arr
 * @param type 升序：'a-b', 降序'b-a'
 * @return arr 
*/
function selectSort(arr, type) {
    const len = arr.length;
    const typeError = type !== 'a-b' && type !== 'b-a';
    if (len <= 1 || typeError) return arr;

    // 升序: 
    if (type === 'a-b') {
        // 外层循环决定比较的轮数，比较到最后一
        for (var i = 0; i < len-1; i++) {
            var minIdx = i;
            // 找出最小的元素
            for (var j = i; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            // 放到最左边
            const temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    } else {
        // 外层循环决定比较的轮数，比较到最后一
        for (var i = 0; i < len-1; i++) {
            var maxIdx = i;
            // 找出最大的元素
            for (var j = i; j < len; j++) {
                if (arr[j] > arr[maxIdx]) {
                    maxIdx = j;
                }
            }
            // 放到最左边
            const temp = arr[i];
            arr[i] = arr[maxIdx];
            arr[maxIdx] = temp;
        }
    }
    return arr;
}
```

3. 快速排序
先从数组中取出一个数作为基准值，将比这个数大的放在它右边，将比这个小的放在它左边，依次...
``` js
/**
 * @param arr
 * @param type 升序：'a-b', 降序'b-a'
 * @return arr 
*/
function quickSort(arr, type) {
    const len = arr.length;
    const typeError = type !== 'a-b' && type !== 'b-a';
    if (len <= 1 || typeError) return arr;

    let left = [];
    let right = [];
    let midIdx = Math.floor(len / 2);
    let midValue = arr.splice(midIdx, 1);

    // 也可以使用slice,slice 不改变原数组，返回新数组，需要忽略 === midIdx的值
    // let midValue = arr.slice(midIdx, mdiIdex+1)[0]; 

    // 升序: 
    if (type === 'a-b') {
        for (var i=0; i<len; i++) {
            // if (i !== midIdx) { // 使用slice时, 需要忽略 === midIdx的值
                const n = arr[i];
                // 和中间这个基准值比较，小于基准值放左边
                if (n < midValue) {
                    left.push(n);
                } else { // 大于基准值放右边
                    right.push(n);
                }
            // }
        }
    } else {
        for (var i=0; i<len; i++) {
            // if (i !== midIdx) { // 使用slice时, 需要忽略 === midIdx的值
                const n = arr[i];
                // 和中间这个基准值比较，小于基准值放右边
                if (n < midValue) {
                    right.push(n);
                } else { // 大于基准值放左边
                    left.push(n);
                }
            // }
        }
    }
    return quickSort(left, type).concat(midValue, quickSort(right, type));
}
```

4. 插入排序　　
从第一个元素开始该元素可以被认为已经被排序，
取出下一个元素，如果该元素大于新的元素，则将该元素移到下一个位置，依次...

``` js
/**
 * @param arr
 * @param type 升序：'a-b', 降序'b-a'
 * @return arr 
*/
function insertSort (arr, type) {
    const len = arr.length;
    const typeError = type !== 'a-b' && type !== 'b-a';
    if (len <= 1 || typeError) return arr;

    for (var i=1; i<len; i++) {
        const n = arr[i];
        let j = i-1;
        while (arr[j] > n) {
            arr[j+1] = arr[j]
            j--;
        }  
        arr[j+1] = n    
    }   
    return arr 
}
```