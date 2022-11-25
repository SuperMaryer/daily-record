
# SPA和MPA应该如何选择

### SPA和MPA
- SPA：Single-page Application 单页面应用
- MPA：Multi-page Application 多页面应用
- 默认情况下，Vue React 都是SPA

### SPA
#### 特点
- 功能较多，一个页面展示不完
- 以操作为主，非展示为主
- 适合一个综合 Web 应用

#### 场景
- 大型后台管理系统，eg：阿里云的 console
- 知识库，eg：羽雀、石墨文档
- 比较复杂的 WebApp，eg：外卖H5


### MPA
#### 特点
- 功能较少，一个页面展示的完
- 以展示为主，操作较少
- 是个一个孤立的页面

#### 场景
- 分享页，eg：腾讯文档分享出去
- 新闻详情页，eg：新闻 App 的详情页、微信公众号发布的页面


### 如何选择
<img :src="$withBase('/assets/notes-images/project/spa.png')" alt="spa" width="800">