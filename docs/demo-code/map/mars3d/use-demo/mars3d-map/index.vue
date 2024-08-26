<template>
  <base-map :option="mapOption" @map-ready="mapReady">
    <slot></slot>
  </base-map>
</template>

<script setup>
import { ref } from 'vue';
import BaseMap from '@ffhou/vue3-basemap-mars3d';

// 修改地图的默认配置为项目需要的默认配置
const mapOption = ref({
  scene: {
    center: { lat: 22.508062, lng: 113.93229, alt: 969, heading: 1, pitch: -67 }
  },
  // 清空basemaps，该数组会直接覆盖掉默认的basemaps，默认的basemaps是[高德矢量，高德瓦片]
  basemaps: []
});

let mapObj = null;

const mapReady = (e) => {
  mapObj = e;
};
</script>
