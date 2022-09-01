### 前言和介绍
#### `数据`：聚焦于解决数据的采集、预处理、分析、挖掘
<br />
<img :src="$withBase('/assets/charts-images/intro/data.png')" alt="数据" width="500">


#### `图形`：聚焦于解决光学图像的接收、提取信息、加工变换、模式识别及存储显示
<br />
<img :src="$withBase('/assets/charts-images/intro/chart.png')" alt="图形" width="500">


#### `可视化`：聚焦于解决将数据转换成图形
<br />
<img :src="$withBase('/assets/charts-images/intro/data-chart.png')" alt="可视化" width="500">

### 文字 vs 图表
图表通过`形象`、`具体`的方式传达信息 => 更具体、更精确、更高效、更全面

<img :src="$withBase('/assets/charts-images/intro/test.png')" alt="测试" width="500">

- 快速读取
- 记忆深刻

#### 基于Web的可视化技术
1. 底层技术规范
    - `SVG`：可缩放矢量图形（Scalable Vector Graphics），是基于可扩展标记语言（标准通用标记语言的子集）用于描述二维矢量图形的一种图形格式。
    - `Canvas 2D`：Canvas 通过 JavaScript 来绘制 2D 图形，通过逐像素来进行渲染。
    - `Canvas 3D WebGL`：WebGL（Web Graphic Library）是一个 JavaScript API，用于在任何兼容的 Web 浏览器中渲染 3D 图形。WebGL 程序由用 JavaScript 编写的控制代码和用 OpenGL 着色语言（GLSL）编写的着色器代码构成，这种语言类似于 C 或 C++，可在 GPU 上执行。

2. 不同类型比较流行的基础绘图库
- 基于SVG： snap.svg、rapheal.js 等
- 基于Canvas 2D： zrender、g 等
- 基于 WebGL： three.js、SceneJS、PhiloGL 等

我们重点回到基于 Web 技术的数据可视化类库。
