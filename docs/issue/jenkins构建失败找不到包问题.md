# jenkins构建失败找不到包问题

### 问题描述
**jenkins 构建 core-js 里面的某些包找不到导致构建失败，前一天还能正常构建**

<img :src="$withBase('/assets/issue-images/jenkins-error.png')" alt="jenkins-error" width="800">


### 问题排查
**1. npm 查找发现 core-js 包在最近（7小时前）发布了新版本**

<img :src="$withBase('/assets/issue-images/corejs-publish.png')" alt="corejs-publish" width="800">


**2. 本地装 core-js 发现没问题，node modules 里边包含了 jenkins 报错找不到的包，如下图。**   

<img :src="$withBase('/assets/issue-images/corejs-local.png')" alt="corejs-local" width="800">


**3. jenkins 尝试再次构建， 发现 node modules core-js 里边仍然找不到某些包**   

<img :src="$withBase('/assets/issue-images/corejs-error.png')" alt="corejs-error" width="800">

**4. 猜测**    
- 先前发的版本有问题，发现之后删了该版本
- 然后重新发修复好的版本，两个版本号是一样的
- jenkins构建时已经拉了有问题版本，所以构建失败


**5. 尝试通过以下两种方式，构建成功**


#### 方式一：删除缓存，重新装包  yarn cache clean --mirror

1. execute shell comman 配置如下

<!-- npm config set registry "http://10.3.4.17:8081/repository/sutpc-npm-group/" -->
``` 
# 改成私服registry，没有使用私服不用加这个 
npm config set registry "http://××.×.×.×:8081/repository/" 

cd frame

# 固定脚本
# 如果存在yarn.lock文件，才执行删除它
if [ ! -f "yarn.lock" ];then
    echo "yarn.lock文件不存在"
else
    rm -f yarn.lock
fi

# 加上删除缓存
yarn cache clean --mirror

# 重新装包 构建
yarn
yarn build

# npm config set registry http://registry.npmjs.org
```

2. jenkins 点构建 重新构建一次，构建比较慢，最终构建成功，可以看到此时对应的包是完整没有缺失的  
<img :src="$withBase('/assets/issue-images/corejs-success.png')" alt="corejs-success" width="800">


3. 构建成功后，记得删除`清除缓存指令`，否则每次构建都会执行，构建时长很长

``` 
# 加上删除缓存
yarn cache clean --mirror
```


### 方式二：

1. 本地修改package.json  将core-js 包版本设置为更新前版本号

<img :src="$withBase('/assets/issue-images/corejs-version.png')" alt="corejs-version" width="400">

2. 提交代码，jenkins再次构建, 可以看到此时对应的包也是完整没有缺失的  

<img :src="$withBase('/assets/issue-images/corejs-success.png')" alt="corejs-success" width="800">

3. 构建成功