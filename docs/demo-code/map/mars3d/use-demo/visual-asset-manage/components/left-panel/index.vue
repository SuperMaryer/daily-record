<template>
  <div class="left-panel-wrap">
    <div class="title">
      <span>告警列表</span>
      <el-icon class="el-icon--close" @click="closeAlarmList"><Close /></el-icon>
    </div>
    <div class="panel-top">
      <el-select
        class="area-select"
        v-model="selNetAreaId"
        placeholder="请选择网络区域名称"
        @change="changeNetArea"
      >
        <el-option
          v-for="item in netAreaList"
          :key="item.customUuid"
          :label="item.areaName"
          :value="item.customUuid"
        />
      </el-select>
    </div>
    <div class="panel-table">
      <ScrollTable
        ref="scrollTable"
        :autoScroll="true"
        :stripe="false"
        :show-header="false"
        :data="alarmList"
        :interval="interval"
        max-height="74vh"
        v-model="currentIndex"
        @current-change="currentChange"
      >
        <el-table-column label="告警名称" align="left">
          <template #default="{ row }">
            <div class="alarm-detail-wrap">
              <img class="level-icon" :src="alarmImageMap[row.level]" />
              <div class="alarm-center-wrap">
                <span :title="row.title">{{ row.title || '' }}</span>
                <div
                  class="alarm-desc"
                  :title="`${row.instance || ''}${
                    row.victimizedIp ? `（${row.victimizedIp}）` : ''
                  }`"
                >
                  <span class="instance">{{ row.instance || '' }}</span>
                  <span class="ip">
                    {{ row.victimizedIp ? `（${row.victimizedIp}）` : '' }}
                  </span>
                </div>
              </div>
              <div class="alarm-time">{{ row.alarmTime || '' }}</div>
            </div>
          </template>
        </el-table-column>
      </ScrollTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
// import ScrollTable from '@ffhou/vue3-scroll-table';
import ScrollTable from './scroll-table.vue';
import { Close } from '@element-plus/icons-vue';

import alarmLevelPng1 from './images/alarm-level-1.png';
import alarmLevelPng2 from './images/alarm-level-2.png';
const alarmImageMap = {
  1: alarmLevelPng1,
  2: alarmLevelPng2
};

const emits = defineEmits(['closeAlarmList', 'update:modelValue', 'update:selAlarmId']);

interface AlarmItem {
  level?: string | number;
  title?: string;
  victimizedIp?: string | number;
  alarmTime?: string;
  alarmId?: string;
}
interface AreaItem {
  customUuid?: string | number;
  areaName?: string;
}
interface PropsType {
  alarmList?: AlarmItem[];
  modelValue?: string | null;
  selAlarmId?: string | null;
  interval?: number;
  netAreaList?: AreaItem[];
}
const props = withDefaults(defineProps<PropsType>(), {
  modelValue: '',
  alarmList() {
    return [];
  },
  netAreaList() {
    return [];
  }
});

let currentIndex = ref();
let selNetAreaId = ref();
let scrollTable = ref();

watch(
  () => props.modelValue,
  (val) => {
    selNetAreaId.value = val;
  },
  {
    immediate: true,
    deep: true
  }
);
watch(
  () => props.selAlarmId,
  (val) => {
    const currentRow = props.alarmList?.find((x) => x.alarmId == val) || null;
    scrollTable.value?.ref?.setCurrentRow(currentRow);
  },
  {
    immediate: true
  }
);
const changeNetArea = (id) => {
  emits('update:modelValue', id);
};
const currentChange = (row) => {
  emits('update:selAlarmId', row?.alarmId || null);
};
const closeAlarmList = () => {
  emits('closeAlarmList');
};
</script>

<style lang="less" scoped>
.left-panel-wrap {
  background: #04152c;
  color: #ffffffbf;
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
    margin-top: -10px;
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
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 10px 0px 0;
    &:hover {
      cursor: pointer;
    }
    .alarm-center-wrap {
      color: #339dff;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .alarm-desc {
      display: inline-block;
      max-width: 183px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
