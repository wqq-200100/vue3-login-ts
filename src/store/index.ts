import { createStore } from 'vuex'

import login from './login/login'

import { IrootState } from '@/store/types'

const store = createStore<IrootState>({
  state() {
    return {
      name: 'qing',
      age: 20
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export default store
