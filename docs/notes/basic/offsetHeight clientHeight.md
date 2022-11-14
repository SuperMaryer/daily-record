
# 常见高度比较

### 网页常见高度获取
- 网页可见区域高：document.body.clientHeight
- 网页可见区域高（包括边线）：document.body.offsetHeight
- 网页正文全文高（实际高度）：document.body.scrollHeight
- 网页被卷去的高：document.body.scrollTop
- 屏幕分辨率高：window.screen.height

### offsetHeight clientHeight scrollHeight scrollTop offsetTop 计算规则
- 可见区域宽高 clientHeight clientWidth: content + padding
- 可见区域宽高包括边线 offsetHeight offsetWidth: content + padding + border
- 实际高度 scrollHeight scrollWidth: 实际内容尺寸 + padding
- 滚动出去被遮住的高度 scrollTop: 没有滚动条时scrollTop为0
- 顶部距离最近父元素顶部的距离 offsetTop: 和有没有滚动条没有关系


对于inline的元素clientHeight、offsetHeight属性一直是0

### 图片示例
1. 可见区域宽高 clientHeight clientWidth    
<img :src="$withBase('/assets/notes-images/basic/client.png')" alt="tcp" width="400">

2. 可见区域宽高包括边线 offsetHeight offsetWidth   
<img :src="$withBase('/assets/notes-images/basic/offset.png')" alt="tcp" width="400">

3. 实际高度 scrollHeight scrollWidth   
<img :src="$withBase('/assets/notes-images/basic/scroll.png')" alt="tcp" width="500">

4. 顶部距离最近父元素顶部的距离 offsetTop     
<img :src="$withBase('/assets/notes-images/basic/scrollTop.png')" alt="tcp" width="500">

5. 顶部距离最近父元素顶部的距离 offsetTop   
<img :src="$withBase('/assets/notes-images/basic/offsetTop.png')" alt="tcp" width="400">


