<template>
  <el-table
    class="s-scroll-table"
    ref="scrollTable"
    highlight-current-row
    @row-click="highlightcurrentIndex"
    @mouseover="mouseoverHandler"
    @mouseout="mouseoutHandler"
    size="small"
    v-bind="$attrs"
  >
    <slot></slot>
  </el-table>
</template>

<script setup>
import { ref, reactive, watch, useAttrs, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});
const attrs = useAttrs();
let scrollTable = ref();
let playInterval = null;
const emits = defineEmits('update:modelValue');

/**设置表格选中对应行 */
const setCurrentRow = (value) => {
  scrollTable.value?.setCurrentRow(attrs.data[value]);
};

/**设置currentIndex */
let currentIndex = ref(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    currentIndex.value = props.modelValue;
  },
  {
    immediate: true
  }
);
/**监听选中索引setCurrentRow */
watch(currentIndex, (value) => {
  emits('update:modelValue', value);
  setCurrentRow(value);
});

/**自动滚动 */
const autoScroll = () => {
  // 清除
  playInterval && clearInterval(playInterval);
  playInterval = setInterval(() => {
    currentIndex.value++;
    if (currentIndex.value >= attrs.data.length) {
      currentIndex.value = 0;
    }
    if (!scrollTable.value || !scrollTable.value) {
      return;
    }
    let $elTable = scrollTable.value.$el;
    let $body = $elTable?.querySelector('.el-table__body-wrapper tbody');
    let $firstTr = $body?.querySelectorAll('tr')[0];
    if (!$firstTr) {
      return;
    }
    const firstTrHeight = $firstTr.offsetHeight;
    scrollTable?.value.scrollTo({
      left: 0,
      top: currentIndex.value * firstTrHeight,
      behavior: currentIndex.value ? 'smooth' : 'instant'
    });
  }, props.interval);
};

// 监听数据变化 初始化滚动
watch(
  () => [attrs.data, props.interval],
  (value) => {
    if (props.autoScroll) {
      if (currentIndex.value != props.modelValue) {
        currentIndex.value = 0;
      }
      // //重新自动滚动
      autoScroll();
    }
  },
  { immediate: true }
);

onMounted(() => {
  // 设置默认选中
  setCurrentRow(currentIndex.value);
});

onBeforeUnmount(() => {
  // 清除
  playInterval && clearInterval(playInterval);
  playInterval = null;
});

/**操作事件 */
const highlightcurrentIndex = (row, column, event) => {
  // 设置滚动索引
  currentIndex.value = attrs.data.findIndex((item) => {
    return row == item;
  });
};
const mouseoverHandler = (row, column, cell, event) => {
  // 鼠标移过去面板，停止滚动
  playInterval && clearInterval(playInterval);
};
const mouseoutHandler = (row, column, cell, event) => {
  // 鼠标离开面板，继续滚动
  if (props.autoScroll) {
    autoScroll();
  }
};

defineExpose({
  ref: scrollTable
});
</script>

<style lang="less">
.s-scroll-table {
  .el-table__empty-block {
    height: auto !important;
  }
}
</style>
