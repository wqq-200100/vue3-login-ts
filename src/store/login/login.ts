import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

import LocalCache from '@/utils/cache'
import router from '@/router'

import { Iaccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'
// import { userInfo } from 'os'
// import { userInfo } from 'os'

// module的两个类型是必传的
const LoginModule: Module<ILoginState, IRootState> = {
  namespaced: true, // 命名空间：在同一个作用域中有两个或多个同名的实体,为了解决命名冲突
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  getters: {},
  //修改state唯一的方式
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, palyload: Iaccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(palyload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token) //保存token

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.roleId)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      // 跳到首页
      await router.push('/main')
    },

    // 做初始化保存
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default LoginModule
