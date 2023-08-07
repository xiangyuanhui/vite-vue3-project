import { createApp } from 'vue'
import App from '@/App.vue'
// 配置element-plus插件与样式，国际化
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element暗黑模式主题
import 'element-plus/theme-chalk/dark/css-vars.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//svg引入
import 'virtual:svg-icons-register'
// pinia数据管理
import store from './store/index'
// 引入自定义插件
import GlobalComponent from '@/components'
import router from './router'
// 引入自定义插件
import '@/styles/index.scss'
const app = createApp(App)

app.use(router)
app.use(GlobalComponent)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
