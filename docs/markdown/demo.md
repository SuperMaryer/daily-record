### `一、标题`
Markdown 标题有两种格式。   
1. 使用 `=` 和 `-` 标记一级和二级标题

`示例:`
``` md
我是1级标题
=================

我是2级标题
-----------------
```
`效果:`

我是1级标题
=================

我是2级标题
-----------------
2. 使用`#`号标记

`示例:`
``` md
# 1级标题
## 2级标题
### 3级标题
#### 4级标题
##### 5级标题
###### 6级标题
```
`效果:`

# 1级标题
## 2级标题
### 3级标题
#### 4级标题
##### 5级标题
###### 6级标题

### `二、段落`
用空行表示, 也可以在要换行的文字后面`使用>=2个空格`

`示例:`
``` md
空行表示

要换行的文字后面使用>=2个空格   
```
`效果:`

空行表示

要换行的文字后面使用>=2个空格   

### `三、字体`
可以使用`常规`、`斜体`、`粗体`、`粗斜体`字体：

`示例:`
``` md
正常字体
*斜体字体*
_斜体字体_
**粗体字体**
__粗体字体__
***粗斜体字体***
___粗斜体字体___  

```
`效果:`

*斜体字体*
_斜体字体_
**粗体字体**
__粗体字体__
***粗斜体字体***
___粗斜体字体___

### `四、分割线`
在一行中用三个以上的`星号`、`减号`、`底线`来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。

`示例:`
``` md
***
* * *
*****
- - -
----------
```
`效果:`

***
* * *
*****
- - -
----------

### `五、删除线`
段落上的文字若要添加`删除线`，在文字的两端加上两个波浪线 `~~` 即可

`示例:`
``` md
Hello World & 
~~Hello World~~
```
`效果:`

Hello World & 
~~Hello World~~

### `六、下划线`
可以通过 `HTML` 的`<u>标签`来实现<u>下划线</u>

`示例:`
``` md
不带下划线文本 & 
<u>带下划线文本</u>
```
`效果:`

不带下划线文本 & 
<u>带下划线文本</u>

### `七、脚注`
文本的补充说明，类似tooltip/title。格式为[^要注明的文本]

`示例:`
``` md
要注明的文本：[^脚注名]。

[^脚注名]: 脚注文本的补充说明
```
`效果:`

要注明的文本：[^脚注名]。

[^脚注名]: 脚注文本的补充说明


### `零、名称`
说明

`示例:`
``` md
```
`效果:`

### 名称
说明

`示例:`
``` md
```
`效果:`

### 圆点序号
- html 
- javascript 
- css

111111