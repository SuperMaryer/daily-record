
# 从输入url到网页显示的完整过程

### 过程三部曲
- 网络请求：DNS解析、HTTP请求
- 解析：DOM树、CSSOM树，Render Tree
- 渲染：计算、绘制，同时执行JS

### 1. 网络请求：得到HTML源码
- DNS 查询到 IP ，简历TCP连接（三次握手）
- 浏览器发起 HTTP 请求
- 服务器响应，浏览器收到请求数据，得到 HTML 源码

### 2. 解析：字符串 => 结构化数据
- 解析HTML过程，遇到静态资源会继续发起网络请求（注意：可能会有强缓存，此时不用请求）
- JS、CSS、图片、视频等
- 解析：字符串 => 结构化数据
  > HTML 解析为 DOM 树    
  > CSS 解析为 CSSOM 树（style tree）   
  > 两者结合，形成 Render tree   

#### 解析过程很复杂  
- CSS 可能来源于`<style>`、`<link>`
- JS 可能内嵌、外链，还有defer、async逻辑
- img 可能内嵌（base64）、外链

####  优化解析 
- CSS 放到`<head>`中，不要异步加载 CSS
- JS 放到`<body>`最下面，或者合理使用 async、defer
- `<img>`提前定义 width height

### 3. 渲染：Render Tree 绘制到页面
- 计算各个 DOM 的尺寸、定位，最后绘制到页面
- 遇到 JS 可能会执行
- 异步 CSS、图片加载，可能会触发重新渲染

#### 过程  

<img :src="$withBase('/assets/notes-images/breadth/render-tree.png')" alt="render tree" width="700">


### 精简白话版
1. 输入网址
2. 发送到 DNS 服务器，获取域名对应的 Web 服务器对应的 IP 地址
3. 与 Web 服务器建立 TCP 连接
4. 浏览器向 Web 服务器发送 HTTP 请求
5. Web 服务器响应请求，返回指定 url 的数据（或错误信息，或重定向的新的url地址）
6. 浏览器下载 Web 服务器返回的数据，解析 HTML 源文件
7. 生成 DOM树，解析 CSS JS，渲染页面，直至显示完成 
