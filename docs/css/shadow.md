### 文字阴影
text-shadow: 给文本设置阴影

text-shadow: h-offset y-offset blur color;

- h-offset：水平偏移量，正右负左
- y-offset：垂直偏移量，正上负下
- blur：阴影模糊半径，越大阴影越模糊
- color：阴影颜色

#### 常规阴影

<html lang="en">
<style>
    .flex-wrap {
        display: flex;
        flex-wrap: wrap;
        .flex-item {
            width: 25%;
            text-align: center;
            margin-bottom: 20px;
        }
    }
    .flex-item > div{
        color: skyblue;
        font-size: 30px;
        font-weight: 600;
        text-align: center;
    }
    .text-shadow-1-1 {
        text-shadow: 5px 5px 5px #9990;
    }
    .text-shadow-1-2 {
        text-shadow: 5px -5px 5px #999;
    }
    .text-shadow-1-3 {
        text-shadow: -5px 5px 5px #999;
    }
    .text-shadow-1-4 {
        text-shadow: -5px -5px 5px #999;
    }
    .text-shadow-2-1 {
        text-shadow: 5px 5px 2px pink;
    }
    .text-shadow-2-2 {
        text-shadow: 5px 5px 5px pink;
    }
    .text-shadow-2-3 {
        text-shadow: 5px 5px 10px pink;
    }
    .text-shadow-2-4 {
        text-shadow: 5px 5px -3px pink;
    }
    .text-shadow-3-1 {
        text-shadow: 5px 5px 5px #999;
    }
    .text-shadow-3-2 {
        text-shadow: 5px 5px 5px pink;
    }
    .text-shadow-3-3 {
        text-shadow: 5px 5px yellow;
    }
    .text-shadow-3-4 {
        text-shadow: 5px 5px 5px orange;
    }
</style>
<body>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-shadow-1-1">右下</div>
            <p>text-shadow: 5px 5px 5px #999;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-1-2">右上</div>
            <p>text-shadow: 5px -5px 5px #999;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-1-3">左下</div>
            <p>text-shadow: -5px 5px 5px #999;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-1-4">左上</div>
            <p>text-shadow: -5px -5px 5px #999;</p>
        </div>
    </div>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-shadow-2-1">blur</div>
            <p>text-shadow: 5px 5px 2px pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-2-2">blur</div>
            <p>text-shadow: 5px 5px 5px pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-2-3">blur</div>
            <p>text-shadow: 5px 5px 10px pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-2-4">blur</div>
            <p>text-shadow: 5px 5px -3px pink;</p>
        </div>
    </div>
    <div class="flex-wrap">
        <div class="flex-item">
            <div class="text-shadow-3-1">color</div>
            <p>text-shadow: 5px 5px 5px #999;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-3-2">pink</div>
            <p>text-shadow: 5px 5px 5px pink;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-3-3">yellow</div>
            <p>text-shadow: 5px 5px 5px yellow;</p>
        </div>
        <div class="flex-item">
            <div class="text-shadow-3-4">orange</div>
            <p>text-shadow: 5px 5px 5px orange</p>
        </div>
    </div>
</body>
</html>

#### 长阴影-常规实现
<div class="shadow shadow-long">long shadow</div>

