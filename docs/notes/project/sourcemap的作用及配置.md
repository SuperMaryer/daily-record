
# sourcemap的作用及配置

### 介绍
通常我们运行在浏览器中的代码是经过处理的，处理后的代码可能与开发时代码相差很远，这就导致开发调试和线上排错变得困难。这时Source Map就登场了，有了它浏览器就可以从转换后的代码直接定位到转换前的代码。在webpack中，可以通过devtool选项来配置Source Map。

Source Map 是关联编译后的代码和源码的，通过一个个行列号的映射。比如编译后代码的第 3 行第 4 列，对应着源码里的第 8 行第 5 列这种，这叫做一个 mapping。

sourcemap 的格式如下：

``` js 
{
    version : 3,
    file: "out.js", // 文件名
    sourceRoot : "", // 源码根目录
    sources: ["foo.js", "bar.js"], // 源码文件
    names: ["a", "b"], // 转换前的变量名
    mappings: "AAgBC,SAAQ,CAAEA;AAAEA", // 位置映射
    sourcesContent: ['const a = 1; console.log(a)', 'const b = 2; console.log(b)']// 每个 sources 对应的源码的内容
}
```
### 作用
- JS 上线时要压缩、混淆处理
- 线上 JS 报错信息, 将无法识别行、列
- sourcemap 即可解决这个问题

可以把线上压缩混淆后的 JS 的报错信息, 无法识别的报错信息, 定位到报错位置, 位于源码的哪个位置(哪个页面第几行第几列)

### 配置
webpack 通过 devtool 配置 sourcemap

最简单的配置: 

``` js 
devtool: 'source-map' //生成单独的 map 文件, 并在 js 最后指定
```

其他配置
``` js 
devtool: "eval" // js在 eval(...)中, 不生成 sourcemap, 生成代码. 每个模块都被eval(...)执行, 并且存在@sourceURL
devtool: "eval-source-map" // js 在eval(...)中, sourcemap 内嵌
devtool: "inline-source-map" // sourcemap 内嵌到 js 中
devtool: "cheap-source-map" // sourcemap中只有行信息, 没有列信息
devtool: "eval-cheap-source-map" // 同上, 没有独立的 map 文件
```

[掘金好文sourcemap](https://juejin.cn/post/7136049758837145630)