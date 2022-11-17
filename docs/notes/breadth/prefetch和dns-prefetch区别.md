
# prefetch和dns-prefetch区别

### 区别
- prefetch：资源预获取，和 preload 相关
- dns-prefetch：DNS 预查询，和 preconnect 相关

### preload 和 prefetch
- preload: 资源在当前页面使用，会优先加载
- prefetch: 资源在未来页面使用，空闲时加载 

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- preload 和 prefetch -->
    <link rel="preload" href="style.css" as="style">
    <link rel="preload" href="main.js" as="script">

    <link rel="prefetch" href="other.js" as="script">

    <!-- 引用 css -->
    <link rel="stylesheet" href="style.css" crossorigin="">
</head>
<body>
    <!-- 引用 js -->
    <script src="main.js" defer></script>
</body>
</html>
```

### dns-prefetch 和 preconnect
- dns-prefetch: DNS 预查询
- preconnect: DNS 预连接

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--dns-prefetch 和 preconnect -->
    <link rel="dns-prefetch" href="https:fonts.gstatic.com/">
    <link rel="preconnect" href="https:fonts.gstatic.com/" crossorigin="">
</head>
</html>
```
