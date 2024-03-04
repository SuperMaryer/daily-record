### git常用指令
- git init 初始化
- git clone remoteUrl 克隆远程代码


- git config --list 查看当前git配置
    + git config --local --list 查看当前仓库git配置
    + git config --global --list 查看全局git配置
    + git config user.name "ffhou" 设置git用户名
    + git config user.email "3277466632@qq.com" 设置git邮箱


- git remote -v 查看当前仓库远程地址
    + git remote set-url origin [remoteUrl] 设置/修改当前仓库的远程地址为remoteUrl


- git branch -a 查看所有分支
    + git branch -r 查看远程分支
    + git branch -l 查看本地分支git@github.com:SuperMaryer/daily-record.git
- git branch -d per/master 删除本地per/master分支
- git branch --delete per/master 同上
- git branch -D per/master 强制删除本地per/master分支
- git branch --delete--force per/master 强制删除本地per/master分支


- git checkout -b per/master origin/master 基于master分支新建per/master分支，并切换到该分支，相当于：
  + git branch per/master origin/master 基于master新建分支per/master
  + git checkout per/master 切换分支到per/master


- git fetch -a 获取所有分支修改
- git fetch origin master 获取远程master分支修改并merge
- git fetch origin master:per/master 基于远端master分支创建per/master本地分支
- git fetch origin -p 删除追踪分支，并没有真正删除远程分支


- git pull 拉取分支


- git status 查看暂存及本地的所有修改变动文件，暂存绿色、本地未暂存红色
- git add . 暂存所有修改
- git add [file1] [file2] 暂存file1 file2, [file1]为git status查看的文件路径
- git add [dir] 暂存文件夹，包括子目录


- git commit -m "comment content" 提交暂存区修改并添加备注


- git push origin per/master 推送提交内容到远程per/master分支
- git push origin -d per/master 删除per/master远程分支和追踪分支
- git push origin :per/master 同上

- git rm [file]：从暂存区和工作区中删除file文件
- git rm -f [file]：强行从暂存区、工作区中删除修改后的file文件
- git rm --cached [file]：从暂存区域移除，但工作区保留
- git rm –r * ：递归删除目录，包括所有子目录和文件


- git stash save '储存更改备注' 储存更改并添加备注
- git stash 储存更改，不添加备注
- git stash list 查看储存更改列表 会有储存标识
- git stash clear 删除所有储存

- git stash apply 应用最新储存，不会从储存列表中删除该储存
    + git stash apply stash{0} 应用最新储存
    + git stash apply stash`{0`} vscode git 直接使用花括号会报错，花括号前加`进行转译
    + git stash apply stash{1} 应用指定储存

- git stash pop 弹出最新储存并使用，会从储存列表中删除该储存
    + git stash pop stash{0} 弹出最新储存
    + git stash pop stash`{0`} vscode git 直接使用花括号会报错，花括号前加`进行转译
    + git stash pop stash{1} 弹出指定储存

- git stash show 查看最新储存改动内容
    + git stash show stash{0} 查看最新储存改动内容
    + git stash show stash`{0`} vscode git 直接使用花括号会报错，花括号前加`进行转译
    + git stash show stash{1} 查看指定储存改动内容

- git stash drop 删除最新储存
    + git stash drop stash{0} 删除最新储存
    + git stash drop stash`{0`} vscode git 直接使用花括号会报错，花括号前加`进行转译
    + git stash drop stash{1} 删除指定储存


- git log 查看所有提交记录


- git diff 查看修改内容
- git diff --cached 查看暂存修改内容


- git reset --hard origin/master 重置本地代码
    


