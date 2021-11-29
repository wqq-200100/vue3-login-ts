// useStore as useVuexStore：起别名
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'

import { IRootState, IStoreType } from '@/store/types'

const store = createStore<IRootState>({
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

// 对store里面的东西做初始化
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 自己的Store,且返回vuex里面的Store
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
