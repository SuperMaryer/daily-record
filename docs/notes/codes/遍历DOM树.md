
# 遍历DOM树

### DOM
`DOM`
- Document Object Model `文档对象模型`
- 用来呈现以及与任意`HTML`或`XML`文档交互的`API`
- DOM是载入到浏览器中的`文档模型`
- 文档以`节点树`的形式来表现
- 每个节点代表文档的构成部分（例如：页面元素、字符串或注释等等）


`几个关键字`
- 文档（document）：一个页面就是一个文档，html文件、XML文件
- 节点（node）：文档中所有内容都是节点，包括标签、属性、文本、注释等
- 元素（element）：文档中所有标签都是元素
- 三者关系：文档包含节点，节点包含元素


`DOM树`
- 以 HTML Document 为根节点
- 其余节点为子节点
- 组成一个树状的数据结构

<img :src="$withBase('/assets/notes-images/codes/dom树.png')" alt="dom树" width="800">


### 思考
- 给一个 DOM 树
- 深度优先遍历，结果会输出什么？
- 广度优先遍历，结果会输出什么？



### 实现

```js
function visitNode(node) {
    // 注释 打印注释内容
    if (node instanceof Comment) {
        console.log('Comment node: ' + node.text);
    }
    // 文本 打印文本内容
    if (node instanceof Text) {
        console.log('Text node: ' + node.text);
    }
    // 元素 打印标签名
    if (node instanceof HTMLElement) {
        console.log('HTMLElement node: ' + `<${node.tagName.toLowerCase()}>`);
    }
}


/**
 * @description 深度优先遍历 使用递归
 * @param node node节点
*/
function depthFirstTraverse(node) {
    visitNode(node);

    const childNodes = node.childNodes;
    if (childNodes.length) {
        childNodes.forEach(cNode => depthFirstTraverse(cNode));
    }
}


/**
 * @description 广度优先遍历 使用队列 数组模拟队列, 先进先出
 * @param node node节点
*/
function breadFirstTraverse(node) {
    const queue = [];
    // 根节点入队
    queue.unshift(node);

    while(queue.length) {
        // 出队
        const curNode = queue.pop();
        visitNode(curNode);

        // 子节点逐个入队
        const childNodes = node.childNodes;
        if (childNodes.length) {
            childNodes.forEach(cNode => queue.unshift(cNode));
        }
    }
}
```


