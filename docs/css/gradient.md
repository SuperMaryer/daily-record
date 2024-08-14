### 渐变文字
- 颜色渐变
- 背景渐变

#### 设置三部曲
- 文字设为透明
- background-image 给文字设置背景装饰，可以是渐变、图片等
- background-clip 把背景装饰剪裁成文字的形状


#### 渐变色 + clip

##### 示例1
<html lang="en">
<style>
    .text-1-1 {
        /* background-image */
        color: transparent;
        background-image: linear-gradient(to right, #218bff, #c084fc, #db2777);
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
    }
    .text-1-2 {
        /* background-image */
        color: transparent;
        background-image: repeating-linear-gradient(-57deg, #218bff, #218bff 3px, #c084fc 3px, #c084fc 6px);
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
    }
</style>
<body>
    <h2 class="text-1-1">渐变效果1-1：hello world 使用background-image</h2>
    <h2 class="text-1-2">渐变效果1-2: hello world 使用background-image</h2>
</body>
</html>

::: details 点击查看代码: 效果1
``` html
    <h2 class="text-1-1">渐变效果1-1：hello world 使用background-image</h2>
    <h2 class="text-1-2">渐变效果1-2: hello world 使用background-image</h2>
```
``` css
    .text-1-1 {
        /* background-image */
        color: transparent;
        background-image: linear-gradient(to right, #218bff, #c084fc, #db2777);
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
    }
    .text-1-2 {
        /* background-image */
        color: transparent;
        background-image: repeating-linear-gradient(-57deg, #218bff, #218bff 3px, #c084fc 3px, #c084fc 6px);
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
    }
```
:::

##### 示例2
<html lang="en">
<style>
    /* 使用background, 需要注意要先设置background 后设置background-clip，否则background会将background-clip重新设置为默认值border-box */
    /* 先clip 后background */
    .text-2-1 {
        color: transparent;
        background-clip: text; // Safari, FF
        -webkit-background-clip: text; // Edge, Chrome
        background: linear-gradient(to right, #218bff, #c084fc, #db2777);
    }
    /* 先background 后clip */
    .text-2-2 {
        color: transparent;
        background: linear-gradient(to right, #218bff, #c084fc, #db2777);
        background-clip: text; // Safari, FF
        -webkit-background-clip: text; // Edge, Chrome
    }
</style>
<body>
    <h2 class="text-2-1">渐变效果2-1: hello world 使用background，先clip 后background</h2>
    <h2 class="text-2-2">渐变效果2-2: hello world 使用background，先background 后clip</h2>
</body>
</html>

::: details 点击查看代码: 效果2
``` html
    <h2 class="text-2-1">渐变效果2-1: hello world 使用background，先clip 后background</h2>
    <h2 class="text-2-2">渐变效果2-2: hello world 使用background，先background 后clip</h2>
```
``` css
    /* 使用background, 需要注意要先设置background 后设置background-clip，否则background会将background-clip重新设置为默认值border-box */
    /* 先clip 后background */
    .text-2-1 {
        color: transparent;
        background-clip: text; // Safari, FF
        -webkit-background-clip: text; // Edge, Chrome
        background: linear-gradient(to right, #218bff, #c084fc, #db2777);
    }
    /* 先background 后clip */
    .text-2-2 {
        color: transparent;
        background: linear-gradient(to right, #218bff, #c084fc, #db2777);
        background-clip: text; // Safari, FF
        -webkit-background-clip: text; // Edge, Chrome
    }
```
:::

##### 示例3
<html lang="en">
<style>
    /* 效果-渐变-3 复杂bg */
    .text-3 {
        color: transparent;
        -webkit-background-clip: text; /* Edge, Chrome */
        background-clip: text; /* Safari, FF */
        background-color: #e5e5f7;
        opacity: 0.8;
        background-image: 
            linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), 
            linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777);
        background-size: 20px 35px;
        background-position: 0 0, 
            0 0, 
            10px 18px, 
            10px 18px, 
            0 0, 
            10px 18px;
        -webkit-text-stroke: 1px #444cf7;
        text-stroke: 1px #444cf7;
    }
</style>
<body>
    <h2 class="text-3">效果-渐变-3-1 hello world 复杂bg 透明度 描边</h2>
</body>
</html>

::: details 点击查看代码: 效果3
``` html
    <h2 class="text-3-1">效果-渐变-3-1 hello world 复杂bg 透明度 描边</h2>
```
``` css
    /* 效果-渐变-3 复杂bg */
    .text-3 {
        color: transparent;
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
        opacity: 0.8; // 文字透明度
        background-color: #e5e5f7; // 文字背景
        text-stroke: 1px #444cf7; // 文字描边
        background-image: 
            linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), 
            linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), 
            linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777);
        background-size: 20px 35px;
        background-position:
            0 0, 
            0 0, 
            10px 18px, 
            10px 18px, 
            0 0, 
            10px 18px;
    }
```
:::


#### 图片 + clip

##### 示例4
<html lang="en">
<style>
    /* 效果-图片 */
    .text-4 {
        font-size: 40px;
        color: transparent;
        background-image: url("/assets/css-images/text/text-bg-1.png");
        -webkit-background-clip: text;
        background-clip: text;
        background-size: contain;
        /* text-stroke: 1px #7512d7; */
        /* -webkit-text-stroke: 1px #7512d7; */
        /* 也可以用filter来加强文字的立体感 */
        filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.8)); 
    }
</style>
<body>
    <div class="text-4">渐变效果4：hello world 使用 背景图片</div>
</body>
</html>

::: details 点击查看代码: 效果4
``` html
    <div class="text-4">渐变效果4：hello world 使用 背景图片</div>
```
``` css
    /* 效果-图片 */
    .text-4 {
        font-size: 40px;
        color: transparent;
        -webkit-background-clip: text; // Edge, Chrome
        background-clip: text; // Safari, FF
        background-image: url("/assets/css-images/text/text-bg-1.png");
        background-size: contain; // 强制背景图片适应文字
        text-stroke: 1px #7512d7; // 文字描边
        -webkit-text-stroke: 1px #7512d7;

        /* 也可以用filter来加强文字的立体感 */
        /* filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.8));  */
    }
```
:::


#### css背景渐变效果网站推荐
- [css背景渐变效果网站推荐](https://cloud.tencent.com/developer/article/1983294)