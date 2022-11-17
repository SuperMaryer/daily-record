### Git 配置
使用 `git config` 命令进行git 设置。

1. 查看当前git 设置

``` md
git config --list
```
::: details 执行命令后显示当前git 设置
```
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslcainfo=F:/Git/mingw64/ssl/certs/ca-bundle.crt
http.sslbackend=openssl
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
credential.helper=manager
rebase.usebuiltin=true
stash.usebuiltin=true
user.name=SuperMaryer
user.email=1012073997@qq.com
credential.helper=manager
core.repositoryformatversion=0
```
:::

2. 设置你的名字和邮件地址， --global 参数决定是否正对系统所有仓库。

``` md
<!-- 针对系统上所有仓库 -->
git config --global user.name "supermaryer"
git config --global user.email supermaryer@example.com

<!-- 只想设置当前仓库配置, 则去掉 --global 参数。 -->
git config user.name "supermaryer"
git config user.email supermaryer@example.com
```

3. 编辑 git 配置文件
``` md
git config -e --global   // 针对系统上所有仓库 
git config -e    // 针对当前仓库 
```
