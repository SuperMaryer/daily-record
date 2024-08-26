<template>
  <div class="visual-asset-manage-wrap"></div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

// router
const router = useRouter();
router.push('/visual-asset/manage-show');
</script>

<style lang="less" scoped>
.visual-asset-manage-wrap {
  height: 100%;
  width: 100%;
}
</style>
