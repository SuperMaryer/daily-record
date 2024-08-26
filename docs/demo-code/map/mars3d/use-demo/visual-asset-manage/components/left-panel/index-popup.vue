<template>
  <div class="popup-wrap">
    <div style="color: #fff; font-size: 12px">
      <h4 style="">
        {{ selAlarmDetailData.title }}
        <span style="float: right">×</span>
      </h4>
      <h5 style="">攻击信息</h5>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">攻击IP:</span>
        <span>{{ selAlarmDetailData.attackIp }}</span>
      </div>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">攻击时间:</span>
        <span>{{ selAlarmDetailData.alarmTime }}</span>
      </div>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">攻击结果:</span>
        <span>{{ selAlarmDetailData.attackResultLabel }}</span>
      </div>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">攻击手段:</span>
        <span>{{ selAlarmDetailData.attackMeansLabel }}</span>
      </div>
      <h5 style="">受害资产信息</h5>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">受害IP:</span>
        <span>{{ selAlarmDetailData.victimizedIp }}</span>
      </div>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">受害资产:</span>
        <span>{{ selAlarmDetailData.instance }}</span>
      </div>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">所在网络区域:</span>
        <span>{{ selAlarmDetailData.areaName }}</span>
      </div>
      <h5 style="">告警工单</h5>
      <div>
        <span style="color: #ffffffbf; margin-right: 5px">工单状态:</span>
        <span>{{ selAlarmDetailData.orderStatus }}</span>
        <a
          href="https://cesium.com/blog/2018/08/21/cybercity/"
          target="_blank"
          style="
            display: inline-block;
            width: 40px;
            height: 40px;
            float: right;
            background: #5b99e4;
            text-align: center;
            color: #0d1b34;
            border-radius: 40px;
            font-size: 30px;
          "
        >
          →
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, provide, reactive, ref, watch } from 'vue';
import ScrollTable from '@ffhou/vue3-scroll-table';
import { Close } from '@element-plus/icons-vue';

import alarmLevelPng1 from './images/alarm-level-1.png';
import alarmLevelPng2 from './images/alarm-level-2.png';
const alarmImageMap = {
  1: alarmLevelPng1,
  2: alarmLevelPng2
};

const emits = defineEmits(['closeAlarmList', 'update:selNetAreaId']);

const props = defineProps({
  alarmList: {
    type: Array,
    default: () => []
  },
  selNetAreaId: {
    type: String,
    default: ''
  },
  selAlarmDetailData: {
    type: Object,
    default: () => {}
  },
  netAreaList: {
    type: Array,
    default: () => []
  }
});
let currentRow = ref(0);

const changeNetArea = (id) => {
  emits('update:selNetAreaId', id);
};
const currentChange = (row) => {};
const closeAlarmList = () => {
  emits('closeAlarmList');
};
</script>

<style lang="less" scoped>
.left-panel-wrap {
  width: 356px;
  position: fixed;
  top: 60px;
  left: 20px;
  background: #04152c;
  color: #ffffffbf;
  margin-right: 5px;
  .title {
    padding: 0 10px;
    height: 36px;
    color: var(--el-color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @{deep} {
    .el-input__inner {
      color: #fff;
    }
    .el-input__wrapper {
      background: rgb(27, 58, 88);
      box-shadow: unset;
    }
    .el-table__header-wrapper {
      border-color: #04152c;
    }
    .el-table {
      background: #04152c;
    }
    .el-table__row {
      background: #04152c;
      border-color: #04152c;
    }
    tr:hover > td.el-table__cell {
      background: #043e70;
    }
    td.el-table__cell {
      border: none;
    }
    td.el-table__cell .cell {
      padding: 0;
    }
    tr.current-row > td.el-table__cell {
      background: #043e70;
    }
  }

  .el-icon--close {
    float: right;
    &:hover {
      cursor: pointer;
    }
  }
  .level-icon {
    width: 44px;
  }
  .area-select {
    width: calc(100% - 20px);
    margin: 0 10px;
  }
  .panel-table {
    margin-top: 10px;
  }
  .alarm-detail-wrap {
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
    }
    > div {
      max-width: 220px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .alarm-name {
      color: #339dff;
    }
    .alarm-desc {
      padding-left: 44px;
      margin-top: -15px;
    }
    .alarm-time {
      padding-right: 10px;
    }
  }
}
</style>
