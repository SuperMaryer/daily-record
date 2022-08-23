### 获取与创建项目
获取Git项目仓库的方式通常有两种:

从其它服务器 克隆 一个已存在的 Git 仓库。
1. 本地目录转换为Git仓库
    - 新的项目
    - 已存在的项目，但尚未有版本控制
2. 克隆已存在的Git仓库
    - 从其它服务器克隆到本地
    - 可以是公开的，也可以是与别人合作某个私有项目


#### 在已存在目录中初始化仓库
1. 使用当前目录作为 Git 仓库，我们只需使它初始化。命令执行完后会在当前目录生成一个 .git 目录。

``` md
git init
```

2. 使用我们指定目录作为Git仓库。初始化后，会在 `newproject` 目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。

``` md
git init newproject
```

#### 克隆现有的仓库
使用 `git clone` 可以从现有 Git 仓库中拷贝项目。

``` md
git clone <url> <name>
```

参数说明：
- url: Git 仓库
- name: 自定义本地仓库的名字, 不写默认同步Git仓库的名称


`示例：`
``` md
git clone git://github.com/schacon/grit.git mygrit
```
执行命令后, 会把远程仓库克隆到本地, 且自定义目录名称为mygrit。


::: details 克隆仓库使用示例
<img :src="$withBase('/assets/git-images/init-clone.png')" alt="克隆仓库示例">
:::
