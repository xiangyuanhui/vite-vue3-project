<template>
  <el-menu
    :collapse="layoutSettingStore.expand"
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="$route.path"
    text-color="#fff"
    class="menus-content"
  >
    <MenuItem :menuList="userStore.menuRoutes" />
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
import userInfoStore from '@/store/modules/userInfo'
import { useRoute } from 'vue-router'
const userStore = userInfoStore()
const $route = useRoute()
</script>

<style scoped lang="scss">
.menus-content {
  background-color: $layout-sidebar-bg-color;
}
</style>
