<template>
  <el-icon class="tabar-icon">
    <component
      :is="layoutSettingStore.expand ? 'Expand' : 'Fold'"
      @click="changIcon"
    />
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="route in $route.matched"
      :key="route.path"
      :to="{ path: route.path }"
    >
      <el-icon v-if="route.meta.icon">
        <component :is="route.meta.icon" />
      </el-icon>
      {{ route.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
const $route = useRoute()
const changIcon = () => {
  layoutSettingStore.changeExpand()
}
</script>

<style scoped lang="scss">
.tabar-icon {
  margin-right: 10px;
}
</style>
