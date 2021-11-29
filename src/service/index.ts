// service统一出口
import WQRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '@/utils/cache'

const wqRequest = new WQRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = LocalCache.getCache('token')
      if (config.headers) {
        if (token) {
          // Authorzation:授权 Bearer：信使 字段与token相结合
          config.headers.Authorzation = `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorsCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorsCatch: (error) => {
      return error
    }
  }
})
export default wqRequest
