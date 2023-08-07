import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/dev-api/getUserInfo', // 注意，这里只能是string格式
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: '请求成功',
        data: {
          list: [
            { name: '张三', age: 12 },
            { name: '张三3', age: 12 },
          ],
        },
      }
    },
  },
] as MockMethod[]
