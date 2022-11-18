
# websocket和http区别

### WebSocket特性
- 支持端对端通讯
- 可以由客户端发起，也可以由服务端发起
- 多用于：消息通知、直播间讨论、聊天室、协同编辑等

### WebSocket连接过程
- 发起一个 HTTP 请求
- 成功后再升级到 WebSocket 协议，再进行通讯

<img :src="$withBase('/assets/notes-images/breadth/websocket.png')" alt="websocket" width="600">

### WebSocket 和 HTTP 区别

  区别             | WebSocket                 | HTTP
------------------ |-------------------        |---------
协议名             | ws:// 或 wss://           | http:// 或 https://
 发起端            | 服务器、浏览器双端        | 浏览器端
 跨域限制          | 没有                      | 有
 通讯方式          | 通过send 和 onmessage通讯 | 通过req 和 res

### ws 可升级为 wss，类似https

``` js
import { createSever } from 'https'
import { readFileSync } from 'fs'
import { WebSocketServer } from 'ws'

const server = createSever({
    cert: readFileSync('path/to/cert.pem'),
    key: readFileSync('path/to/key.pem')
})

const wss = new WebSocketServer({server})

```

### 拓展
实际项目中推荐使用 socket.io，API更简洁
``` js
io.on('connection', socket => {
    // emit an event to the socket
    socket.emit('request', /*...*/)
    // emit an event to all the connected sockets
    io.emit('response', /*...*/)
    // listen to the event
    socket.on('reply', () => {}))
})
```
