### 文字装饰
text-decoration
- text-decoration-line  线类型，上方 下方 贯穿文本
- text-decoration-color  颜色
- text-decoration-style  solid实线、double双实线、dashed虚线、dotted点线、wavy波浪线
- text-decoration-thickness 粗细
- text-decoration-offset 偏移量

#### 静态效果

<html lang="en">
<style>
    .flex-wrap {
        display: flex;
        flex-wrap: wrap;
        .flex-item {
            width: 50%;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    .flex-item > div{
        font-size: 24px;
        font-weight: 600;
    }
    .text-line-0 {
        text-decoration-line: none;
    }
    .text-line-1 {
        text-decoration-line: underline;
        text-decoration-color: pink;
    }
    .text-line-2 {
        text-decoration-line: overline;
        text-decoration-color: pink;
    }
    .text-line-3 {
        text-decoration-line: line-through;
        text-decoration-color: skyblue;
    }
    .text-line-1-2 {
        text-decoration-line: underline overline;
        text-decoration-color: #a0aaff;
    }
    .text-line-1-2-3 {
        text-decoration-line: underline overline line-through;
    }
    .text-style {
        text-decoration-line: underline;
        text-decoration-color: pink;
    }
    .text-style-1 {
        text-decoration-style: solid;
    }
    .text-style-2 {
        text-decoration-style: dotted;
    }
    .text-style-3 {
        text-decoration-style: dashed;
    }
    .text-style-4 {
        text-decoration-style: wavy;
    }
    .text-style-5 {
        text-decoration-style: double;
    }
    .text-offset-1 {
        text-decoration-line: underline overline;
        text-decoration-color: skyblue;
        text-decoration-style: double;
    }
    .text-offset-2 {
        text-decoration-line: underline overline;
        text-decoration-color: skyblue;
        text-decoration-style: double;
        text-decoration-offset: 6px;
    }
    .text-offset-3 {
        text-decoration-line: overline;
        text-decoration-color: skyblue;
        text-decoration-style: wavy;
    }
    .text-offset-4 {
        text-decoration-line: overline;
        text-decoration-color: skyblue;
        text-decoration-style: wavy;
        text-decoration-offset: 20px;
    }
</style>
<body>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-line-0">none</div>
            <p>text-decoration-line: none;</p>
        </div>
        <div class="flex-item">
            <div class="text-line-1">underline</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-line-2">overline</div>
            <p>text-decoration-line: overline;</p>
            <p>text-decoration-color: skyblue;</p>
        </div>
        <div class="flex-item">
            <div class="text-line-3">line-through</div>
            <p>text-decoration-line: line-through;</p>
            <p>text-decoration-color: #a0aaff;</p>
        </div>
        <div class="flex-item">
            <div class="text-line-1-2">underline overline</div>
            <p>text-decoration-line: underline overline;</p>
        </div>
        <div class="flex-item">
            <div class="text-line-1-2-3">underline overline line-through</div>
            <p>text-decoration-line: underline overline line-through;</p>
        </div>
    </div>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-style-1">solid</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
            <p>text-decoration-style: solid;</p>
        </div>
        <div class="flex-item">
            <div class="text-style text-style-2">dotted</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
            <p>text-decoration-style: dotted;</p>
        </div>
        <div class="flex-item">
            <div class="text-style text-style-3">dashed</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
            <p>text-decoration-style: dashed;</p>
        </div>
        <div class="flex-item">
            <div class="text-style text-style-4">wavy</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
            <p>text-decoration-style: wavy;</p>
        </div>
        <div class="flex-item">
            <div class="text-style text-style-5">double</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: pink;</p>
            <p>text-decoration-style: double;</p>
        </div>
    </div>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-offset-1">double-offset</div>
            <p>text-decoration-line: underline overline;</p>
            <p>text-decoration-color: skyblue;</p>
            <p>text-decoration-style: double;</p>
        </div>
        <div class="flex-item">
            <div class="text-offset-2">double-offset</div>
            <p>text-decoration-line: underline overline;</p>
            <p>text-decoration-color: skyblue;</p>
            <p>text-decoration-style: double;</p>
            <p>text-decoration-offset: 6px;</p>
        </div>
        <div class="flex-item">
            <div class="text-offset-3">wavy</div>
            <p>text-decoration-line: overline;</p>
            <p>text-decoration-color: skyblue;</p>
            <p>text-decoration-style: wavy;</p>
        </div>
        <div class="flex-item">
            <div class="text-offset-4">wavy-offset</div>
            <p>text-decoration-line: underline;</p>
            <p>text-decoration-color: skyblue;</p>
            <p>text-decoration-style: wavy;</p>
            <p>text-decoration-offset: 20px;</p>
        </div>
    </div>
</body>
</html>
#### 动态效果

<html lang="en">
<style>
    .wavy-text {
        position: relative;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
        line-height: 2;
        width: fit-content;
    }
    .wavy-text::before {
        content: attr(data-content);
        position: absolute;
        top: 0;
        left: 0;
        color: transparent;
        white-space: nowrap;
        text-decoration-line: underline;
        text-decoration-style: wavy;
        text-decoration-color: pink;
    }
    .wavy-text:hover::before {
        animation: wavy 3s linear infinite;
    }
    @keyframes wavy {
        0% {
            transform: translate(0);
        }
        100% {
            transform: translate(-40%);
        }
    }
</style>
<body>
    <div class="wavy-text" data-content="生活就像海洋只有意志坚强的人才能到达生活的彼岸生活就像海洋只有意志坚强的人才能到达生活的彼岸">生活就像海洋，只有意志坚强的人才能到达生活的彼岸</div>
</body>
</html>


::: details 点击查看代码
``` html
<div class="wavy-text" data-content="生活就像海洋只有意志坚强的人才能到达生活的彼岸生活就像海洋只有意志坚强的人才能到达生活的彼岸">生活就像海洋，只有意志坚强的人才能到达生活的彼岸</div>
```
``` css
.wavy-text {
    position: relative;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    line-height: 2;
    width: fit-content;
}
.wavy-text::before {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    white-space: nowrap;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: pink;
}
.wavy-text:hover::before {
    animation: wavy 3s linear infinite;
}
@keyframes wavy {
    0% {
        transform: translate(0);
    }
    100% {
        transform: translate(-40%);
    }
}
```
:::


