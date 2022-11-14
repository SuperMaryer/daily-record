
# TCP三次握手和四次挥手

### 建立TCP连接
- 先建立连接（确保双方都有收发消息的能力）
- 再传输内容（eg: 发送一个请求）
- 网络连接是TCP协议，传输内容是HTTP协议

### 三次握手-建立连接
- Client 发包: Server 接收. Server: 有 Client 要找我
- Server 发包: Client 接收. Client: Server 已经收到我信息了
- Client 发包: Server 接收. Server: Client 要准备发送了

### 一张图
<img :src="$withBase('/assets/notes-images/basic/tcp.png')" alt="tcp" width="700">
