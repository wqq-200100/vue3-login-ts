import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WQRequestInterface<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

// 继承
export interface WQRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WQRequestInterface<T>
  showLoading?: boolean
}
