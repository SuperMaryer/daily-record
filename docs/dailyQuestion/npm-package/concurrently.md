
# concurrently

### 作用
- npm script命令同时开启多个监听服务
- 多个命令并发执行，互补阻塞

### 语法
``` js
"start": "concurrently \"arg1 ...\" \"arg2 ...\"",
```

### concurrently  vs  &&
- &&: 通过 && 连接的命令，会按顺序执行，一旦有"阻塞"的命令， 后面的命令将会无法执行
- concurrently：多个命令并发执行，互不阻塞


引用当前项目的 package.json 的 scripts   
``` json
{
  "name": "daily-record",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "docs:dev": "vuepress dev docs --temp .temp",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh",

    "test1": "echo Hello World!",
    "test2": "echo Error: no test specified&&echo Hello World!",
    "test3": "npm run watch-js&&npm run watch-less&&echo Hello World!",
    "start": "npm run docs:dev&&npm run docs:build",

    
    "test1-con": "concurrently \"echo Hello World!\"",
    "test2-con": "concurrently \"echo Error: no test specified\" \"echo Hello World!\"",
    "test3-con": "concurrently \"npm run watch-js\" \"npm run watch-less\" \"echo Hello World!\"",
    "test3-con": "concurrently \"vuepress dev docs --temp .temp\" \"vuepress build docs\"",
    "start-con": "concurrently \"npm run docs:dev\" \"npm run docs:build\""
  },
  "devDependencies": {
    "concurrently": "^7.6.0",
    "vuepress": "^1.9.7",
    "vuepress-plugin-auto-sidebar": "^2.3.2"
  }
}
```

``` json
"scripts": {
  "start": "cross-env NODE_ENV=development vue-cli-service serve",
  "build": "cross-env NODE_ENV=production vue-cli-service build",
  "fixlimit": "cross-env LIMIT=8192 increase-memory-limit",
  "all": "concurrently  \"(npm start --prefix ../smart-road-dg)\"  \"npm start --mode bhw\""
}
```
