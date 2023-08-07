// 测试接口参数
export interface userData {
  name?: string
  age?: number
}
export interface reqUserData {
  list: Array<userData>
}
// 测试接口返回格式
export interface userInfoRep {
  code: number
  msg: string
  data: reqUserData
}
