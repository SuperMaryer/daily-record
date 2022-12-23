
# 求一个二叉搜索树的第K小值

### 分析

#### 二叉搜索树 BST(Binary Search Tree)

- 是一颗树
- 每个节点，最多只能有 2 个子节点
- 树节点的数据结构：value, left?, right?
- left：包括其后代，value <= root value
- right：包括其后代，value >= root value
- 价值：可使用二分法进行快速查找

#### 二叉树的遍历
- 前序遍历：root => left => right
- 中序遍历：left => root => right
- 后序遍历：left => right => root

### 实现
中序遍历，得到递增数组，取第k个元素
```js
function getKthValue(node: ITreeNode, k: number): number | null {
    inOrderTraverse(node);
    return arr[k-1] || null;
}

interface ITreeNode {
    value: number,
    left?: ITreeNode | null,
    right?: ITreeNode | null,
}

const arr = number[] = [];

// 前序遍历
function inOrderTraverse(node) {
    if(node == null) return 

    arr.push(node.value)
    inOrderTraverse(node.left);
    inOrderTraverse(node.right);
}
// 中序遍历
function inOrderTraverse(node) {
    if(node == null) return 

    inOrderTraverse(node.left);
    arr.push(node.value)
    inOrderTraverse(node.right);
}
// 后序遍历
function inOrderTraverse(node) {
    if(node == null) return 

    inOrderTraverse(node.left);
    inOrderTraverse(node.right);
    arr.push(node.value)
}
```