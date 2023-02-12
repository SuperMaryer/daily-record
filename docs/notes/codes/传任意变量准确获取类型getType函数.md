
# 传任意变量准确获取类型getType函数

### 要求
- 手写一个 getType 函数， 传入任意变量，可准确获取类型
- 包括 number string boolean 等值类型
- 还有 object array map regexp等应用类型

### 实现

1. 简洁版本
``` js 
function getType(n) {
    return Object.prototype.toString.call(n).slice(8, -1);
}
```

2. 优化版
``` js
function getType1(n) {
    const oriType = Object.prototype.toString.call(n); // '[Object String]'
    const spaceIndex = oriType.findIndex(' '); // 7
    const type = oriType.splice(spaceIndex + 1, -1); // 'String'
    return type.toLowerCase();// 'string'
}
```
