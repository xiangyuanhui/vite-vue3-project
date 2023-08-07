<template>
  <div class="sidebar-logo" v-if="!sidebar.hideLogo">
    <img :src="sidebar.logoUrl" alt="" class="logo" />
    <p class="logo-title">{{ sidebar.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { sidebar } from '@/config/setting/sidebar'
</script>

<style scoped lang="scss">
.sidebar-logo {
  display: flex;
  align-items: center;
  height: $side-logo-height;
  padding: 10px;
  color: #ffffff;
  .logo {
    width: 32px;
    height: 32px;
  }
  .logo-title {
    margin-left: 10px;
    font-size: $side-logo-font-size;
    font-weight: bold;
  }
}
</style>
