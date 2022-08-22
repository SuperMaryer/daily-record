### Git 分支管理
一个分支代表一条独立的开发线，Git 分支实际上是指向更改快照的指针。
![分支管理 概况](https://static.runoob.com/images/svg/git-brance.svg)

#### 查看分支
- `git branch`：查看本地分支，当前分支会用*标记
- `git branch -r`：查看远程分支
- `git branch -a`：查看所有分支，包括本地和远程，remotes/开头的表示远程分支，*标记当前分支
- `git branch -v`：查看本地分支最后一次提交

<!-- - `git branch --merged`：查看哪些分支已经合并到当前分支
- `git branch --no-merged`：查看所有未合并工作的分支 -->

::: details 查看分支使用示例
<img :src="$withBase('/assets/git-images/branch-check.png')" alt="查看分支示例">
:::

#### 创建及切换分支
- `git branch branchName`：创建分支
- `git checkout branchName`：切换分支
- `git checkout -b branchName`：创建新分支，并立即切换到该分支

::: details 使用示例
创建分支：

<img :src="$withBase('/assets/git-images/branch-create.png')" alt="创建切换分支示例">

创建并切换至该分支：

<img :src="$withBase('/assets/git-images/branch-checkout.png')" alt="创建切换分支示例">
::: 
#### 删除分支
分支分为本地分支、追踪分支和远程分支。本地分支和远程分支大家都比较熟悉，追踪分支指的是本地分支和远程分支的关联关系。

1. 删除本地分支（删除当前分支必须切换到其他分支上）
    - `git branch --delete branchname`：删除本地分支branchname
    - `git branch -d branchname`：同上，-d 为 --delete 缩写
    - `git branch --delete--force branchname`：强制删除本地分支，不检查merge状态
    - `git branch -D branchname`：同上，-D 为 --delete--force 缩写

    ::: details -d -D 区别
    * `-d`是`--delete`的缩写，在使用`--delete`删除分支时，该分支必须和它的上游分支完全合并，如果没有上游分支，必须要和HEAD完全合并

    * `-D`是`--delete --force`的缩写，不检查合并状态的情况下删除分支
    
    * `--force`简写`-f`，将当前分支重置到初始点，如果不使用`--force`的话，git分支无法修改一个已经存在的分支
    :::

    ::: details 删除本地分支使用示例
    <img :src="$withBase('/assets/git-images/branch-delete1.png')" alt="删除本地分支示例">
    :::

2. 删除追踪分支（本地分支和远程分支的关联关系）
    - `git fetch origin --prune`：删除追踪分支，并没有真正删除远程分支
    - `git fetch origin -p`：同上，-p 为 --prune缩写

3. 删除远程分支
    - `git push origin --delete branchname`：删除branchname远程分支和追踪分支
    - `git push origin -d branchname`：同上，-d 为 --delete 缩写
    - `git push origin :branchname`：同上，分支名前的冒号代表删除

    ::: details 删除远程分支使用示例
    <img :src="$withBase('/assets/git-images/branch-delete2.png')" alt="删除远程分支示例">
    :::
4. 恢复删除的远程分支
   1. `git log -g`: 找回之前提交的`commit`, 复制`commit_id`
   2. `git branch branchname commit_id`: 命令用这个commit创建一个分支
   3. `git checkout branchname`: 切换到`branchname`分支检查文件是否存在

    ::: details 恢复删除的远程分支使用示例
    <img :src="$withBase('/assets/git-images/branch-delete3.png')" alt="恢复删除的远程分支示例">
    :::


