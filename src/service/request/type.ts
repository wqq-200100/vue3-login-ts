import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 拦截器能拦截哪些 限制
export interface WQRequestInterface<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

// 继承，为了扩展类型
export interface WQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WQRequestInterface<T>
  showLoading?: boolean
}
