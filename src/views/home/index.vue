<template>
  <div class="container">
    {{ name }}{{ userInfo.name }}
    <div class="item" v-for="item in userDataArr" :key="item.name">
      {{ item.name }}
    </div>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { userData } from '@/api/modules/test/type'
import userInfoStore from '@/store/modules/userInfo'
import { reqUserInfo } from '@/api/modules/test'
const userInfo = userInfoStore()
const name = ref('名字')
let userDataArr = reactive<userData[]>([])

const getUserInfo = () => {
  reqUserInfo({ name: '颤三', age: 12 }).then((res) => {
    userDataArr = res.data.data.list
    console.log(userDataArr)
  })
}
onMounted(() => {
  getUserInfo()
})
</script>

<style scoped lang="scss">
.container {
  font-size: 16px;
  font-weight: bold;
  color: $text-color;
}
</style>
