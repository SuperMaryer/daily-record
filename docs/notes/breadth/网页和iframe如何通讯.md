
# 网页和iframe如何通讯

### 如何通讯
- 使用 postMessge通讯
- 注意跨域的限制和判断
 
父页面 index.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        index page
        <button id="btn1">发送消息</button>
    </div>
    <iframe src="./child" frameborder="0" id="iframe1"></iframe>
    <script>
        const btn1 = document.getElementById('btn1');
        btn1.addEventListener('click', () =>{
            console.log('index btn1 clicked');
            window.iframe1.contentWindow.postMessage('i am index', '*');
        })
        window.addEventListener('message', event => {
            console.log('orgin', event.orgin); // 来源的域名
            console.log('index received', event.data);
        })
    </script>
</body>
</html>

```

子页面 child.html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        child page
        <button id="btn2">发送消息</button>
    </div>
    <script>
        const btn1 = document.getElementById('btn2');
        btn1.addEventListener('click', () =>{
            console.log('child btn2 clicked');
            window.parent.postMessage('i am child', '*');
        })
        window.addEventListener('message', event => {
            console.log('orgin', event.orgin); // 判断 origin 合法性
            console.log('child received', event.data);
        })
    </script>
</body>
</html>

```