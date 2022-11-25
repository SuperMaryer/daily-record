
# Hybrid模板的更新流程

### 流程

<img :src="$withBase('/assets/notes-images/project/hybrid1.png')" alt="hybrid" width="500">

<img :src="$withBase('/assets/notes-images/project/hybrid2.png')" alt="hybrid" width="500">


### APP 何时下载新版本?
- App启动时检查, 下载
- 实时(每隔 5min)检查, 下载

### 延迟使用
- 立刻下载, 使用会影响性能(下载需要时间, 网络环境不同)
- 检查到新版本, 现在后台下载, 此时先继续使用老版本
- 待新版本下载完成, 再替换成新版本, 开始使用
