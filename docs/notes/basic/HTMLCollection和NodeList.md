
# HTMLCollection和NodeList

### 区别
- HTMLCollection 是 Element 的集合，NodeList 是 Node 的集合
- HTMLCollection 会包含 Text 和 Comment 节点， Element 仅包含 Element 节点
- 获取 Node 和 Element 的返回结果可能不一样：elem.childNodes 和 elem.children


HTMLCollection 和 NodeList   
<img :src="$withBase('/assets/notes-images/basic/node.png')" alt="node" width="800">

``` js
class Node {}

// document
class Document extends Node {}
class DocumentFragment extends Node {}

// text 和 comment 
class CharacterData extends Node {}
class Comment extends CharacterData {}
class Text extends CharacterData {}

// elem
class Element extends Node {}
class HTMLElement extends Element {}
class HTMLDivElement extends HTMLElement {}
class HTMLInputElement extends HTMLElement {}

// ...

```