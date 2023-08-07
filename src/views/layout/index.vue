<template>
  <div class="layout_container">
    <div class="layout_sidebar" :class="{ expend: layoutSettingStore.expand }">
      <Logo />
      <el-scrollbar class="scorll-container">
        <Menus />
      </el-scrollbar>
    </div>
    <div class="layout_tabar" :class="{ expend: layoutSettingStore.expand }">
      <Tabar />
    </div>
    <div class="layout_main" :class="{ expend: layoutSettingStore.expand }">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menus from './menus/index.vue'
import Main from './main/index.vue'
import Tabar from './tabar/index.vue'

import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  // background-color: $body-bg-color;
  .layout_sidebar {
    width: $layout-sidebar-width;
    height: 100vh;
    background-color: $layout-sidebar-bg-color;
    transition: all 0.3s;
    &.expend {
      width: $layout-sidebar-min-width;
    }
  }
  .layout_tabar {
    position: fixed;
    top: 0;
    left: $layout-sidebar-width;
    width: calc(100% - $layout-sidebar-width);
    height: $layout-tabar-height;
    background-color: #ffffff;
    transition: all 0.3s;
    &.expend {
      left: $layout-sidebar-min-width;
      width: calc(100vw - $layout-sidebar-min-width);
    }
  }
  .layout_main {
    position: absolute;
    top: $layout-tabar-height;
    left: $layout-sidebar-width;
    width: calc(100% - $layout-sidebar-width);
    height: calc(100vh - $layout-tabar-height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.expend {
      left: $layout-sidebar-min-width;
      width: calc(100vw - $layout-sidebar-min-width);
    }
  }
  .scorll-container {
    height: calc(100vh - $side-logo-height);
  }
}
</style>
