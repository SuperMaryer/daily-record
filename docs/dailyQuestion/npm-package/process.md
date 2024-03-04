# process
process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()。

### process.env
process.env 是 Node.js 中的一个环境对象。其中保存着系统的环境的变量信息。可使用 Node.js 命令行工具直接进行查看。

Vue中， NODE_ENV可以通过.env文件或者.env.[mode]文件配置。配置过后，运行Vue CLI指令（ npm run dev(serve) ，npm run build ）时，就会将该模式下的NODE_ENV载入其中了。而这些命令，都有自己的默认模式：

`npm run dev(serve)`: 其实是运行了vue-cli service serve，默认模式为 development。可以在 .env.development 文件下修改该模式的 NODE_ENV。

`npm run build`: 其实运行了vue-cli service build，默认模式 production。可以在.env.production文件下修改该模式的 NODE_ENV。

### process.argv
process.argv属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数

- process.argv[0]: 对应process.execPath，启动Node.js进程的可执行文件所在的绝对路径, 可通过process.argv0访问原始值
- process.argv[1]: 为当前执行的JavaScript文件路径
- 其余元素: 其他命令行参数

::: details
1. process-args.js 脚本如下
``` js
import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

2. 启动Node.js进程
``` node
node process-args.js one two=three four 
```

3. 输出
``` 
0: C:\\Program Files\\nodejs\\node.exe
1: F:\\hxf\\test\\node\\process-args.js
2: one
3: two=three
4: four 
```
:::

### process.cwd()
process.cwd() 方法返回 Node.js 进程的当前工作目录。