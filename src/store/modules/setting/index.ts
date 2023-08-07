import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLayoutSettingStore = defineStore('settingStore', () => {
  const expand = ref<Boolean>(false) // 设置框架是否折叠
  const refresh = ref<Boolean>(false) // 设置组件是否刷新
  return {
    expand,
    refresh,
    changeExpand() {
      expand.value = !expand.value
    },
  }
})

export default useLayoutSettingStore
