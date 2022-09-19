### Git 基本快照
#### 常用的基本操作命令
- git add
- git status
- git diff
- git commit
- git push
- git pull
- git reset
- git rm

#### git add 添加文件到暂存区
- `git add [file1] [file2]`：添加一个或多个文件到暂存区
- `git add [dir]`：添加指定目录到暂存区，包括子目录
- `git add .`：添加所有文件到暂存区

::: details 使用示例
<img :src="$withBase('/assets/git-images/basic-add1.png')" alt="添加文件到暂存区示例">
<img :src="$withBase('/assets/git-images/basic-add2.png')" alt="添加文件到暂存区示例">
:::

#### git status 查看项目当前状态
- `git status`：查看项目的当前状态，查看上次提交之后是否有对文件进行再次修改
- `git status -s`：同上，加上-s参数获取的是简短的输出结果

::: details 使用示例
<img :src="$withBase('/assets/git-images/basic-status.png')" alt="查看项目当前状态示例">
:::

#### git diff 查看区别和不同

git diff 有两个主要的应用场景：
1. 显示已写入暂存区和已经被修改但尚未写入暂存区文件的区别
    - `git diff`：尚未缓存的改动
    - `git diff --cached`：查看已缓存的改动
    - `git diff HEAD`：查看已缓存的与未缓存的所有改动
    - `git diff --stat`：显示摘要而非整个diff

2. 比较文件的不同，即比较文件在暂存区和工作区的差异
    - `git diff [file]`: 显示暂存区和工作区的差异
    - `git diff --cached [file]`: 显示暂存区和上一次提交(commit)的差异
    - `git diff --staged [file]`: 同上
    - `git diff [first-branch]...[second-branch]`: 显示两次提交之间的差异

::: details 使用示例
<img :src="$withBase('/assets/git-images/basic-diff.png')" alt="git diff示例">
:::


#### git commit 提交更改
使用 `git add` 命令将内容写入暂存区，`git commit` 命令将暂存区内容添加到本地仓库中。

- git commit -m [message]: 提交暂存区到本地仓库
- git commit [file1] [file2] -m [message]: 提交暂存区的指定文件到本地仓库
- git commit -a: 直接提交修改文件到本地仓库，无需执行git add 命令
- git commit -am [message]: 同上，加上message备注信息

[message] 可以是一些备注信息

::: details 使用示例

<img :src="$withBase('/assets/git-images/basic-commit.png')" alt="提交到本地仓库示例">

<img :src="$withBase('/assets/git-images/basic-commit-a.png')" alt="提交到本地仓库示例">
:::


#### git push 


#### git rm 删除本地文件
- `git rm [file]`：从暂存区和工作区中删除file文件
- `git rm -f [file]`：强行从暂存区、工作区中删除修改后的file文件
- `git rm --cached [file]`：从暂存区域移除，但工作区保留
- `git rm –r * `：递归删除目录，包括所有子目录和文件

::: details -f、--cached 、-r * 说明
* `-f`：强制删除选项，删除之前修改过并且已经放到暂存区域的文件

* `--cached`：仅从跟踪清单中删除，即：把文件从暂存区域移除，并保留在当前工作目录

* `-r *`：进入某个目录中，执行此语句，会删除该目录下的所有文件和子目录
:::

::: details 删除本地文件使用示例
- git rm -f [file] :

<img :src="$withBase('/assets/git-images/basic-rm3.png')" alt="删除本地文件示例">

- git rm --cached [file] :

<img :src="$withBase('/assets/git-images/basic-rm-cached.png')" alt="删除本地文件示例">

- git rm –r * :

<img :src="$withBase('/assets/git-images/basic-rm1.png')" alt="删除本地文件示例">
:::



#### 实用操作
1. git 远程分支强制覆盖本地分支--放弃本地修改
git fetch --all   
git reset --hard origin/master  
git pull  
备注：
git fetch 只是下载远程的库的内容，不做任何的合并   
git reset 把HEAD指向刚刚下载的最新的版本