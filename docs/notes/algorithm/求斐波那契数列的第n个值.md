
# 求斐波那契数列的第n个值

### 斐波那契
- 第一个数为0
- 第二个数为1
- 从第三个数开始，值为前两个数之和

如下所示
``` 
0 1 1 2 3 5 8 13 21 34 55 ...

f(0) = 0
f(1) = 1
f(n) = f(n-2) + f(n-1)

```

### 使用递归
不建议使用递归，复杂度高，大量的重复计算

<img :src="$withBase('/assets/notes-images/algorithm/斐波那契递归.png')" alt="斐波那契递归" width="500">

代码实现：


``` js
/**
 * 斐波那契数列-递归
 * @param n
 * @return number
*/
function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n-2) + fibonacci(n-1);
}
```

### 使用循环
推荐使用该方法，循环过程中记录中间结果，时间复杂度为O(n)

代码实现：

``` js
/**
 * 斐波那契数列-循环
 * @param n
 * @return number
*/
function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let n2 = 0; // 记录n-2
    let n1 = 1; // 记录n-1
    let res = 0;

    for(let i = 2; i < n; i++) {
        res = n2 + n1;

        // 记录中间结果
        n2 = n1;
        n1 = res;
    }

    return res;
}
```

### 总结
- 动态规划： 把一个大问题，拆解为多个小问题，逐级向下拆解
- 用递归的思路去分析问题，再改为循环来实现
- 算法三大思维：贪心、二分、动态规划

### 拓展
青蛙跳台阶，一次可以跳一级，也可以跳两级，跳到n级台阶又几种方式

<img :src="$withBase('/assets/notes-images/algorithm/青蛙跳台阶.png')" alt="青蛙跳台阶" width="500">
