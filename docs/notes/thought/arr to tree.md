
# arr to tree

### 需求: 手写arrToTree函数，将数组转为树

``` js 
// 原有数组
const arr =[
    {id: 1, name: '部门A', parentId：0},
    {id: 2, name: '部门B', parentId：1},
    {id: 3, name: '部门C', parentId：1},
    {id: 4, name: '部门D', parentId：2},
    {id: 5, name: '部门E', parentId：2},
    {id: 6, name: '部门F', parentId：3}
]
```

转成树效果图如下

<img :src="$withBase('/assets/notes-images/thought/tree.png')" alt="tree" width="400">


### 代码实现
- 遍历数组
- 每个元素，生成 tree node
- 找到对应的 parent node, 加入它的 children

``` js
interface treeNode {
    id: number,
    name: string,
    children?: treeNode[]
}

interface treeItem {
    id: number,
    name: string,
    parentId: number
}

/**
 * @description 数组转树 
 * @param arr 数组
 * @return root 树根节点
*/

function arrToTree(arr: treeItem[]): treeNode {
    const len = arr.length;
    let root = [];
    if (len === 0) return root;

    let idTreeNodeMap = new Map()

    for (let i = 0; i < len; i++) {
        const {id, name, parentId} = arr[i];
        const treeNode = { id, name };
        idTreeNodeMap.set(id, treeNode);

        // 根据夫id 找到它的children, 加入它
        const parentNode = idTreeNodeMap.get(parentId);
        if (parentNode) {
            if (!parentNode.children) parentNode.children = [];

            parentNode.children.push(treeNode);
        }

        // parentId 为 0 时，为根节点，需要记录，返回
        if (parentId === 0) root = treeNode;
    }

    return root;
}
```