::: details 点击查看代码
``` html
    <div class="shadow-long">long shadow</div>
```
``` css
    .shadow-long {
        font-size: 120px;
        color: #ff6233;
        text-shadow: 0px 0px #992400, 1px 1px rgba(152, 36, 1, 0.98), 2px 2px rgba(151, 37, 2, 0.96), 3px 3px rgba(151, 37, 2, 0.94), 4px 4px rgba(150, 37, 3, 0.92), 5px 5px rgba(149, 38, 4, 0.9), 6px 6px rgba(148, 38, 5, 0.88), 7px 7px rgba(148, 39, 5, 0.86), 8px 8px rgba(147, 39, 6, 0.84), 9px 9px rgba(146, 39, 7, 0.82), 10px 10px rgba(145, 40, 8, 0.8), 11px 11px rgba(145, 40, 8, 0.78), 12px 12px rgba(144, 41, 9, 0.76), 13px 13px rgba(143, 41, 10, 0.74), 14px 14px rgba(142, 41, 11, 0.72), 15px 15px rgba(142, 42, 11, 0.7), 16px 16px rgba(141, 42, 12, 0.68), 17px 17px rgba(140, 43, 13, 0.66), 18px 18px rgba(139, 43, 14, 0.64), 19px 19px rgba(138, 43, 15, 0.62), 20px 20px rgba(138, 44, 15, 0.6), 21px 21px rgba(137, 44, 16, 0.58), 22px 22px rgba(136, 45, 17, 0.56), 23px 23px rgba(135, 45, 18, 0.54), 24px 24px rgba(135, 45, 18, 0.52), 25px 25px rgba(134, 46, 19, 0.5), 26px 26px rgba(133, 46, 20, 0.48), 27px 27px rgba(132, 47, 21, 0.46), 28px 28px rgba(132, 47, 21, 0.44), 29px 29px rgba(131, 48, 22, 0.42), 30px 30px rgba(130, 48, 23, 0.4), 31px 31px rgba(129, 48, 24, 0.38), 32px 32px rgba(129, 49, 24, 0.36), 33px 33px rgba(128, 49, 25, 0.34), 34px 34px rgba(127, 50, 26, 0.32), 35px 35px rgba(126, 50, 27, 0.3), 36px 36px rgba(125, 50, 28, 0.28), 37px 37px rgba(125, 51, 28, 0.26), 38px 38px rgba(124, 51, 29, 0.24), 39px 39px rgba(123, 52, 30, 0.22), 40px 40px rgba(122, 52, 31, 0.2), 41px 41px rgba(122, 52, 31, 0.18), 42px 42px rgba(121, 53, 32, 0.16), 43px 43px rgba(120, 53, 33, 0.14), 44px 44px rgba(119, 54, 34, 0.12), 45px 45px rgba(119, 54, 34, 0.1), 46px 46px rgba(118, 54, 35, 0.08), 47px 47px rgba(117, 55, 36, 0.06), 48px 48px rgba(116, 55, 37, 0.04), 49px 49px rgba(116, 56, 37, 0.02), 50px 50px rgba(115, 56, 38, 0);
    }
    
```
:::

#### 长阴影-使用scss实现

::: details 点击查看代码
``` html
    <div class="s-shadow-long">long shadow</div>
```
``` css
@function makelongshadow($color, $step) {
    $val: 0px 0px $color;

    @for $i from 1 through $step {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}
.shadow-long {
    text-shadow: makeLongShadow(hsl(14, 100%, 30%), 50);
}
```

- fade-out: 提升颜色的透明度，取值在 0-1 之间
- desaturate: 调低一个颜色的饱和度后产生一个新的色值
- hsl(hue, saturation, lightness) 通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色。
:::

#### 立体阴影

<div class="shadow shadow-cube">stereoscopic shadow</div>

::: details 点击查看代码
``` html
    <div class="shadow-cube">stereoscopic shadow</div>
```
``` css
    .shadow-cube {
        text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212;
    }
    
```
:::

#### 内嵌阴影

<div class="shadow shadow-embed">embed shadow</div>

::: details 点击查看代码
``` html
    <div class="shadow-embed">embed shadow</div>
```
``` css
    .shadow-embed {
        color: #202020;
        background-color: #b987ff;
        letter-spacing: 30px;
        text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
    }
    
```
:::


#### 氖光效果

<div class="shadow shadow-neon">neon shadow</div>

::: details 点击查看代码
``` html
    <div class="shadow-neon">shadow-neon shadow</div>
```
``` css
    .shadow-neon {
        color: #fff;
        text-shadow: 
            0 0 10px #0ebeff,
            0 0 20px #0ebeff,
            0 0 50px #0ebeff,
            0 0 100px #0ebeff,
            0 0 200px #0ebeff
    }
    
```
:::

