<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="!flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import { watch, ref, nextTick } from 'vue'
const layoutSettingStore = useLayoutSettingStore()
// 控制组件是否刷新
const flag = ref(false)
watch(
  () => layoutSettingStore.refresh,
  () => {
    flag.value = true
    nextTick(() => {
      flag.value = false
    })
  },
)
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
