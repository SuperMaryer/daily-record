<template>
  <div class="header-bg"></div>
  <div class="subject-header"></div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-bg {
  // background: url('./images/top-bg.png');
  background: linear-gradient(to bottom, rgb(0, 37, 72), rgba(0, 37, 72, 0));
  position: absolute;
  width: 100%;
  height: 151px;
  top: 0;
  left: 0;
  z-index: 19;
  pointer-events: none;
}
.subject-header {
  height: 56px;
  width: 1920px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 100;
  background-image: url(./images/header.png);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  overflow: hidden;
}
</style>
