<!-- eslint-disable vue/no-mutating-props -->
<template>
  <slegend class="s-legend-wrap" v-capture :option="legendOption" v-model="legendValue" dark>
    <template #legendAfter>
      <div class="item-wrap mb5">
        <img src="../../images/alarm-level-1.png" />
        <span>一级告警</span>
      </div>
      <div class="item-wrap mb5">
        <img src="../../images/alarm-level-2.png" />
        <span>二级告警</span>
      </div>
      <div class="item-wrap mb5">
        <img src="../../images/alarm-normal.png" />
        <span>正常</span>
      </div>
    </template>
  </slegend>
</template>

<script setup>
import { ref } from 'vue';
import Slegend from '@ffhou/vue3-legend';

const legendOption = ref({
  legend: {
    type: 'label',
    label: '事件类型'
  }
});
const legendValue = ref({
  legend: ['online', 'offline', 'portion', 'select']
});
</script>

<style lang="less" scoped>
.item-wrap {
  display: flex;
  align-items: center;
  // color: rgba(255, 255, 255, 0.75);
  img {
    margin-right: 5px;
    width: 20px;
  }
}
.mb5 {
  margin-bottom: 5px;
}
// :deep(.s-legend__item-label) {
//   color: rgba(255, 255, 255, 0.75);
// }
</style>
