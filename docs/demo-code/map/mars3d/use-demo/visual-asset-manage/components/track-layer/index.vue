<template>
  <div></div>
</template>
<script lang="ts" setup>
import { inject, watch, onBeforeUnmount, ref, nextTick } from 'vue';
import SimReceiver from './online/sim-receiver.js';
import SimDrawer from './online/index';
import proj4 from 'proj4';
defineOptions({
  name: 'TrackLayer'
});
const emits = defineEmits(['closeSocket']);
const { map } = inject<any>('mapObj');
const props = defineProps({
  trackData: Object,
  wsURL: String,
  messageCallback: Function,
  mapBound: Object // 图层范围
});
// let simReceiver, simMapDrawer;
const simReceiver = ref();
const simMapDrawer = ref();

// 启动离线数据的链接
const connectOffLine = (startTime?: string, messageCallback?: Function) => {
  const protocolPrefix = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  simReceiver.value = new SimReceiver(
    {
      viewer: map.viewer,
      // 坐标转换
      // projection:
      //   '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
      // wsBaseUrl: `${protocolPrefix}//${location.host}/webscoket/ws/track/1/fjgs`,
      wsBaseUrl: `${protocolPrefix}//${location.host}${props.wsURL}`,
      // wsBaseUrl: 'ws://10.3.4.115:9005/ws/track/1/fjgs',
      requestPre: '/cim/req',
      lngLatKey: ['lng', 'lat'],
      // serviceCode: props.trackData.code,
      // realtime: true,
      // timeFrom: props.trackData.timeFrom,
      // @ts-ignore
      mapCoordinate:
        props.mapBound?.coordinateName &&
        (proj4.Proj(props.mapBound.coordinateName) as any).datumName.toLowerCase(),
      startTime,
      startSimOption: {
        funcType: 'Common',
        vehIdName: 'vehid',
        vehTimeName: 'time'
      },
      mapBound: props.mapBound,
      closeSocket
    },
    messageCallback || props.messageCallback
  );
  simMapDrawer.value = new SimDrawer({
    viewer: map.viewer,
    showMaxHeight: 3000 * 10000,
    carOption: {
      car: {
        code: ['1']
      },
      smallTruck: {
        code: ['2']
      }
    },
    key: 'kejiyuan'
  });
  simReceiver.value
    .addDrawer(simMapDrawer.value)
    .connect(() => simMapDrawer.value.setMapBoundNotifier(simReceiver.value));
  // setTimeout(() => simMapDrawer.value.setMapBoundNotifier(simReceiver.value), 5000);
  simMapDrawer.value.setMapBoundNotifier(simReceiver.value);
};

const closeSocket = () => {
  emits('closeSocket');
};

// onMounted(() => {
//   connectOffLine();
// });
onBeforeUnmount(() => {
  simReceiver.value.destroy();
});

watch(
  () => props.wsURL,
  (val) => {
    nextTick(() => {
      simReceiver.value?.websocket?.close();
      simReceiver.value?.destroy();
      simMapDrawer.value?.destroy();
      if (props.wsURL) {
        connectOffLine();
      }
    });
  },
  {
    immediate: true
  }
);

defineExpose({ simReceiver: simReceiver, simMapDrawer: simMapDrawer, connectOffLine });
</script>
<style lang="less" scoped></style>
