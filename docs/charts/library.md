## 图表库
### Chart.js
Chart.js 是一种简洁、用户友好的图表库，同时也是基于 HTML5 的 JavaScript 库，用于创建动画、交互式和可自定义的图表和图形。

官网：[chart.js](https://www.chartjs.org/)   
中文文档：[chart.js中文](https://chartjs.bootcss.com/)   
Github：[chart.js github](https://github.com/chartjs/Chart.js)   
关键词：`基于HTML5`、`canvas`、`开源`、`体积小`、`兼容性好`、`智能响应式`、`酷炫动画`、`移动端`、`简洁友好`、`好看`、`类型不全`

两张图：

<img :src="$withBase('/assets/charts-images/library/chartjs-npm.png')" alt="chartjs-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/chartjs-github.png')" alt="chartjs-github" width="400" >

特点：
- 基于HTML5 Canvas的JS库，开源、免费
- 体积小，无依赖的超级轻量级产品，只有60kb，gzip后仅11.01kb
- 兼容性好，browser：IE7+、chrome、safari、firefox、opera等现代主流浏览器
- 智能响应式、酷炫动画效果、支持 retina 屏、界面小清新
- 轻松直观地查看混合图表类型、易于设置，对初学者十分友好
- 支持模块化加载，并且每个图表类型都已经分离，可以按需加载项目所需的图表类型
- 针对鼠标和触摸设备上提供了对画布工具提示的简单支持，也支持自定义触发事件，能满足复杂的交互需求

- 图表类型不够全面，仅八种：折线图、柱状图、面积图、雷达图、饼状图、气泡图、散点图和混合图，很难满足多样化的产品图表绘制需求

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

- 挪威一家专业的图表软件厂商HIGHSOFT开发，基于HTML5，开源
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


### D3
D3js是一个可以基于数据来操作文档的JvaScript库。可以帮助你使用 HTML, CSS, SVG 以及 Canvas 来展示数据。D3 遵循现有的 Web 标准，可以不需要其他任何框架独立运行在现代浏览器中，它结合强大的可视化组件来驱动 DOM 操作。  
D3更像是框架而不是库。它可能很难使用，但有很多有用的资源可供使用。而且，最后，您可以从头开始获得任何类型的可视化和图形，使D3完全值得。

`官网`：[D3](https://d3js.org/)   
`中文手册`：[D3中文手册](https://github.com/tianxuzhang/d3.v4-API-Translation)   
`Github`：[D3 Github](https://github.com/d3/d3)   
`其他链接`：[gallery](https://github.com/d3/d3/wiki/Gallery?_blank) [Mike Bostock 的示例](https://bl.ocks.org/mbostock?_blank) [D3图表](https://observablehq.com/@d3/charts?collection=@d3/charts)   
`基于D3的一些库`: [Plotly.js](https://plot.ly/export/) [taucharts](https://taucharts.com/)  
关键词：`灵活`、`SVG绘制`、`开源`、`JS`、`更底层`、`更自由`、`运行快`、`免费`、`学习门槛较高`、`开发成本较高`

两张图：

<img :src="$withBase('/assets/charts-images/library/d3-npm.png')" alt="d3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/d3-github.png')" alt="d3-github" width="400" >

- 基于web标准的JS可视化库、基于集合概念的DOM操作库、开源、免费
- 兼容性: browser：IE9+、chrome、safari、firefox、opera等现代主流浏览器
- SVG绘制图形，强大的操作能力，容易将数据映射为SVG属性，被很多其他的图表插件所使用
- 运行速度很快，尤其适合大数据量的展示和交互式动态效果的渲染
- 灵活、封装度低，可自定义事件、更底层、更自由
- 强大的社区、丰富的demo、集成大量数据处理、布局算法和计算图形的工具方法


- 较高的学习门槛，API太底层，复用性低
- 开发成本也比较高，基本所有功能图表都要自己手动绘图实现

D3没有提供封装好的组件，在复用性、易用性方面不佳，社区里有很多基于D3的可视化组件库：

- C3.js: 一个轻量级的基于状态管理的图表库
- DC.js: 除了提供了常见的图表外还提供了一些数据处理能力
- NVD3.js: 基于 D3 封装了常见的折线图、散点图、饼图，功能比较简单

### C3
C3.js 是一个基于 D3.js 的可重用的开源 JS 图表库。这意味着将数据图表绘制到 HTML 页面上的过程得到简化，不需要大量的自定义 D3 图表代码，也相对容易上手。

`官网`：[C3](https://www.c3js.cn/)   
`中文文档`：[C3中文文档](https://www.c3js.cn/gettingstarted.html)    
`Github`：[C3 Github](https://github.com/c3js/c3)   
`其他链接`：[demo](https://www.c3js.cn/examples.html) [Mike Bostock 的示例](https://bl.ocks.org/mbostock?_blank) [D3图表](https://observablehq.com/@d3/charts?collection=@d3/charts)   
关键词：`基于D3`、`开源`、`免费`、`JS`、`自在`、`可订制`、`可控的`、`更自由`、`上手较难`、`可重用`  

两张图：

<img :src="$withBase('/assets/charts-images/library/c3-npm.png')" alt="c3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/c3-github.png')" alt="c3-github" width="400" >

- 基于 D3.js的JS图表库，使生成基于D3的图表变得容易、开源、免费
- 充分可定制性和控制性，支持多种图表类型
- 兼容性：基于D3，C3仅支持D3支持的浏览器，IE9和IE10需要polyfill，因为c3使用 MutationObserver这在这些版本中不受支持
- 可订制：生成时会为每个元素提供一些类，因此您可以通过该类定义自定义样式，并且可以通过D3直接扩展结构
- 可控的：3提供了各种API和回调来访问图表状态。通过使用它们，即使在呈现图表之后，您也可以对其进行更新
- 相对而言属于比较难的库

### NVD3
NVD3 是一个旨在建立可复用的图表和组件的 d3.js 项目 —— 它提供了同样强大的功能，但更容易使用。它可以让你处理复杂的数据集来创建更高级的可视化。NVD3 允许用户在 Web 应用程序中创建美观的、可复用的图表。

`官网`：[NVD3](https://www.c3js.cn/)    
`Github`：[NVD3 Github](https://github.com/novus/nvd3)
`其他链接`：[demo](https://nvd3.org/examples/index.html) 
关键词：`基于D3`、`开源`、`免费`、`JS`、`可复用`、`美观`、`简洁`、`更自由`、`上手较难`、`可重用`

两张图：

<img :src="$withBase('/assets/charts-images/library/nvd3-npm.png')" alt="nvd3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/nvd3-github.png')" alt="nvd3-github" width="400" >

- Mike Bostock撰写、基于D3的JS库、开源、免费
- 使生成基于D3的图表变得容易
- 兼容性：在基于WebKit的浏览器上运行最好，IE10+、chrome最新版、Opera 15+、Safari最新版、firefox最新版
- 允许用户在 Web 应用程序中创建美观的、可复用的图表
- NVD3 具有很强大的图表功能，能够很方便的创建箱形图、旭日形和烛台图等
- 图表库的速度有时可能会成为一个问题，与Fastdom安装配合使用，速度会更快
- 这个库可以说是D3和C3的中间层，它封装了一部分D3底层数据操作从而提供了更简单的图标生存interface，但是在实现图标上更多操作时其实还是在和D3直接交流，实现困难



### AntV
AntV 是蚂蚁金服全新一代数据可视化解决方案，主要面向从事数据可视化应用相关的工程师和设计师。

- 底层绘图引擎G：基于Canvas 2d提供基础绘图能力，基于Webgl的版本正在规划中
- 可视化语法类库G2：一套数据驱动的高交互可视化图形语法，提供了丰富的图表、专业的数据处理能力、便利的扩展方式和强大交互能力
- 关系可视化类库G6：专注解决流程与关系分析的图表库，集成了大量的交互，可以轻松的进行动态流程图和关系网络的开发
- 移动端图表类库F2：精简、高效、易扩展的移动端图表库，适于对性能、体积、扩展性要求严苛的移动应用场景下使用
- 可视化设计指引与使用规范：统计图表以及常用场景下的可视化设计指引和使用规范

AntV 的整体产品层次图   
<img :src="$withBase('/assets/charts-images/library/antv-overview.png')" alt="antv-overview" width="800" style="margin-right: 20px">

### G2
G2是一个由纯 JavaScript 编写、强大的语义化图表语法类库，提供了一整套图形语法，可以让用户通过简单的语法搭建出无数种图表，并集成了大量的统计工具，支持多种坐标系绘制，可以让用户自由地定制各种图表。

在React环境下使用G2，官方推荐可以尝试使用BizCharts和Viser-react。这两个产品都是基于G2的 React版本封装，使用体验更符合React技术栈的习惯。Viser并不是针对React做的适配，它是对G2 3.0 通用的抽象。支持对React、Angular和Vue三个常用框架的深度整合，对应的是viser-react、viser-ng 和viser-vue。


`官网`：[G2](https://g2.antv.vision/zh)    
`Github`：[G2 Github](https://github.com/antvis/G2)
`其他链接`：[gallery](https://g2.antv.vision/zh/examples/gallery) [实用小笔记](https://www.jianshu.com/p/2e1732a50b52) [g2理解](https://www.ngui.cc/article/show-87504.html)  
关键词：`基于图形语法`、`开源`、`免费`、`JS`、`数据驱动图形`、`双引擎渲染`、`TS`、`渐进式使用`、`D3生态`、`移动端适配`

两张图：

<img :src="$withBase('/assets/charts-images/library/g2-npm.png')" alt="g2-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/g2-github.png')" alt="g2-github" width="400" >   

- 出自阿里蚂蚁金服、基于图形语法的底层引擎，面向交互的JS库，开源、免费
- 数据驱动图形、高易用性、高扩展性
- 双引擎渲染，Canvas、SVG任意切
- 全面拥抱TS，提供完整的类型定义文件
- 数据处理：附带数据处理API，eg: csv数据处理
- 渐进式使用、函数式声明式API，更好地重用逻辑、更灵活地组织代码
- 强大的渲染引擎，底层G渲染器，可用Canvas、SVG及WebGL生成图表
- G提供大量插件，G2能够绘制拥有新颖风格的图表、完全拥抱D3的生态
- 移动端适配方面优于Echarts
- 性能与体验方面不如Echarts，无3D类型图表
- 文档比较难懂、语法需要一定学习成本

一个可视化框架需要四部分：
1. 数据处理：对数据进行加工的模块，包括一些数据处理方法。eg：合并、分组、排序、过滤、计算统计信息
2. 图形映射：将数据映射到图形视觉通道的过程。eg：将数据映射成颜色、位置、大小
3. 图形展示：决定使用何种图形来展示数据，点、线、面等图形标记
4. 辅助信息：用于说明视觉通道跟数据的映射关系，eg：坐标轴、图例、辅助文本

G2框架结构   
<img :src="$withBase('/assets/charts-images/library/g2-part.png')" alt="g2-part" width="400" > 

演示按需引入AntV图表和组件
- Scale：度量，仅包含基础的 Linear、Cat 以及 Time 这三种类型
- G：绘制引擎
- Animate：动画配置
- Chart：图表入口类
- Global：全局变量
- Shape：管理各种类型的shape
- Util: 通用工具类

::: details 展开查看代码
``` js
const Core=require("@antv/g2/lib/core"); 
require("@antv/g2/lib/geom/line"); 
require("@antv/g2/lib/geom/point"); 
var data = [{     year: '1991',     value: 3 }, {     year: '1992',     value: 4 }, {     year: '1993',     value: 3.5 }, {     year: '1994',     value: 5 }, {     year: '1995',     value: 4.9 }, {     year: '1996',     value: 6 }, {     year: '1997',     value: 7 }, {     year: '1998',     value: 9 }, {     year: '1999',     value: 13 }]; 
var chart=new G2.Chart({     container:"root",     forceFit:true, }); 
chart.source(data); chart.line().position("year*value"); 
chart.point().position("year*value").size(4).shape('circle').style({     stroke: '#fff',     lineWidth: 1 }); 
chart.render();
```
:::

### BizCharts
BizCharts是一个基于G2封装的React图表库，具有G2、React的全部优点，可以让用户以组件的形式组合出无数种图表。集成了大量的统计工具，支持多种坐标系绘制，交互定制，动画定制以及图形定制等。

`官网`：[BizCharts](https://bizcharts.taobao.com/index)    
`Github`：[BizCharts Github](https://github.com/alibaba/BizCharts)
`其他链接`：[v3.5.x gallery](https://bizcharts.net/product/bizcharts/gallery) [V4.0.0 gallery](https://bizcharts.net/product/BizCharts4/gallery)
关键词：`基于G2`、`开源`、`免费`、`React`、`更灵活`、`高自定义`、`强扩展性`、`定制`

两张图：

<img :src="$withBase('/assets/charts-images/library/bizCharts-npm.png')" alt="bizCharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/bizCharts-github.png')" alt="bizCharts-github" width="400" >

- 基于G2封装的React图表库，具有G2、React的全部优点
- 阿里巴巴UED出品，主打电商业务图表可视化，去年年底正式对外开源、免费使用
- 集成了大量的统计工具，支持多种坐标系绘制，交互定制，动画定制以及图形定制
- 强大的扩展能力、高自定义能力, 以组件的形式组合出无数种图表
- 图表的各个部分都拆分成了独立的React类，所有图表的配置项皆为组件的props
- 拓展出更加用户友好的可视化图表组件plots
- BizCharts相比于G2简单，相比于Echarts而言更灵活
- 兼容性上不支持IE8及以下版本

- => 使用React 技术栈、有图表绘制需求、需要满足更多业务定制化需求的项目


Bizcharts 案例中涉及到的组件概念
- Chart：图表最顶级的组件，控制着图表的创建、绘制、销毁等
- Coord：坐标系组件，设置Chart或者View的坐标系类型
- Axis：坐标轴组件，控制图表中坐标轴的样式
- Tooltip：提示信息组件，是指鼠标悬停在图表上的某点时，以提示框的形式展示该点的数据
- Geom：几何标记对象，决定创建图表的类型
- Label：几何标记对象上的文本

更贴合react编写
::: details 使用bizcharts 生成一个点图
``` js
import React from "react";
import ReactDOM from "react-dom";
import { Chart, Line, Point, Tooltip, getTheme } from "bizcharts";
console.log(getTheme())

// 数据源
const data = [
	{year: "1991", value: 3},
	{year: "1992",value: 4},
	{year: "1993",value: 3.5},
	{year: "1994",value: 5},
	{year: "1995",value: 4.9},
	{year: "1996",value: 6},
	{year: "1997",value: 7},
	{year: "1998",value: 9},
	{year: "1999",value: 13},
];

function Demo() {
	return (
		<>
			<Chart
				appendPadding={[10, 0, 0, 10]}
				autoFit
				height={500}
				data={data}
				onLineClick={console.log}
				scale={{ value: { min: 0, alias: '人均年收入', type: 'linear-strict' }, year: { range: [0, 1] } }}
			>

				<Line position="year*value" />
				<Point position="year*value" />
				<Tooltip showCrosshairs follow={false} />
			</Chart>
		</>
	);
}

ReactDOM.render(<Demo />, mountNode);
```
:::

::: details 使用图表组件plots
``` js
import React from 'react';
import ReactDOM from 'react-dom';
import {LineChart} from 'bizcharts';

// 数据源
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

function Demo() {
  return (
    <LineChart
      data={data}
      title={{
        visible: true,
        text: '折线图',
      }}
      description={{
        visible: true,
        text: '用平滑的曲线代替折线。',
      }}
      xField='year'
      yField='value'
			interactions={[
        {
          type: 'slider',
          cfg: {
            start: 0,
            end: 1,
          },
        },
      ]}
    />
  );
}
```
:::

### Viser 
Viser是一个基于 G2 实现的，为数据可视化工程师量身定制的工具。Viser-Graph 一个基于 G6 实现的，为呈现关系型数据的定制化工具。Viser、Viser-Graph均支持React、Vue、AngularJS主流框架。

`官网`：[viser](https://viserjs.gitee.io/)   
`中文文档`：[viser中文](https://www.yuque.com/rs385i)   
`Github`：[viser Github](https://github.com/viserjs/viser)   
`其他`： 
关键词：`基于G2`、`开源`、`3个版本`、`免费`

两张图：

<img :src="$withBase('/assets/charts-images/library/viser-npm.png')" alt="viser-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/viser-github.png')" alt="viser-github" width="400" >

- 基于G2的可视化库，利用语义化组件来组合图表
- 支持React、Vue、AngularJS等主流框架
- 轻量级仅取决于G2
- 文档比较简陋、兼容性都没提，api易读性差

### BizGoblin
BizGoblin是一个基于F2封装的React图表库，具有F2、React的全部优点，可以让用户以组件的形式组合出无数种移动端图表。非常适合使用React 技术栈、有图表绘制需求、需要满足更多业务定制化需求的项目。

`官网`：[BizGoblin](https://bizcharts.taobao.com/product/bizgoblin/category/51/page/54)    
`Github`：[BizGoblin Github](https://github.com/alibaba/BizGoblin)
`其他链接`：[gallery](https://bizcharts.taobao.com/product/bizgoblin/gallery) 
关键词：`基于F2`、`开源`、`免费`、`React`、`组件式`、`体积小`、`简洁`、`高扩展能力`、`友好`、`绘制迅速`

两张图：

<img :src="$withBase('/assets/charts-images/library/bizgoblin-npm.png')" alt="bizgoblin-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/bizgoblin-github.png')" alt="bizgoblin-github" width="400" >

- 基于F2封装的React图表库，具有F2、React的全部优点
- 组件的形式组合出无数种移动端图表
- 体积小巧
- 高扩展能力
- 绘制迅速


### vue-echarts
基于 Vue的Echarts 组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

`官网`：[vue-echarts](https://vue-echarts.github.io/)    
`Github`：[vue-echarts Github](https://github.com/ecomfe/vue-echarts)   
`文档`：[vue-echarts 文档](https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md)   

两张图：

<img :src="$withBase('/assets/charts-images/library/vueecharts-npm.png')" alt="vueecharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/vueecharts-github.png')" alt="vueecharts-github" width="400" >

- 由百度开发的echarts组件库，开源、免费
- 现基于Vue2、Vue3的Echarts组件，安装包的时候需要注意版本

###  v-charts
v-charts是由饿了么团队开发的echarts组件库，适用于不需要大量修改样式，快速生成一些特色的图表，例如：地图，水球图，词云图等。  
在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue和Echarts 封装的v-charts图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

`官网`：[v-charts](https://v-charts.js.org/#/)    
`Github`：[v-charts Github](https://github.com/ElemeFE/v-charts)   
`文档`：[v-charts 文档](https://vue-echarts.github.io/guide/line.html)   
`其他`：[在线示例](https://codesandbox.io/s/z69myovqzx)   


两张图：

<img :src="$withBase('/assets/charts-images/library/vcharts-npm.png')" alt="vcharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/vcharts-github.png')" alt="vcharts-github" width="400" >

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