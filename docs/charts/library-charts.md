## 一些常见的库

### Chart.js
Chart.js 是一种简洁、用户友好的基于图形语法的图表库，同时也是基于 HTML5 的 JavaScript 库，用于创建动画、交互式和可自定义的图表和图形。

官网：[chart.js](https://www.chartjs.org/)   
中文文档：[chart.js中文](https://chartjs.bootcss.com/)   
Github：[chart.js github](https://github.com/chartjs/Chart.js)   
关键词：`基于HTML5`、`Canvas`、`开源`、`体积小`、`兼容性好`、`智能响应式`、`酷炫动画`、`移动端`、`简洁友好`、`好看`、`类型不全`

两张图：

<img :src="$withBase('/assets/charts-images/library/chartjs-npm.png')" alt="chartjs-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/chartjs-github.png')" alt="chartjs-github" width="400" >

特点：
- 出自国外工程师、基于HTML5 Canvas的JS库，开源、免费
- 体积小: 无依赖的超级轻量级产品，只有60kb，gzip后仅11.01kb
- 兼容性好，browser：IE7+、chrome、safari、firefox、opera等现代主流浏览器
- 智能响应式、酷炫动画效果、支持 retina 屏、界面小清新
- 轻松直观地查看混合图表类型、易于设置，对初学者十分友好
- 支持模块化加载，并且每个图表类型都已经分离，可以按需加载项目所需的图表类型
- 针对鼠标和触摸设备上提供了对画布工具提示的简单支持，也支持自定义触发事件，能满足复杂的交互需求

- 图表类型不够全面，仅八种：折线图、柱状图、面积图、雷达图、饼状图、气泡图、散点图和混合图，很难满足多样化的产品图表绘制需求

### Highcharts
Highcharts 是一个用纯 JavaScript 编写的一个图表库， 能够很简单便捷的在 Web 网站或是 Web 应用程序添加有交互性的图表，并且免费提供给个人学习、个人网站和非商业用途使用。支持图表定制（收费）

`官网`：[Highcharts](https://www.Highcharts.com/)   
`中文文档`：[Highcharts中文](https://www.Highcharts.com.cn/)   
`Github`：[Highcharts Github](https://github.com/Highcharts/Highcharts)   
`其他`：[技术社区](https://bbs.hcharts.cn/forum.php) [第三方拓展](https://www.Highcharts.com.cn/implementation) [付费定制](https://Highcharts.com.cn/custom) [在线托管平台](https://jshare.com.cn/new/Highcharts)   
关键词：`基于HTML5`、`轻量级`、`开源`、`分版本付费`、`兼容性好`、`图表界的jQuery`、`少量3D`、`移动端`

两张图：

<img :src="$withBase('/assets/charts-images/library/highcharts-npm.png')" alt="highcharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/highcharts-github.png')" alt="highcharts-github" width="400" >

特点：

- 挪威HIGHSOFT开发，基于HTML5，开源
- 轻量级的高质量库，无需安装任何插件，不占内存
- 兼容性好，browser：IE6+、chrome、safari、firefox、opera等现代主流浏览器
- 完美支持移动端响应式、触摸操作、手势缩放等
- 图表类型丰富、方便快捷、功能强大，
- 提供少量3D图形，目前支持3D柱状图、3D饼图及3D散点图，需额外加载3D功能模块文件
- 分版本付费，个人及非商用免费，商用需按使用人数付费（50美元起）
- 图表界的jQuery，整体图表设计比较陈旧难以扩展，商用需按使用人数购买版权，前几年很多公司在使用，随着其他图表库的逐步完善，Highcharts的优势不再


Highcharts：
- Highcharts: 丰富的图表类型，线图、柱形图、饼图、散点图、仪表图、雷达图、热力图、混合图等 20 种图表
- Highcharts Gantt: 交互式甘特图
- Highcharts Stock: 支持股票走势图、K线图及大数据量时间轴图表
- Highcharts Maps: 支持各种地图，支持经纬度、GeoJSON 标准地图数据，支持下钻，触摸、手势操作，可单独使用，也可作为Highcharts 的组件使用


### Echarts
ECharts，是百度的一个开源的数据可视化工具，一个纯 Javascript 的图表库，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。   
ECharts 是目前国内唯一一个入选 GitHub 全球可视化榜单的开源项目，2w+ star 全球排名第三，社区活跃，覆盖主流前端框架和 8 种编程语言的扩展，目前国内市场占有率处于绝对领先地位。

官网：[Echarts](https://echarts.apache.org/zh/index.html)    
Github：[Echarts Github](https://github.com/chartjs/Echarts)   
社区：[gallery](https://github.com/chartjs/Echarts) [makeapie](https://www.makeapie.com/explore.html) [ppchart](http://www.ppchart.com)   
关键词：`Canvas`、`Zrender`、`开源`、`纯JS`、`兼容性好`、`智能响应式`、`酷炫动画`、`移动端`、`简洁友好`、`好看`、`类型不全`

两张图：

<img :src="$withBase('/assets/charts-images/library/echarts-npm.png')" alt="echarts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/echarts-github.png')" alt="echarts-github" width="400" >

特点：
- 出自百度数据可视化团队
- 底层依赖于轻量级的Canvas库Zrender、纯JS图表库、开源、免费
- 支持按需打包、中国地图、3D立体类型图表
- 兼容性好，browser：IE6+、chrome、safari、firefox、opera等现代主流浏览器
- 流畅运行在PC和移动端上，Canvas、SVG双引擎一键切换、增量渲染及流加载技术实现千万级数据的流畅交互
- 创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验
- 中文文档，方便阅读和配置、大量示例及丰富的社区作品、详细的API文档
- 丰富的图表类型：提供直观、交互丰富、可高度个性化定制的图表，开箱即用的20多种图表和十几种组件，支持混搭和动态类型切换使图表更多样化。
- 健康的开源社区：丰富的第三方插件满足不同场景需求、社区提供更多图表时间
- 移动端优化

- 体积较大，一个基础的约400K，相对于D3.js和Hightcharts.js来说较大
- 可定制性差，高度封装，使用时只需配置，出现要绘制配置中不支持的图表，只能尝试使用其他的框架
- 性能与体验方面，echarts目前还是领先于G2，移动端适配方面antv优于echarts
- 复杂关系型图表比较难定制、高度灵活多样化的可视需求面前，需要另寻出路

### vue-echarts
基于 Vue的Echarts 组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

`官网`：[vue-echarts](https://vue-echarts.github.io/)    
`Github`：[vue-echarts Github](https://github.com/ecomfe/vue-echarts)   
`文档`：[vue-echarts 文档](https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md)   

两张图：

<img :src="$withBase('/assets/charts-images/library/vueecharts-npm.png')" alt="vueecharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/vueecharts-github.png')" alt="vueecharts-github" width="400" >

特点：

- 由百度开发的echarts组件库，开源、免费
- 现基于Vue2、Vue3的Echarts组件，安装包的时候需要注意版本
- 轻量，高效，按需绑定事件
- 支持按需导入ECharts.js图表​​和组件
- 支持组件调整大小事件自动更新视图

###  v-charts
v-charts是由饿了么团队开发的echarts组件库，适用于不需要大量修改样式，快速生成一些特色的图表，例如：地图，水球图，词云图等。  
在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点

`官网`：[v-charts](https://v-charts.js.org/#/)    
`Github`：[v-charts Github](https://github.com/ElemeFE/v-charts)   
`文档`：[v-charts 文档](https://vue-echarts.github.io/guide/line.html)   
`其他`：[在线示例](https://codesandbox.io/s/z69myovqzx)   


两张图：

<img :src="$withBase('/assets/charts-images/library/vcharts-npm.png')" alt="vcharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/vcharts-github.png')" alt="vcharts-github" width="400" >

特点：

- 由百度开发的echarts组件库，开源、免费
- 统一的数据格式：使用对前后端都友好的数据格式，方便生成和修改
- 简化的配置项：通过简化的配置项，可以轻松实现复杂需求
- 定制简单：提供多种自定义 Echarts 方式，可以方便的设置图表配置项
- 有一定的学习成本

<!-- ### VChart
https://www.wenjiangs.com/doc/vux-v-chart -->
<!-- 
### react 库
https://baijiahao.baidu.com/s?id=1741574190824701439&wfr=spider&for=pc
### vue 库
### 移动端库
vchart
 -->