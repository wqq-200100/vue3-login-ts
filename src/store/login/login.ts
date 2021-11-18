import { Module } from 'vuex'

import { ILoginState } from './types'
import { IrootState } from '../types'

// module的两个类型是必传的
const LoginModule: Module<ILoginState, IrootState> = {
  namespaced: true, // 命名空间
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, palyload: any) {
      console.log('执行accountLoginAction', palyload)
    }
  }
}

export default LoginModule
