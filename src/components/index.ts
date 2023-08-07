// 引入全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const globalComponent: { [key: string]: object } = { SvgIcon }
export default {
  install(app: { component: (arg0: string, arg1: object) => void }) {
    // 注册自定义组件
    Object.keys(globalComponent).forEach((key) => {
      app.component(key, globalComponent[key])
    })
    // element 图标全局注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
