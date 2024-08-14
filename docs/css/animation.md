### 文字动效


#### 动态下划线

<a class="ani-link-1" href="#">Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again.</a>

<br/>

<a class="ani-link-2" href="#">Everyone will have a dream in the deepest part of your heart. Those dreams will become the driving force for your progress. It will support the body you are about to give up and start again.</a>

::: details 点击查看代码
``` css 
.ani-link-1 {
    text-decoration: none;
    font-size: 20px;
    background: linear-gradient(90deg, #ff3c41, #fc0, #8500d8);
    background-repeat: no-repeat;
    background-size: 100% 3px;
    background-position: 100% 100%;
    transition: 1s all;
    color: #0CC;
    &:hover {
        background-size: 0 3px;
        color: #0CC;
    }
}

.ani-link-2 {
    text-decoration: none;
    font-size: 20px;
    background:
        linear-gradient(90deg, #0cc, #0cc),
        linear-gradient(90deg, #ff3c41, #fc0, #8500d8);
    background-repeat: no-repeat;
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    transition: 1s all;
    color: #0CC;
    &:hover {
        background-size: 0 3px, 100% 3px;
        color: #0CC;
    }
}
```
:::

#### 







<style>
.ani-link-1 {
    text-decoration: none !important;
    font-size: 20px;
    background: linear-gradient(90deg, #ff3c41, #fc0, #8500d8);
    background-repeat: no-repeat;
    background-size: 100% 3px;
    background-position: 100% 100%;
    transition: 1s all;
    color: #0CC;
    &:hover {
        background-size: 0 3px;
        color: #0CC;
    }
}
.ani-link-2 {
    text-decoration: none !important;
    font-size: 20px;
    background:
        linear-gradient(90deg, #0cc, #0cc),
        linear-gradient(90deg, #ff3c41, #fc0, #8500d8);
    background-repeat: no-repeat;
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    transition: 1s all;
    color: #0CC;
    &:hover {
        background-size: 0 3px, 100% 3px;
        color: #0CC;
    }
}
</style>
