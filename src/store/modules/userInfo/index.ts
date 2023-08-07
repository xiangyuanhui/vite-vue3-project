import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { RouteRecordRaw } from 'vue-router'
// 引入路由类型
import { constantRoutes } from '@/router/constantRoutes'
// 用户信息类型
interface userData {
  name: string
  age: number
}
const userInfoStore = defineStore('useInfo', () => {
  const name = ref<String>('张三')
  const userInfo = reactive<userData>({ name: '张三', age: 24 })
  const menuRoutes = reactive<RouteRecordRaw[]>(constantRoutes)
  return {
    name,
    userInfo,
    menuRoutes,
    changeName: () => {
      name.value = '里斯'
    },
  }
})

export default userInfoStore
