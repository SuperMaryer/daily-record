# webpack 性能调优与 Gzip 原理

### 网络层面的性能优化
从输入 URL 到显示页面这个过程中，涉及到网络层面的，有三个主要过程：
- DNS 解析
- TCP 连接
- HTTP 请求/响应

前两个步骤，前端可做的很有限，HTTP层面的优化才是我们网络优化的核心。


HTTP优化主要有两个方向
- 减少请求次数
- 减少单次请求所花费的时间

这两个优化点直直地指向了我们日常开发中非常常见的操作： 资源的压缩和合并，关注webpack等构建工具。


webpack 的优化瓶颈，主要是两个方面：
- webpack 的构建过程时间长
- webpack 打包的结果体积大 


#### webpack 优化方案
- 构建过程提速
    + 不要让 loader 做太多事情
    + 不要放过第三方库
    + Happypack 将 loader 由单进程转为多进程 


1. 不要让 loader 做太多事情，以 babel-loader 为例

eg1: babel-loader 无疑是强大的，但它也是慢的。
最常见的优化方式是，用 include 或 exclude 来帮我们避免不必要的转译，
比如 webpack 官方在介绍 babel-loader 时给出的示例： 

``` js
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

同时，开启缓存将转译结果缓存至文件系统，则至少可以将 babel-loader 的工作效率提升两倍。只需要为 loader 增加相应的参数设定：

```javascript
loader: 'babel-loader?cacheDirectory=true'
```

这个规则仅作用于这个 loader，像一些类似 UglifyJsPlugin 的 webpack 插件在工作时依然会被这些庞大的第三方库拖累，webpack 构建速度依然会因此大打折扣。所以针对这些庞大的第三方库，我们还需要做一些额外的努力。

2. 不要放过第三方库



- 构建结果体积压缩

