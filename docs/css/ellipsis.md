### 省略文字
- 文字超出部分用省略号代替
- 单行
- 多行

<html lang="en">
<style>
    .box1 {
        width: 300px;
        margin: 20px auto;
        color: pink;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .box2 {
        width: 300px;
        margin: 20px auto;
        color: skyblue;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        margin: 20px auto;
        -webkit-box-orient: vertical;
    }
    .box3 {
        width: 300px;
        margin: 20px auto;
        color: green;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
<body>
    <div class="box1">
        单行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
    </div>
    <div class="box2">
        多行-两行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
    </div>
    <div class="box3">
        多行-三行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
    </div>
</body>
</html>


::: details 点击查看代码
``` html
<div class="box1">
    单行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
</div>
<div class="box2">
    多行-两行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
</div>
<div class="box3">
    多行-三行：Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again. 
</div>
```
``` css
.box1 {
    width: 300px;
    margin: 20px auto;
    color: pink;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box2 {
    width: 300px;
    margin: 20px auto;
    color: skyblue;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.box3 {
    width: 300px;
    margin: 20px auto;
    color: green;
    overflow: hidden;
    display: -webkit-box; // 弹性伸缩盒子
    -webkit-line-clamp: 3; // 行数
    -webkit-box-orient: vertical; // 子元素的排列方式
}
```
:::