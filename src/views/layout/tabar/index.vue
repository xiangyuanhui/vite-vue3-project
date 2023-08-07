<template>
  <div class="tabar-container">
    <div class="tabar-left">
      <Breadcrumb />
    </div>
    <div class="tabar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style scoped lang="scss">
.tabar-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgb(244 234 234),
    rgb(212 195 195),
    rgb(244 208 208)
  );
  .tabar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
