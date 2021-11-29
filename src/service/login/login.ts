import wqRequest from '../index'

import { Iaccount, ILoginResult, IDateType } from './types'

// 枚举
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users', // 用法: /users/1
  UserMenus = '/role1' // 用法: role/1/menu
}

// 账号登陆请求
export function accountLoginRequest(account: Iaccount) {
  return wqRequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户信息
export function requestUserInfoById(id: number) {
  return wqRequest.get<IDateType>({
    url: `${LoginAPI.LoginUserInfo}/${id}`,
    showLoading: false
  })
}

// 请求用户菜单
export function requestUserMenusByRoleId(id: number) {
  return wqRequest.get<IDateType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
