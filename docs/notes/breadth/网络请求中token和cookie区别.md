
# 网络请求中token和cookie区别

### cookie
浏览器存在用户端的一小段文本文件，纯文本格式

`cookie 特性`   
- HTTP 无状态，每次请求都要写道 cookie，以帮助识别身份
- 服务端可以向客户端set-cookie、cookie大小限制 4kb
- 默认有跨域限制，不可以跨域共享、传递cookie

`cookie本地存储`   
- HTML5之前 cookie 常被用于本地存储
- HTML5之后，推荐使用 localStorage、sessionStorage

`cookie 需要注意安全性`   
属性      | 作用     
--------- |----------
value     | 如果用于保存登录态，应该将该值加密，用户标识不可使用明文
http-only | 不能通过js访问cookie，仅用于http请求传输中携带，减少XSS攻击
secure    | 是否只能在协议为 HTTPS 的请求中携带
same-site | 规定浏览器不能在跨域中请求携带 cookie，减少CSRF攻击

`cookie时效性`   
如果没有设置expires属性，会话结束（关闭浏览器）cookie失效

cookie 一些方法
- 设置: cookie.set(name, value, {expires: 天数/未来某个时间挫})
- 获取：cookie.get(name)
- 删除：cookie.remove(name)

设置失效时间
- 如果设置的失效时间>1天，可以直接按天数设置
- 如果设置的失效时间<1天，需要在当前时间+失效时间 =》 未来某个时间挫
- 如果设置的失效时间为过去时间点，那么这个cookie会立即删掉（失效）


