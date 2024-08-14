
# HTTP协议1.0、1.1、2.0区别

### HTTP1.0
基本淘汰了，最基础的
- 最基础的 HTTP 协议
- 仅支持基本的 GET POST 方法

### HTTP1.1
目前使用最多，拓展了功能性
- 支持新方法 DELETE PUT 等，可用于Restful API
- 缓存策略，catch-control  E-tag等
- 支持长连接 Connection keep-alive, 一次TCP连接多次请求
- 断点续传，状态码206                     

### HTTP 2.0
需要普及推广，优化使用
- 可压缩header，减少体积
- 多路复用，一次TCP连接中可以多个HTTP并行请求
- 服务端推送