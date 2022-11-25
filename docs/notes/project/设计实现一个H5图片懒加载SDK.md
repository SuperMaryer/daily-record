
# 设计实现一个H5图片懒加载SDK

### 分析
- 定义`<img src="loading.png" data-src="xxx.png">`
- 页面滚动，图片露出时，将data-src赋值给src
- 滚动要节流

### 获取图片定位
- 元素的位置 ele.getBoundingClientRect()
- 图片 top 和 window.innerHeight

### 实现
::: details 点击查看
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>img lazy load</title>
    <style>
        .item-container {
            border-top: 1px solid #ccc;
            margin-bottom: 20px;
        }
        .item-container img {
            width: 100%;
            border: 1px solid #eee;
            border-radius: 10px;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <h1>img lazy load</h1>
    <div class="item-container">
        <p>新闻1</p>
        <img src="./img/loading.gif" data-src="./img/animal1.jpeg"/>
    </div>

    <div class="item-container">
        <p>新闻2</p>
        <img src="./img/loading.gif" data-src="./img/animal2.webp"/>
    </div>

    <div class="item-container">
        <p>新闻3</p>
        <img src="./img/loading.gif" data-src="./img/animal3.jpeg"/>
    </div>

    <div class="item-container">
        <p>新闻4</p>
        <img src="./img/loading.gif" data-src="./img/animal4.webp"/>
    </div>

    <div class="item-container">
        <p>新闻5</p>
        <img src="./img/loading.gif" data-src="./img/animal5.webp"/>
    </div>

    <div class="item-container">
        <p>新闻6</p>
        <img src="./img/loading.gif" data-src="./img/animal6.webp"/>
    </div>

    <script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
    <script>
        function mapImagesAndTryLoad() {
            const images = document.querySelectorAll('img[data-src]')
            if (images.length === 0) return

            images.forEach(img => {
                // 获取图片位置，判断是否露出来
                const rect = img.getBoundingClientRect()
                if (rect.top < window.innerHeight) {
                    // 露出来
                    // console.info('loading img', img.dataset.src)
                    img.src = img.dataset.src
                    // 移除 data-src 属性，为了下次执行时减少计算成本
                    img.removeAttribute('data-src') 
                }
            })
        }

        // 滚动节流
        window.addEventListener('scroll', _.throttle(() => {
            mapImagesAndTryLoad()
        }, 100))
        
        // 进入页面立即执行一次，否则不滚动不加载当前视域的图片
        mapImagesAndTryLoad()
    </script>
</body>
</html>
```
:::