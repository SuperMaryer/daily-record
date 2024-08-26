<template>
  <div></div>
</template>
<script lang="ts" setup>
import { inject, onBeforeUnmount, watch, ref } from 'vue';

import alarmNormalPng from './images/alarm-normal.png';
import alarmLevelPng1 from './images/alarm-level-1.png';
import alarmLevelPng2 from './images/alarm-level-2.png';
const alarmImageMap = {
  0: alarmNormalPng,
  1: alarmLevelPng1,
  2: alarmLevelPng2,
  3: alarmNormalPng
};

defineOptions({
  name: `PoiLayer`
});
const emits = defineEmits(['clickGraphicLayer', 'update:modelValue', 'closePopup']);

interface poiItem {
  areaName: string;
  customUuid: string;
  latitude: number;
  longitude: number;
  topLevel: number;
}
interface alarmItem {
  latitude: number;
  longitude: number;
  topLevel: number;
  alarmId?: string;
  title?: string;
  attackIp?: string;
  victimizedIp?: string;
  instance?: string;
  areaCustomUuid?: string;
  areaName?: string;
  areaPath?: null;
  alarmTime?: string;
  attackResult?: string;
  attackResultLabel?: string;
  level?: string;
  levelLabel?: string;
  attackMeans?: string;
  attackMeansLabel?: string;
  orderStatus?: string;
}
interface PropsType {
  poiList: poiItem[];
  modelValue: string;
  selAlarmDetailData?: alarmItem;
}
const props = withDefaults(defineProps<PropsType>(), {
  poiList() {
    return [];
  },
  modelValue: '',
  selAlarmDetailData: null
});

const LEVEL_MAP = {
  1: 'Ⅰ',
  2: 'Ⅱ',
  3: '正常'
};
const LEVEL_COLOR_MAP = {
  1: '#d81b1b',
  2: '#e5dc00',
  3: '#16ad79'
};

const mapObj = inject('mapObj') as { map: any; viewer: any };
let mars3dMap = mapObj.map;
let graphicLayer, popup;
const markerGraphicList = ref([]);

