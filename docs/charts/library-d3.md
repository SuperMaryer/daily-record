### D3
D3js是一个可以基于数据来操作文档的JvaScript库，可以帮助你使用HTML、CSS、SVG以及Canvas来展示数据。D3遵循现有的Web标准，可以不需要其他任何框架独立运行在现代浏览器中，它结合强大的可视化组件来驱动DOM操作。  

D3更像是框架而不是库。它可能很难使用，但有很多有用的资源可供使用，可以从头开始获得任何类型的可视化和图形，使D3完全值得。

`官网`：[D3](https://d3js.org/)   
`中文手册`：[D3中文手册](https://github.com/tianxuzhang/d3.v4-API-Translation)   
`Github`：[D3 Github](https://github.com/d3/d3)   
`其他链接`：[gallery](https://github.com/d3/d3/wiki/Gallery?_blank) [Mike Bostock 的示例](https://bl.ocks.org/mbostock?_blank) [D3图表](https://observablehq.com/@d3/charts?collection=@d3/charts)   
`基于D3的一些库`: [Plotly.js](https://plot.ly/export/) [taucharts](https://taucharts.com/)  
关键词：`灵活`、`SVG绘制`、`开源`、`JS`、`更底层`、`更自由`、`运行快`、`免费`、`学习门槛较高`、`开发成本较高`


<img :src="$withBase('/assets/charts-images/library/d3-view.png')" alt="d3-view" width="700">


两张图：

<img :src="$withBase('/assets/charts-images/library/d3-npm.png')" alt="d3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/d3-github.png')" alt="d3-github" width="400" >

特点：

- 基于web标准的JS可视化库、基于集合概念的DOM操作库、开源、免费
- 兼容性: IE9+、chrome、safari、firefox、opera等现代主流浏览器
- SVG绘制图形：强大的操作能力，容易将数据映射为SVG属性，被很多其他的图表插件所使用
- 运行速度很快：尤其适合大数据量的展示和交互式动态效果的渲染
- 自定义扩展灵活：封装度低，可自定义事件、更底层、更自由
- 强大的社区、丰富的demo、集成大量数据处理、布局算法和计算图形的工具方法
- 较高的学习门槛：API太底层，复用性低
- 开发成本也比较高：基本所有功能图表都要自己手动绘图实现


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


<img :src="$withBase('/assets/charts-images/library/c3-view.png')" alt="c3-view" width="700">


两张图：

<img :src="$withBase('/assets/charts-images/library/c3-npm.png')" alt="c3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/c3-github.png')" alt="c3-github" width="400" >

特点：

- 基于D3的JS图表库，使生成基于D3的图表变得容易、开源、免费
- 自定义扩展：充分可定制性和控制性，支持多种图表类型
- 兼容性：基于D3，C3仅支持D3支持的浏览器，IE9和IE10需要polyfill，因为c3使用MutationObserver这在这些版本中不受支持
- 可订制：生成时会为每个元素提供一些类，因此您可以通过该类定义自定义样式，并且可以通过D3直接扩展结构
- 可控的：3提供了各种API和回调来访问图表状态。通过使用它们，即使在呈现图表之后，您也可以对其进行更新
- 上手较难：相对而言属于比较难的库

### NVD3
NVD3是一个旨在建立可复用的图表和组件的D3.js项目，它提供了同样强大的功能，但更容易使用。它可以让你处理复杂的数据集来创建更高级的可视化。NVD3允许用户在Web应用程序中创建美观的、可复用的图表。

`官网`：[NVD3](https://nvd3.org/)    
`Github`：[NVD3 Github](https://github.com/novus/nvd3)
`其他链接`：[demo](https://nvd3.org/examples/index.html) 
关键词：`基于D3`、`开源`、`免费`、`JS`、`可复用`、`美观`、`简洁`、`更自由`、`上手较难`、`可重用`


<img :src="$withBase('/assets/charts-images/library/nvd3-view.png')" alt="nvd3-view" width="700">


两张图：

<img :src="$withBase('/assets/charts-images/library/nvd3-npm.png')" alt="nvd3-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/nvd3-github.png')" alt="nvd3-github" width="400" >

特点：

- Mike Bostock撰写、基于D3的JS库、开源、免费
- 使生成基于D3的图表变得容易
- 兼容性：在基于WebKit的浏览器上运行最好，IE10+、chrome最新版、Opera 15+、Safari最新版、firefox最新版
- 强大的图表功能：能够很方便的创建箱形图、旭日形和烛台图等
- 性能一般：有时可能会成为一个问题，与Fastdom安装配合使用速度会更快
- D3和C3的中间层：它封装了一部分D3底层数据操作从而提供了更简单的图标生存interface
- 上手较难：在实现图表上更多操作时其实还是在和D3直接交流，实现较难

::: details 展开查看使用示例
代码：
``` js
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true);        //Show the x-axis
  

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Time (ms)')
      .tickFormat(d3.format(',r'));

  chart.yAxis     //Chart y-axis settings
      .axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

  /* Done setting the chart up? Time to render it!*/
  var myData = sinAndCos();   //You need data...

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
/**************************************
 * Simple test data generator
 */
function sinAndCos() {
  var sin = [],sin2 = [],
      cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}
```
   
效果：  
    <img :src="$withBase('/assets/charts-images/library/nvd3-charts.png')" alt="nvd3-charts" width="700" >
:::


### Recharts
Recharts是基于React的组合式图表库，用于使用解耦、可重用的React组件构建图表，它建立在SVG元素和D3.js之上。

`官网`：[Recharts](https://recharts.org/en-US/)    
`Github`：[Recharts Github](https://github.com/recharts/recharts)
`其他链接`：[示例](https://recharts.org/zh-CN/examples) 
关键词：`基于D3`、`开源`、`免费`、`组合`、`可靠`、`解耦`、`可重用`、`组件化`、`react`


<img :src="$withBase('/assets/charts-images/library/reCharts-view.png')" alt="reCharts-view" width="700">


两张图：

<img :src="$withBase('/assets/charts-images/library/reCharts-npm.png')" alt="reCharts-npm" width="280" style="margin-right: 20px">

<img :src="$withBase('/assets/charts-images/library/reCharts-github.png')" alt="reCharts-github" width="400" >

特点：

- 简单地使用React组件进行部署
- 支持原生SVG，轻量级应用一些D3子模块
- 声明式的标签，接口式的API，图表编写简单
- 贴近原生SVG的配置项，让配置项更加自然

::: details 展开查看使用示例
装包：   
``` bash
npm install recharts
```

代码：
``` js
// 引入
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock数据
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
```
   
效果：  
    <img :src="$withBase('/assets/charts-images/library/reCharts-linechart.png')" alt="reCharts-linechart" width="700" >
:::
