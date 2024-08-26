<template>
  <div></div>
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, onMounted } from 'vue';

const { map } = inject<any>('mapObj');

let szBorderLayer;
let szDistrictLayer;
let trackLineLayer;
let trackPointLayer;

const initLayers = () => {
  szDistrictLayer = new mars3d.layer.GeoJsonLayer({
    name: '深圳行政区',
    url: import.meta.env.VITE_BASE_PATH + 'assets/geojson/gis_district_sz.geojson',
    symbol: {
      merge: true,
      styleOptions: {
        color: '#ffffff',
        outline: true,
        outlineWidth: 4,
        outlineOpacity: 0.8,
        outlineColor: '#abcff8',
        opacity: 0.03,
        label: {
          text: '{fname}', // 对应的属性名称
          opacity: 1,
          fill: true,
          font_size: 24,
          color: '#ffffff',
          font_family: '楷体',
          font_weight: 'bold',
          outline: true,
          outlineColor: '#000',
          visibleDepth: false,
          pixelOffset: new Cesium.Cartesian2(0, 14) // 偏移量
        }
      }
    },
    flyTo: true
  });
  szBorderLayer = new mars3d.layer.GeoJsonLayer({
    name: '深圳边界',
    url: import.meta.env.VITE_BASE_PATH + 'assets/geojson/gis_district_sz.geojson',
    symbol: {
      type: 'wall',
      styleOptions: {
        diffHeight: 500, // 墙高
        materialType: mars3d.MaterialType.LineFlow,
        materialOptions: {
          color: '#5b99e4', // 颜色
          opacity: 0.5, // 透明度
          axisY: true // 竖直方向
        }
      }
    },
    popup: '{name}'
  });
  trackLineLayer = new mars3d.layer.GeoJsonLayer({
    name: '深圳地铁线',
    url: import.meta.env.VITE_BASE_PATH + 'assets/geojson/track_line.geojson',
    symbol: {
      merge: true,
      styleOptions: {
        color: '#407890',
        opacity: 0.7
      }
    }
  });

  trackPointLayer = new mars3d.layer.GeoJsonLayer({
    name: '深圳地铁站点',
    url: import.meta.env.VITE_BASE_PATH + 'assets/geojson/track_point.geojson',
    symbol: {
      merge: true,
      styleOptions: {
        color: '#4AEAFF',
        scaleByDistance: true
      }
    }
  });

  map?.addLayer(szDistrictLayer);
  map?.addLayer(szBorderLayer);
  map?.addLayer(trackLineLayer);
  map?.addLayer(trackPointLayer);
};

onMounted(() => {
  initLayers();
});

onBeforeUnmount(() => {
  if (szBorderLayer) {
    szBorderLayer.clear();
    map?.removeLayer(szBorderLayer, true);
    szBorderLayer = null;
  }
  if (szDistrictLayer) {
    szDistrictLayer.clear();
    map?.removeLayer(szDistrictLayer, true);
    szDistrictLayer = null;
  }
  if (trackLineLayer) {
    trackLineLayer.clear();
    map?.removeLayer(trackLineLayer, true);
    trackLineLayer = null;
  }
  if (trackPointLayer) {
    trackPointLayer.clear();
    map?.removeLayer(trackPointLayer, true);
    trackPointLayer = null;
  }
});
</script>

<style lang="less" scoped>
.map-container {
  height: 400px;
  width: 700px;

  :deep(.vr-scene-poi) {
    position: relative;

    &__dot {
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 50%;
      transform: translateX(-2px);
    }
    &__line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      background-color: #fff;
      width: 1px;
    }
    &__label {
      width: fit-content;
      position: absolute;
      bottom: 30px;
      transform: translateX(-50%);
      white-space: nowrap;
      border: solid 1px transparent;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 4px;
      padding: 0 10px;
      min-width: 100px;
      text-align: center;
      height: 24px;
      line-height: 24px;
      p {
        font-size: 12px;
        color: #fff;
      }
    }

    &.active {
      .vr-scene-poi__dot {
        background-color: var(--app-color-primary); //#2e94ff;;
      }
      .vr-scene-poi__line {
        background-color: var(--app-color-primary); //#2e94ff;;
      }
      .vr-scene-poi__label {
        border: solid 1px var(--app-color-primary); //#2e94ff;;
        p {
          font-size: 12px;
          color: #ceb30b;
        }
      }
    }
  }
}
</style>
