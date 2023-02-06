
# arr to tree

### 需求: 手写convert函数，将数组转为树

``` js 
// 原有数组
const arr =[
    {id: 1, name: '部门A'， parentId：0}，
    {id: 2, name: '部门B'， parentId：1}，
    {id: 3, name: '部门C'， parentId：1}，
    {id: 4, name: '部门D'， parentId：2}，
    {id: 5, name: '部门E'， parentId：2}，
    {id: 6, name: '部门F'， parentId：3}，
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

function arrToTree(arr: treeItem[]): treeNode {
    const len = arr.length;
    let res = [];
    if (len === 0) return res;
    let treeNodeMap = new Map()

    for (let i = 0; i < len; i++) {
        const cur = arr[i];
        const curNode = {
            id: cur.id,
            name: cur.name
        }
        treeNodeMap.set(cur.id, curNode);


        if（cur.parentId === 0） res = curNode;

    }
}
```