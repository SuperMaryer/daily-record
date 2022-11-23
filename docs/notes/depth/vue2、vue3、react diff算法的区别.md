
# vue2、vue3、react diff算法的区别

### diff算法介绍
- diff 算法很早就有
- diff 算法应用广泛，eg: github 的 pull request 中的代码 diff
- 如果要严格 diff 两棵树，时间复杂度O(n^3)，不可用

### tree diff 的优化
- 只比较同一层级，不跨级比较
- tag 不同则删掉重建，不在去比较内部的细节
- 子节点通过 key 区分，key 的重要性~

### vue2、vue3、react diff 区别
- vue2 双端比较
- vue3 最长递增子序列
- react 仅右移

### vue2 双端比较

<img :src="$withBase('/assets/notes-images/depth/vue2-diff-1.png')" alt="vue2-diff" width="600">


<img :src="$withBase('/assets/notes-images/depth/vue2-diff-2.png')" alt="vue2-diff" width="600">

### vue3 最长递增子序列

<img :src="$withBase('/assets/notes-images/depth/vue3-diff-1.png')" alt="vue3-diff" width="600">


<img :src="$withBase('/assets/notes-images/depth/vue3-diff-2.png')" alt="vue3-diff" width="600">

### react 仅右移

<img :src="$withBase('/assets/notes-images/depth/react-diff.png')" alt="react-diff" width="600">
