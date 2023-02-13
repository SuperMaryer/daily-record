
# tree to arr 

### 需求: 手写treeToArr函数，将树转为数组

现有树结构如下图：   
<img :src="$withBase('/assets/notes-images/thought/tree.png')" alt="tree" width="400">

数据格式如下：
``` js 
[{
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                {
                    id: 4,
                    name: '部门D'
                },
                {
                    id: 5,
                    name: '部门E'
                }
            ]
        },
        {
            id: 3,
            name: '部门C',
            children: [
                {
                    id: 6,
                    name: '部门F'
                }
            ]
        }
    ]
}]

```

转成以下数组格式：
``` js
const arr = [
    {id: 1, name: '部门A', parentId：0},
    {id: 2, name: '部门B', parentId：1},
    {id: 3, name: '部门C', parentId：1},
    {id: 4, name: '部门D', parentId：2},
    {id: 5, name: '部门E', parentId：2},
    {id: 6, name: '部门F', parentId：3}
]
```

### 实现
- 遍历树节点
- 将树节点转换成arr item, push 到数组
- 根据父子关系，找到 arr item 的 parentId


树转数组可以广度优先，也可以深度优先，先进行类型定义

``` ts
interface arrItem {
    id: number,
    name: string,
    parentId: number
}

interface treeNode {
    id: number,
    name: string,
    children?: treeNode[]
}
```

1. 深度优先  可使用递归
``` js
/**
 * @description 树转数组 深度优先 使用递归实现 
 * @param root 树根节点
 * @return arr 数组
*/
function treeToArr(root: treeNode): arrItem[] {
    const arr = [];

    const deepFn = function (data, parentId=0) {
        data.forEach(item => {
            const {id, name, children} = item;
            const arrItem = {id, name, parentId};
            arr.push(arrItem);

            if (children && children.length) {
                deepFn(children, id);
            }
        })
    }
    deepFn(root, 0);

    return arr;
}
```

2. 深度优先  可使用栈（先进后出）
``` js
/**
 * @description 树转数组 深度优先 使用栈（先进后出）实现
 * @param root 树根节点
 * @return arr 数组
*/
function treeToArr(root: treeNode): arrItem[] {
    const arr = [];
    const stack = [];
    const idParentIdMap = new Map();

    stack.push(root);

    while (stack.length) {
        // 出栈
        const treeNode = stack.pop();
        if (treeNode === null) break;

        const {id, name, children} = treeNode;

        // 根据当前id 获取对应父id，根节点默认为0
        const parentId = idParentIdMap.get(id) || 0;

        // 组装arr 格式，添加到arr中
        const arrItem = {id, name, parentId};
        arr.push(arrItem);

        // 子节点，记录对应的父id 并且入栈
        if (children && children.length) {
            children.forEach(childNode => {
                // 记录对应的父id
                idParentIdMap.set(childNode.id, id);
                // 入栈
                stack.push(childNode);
            })
        }
    }

    return arr;
}
```

3. 广度优先  可使用队列（先进先出）
``` js
/**
 * @description 树转数组 深度优先 使用队列（先进先出）实现
 * @param root 树根节点
 * @return arr 数组
*/
function treeToArr(root: treeNode): arrItem[] {
    const arr = [];
    const queue = [];
    const idParentIdMap = new Map();

    queue.unshift(root);

    while (queue.length) {
        // 出栈
        const treeNode = queue.pop();
        if (treeNode === null) break;

        const {id, name, children} = treeNode;

        // 根据当前id 获取对应父id，根节点默认为0
        const parentId = idParentIdMap.get(id) || 0;

        // 组装arr 格式，添加到arr中
        const arrItem = {id, name, parentId};
        arr.push(arrItem);

        // 子节点，记录对应的父id 并且入队
        if (children && children.length) {
            children.forEach(childNode => {
                // 记录对应的父id
                idParentIdMap.set(childNode.id, id);
                // 入队
                stack.unshift(childNode);
            })
        }
    }

    return arr;
}
```

