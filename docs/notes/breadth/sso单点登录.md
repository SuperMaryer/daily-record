
# sso单点登录

### 介绍
- 在多系统应用群中登录一个系统，便可在其他所有系统中得到授权而无需再次登录
- 包括单点登录与单点注销两部分

### 基于cookie实现
主域名相同，则可共享 cookie，主域名不同，则需使用SSO。

- cookie 默认不可跨域共享，但有些情况下可以设置为共享
- 主域名相同，eg：www.baidu.com、image.baidu.com
- 设置 cookie domain 为主域名， 即可共享 cookie


<img :src="$withBase('/assets/notes-images/breadth/sso.png')" alt="sso" width="800">

### 拓展
- OAuth 2.0：第三方验证登录要考虑该规范 
- eg:微信扫码登录 
