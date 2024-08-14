### 强调装饰 
text-emphasis: 文字上/下方添加不同的强调装饰, 标记会除去空格
- text-emphasis
- text-emphasis-position


<html lang="en">
<style>
    .flex-wrap {
        display: flex;
        flex-wrap: wrap;
        .flex-item {
            width: 33%;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    .flex-item > div{
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        /* letter-spacing: 2px; */
    }
    /* .flex-wrap-1 .flex-item{
        width: 50%;
    } */
    .text-emphasis-0 {
        text-emphasis: open;
    }
    .text-emphasis-1 {
        text-emphasis: circle;
    }
    .text-emphasis-2 {
        text-emphasis: dot pink;
    }
    .text-emphasis-3 {
        text-emphasis: 'x' blue;
    }
    .text-emphasis-4 {
        text-emphasis: '🚩';
    }
    .text-position-0 {
        text-emphasis: '🌞';
    }
    .text-position-1 {
        text-emphasis: '🌞';
        text-emphasis-position: over;
    }
    .text-position-2 {
        text-emphasis: '🌞';
        text-emphasis-position: under;
    }
    .text-position-3 {
        text-emphasis: '√';
        writing-mode: vertical-rl;
        text-emphasis-position: over;
    }
    .text-position-4 {
        text-emphasis: '√';
        writing-mode: vertical-lr;
        text-emphasis-position: over left;
    }
    .text-position-5 {
        text-emphasis: '√';
        writing-mode: vertical-lr;
        text-emphasis-position: over right;
    }
    .text-position-6 {
        text-emphasis: circle blue;
        writing-mode: vertical-lr;
        text-orientation: upright;
        text-emphasis-position: under;
    }
    .text-position-7 {
        text-emphasis: circle blue;
        writing-mode: vertical-lr;
        text-orientation: upright;
        text-emphasis-position: under left;
    }
    .text-position-8 {
        text-emphasis: circle blue;
        writing-mode: vertical-lr;
        text-orientation: upright;
        text-emphasis-position: under right;
    }
</style>
<body>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-emphasis-0">open</div>
            <p>text-emphasis: open;</p>
        </div>
        <div class="flex-item">
            <div class="text-emphasis-1">c i rcle</div>
            <p>text-emphasis: circle;</p>
        </div>
        <div class="flex-item">
            <div class="text-emphasis-2">dot</div>
            <p>text-emphasis: dot pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-emphasis-3">emphasis</div>
            <p>text-emphasis: '' blue;</p>
        </div>
        <div class="flex-item">
            <div class="text-emphasis-4">victory</div>
            <p>text-emphasis: '🚩';</p>
        </div>
    </div>
    <div class="flex-wrap flex-wrap-1">
        <div class="flex-item">
            <div class="text-position-0">over</div>
            <p>text-emphasis: '🌞';</p>
        </div>
        <div class="flex-item">
            <div class="text-position-1">over</div>
            <p>text-emphasis: '🌞';</p>
            <p>text-emphasis-position: over;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-2">under</div>
            <p>text-emphasis: '🌞';</p>
            <p>text-emphasis-position: under;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-3">ABCD</div>
            <p>text-emphasis: '√'</p>
            <p>text-emphasis-position: over;</p>
            <p>writing-mode: vertical-lr;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-4">ABCD</div>
            <p>text-emphasis: '√'</p>
            <p>text-emphasis-position: over left;</p>
            <p>writing-mode: vertical-lr;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-5">ABCD</div>
            <p>text-emphasis: '√'</p>
            <p>text-emphasis-position: over right;</p>
            <p>writing-mode: vertical-lr;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-6">ABCD</div>
            <p>text-emphasis: circle blue;</p>
            <p>text-emphasis-position: under;</p>
            <p>writing-mode: vertical-lr;</p>
            <p>text-orientation: upright;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-7">ABCD</div>
            <p>text-emphasis: circle blue;</p>
            <p>text-emphasis-position: over left;</p>
            <p>writing-mode: vertical-lr;</p>
            <p>text-orientation: upright;</p>
        </div>
        <div class="flex-item">
            <div class="text-position-8">ABCD</div>
            <p>text-emphasis: circle blue;</p>
            <p>text-emphasis-position: over right;</p>
            <p>writing-mode: vertical-lr;</p>
            <p>text-orientation: upright;</p>
        </div>
    </div>
</body>
</html>


::: details writing-mode
文本在水平或垂直方向上如何排布 
writing-mode: horizontal-tb | vertical-rl | vertical-lr | - sideways-rl | sideways-lr
- horizontal-tb：水平方向自上而下的书写方式。即 left-right-top-bottom
- vertical-rl：垂直方向自右而左的书写方式。即 top-bottom-right-left
- vertical-lr：垂直方向内内容从上到下，水平方向从左到右
- sideways-rl：内容垂直方向从上到下排列
- sideways-lr：内容垂直方向从下到上排列
:::



::: details text-orientation
text-orientation CSS 属性设定行中字符的方向。但它仅影响纵向模式（当 writing-mode 的值不是horizontal-tb）下的文本。

- mixed: 默认值。顺时针旋转水平书写的字符 90°，将垂直书写的文字自然布局。
- upright: 将水平书写的字符自然布局（直排），包括垂直书写的文字（as well as the glyphs for vertical - scripts）。注意这个关键字会导致所有字符被视为从左到右，也就是 direction 被强制设为 ltr。
- sideways: 所有字符被布局为与水平方式一样，但是整行文本被顺时针旋转 90°。
- sideways-right: 处于兼容目的，sideways 的别名。
:::


