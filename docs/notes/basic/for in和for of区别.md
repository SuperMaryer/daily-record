
# for in 和 for of 区别

### 适用于不同类型数据
for...in 用于可枚举数据，eg: 对象、数组、字符串
for...of 用于可迭代数据，eg: 数组、字符串、Map、Set


  功能             | for...in | for...of
------------------ |----------|---------
 遍历数组          | 可以     | 可以
 遍历字符串        | 可以     | 可以
 遍历对象          | 可以     | 不可以
 遍历Map Set       | 不可以   | 可以
 遍历generator     | 不可以   | 可以
 

 ### 可枚举 vs 可迭代
 1. 可枚举：通过`Object.getOwnPropertyDescriptors(obj)`获取查看`enumerable`是否为true

 <img :src="$withBase('/assets/notes-images/basic/可枚举.png')" alt="可枚举" width="500">

 2. 可迭代：通过`arr[Symbol.iterator]()`  获取查看是否包含`next函数`
<img :src="$withBase('/assets/notes-images/basic/可迭代.png')" alt="可迭代" width="500">