# 介绍及比较

### 介绍

#### 特点
- 开发时效率极高、编译速度块
- 开箱即用、功能完备
- 社区丰富，兼容rollup
- 超高速热重载
- 预设应用和类库打包模式
- 前端类库无关，可兼容所有类库

[中文文档](https://cn.vitejs.dev/)

#### 优势
- 上手简单
- 开发效率高
- 社区成本低，兼容rollup

### 速度比较
- webpack: Bundle based dev server

<img :src="$withBase('/assets/vite-images/bundle.png')" alt="Bundle" width="700">


- vite: Native ESM based dev server

<img :src="$withBase('/assets/vite-images/vite.png')" alt="vite" width="700">

vite 快的原因还和它用了 esbuild

<img :src="$withBase('/assets/vite-images/esbuild.png')" alt="esbuild" width="800">


