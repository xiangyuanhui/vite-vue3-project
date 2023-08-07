<template>
  <!--刷新-->
  <el-button icon="Refresh" size="small" circle @click="refresh"></el-button>
  <!--全屏-->
  <el-button
    icon="FullScreen"
    size="small"
    circle
    @click="fullScreen"
  ></el-button>
  <!--主题-->
  <el-popover placement="bottom" title="主题设置" :width="200" trigger="click">
    <template #reference>
      <el-button icon="Setting" size="small" circle></el-button>
    </template>
    <el-form label-width="120px" label-position="left">
      <el-form-item label="暗黑主题">
        <el-switch
          v-model="dark"
          inline-prompt
          active-icon="Sunny"
          inactive-icon="Moon"
          @change="changeDark"
        />
      </el-form-item>
      <el-form-item label="自定义主题">
        <el-color-picker
          v-model="color"
          show-alpha
          :predefine="predefineColors"
          @change="changeColor"
        />
      </el-form-item>
    </el-form>
  </el-popover>
  <img class="user-img" src="../../../../../public/imgs/logo.png" />
  <!--退出-->
  <el-dropdown class="user-container">
    <span class="el-dropdown-link">
      张三
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
const layoutSettingStore = useLayoutSettingStore()
// 刷新组件
const refresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh
}

// 全屏
const fullScreen = () => {
  // dom属性判断是否全屏；仅兼容chrome
  let isfull = document.fullscreenElement
  if (!isfull) {
    document.documentElement.requestFullscreen() // 设置全屏
  } else {
    document.exitFullscreen() // 退出全屏
  }
}

// 设置暗黑模式
const dark = ref<Boolean>(false)
const changeDark = () => {
  console.log(dark)
  const html = document.documentElement
  if (dark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}
// 自定义主题
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const changeColor = () => {
  const el = document.documentElement
  el.style.setProperty('--el-color-primary', color.value)
}
</script>

<style scoped lang="scss">
.user-img {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #dedede;
  border-radius: 50%;
}
.user-container {
  margin-left: 10px;
}
</style>