<style>
    .shadow {
        font-size: 50px;
    }
    .shadow-normal {
        text-shadow: 5px  5px 3px #999;
    }
    .shadow-long {
        font-size: 120px;
        color: #ff6233;
        text-shadow: 0px 0px #992400, 1px 1px rgba(152, 36, 1, 0.98), 2px 2px rgba(151, 37, 2, 0.96), 3px 3px rgba(151, 37, 2, 0.94), 4px 4px rgba(150, 37, 3, 0.92), 5px 5px rgba(149, 38, 4, 0.9), 6px 6px rgba(148, 38, 5, 0.88), 7px 7px rgba(148, 39, 5, 0.86), 8px 8px rgba(147, 39, 6, 0.84), 9px 9px rgba(146, 39, 7, 0.82), 10px 10px rgba(145, 40, 8, 0.8), 11px 11px rgba(145, 40, 8, 0.78), 12px 12px rgba(144, 41, 9, 0.76), 13px 13px rgba(143, 41, 10, 0.74), 14px 14px rgba(142, 41, 11, 0.72), 15px 15px rgba(142, 42, 11, 0.7), 16px 16px rgba(141, 42, 12, 0.68), 17px 17px rgba(140, 43, 13, 0.66), 18px 18px rgba(139, 43, 14, 0.64), 19px 19px rgba(138, 43, 15, 0.62), 20px 20px rgba(138, 44, 15, 0.6), 21px 21px rgba(137, 44, 16, 0.58), 22px 22px rgba(136, 45, 17, 0.56), 23px 23px rgba(135, 45, 18, 0.54), 24px 24px rgba(135, 45, 18, 0.52), 25px 25px rgba(134, 46, 19, 0.5), 26px 26px rgba(133, 46, 20, 0.48), 27px 27px rgba(132, 47, 21, 0.46), 28px 28px rgba(132, 47, 21, 0.44), 29px 29px rgba(131, 48, 22, 0.42), 30px 30px rgba(130, 48, 23, 0.4), 31px 31px rgba(129, 48, 24, 0.38), 32px 32px rgba(129, 49, 24, 0.36), 33px 33px rgba(128, 49, 25, 0.34), 34px 34px rgba(127, 50, 26, 0.32), 35px 35px rgba(126, 50, 27, 0.3), 36px 36px rgba(125, 50, 28, 0.28), 37px 37px rgba(125, 51, 28, 0.26), 38px 38px rgba(124, 51, 29, 0.24), 39px 39px rgba(123, 52, 30, 0.22), 40px 40px rgba(122, 52, 31, 0.2), 41px 41px rgba(122, 52, 31, 0.18), 42px 42px rgba(121, 53, 32, 0.16), 43px 43px rgba(120, 53, 33, 0.14), 44px 44px rgba(119, 54, 34, 0.12), 45px 45px rgba(119, 54, 34, 0.1), 46px 46px rgba(118, 54, 35, 0.08), 47px 47px rgba(117, 55, 36, 0.06), 48px 48px rgba(116, 55, 37, 0.04), 49px 49px rgba(116, 56, 37, 0.02), 50px 50px rgba(115, 56, 38, 0);
    }
    .shadow-cube {
        font-size: 100px;
        color: #dedfdc;
        text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212;
    }
    .shadow-embed {
        font-size: 100px;
        color: #202020;
        text-align: center;
        background-color: #2d2d2d;
        text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
    }
    .shadow-neon {
        font-size: 80px;
        color: #fff;
        text-shadow: 
            0 0 10px #0ebeff,
            0 0 20px #0ebeff,
            0 0 50px #0ebeff,
            0 0 100px #0ebeff,
            0 0 200px #0ebeff
    }
</style>


#### 阴影工具
- [在线调试](https://tool.ip138.com/csstextshadow/)
- [Shaddows Brumm](https://shadows.brumm.af/)
- [Box Shadow](https://box-shadow.art/)