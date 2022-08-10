### 图片
#### 基本格式：
> - `![alt 属性文本](图片地址)`
> - `![alt 属性文本](图片地址 "可选标题")`

`说明：`
> 1. 使用一个`!`
> 2. 后面接着是一个`[]`,`[]`里面放图片的替代文字
> 3. 再后面是一个`()`,`()`里面放图片的网址，
> 4. 若要加上title属性，则可以在图片网址后面`加一个空格`，然后用`""`包住。

`示例:`
```md 
![alt 属性文本]()
![alt 属性文本](图片地址)
![alt 属性文本](图片地址 "可选标题")

![百度 logo](https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161)
![2 图标2](https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161 "百度一下，你就知道")
```
`效果:`

![alt 属性文本]()
![alt 属性文本](图片地址)
![alt 属性文本](图片地址 "可选标题")

![百度 logo](https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161)
![2 图标2](https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161 "百度一下，你就知道")

#### 使用向量
支持像网址那样对图片网址使用变量

`说明：`
> 1. 在文档的`结尾`给`变量赋值（网址）`：     
> `[1]: https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161`      
> 2. 文档中使用链接，用`1`作为网址变量: `[Baidu][1] ` 
> 3. 文档中即可点击变量跳转查看对应图片  

`示例:`
``` md
[百度][logo]一下你就知道

[logo]: https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161
```
`效果:`

[百度][logo]一下你就知道

#### 使用标签
若要指定图片的高度与宽度，可以使用普通的 `<img>` 标签。

`示例：`
``` md
<img src="https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161" width="10%" height="100px">
<img src="https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161" width="100px" height="100px" alt="百度" title="百度一下，你就知道">
```
`效果：`

<img src="https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161" width="10%" height="100px">
<img src="https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161" width="100px" height="100px" alt="百度" title="百度一下，你就知道">


[1]: https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161
[logo]: https://img2.baidu.com/it/u=1830187138,2001932147&fm=253&fmt=auto?w=161&h=161