## AntV
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

<img :src="$withBase('/assets/charts-images/library/g2-view.png')" alt="g2-view" width="700">  


两张图：

<img :src="$withBase('/assets/charts-images/library/g2-npm.png')" alt="g2-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/g2-github.png')" alt="g2-github" width="400" >   

特点：

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

var data = [
  { year: '1991', value: 3 }, 
  { year: '1992', value: 4 }, 
  { year: '1993', value: 3.5 }, 
  { year: '1994', value: 5 }, 
  { year: '1995', value: 4.9 }, 
  { year: '1996', value: 6 }, 
  { year: '1997', value: 7 }, 
  { year: '1998', value: 9 }, 
  { year: '1999', value: 13 }
]; 

var chart = new G2.Chart({container:"root",forceFit:true,}); 
chart.source(data);
chart.line().position("year*value"); 
chart.point().position("year*value").size(4).shape('circle').style({stroke: '#fff',lineWidth: 1 }); 
chart.render();
```
:::

### BizCharts
BizCharts是一个基于G2封装的React图表库，具有G2、React的全部优点，可以让用户以组件的形式组合出无数种图表。集成了大量的统计工具，支持多种坐标系绘制，交互定制，动画定制以及图形定制等。

`官网`：[BizCharts](https://bizcharts.taobao.com/index)    
`Github`：[BizCharts Github](https://github.com/alibaba/BizCharts)
`其他链接`：[v3.5.x gallery](https://bizcharts.net/product/bizcharts/gallery) [V4.0.0 gallery](https://bizcharts.net/product/BizCharts4/gallery)
关键词：`基于G2`、`开源`、`免费`、`React`、`更灵活`、`高自定义`、`强扩展性`、`定制`


<img :src="$withBase('/assets/charts-images/library/bizCharts-view.png')" alt="bizCharts-view" width="700">  



两张图：

<img :src="$withBase('/assets/charts-images/library/bizCharts-npm.png')" alt="bizCharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/bizCharts-github.png')" alt="bizCharts-github" width="400" >

特点： 

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


<img :src="$withBase('/assets/charts-images/library/viser-view.png')" alt="viser-view" width="700">  



两张图：

<img :src="$withBase('/assets/charts-images/library/viser-npm.png')" alt="viser-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/viser-github.png')" alt="viser-github" width="400" >

特点： 

- 基于G2的可视化库，利用语义化组件来组合图表
- 支持React、Vue、AngularJS等主流框架
- 轻量级仅取决于G2
- 文档比较简陋、兼容性都没提，api易读性差


### F2
F2 是面向移动端的一套基于可视化图形语法的图表库，开箱即用、完美支持 H5 环境同时兼容多种环境（node, 小程序，weex）。具有精简、高性能、易扩展的特性。适用于对性能、大小、扩展性要求严苛的场景。

`官网`：[F2](https://f2.antv.vision/zh)    
`Github`：[F2 Github](github.com/antvis/f2)
`npm`：[F2 npm](https://www.npmjs.com/package/@antv/f2)
`其他链接`：[gallery](https://f2.antv.vision/zh/examples/gallery) 
关键词：`开源`、`免费`、`专注移动`、`体验优雅`、`图表丰富`、`组件完备`、`扩展灵活`、`创意无限`、`插件机制`、`精简`、`高性能`、`易扩展`、


两张图：

<img :src="$withBase('/assets/charts-images/library/f2-npm.png')" alt="f2-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/f2-github.png')" alt="f2-github" width="400" >

特点： 

- 基于 HTML5-Canvas 面向移动端体验优雅的图表库、开源、免费
- 极小：在提供了几十种图表的基础上，压缩后代码不足70k，全部大小约100k
- 高性能：极致优化贴近原生Canvas的性能
- 高扩展性：基于图形语法、插件机制，可以非常容易的实现个性化的图表，图形、动画、交互均可灵活扩展
- 图表类型丰富：覆盖各类场景、可灵活构建各类图表（50+）
- 设计、性能以及异构环境方面都很优秀

### BizGoblin
BizGoblin是一个基于F2封装的React图表库，具有F2、React的全部优点，可以让用户以组件的形式组合出无数种移动端图表。非常适合使用React 技术栈、有图表绘制需求、需要满足更多业务定制化需求的项目。

`官网`：[BizGoblin](https://bizcharts.taobao.com/product/bizgoblin/category/51/page/54)    
`Github`：[BizGoblin Github](https://github.com/alibaba/BizGoblin)
`其他链接`：[gallery](https://bizcharts.taobao.com/product/bizgoblin/gallery) [示例](https://antv-f2.gitee.io/zh/examples/basic#base)
关键词：`基于F2`、`开源`、`免费`、`React`、`组件式`、`体积小`、`简洁`、`高扩展能力`、`友好`、`绘制迅速`


<img :src="$withBase('/assets/charts-images/library/bizgoblin-view.png')" alt="bizgoblin-view" width="700">


两张图：

<img :src="$withBase('/assets/charts-images/library/bizgoblin-npm.png')" alt="bizgoblin-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/bizgoblin-github.png')" alt="bizgoblin-github" width="400" >

特点： 

- 基于F2封装的React图表库，具有F2、React的全部优点
- 组件的形式组合出无数种移动端图表
- 体积小巧
- 高扩展能力
- 绘制迅速

<!-- ### oView
oView是基于 蚂蚁金服F2图表库的二次封装，以便于Vue.js开发者在移动端和PC端更好进行图表的展示。 -->


<!-- ### VChart
https://www.wenjiangs.com/doc/vux-v-chart -->
<!-- 
### react 库
https://baijiahao.baidu.com/s?id=1741574190824701439&wfr=spider&for=pc
### vue 库
### 移动端库
vchart
 -->

 <!-- 对比： https://juejin.cn/post/6844903628998705160 -->

 <!-- 更多：https://juejin.cn/post/7039865326716059656 -->