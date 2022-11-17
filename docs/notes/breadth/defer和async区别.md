
# defer和async区别

### 区别
<img :src="$withBase('/assets/notes-images/breadth/defer-async.png')" alt="defer-async" width="700">


- 正常： HTML 暂停解析，下载 JS，直到JS下载完毕，再继续解析HTML
- defer： HTML 继续解析，并行下载 JS，HTML 解析完再执行 JS
- async： HTML 继续解析，并行下载 JS，JS下载完则执行，再解析HTML