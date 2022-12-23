
# 找出一个数组中和为n的两个数

### 题干
数组：递增数组
eg: 
[1,4,6,7,9,10], 和为15的两个数, 返回[6, 9]
[1,4,6,7,9,10], 和为22的两个数, 返回[]



### 双指针
``` js
/**
 * arr中查找和为n的两个数
 * @param arr
 * @param n
 * @return arr
*/
function findToNumber(arr: Array<number>, n: number): Array<number> {
    const len = arr.length;
    if (len <= 1) return [];

    let i = 0;
    let j = len - 1;

    while (i < j) {
        const k = arr[i] + arr[j];
        if (k < n) {
            i++;
        } else if (k > n) {
            j--;
        } else {
            return [arr[i], arr[j]];
        }
    }
    return [];
}
```

### 循环
``` js
/**
 * arr中查找和为n的两个数
 * @param arr
 * @param n
 * @return arr
*/
function findToNumber(arr: Array<number>, n: number): Array<number> {
    const len = arr.length;
    const res: number[] = [];
    if (len <= 1) return res;

    for (let i = 0; i < len-1; i++) {
        const n1 = arr[i];
        const flag = false;

        for(let j = i+1; j < len; j++) {
            const n2 = arr[j];
            if (n1 + n2 === n) {
                res.push(n1);
                res.push(n2);
                flag = true;
                break;
            }
        }

        if (flag) break;
    }
    
    return res;
}
```
