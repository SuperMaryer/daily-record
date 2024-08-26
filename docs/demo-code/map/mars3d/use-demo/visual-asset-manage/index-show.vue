<template>
  <div class="visual-asset-manage-wrap">
    <Header />
    <LeftRighttop>
      <template #bg>
        <div class="bg-wrap">
          <BaseMap class="base-map" :option="mapOption" @map-ready="mapReadyHandler">
            <ShenZhen />
            <PoiLayer
              v-model="state.selNetAreaId"
              :poiList="state.netAreaList"
              :selAlarmDetailData="selAlarmDetailData"
              @click-graphic-layer="handleClickGraphic"
              @close-popup="handleClosePopup"
            />
          </BaseMap>
        </div>
      </template>
      <template #topLeft>
        <LeftPanel
          v-if="state.leftPanelVisible"
          v-model="state.selNetAreaId"
          v-model:selAlarmId="state.selAlarmId"
          :interval="state.interval"
          :netAreaList="state.netAreaList"
          :alarmList="selNetAreaAlarmList"
          @close-alarm-list="closeLeftPanel"
        />
      </template>
    </LeftRighttop>
    <img class="left-bg" :src="LeftBgImg" />
    <img class="right-bg" :src="RightBgImg" />
    <img class="back-btn" :src="BackBtnImg" @click="goBack" />
    <Legend class="alarm-legend" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, reactive, onUnmounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { addOperateLog } from '@/utils/logger';

import { LeftRighttop } from '@ffhou/vue3-layout';
import LeftPanel from './components/left-panel/index.vue';

import Header from './components/header/index.vue';
import Legend from './components/legend/index.vue';
import BaseMap from '@ffhou/vue3-basemap-mars3d';
import { baseOptions } from '@/config/mars3d';
import ShenZhen from './components/shenzhen/index.vue';
import PoiLayer from './components/poi-layer/index.vue';

import BackBtnImg from './images/back-btn.png';
import LeftBgImg from './images/left-bg.png';
import RightBgImg from './images/right-bg.png';

import api from './api';
import Mock from './mock';
import { cloneDeep } from 'lodash-es';
import dayjs from 'dayjs';

// router
const router = useRouter();
const goBack = () => {
  router.go(-2);
};

// map
const mapObj = reactive({
  map: null
});
const handleClickGraphic = () => {
  state.leftPanelVisible = true;
};
const handleClosePopup = () => {
  state.selAlarmId = '';
  state.interval = INTERVAL_STOP;
};
provide('mapObj', mapObj);
const mapOption = computed(() => {
  const option: any = cloneDeep(baseOptions);
  option.scene.globe.baseColor = '#010c1e';
  option.control.compass = false;
  option.control.zoom = { enabled: false };
  option.control.distanceLegend = { enabled: false };
  option.scene3DOnly = false;
  // option.center = { lat: 22.689546, lng: 113.986916, alt: 63473.4, heading: 0, pitch: -40.7 };
  option.basemaps = [
    {
      show: true,
      name: '高德影像',
      icon: new URL('@/assets/png/cesiumMapEngine-tdt_img.png', import.meta.url).href,
      type: 'gaode',
      layer: 'img_d'
    }
  ];
  return option;
});

const INTERVAL_NORMAL = 10 * 1000;
const INTERVAL_STOP = 24 * 60 * 60 * 1000;

// state
const state = reactive({
  leftPanelVisible: true, // left panel
  netAreaList: [], // 网络区域列表
  selNetAreaId: null, // 选中网络区域
  selAlarmId: '', // 选中告警Id
  allAlarmList: [], // 告警列表
  interval: INTERVAL_NORMAL // 左侧面板告警切换间隔
});

const closeLeftPanel = () => {
  state.leftPanelVisible = false;
};

const mapReadyHandler = (e) => {
  mapObj.map = e.map;
};

// 选中告警详情数据
const selAlarmDetailData = computed(() => {
  return state.allAlarmList.find((x) => x.alarmId === state.selAlarmId) || {};
});

