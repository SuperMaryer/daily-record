
# 定义一个JS函数，反转单向链表

### 链表
- 是一种物理结构，非逻辑结构，类似数组
- 数组需要一段连续的内存区间，而链表是零散的
- 链表节点的数据结构为: {value, next?, prev?}

<img :src="$withBase('/assets/notes-images/algorithm/link1.png')" alt="link1" width="500">

<img :src="$withBase('/assets/notes-images/algorithm/link2.png')" alt="link2" width="500">

### 链表 vs 数组
- 都是有序结构
- 链表：查询慢 O(N), 新增删除快 O(1)
- 数组：查询快 O(1), 新增删除慢 O(n)

<img :src="$withBase('/assets/notes-images/algorithm/link3.png')" alt="link3" width="500">

<img :src="$withBase('/assets/notes-images/algorithm/link4.png')" alt="link4" width="500">

### 解题思路
- 反转的意思：节点的 next 指向前一个节点
- 需要三个指针 preNode curNode nextNode 记录


### 实现

``` js
// 1. 先用创建单向链表，根据数组来创建

// 定义linkNode
interface LinkNode {
    value: number,
    next: LinkNode || undefined
}


/**
 * @description 根据数据创建单向链表
 * @param arr 数组
 * @return linkNode 单向链表
*/
function createLink(arr: number[]): LinkNode {
    const len = arr.length;
    if (len === 0) throw new Error('数组为空');

    let linkNode: LinkNode = {
        value: arr[len - 1]
    }

    if (len === 1) return linkNode;

    for (let i = len - 2; i >= 0; i--) {
        linkNode = {
            value: arr[i],
            next: linkNode
        }
    }

    return linkNode;
}

const arr = [1, 2, 3, 4, 5, 6];
createLink(arr);


// 2. 反转单向链表

/**
 * @description 反转单向链表
 * @param linkNode 单向链表
 * @return reLinkNode 反转后单向链表的headNode
*/
function reverseLinkNode(linkNode): LinkNode {
    let preNode: LinkNode || undefined = undefined;
    let curNode: LinkNode || undefined = undefined;
    let nextNode: LinkNode || undefined = linkNode;

    while(nextNode) {
        // 第一个元素，删掉 next, 防止循环引用
        if (curNode && !preNode) {
            delete curNode.next;
        }

        // 反转指针
        if (curNode && preNode) {
            curNode.next = preNode;
        }

        preNode = curNode;
        curNode = nextNode;
        nextNode = nextNode?.next;
    }

    return curNode;
}
```

`过程解释`
<img :src="$withBase('/assets/notes-images/algorithm/link5.png')" alt="link5" width="800">