const initPoi = () => {
  if (!graphicLayer) {
    graphicLayer = new mars3d.layer.GraphicLayer();
    mars3dMap?.addLayer(graphicLayer);
  }
  graphicLayer.clear(true);

  markerGraphicList.value = props.poiList.map((point) => {
    const graphic = new mars3d.graphic.BillboardEntity({
      name: '告警区域',
      position: new mars3d.LngLatPoint(+point.longitude, +point.latitude, 700),
      style: {
        image: alarmImageMap?.[+point.topLevel] || alarmNormalPng,
        width: 30,
        height: 33,
        hasPixelOffset: true,
        pixelOffsetY: 15,
        scale: 1,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        clampToGround: true,
        visibleDepth: false,
        label: {
          text: point.areaName,
          font_size: 18,
          font_family: '微软雅黑',
          color: '#fff',
          visibleDepth: false,
          backgroundPadding: new Cesium.Cartesian2(2, 2),
          pixelOffsetY: 25,
          distanceDisplayCondition: !0,
          distanceDisplayCondition_far: 5e5,
          distanceDisplayCondition_near: 0
        },
        attr: {
          ...point
        }
      },
      attr: {
        ...point
      }
    });
    graphicLayer.addGraphic(graphic);
    return graphic;
  });

  bindGraphicLayerEvent();
  // 聚焦到当前区域
  flyToMark(props.modelValue);

  if (props.selAlarmDetailData?.alarmId) {
    showPopup(props.selAlarmDetailData);
  }
};
const getPopupHtml = (alarmData) => {
  return `
        <div class="popup-wrap">
          <div class="top-title">
            <span>${alarmData.title || '-'}</span>
            <span id="popup-close-icon">×</span>
          </div>
          <h5 class="sub-title">攻击信息</h5>
          <div>
            <span style="margin-right: 5px">攻击IP:</span>
            <span>${alarmData.attackIp || '-'}</span>
          </div>
          <div>
            <span style="margin-right: 5px">攻击时间:</span>
            <span>${alarmData.alarmTime || '-'}</span>
          </div>
          <div>
            <span style="margin-right: 5px">攻击结果:</span>
            <span>${alarmData.attackResultLabel || '-'}</span>
          </div>
          <div>
            <span style="margin-right: 5px">告警级别:</span>
            <span style="color: ${LEVEL_COLOR_MAP[alarmData.level] || '#e8e4e4'}">${
    `${LEVEL_MAP[alarmData.level]}级` || '-'
  }</span>
          </div>
          <div>
            <span style="margin-right: 5px">攻击手段:</span>
            <span>${alarmData.attackMeansLabel || '-'}</span>
          </div>
          <h5 class="sub-title">受害资产信息</h5>
          <div>
            <span style="margin-right: 5px">受害IP:</span>
            <span>${alarmData.victimizedIp || '-'}</span>
          </div>
          <div>
            <span style="margin-right: 5px">受害资产:</span>
            <span>${alarmData.instance || '-'}</span>
          </div>
          <div>
            <span style="margin-right: 5px">所在网络区域:</span>
            <span>${alarmData.areaName || '-'}</span>
          </div>
          <h5 class="sub-title">告警工单</h5>
          <div style="position: relative;">
            <span style="margin-right: 5px">工单状态:</span>
            <span>${alarmData.orderStatus || '-'}</span>
          </div>
          <span src="./images/link-icon.png" alt="跳转" id="link-icon"></span>
        </div>
        `;
};
const showPopup = (data) => {
  const netAreaData = props.poiList.find((x) => x.customUuid == data.areaCustomUuid);
  if (netAreaData) {
    // 创建 Popup
    popup = new mars3d.graphic.Popup({
      position: [netAreaData.longitude, netAreaData.latitude, 395.1],
      style: {
        html: getPopupHtml(data),
        className: 'visual-asset-manage-popup-wrap',
        closeButton: false,
        // offsetY: 5,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 200000) // 按视距距离显示
      }
    });
    // 在地图上打开 Popup
    graphicLayer.addGraphic(popup);
  }
};

const bindGraphicLayerEvent = () => {
  //单击事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    if (event.graphic) {
      // 打开左侧panel 面板
      emits('clickGraphicLayer');
      // 记录选中网络区域
      emits('update:modelValue', event.graphic?.attr?.customUuid);
    }
  });
  mars3dMap.on(mars3d.EventType.popupOpen, function (event) {
    setTimeout(() => {
      const button = document.getElementById('popup-close-icon');
      const link = document.getElementById('link-icon');
      if (button) {
        button.addEventListener('click', () => {
          // 在这里处理按钮点击事件 点击后关闭弹框
          popup && graphicLayer.removeGraphic(popup);
          emits('closePopup');
        });
      }
      if (link) {
        link.addEventListener('click', () => {
          // 跳转链接
          window.open('https://10.34.54.5:8082/stp/menaceManege/all');
        });
      }
    }, 0);
  });
};

const flyToMark = (selAreaId) => {
  if (selAreaId && markerGraphicList.value.length > 0) {
    const graphic = markerGraphicList.value.find((x) => x.options.attr.customUuid === selAreaId);
    if (graphic) {
      graphic.flyTo({
        heading: 0,
        pitch: -40
      });
    }
  }
};

watch(
  () => props.poiList,
  () => {
    initPoi();
  },
  {
    deep: true,
    immediate: true
  }
);
watch(
  () => props.modelValue,
  () => {
    const area = props.poiList.find((x) => x.customUuid == props.modelValue);
    flyToMark(area?.customUuid);
  },
  {
    deep: true,
    immediate: true
  }
);
watch(
  () => props.selAlarmDetailData,
  (val) => {
    popup && graphicLayer.removeGraphic(popup);
    if (val?.alarmId) {
      showPopup(val);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

onBeforeUnmount(() => {
  if (graphicLayer) {
    graphicLayer.clear(true);
    graphicLayer.remove();
  }
});
</script>
