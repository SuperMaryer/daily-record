### Git 基本快照
常用的基本操作命令有：
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
<img :src="$withBase('/assets/git-images/basic-add.png')" alt="添加文件到暂存区示例">
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

- git commit -m [message]