// 选中网络区域下的告警列表数据
const selNetAreaAlarmList = computed(() => {
  const res = state.allAlarmList.filter(
    (x) => x.level != 0 && x.areaCustomUuid === state.selNetAreaId
  );
  return res.sort((a, b) => Number(a.level) - Number(b.level));
});

watch(
  () => selNetAreaAlarmList.value,
  (val) => {
    state.selAlarmId = val?.[0]?.alarmId || '';
  }
);
watch(
  () => state.selAlarmId,
  (val) => {
    if (val) {
      state.interval = INTERVAL_NORMAL;
    }
  }
);

const init = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const [res1, res2] = await Promise.all([
    api.queryNetAreaData({
      pageIndex: 1,
      pageSize: 1000
    }),
    // 深铁测试环境写死10月份整月数据测试
    api.queryAlarmData({
      pageIndex: 1,
      pageSize: 1000,
      // alarmTimeStart: `${today} 00:00:00`,
      // alarmTimeEnd: `${today} 23:59:59`
      alarmTimeStart: `2023-10-01 00:00:00`,
      alarmTimeEnd: `2023-10-31 23:59:59`
    })
  ]);

  // 接口最大可查1000条，总数>1000时循环调用接口获取全量数据
  // 循环调用接口获取数据进行拼接，参数设置为pageIndex: 当前页码, pageSize: 1000,
  if (res2?.itemCount > 1000) {
    const maxPage = Math.ceil(res2.itemCount / 1000);
    for (let i = 2; i <= maxPage; i++) {
      const res = await api.queryAlarmData({
        pageIndex: i,
        pageSize: 1000,
        // alarmTimeStart: `${today} 00:00:00`,
        // alarmTimeEnd: `${today} 23:59:59`
        alarmTimeStart: `2023-10-01 00:00:00`,
        alarmTimeEnd: `2023-10-31 23:59:59`
      });
      res2.pageData.push(...res.pageData);
    }
  }

  // 网络区域过滤掉没有经纬度的数据
  state.netAreaList = res1.pageData?.filter((x) => x.latitude && x.longitude) || [];
  state.allAlarmList = res2.pageData || [];

  if (!state.selNetAreaId) {
    state.selNetAreaId = state.netAreaList?.[0]?.customUuid;
  } else {
    const area = state.netAreaList?.find((x) => x.customUuid === state.selNetAreaId);
    if (!area?.customUuid) {
      state.selNetAreaId = state.netAreaList?.[0]?.customUuid;
    }
  }

  const levelMap = {};
  state.allAlarmList.forEach((x) => {
    const curLevel = levelMap?.[x.areaCustomUuid] || 3;
    const orderLevel = x.level == 0 ? 3 : +x.level;
    if (curLevel >= orderLevel) {
      levelMap[x.areaCustomUuid] = orderLevel;
    }
  });

  state.netAreaList.forEach((e) => {
    e.topLevel = levelMap?.[e.customUuid] || 0;
  });
};

let timer = null;
const refreshTime = 5 * 60000;
const refresh = () => {
  timer && clearInterval(timer);
  timer = setInterval(() => {
    init();
  }, refreshTime);
};

onMounted(() => {
  addOperateLog({
    subtype: '资产可视化管理',
    operateName: '资产可视化管理-页面初始化',
    remark: `进入资产可视化管理页面`
  });

  init();
  refresh();
});

onUnmounted(() => {
  timer && clearInterval(timer);
});
</script>

<style lang="less" scoped>
.visual-asset-manage-wrap {
  height: 100%;
  width: 100%;
}
.left-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 380px;
  height: 1080px;
}
.right-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 600px;
  height: 1080px;
}
.bottom-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1920px;
  height: 200px;
}
.back-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  cursor: pointer;
}
.base-map {
  height: 100vh;
  background: rgba(1, 30, 57, 0.4);
}
.alarm-legend {
  position: fixed;
  bottom: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.75);
  .legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
      margin-right: 5px;
    }
  }
  :deep(.s-legend__wrap) {
    background: rgba(1, 30, 57, 0.4);
  }
}
</style>
