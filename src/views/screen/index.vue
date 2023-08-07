<template>
  <div class="screen-container">
    <div class="box">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// 获取缩放比例，默认设计稿为1920*1080
const getScale = (w = 1920, h = 1080) => {
  const scaleW = window.innerWidth / w
  const scaleH = window.innerWidth / h
  return scaleW < scaleH ? scaleW : scaleH
}
let scale = ref(1)
onMounted(() => {
  let box = <HTMLElement>document.querySelector('.box')
  window.addEventListener('resize', () => {
    scale.value = getScale()
    console.log(scale.value)
    if (box) {
      box.style.setProperty(
        'transfrom',
        `scale(${getScale()}) translate(-50%,-50%)`,
      )
    }
  })
})
</script>

<style scoped lang="scss">
.screen-container {
  width: 100vw;
  height: 100vh;
  background-color: aqua;
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 1920px;
    height: 1080px;
    background-color: bisque;
    transform: translate(-50%, -50%);
    .top {
      width: 100px;
      height: 100px;
      margin-top: 20px;
      margin-left: 50px;
      background-color: red;
    }
    .bottom {
      width: 100px;
      height: 100px;
      margin-top: 20px;
      margin-left: 50px;
      background-color: red;
    }
  }
}
</style>
