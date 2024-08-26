
# 添加coding的ssh公钥

### 官方文档：https://coding.net/help/docs/repo/ssh/config.html
由于公司部分代码需要迁移至coding管理，要求在原有代码管理仓库下，再配置coding ssh，保持两个代码管理仓库均配置 可用ssh，并对迁移至coding项目进行git源切换。

### 配置coding ssh 简要流程
1. 打开 git bash 创建 SSH 公私密钥对
``` bash

1. 创建新的 SSH 私钥与公钥密钥对，输入你的邮箱作为标签，回车
ssh-keygen -m PEM -t ed25519 -C "your.email@example.com" 

2. 保存ssh 文件及名称，直接回车即可，也可以换一个名字再回车，如 id_coding
Enter file in which to save the key (/Users/你的用户名/.ssh/id_rsa): [Press enter]  

3. 此处直接回车即可；若设置密码，则每次使用 SSH 方式推送代码时都会要求输入密码
Enter passphrase (empty for no passphrase):  

注意：如果失败，则把ed25519 换成rsa，即：
ssh-keygen -m PEM -t rsa -b 4096 -C "your.email@example.com"

```

如果刚刚输入的是id_coding 则会生成id_coding(私钥)和id_coding.pub(公钥)，公钥是要放在服务器上

2. 打开 SSH 公钥文件并赋值到 Coding 上

用记事本打开id_coding.pub(公钥)，也可以用 git bash 使用 cat 命令打开，例如cat ~/.ssh/id_coding.pub。复制到Coding-左下角头像-个人账户设置-SSH 公钥-新增公钥-公钥内容。


3. 如果之前有其他代码管理网站且使用id_ras公私钥对，不想修改之前的，只想添加coding配置，那么接下来是关键的一步。

<img :src="$withBase('/assets/notes-images/guide-images/ssh.png')" alt="ssh" width="300">

在 c://user/admin/.ssh(ssh所在目录) 下面看看有没config这个文件（注意没有后缀）
没有则新建一个。这个config文件用途就是用来用于区分哪个仓库用哪个私钥。设置配置如下:

``` md
Host *.ffhou.com
    IdentityFile ~/.ssh/id_rsa
    PreferredAuthentications publickey
    user SuperMaryer
    
Host *.coding.net
     PreferredAuthentications publickey
     IdentityFile ~/.ssh/id_coding
     user SuperMaryer
```

解释：
- Host *.ffhou.com：这个是原来的代码管理网站的git，用的私钥是~/.ssh/id_rsa，如果原来你对应的私钥名称不是这个名字，换成你ssh对应的名称即可

- Host *.coding.net：这个是coding的，用的私钥是~/.ssh/id_coding，这个私钥名称就是刚刚建的
- user：名字

4. 保存之前，执行以下命令，测试是否配置成功
ssh -vT git@e.coding.net

配置成功

<img :src="$withBase('/assets/notes-images/guide-images/ssh2.png')" alt="ssh" width="600">


5. 如果没有提示成功，可尝试删除同目录下的 known_hosts文件，再试一次


### 切换git地址至coding
1. 查看本地代码的远程地址：
``` bash
git remote -v 
```

2. 若不为coding源地址，则需要切换，coding 找到该项目-右上角克隆按钮-切换SSH类型-复制地址，输入以下指令：
``` bash
git remote set-url origin <新的coding地址>
```

3. 查看是否切换至coding源地址
``` bash
git remote -v 
```

### 配置小乌龟
1. 找到Git所在目录路径。然后根据 Git\usr\bin 看是否找到ssh.exe，有的话则复制该路径。 


2. 配置小乌龟网络ssh客户端
右键-设置-网络-ssh 客户端-粘贴ssh.exe路径

<img :src="$withBase('/assets/notes-images/guide-images/ssh3.png')" alt="ssh" width="600">




