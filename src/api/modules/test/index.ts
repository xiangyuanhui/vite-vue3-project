import request from '@/utils/request'
import { userData, userInfoRep } from './type'
// 模块接口枚举
enum API {
  test = '/getUserInfo',
}
export const reqUserInfo = (data: userData) =>
  request.post<userInfoRep>(API.test)
