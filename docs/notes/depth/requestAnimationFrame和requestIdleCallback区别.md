
# requestAnimationFrame和requestIdleCallback区别

### requestAnimationFrame
window.requestAnimationFrame(callback) 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

- 语法：window.requestAnimationFrame(callback)
- callback: 一次重绘之前更新动画帧所调用的函数 (即回调函数)
- 返回值: 一个 long 整数，请求 id，是回调列表中唯一的标识
- 停止：window.cancelAnimationFrame(id) 以取消回调函数


### requestIdleCallback
window.requestIdleCallback() 方法插入一个函数，这个函数将在浏览器空闲时期被调。
使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。
- 语法：window.requestAnimationFrame(callback)
- callback: 一个在事件循环空闲时即将被调用的函数的引用
- 返回值: 一个 ID，可以把它传入 Window.cancelIdleCallback() 方法来结束回调
- 停止：window.cancelIdleCallback(id) 以取消回调函数


### 区别
- requestAnimationFrame 每次渲染都会执行，高优
- requestIdleCallback 空闲时才执行，低优

### 都是宏任务
- 两者都是宏任务
- 要 DOM 渲染完才执行，宏任务


::: details 点击查看通过requestAnimationFrame 改变box宽度
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div id="box">hello world </div>
    <button id="btn">改变宽度</button>
    <script>
        const box = document.getElementById('box');
        const btn = document.getElementById('btn1');

        btn.addEventListener('click', () => {
            const maxWidth = 500;
            let curWidth = 100;

            const addWidth = function () {
                curWidth += 2;
                box.style.width = curWidth + 'px';
                if (curWidth < maxWidth) {
                    window.requestAnimationFrame(addWidth);
                }
            }
            addWidth();
        })
    </script>
</body>
</html>
```
:::

::: details 点击查看requestAnimationFrame、requestIdleCallback执行时机
``` js
window.onload = () => {
    console.log('start');
    setTimeout(() => {
        console.log('timeout');
    })

    window.requestAnimationFrame(() => {
        console.log('requestAnimationFrame');
    })

    window.requestIdleCallback(() => {
        console.log('requestIdleCallback');
    })

    console.log('end');
}

// 执行结果
// start
// test.html:35 
// test.html:24 
// test.html:28 
// test.html:32 
```
:::
