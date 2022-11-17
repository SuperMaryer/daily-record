
# 重绘repaint和重排reflow

### 触发
动态网页随时都会触发重绘和重排
- 网页动画
- Modal Dialog 弹框
- 增加/删除元素，显示/隐藏元素

### 重绘 repaint
- 重新绘制
- eg: 颜色、背景色
- 绘制的是元素外观的改变
- 元素的尺寸、定位不变，并不会影响其他元素的位置

### 重排 reflow
- 重新排列
- eg: 高度变小，可能会使相邻元素位置上移
- 需要重新计算尺寸和布局，可能会影响其他元素的位置

### 如何减少重排

`注意：` 重排比重绘影响更大，消耗也更大，所以，要尽量避免无意义的重排

- 集中修改样式，或者直接切换`css类名` => 集中修改、一次重排，多次修改、多次重排
- 复杂的多次变化，修改之前先设置`diaplay:none`，脱离文档流，修改完后再显示
- 使用 `BFC` 特性，不影响其他元素位置。 => BFC 内部元素改变不影响外部元素布局
- 优化动画，使用`CSS3和reauestAnimationFrame`。 => 能够触发浏览器自身的动画优化机制
- 批量操作DOM，使用`文档碎片`（createDocumentFragment）或虚拟节点对象
- 频繁触发（resize、scroll等）使用`防抖节流`


### 触发BFC的条件
- 根节点`<html>`
- float: left/right
- display: inline-block/table/table-row/table-cell
- diaplay: flex/grid
- overflow: auto/hidden/scroll
- position: absolute/fixed

### 创建文档碎片
使用`document.createDocumentFragment()`创建文档碎片

::: details 点击查看示例代码
``` js
    var url = document.getElementById('ul')
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < 50; i++) {
        var li = document.createElement('li')
        li.innerHTML = 'hellow' + i
        fragment.appendChild(li)
    }
    ul.appendChild(fragment)
```
::: 
