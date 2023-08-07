import axios from 'axios'
import { ElMessage } from 'element-plus'
const baseOption = {
  baseURL: import.meta.env.VITE_BASE_API,
  timerout: 5000,
}
const server = axios.create(baseOption)

// 请求拦截
server.interceptors.request.use((config) => {
  console.log(config)
  return config
})
// 相应拦截
server.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    ElMessage({
      message: '请求失败',
      type: 'error',
    })
    // const status = error.response.status
    // switch (status) {
    //   case 200:
    //     break
    // }
  },
)

export default server
