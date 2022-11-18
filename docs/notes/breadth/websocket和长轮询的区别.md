
# websocket和长轮询的区别

### 区别
- HTTP 长轮询：客户端发起请求，服务端阻塞，不会立即返回
- WebSocket： 客户端、服务端 双端都可以发起请求

> 长轮询服务端有消息再返回，需要处理超时timeout问题   
> 方法：客户端发现超时，立即又在发送请求


<img :src="$withBase('/assets/notes-images/breadth/长轮询.png')" alt="长轮询" width="600">