# pnpm无法加载文件问题解决

### 问题
pnpm无法加载文件：C:\Users\Administrator\AppData\Roaming\npm\pnpm.ps1因为在此系统上禁止运行脚本。

<img :src="$withBase('/assets/notes-images/operationsGuide-images/pnpm.png')" alt="pnpm" width="600">'

### 解决步骤
1. win+s 在系统中搜索框 输入`Windos PowerShell`右击`管理员身份运行`

<img :src="$withBase('/assets/notes-images/operationsGuide-images/pnpm1png')" alt="pnpm1" width="600">'

2. 输入“set-ExecutionPolicy RemoteSigned”回车,根据提示输入A，回车

<img :src="$withBase('/assets/notes-images/operationsGuide-images/pnpm2.png')" alt="pnpm2" width="600">'

3. 再次输入pnpm -v执行成功

### Set-ExecutionPolicy RemoteSigned
- `Set-ExecutionPolicy`: 是一个 Powershell 的 cmd-let ，用途是设定 powershell 脚本的安全策略。即决定什么 .ps 脚本可以被运行，什么脚本不允许运行。

- `RemoteSigned`: 该参数要求所有网络下载的脚本和配置文件必须有可信发布者的签名（和HTTPS或Windows自带的签名机制类似），这也是 Windows Powershell 默认的策略。

### tips
不只是pnpm命令，同样适用于cnpm、yarn等命令。如果执行时，报这样的错误，都可以通过此方法解决。前提是，如果是用npm命令来安装这些CLI命令工具，必须安装到全局环境中，才能生效。