import axios from 'axios'
import { ElLoading, ILoadingInstance } from 'element-plus'
import type { AxiosInstance } from 'axios'
import type { WQRequestInterface, WQRequestConfig } from './type'

const DEFAULT_LOADING = true

class WQRequest {
  instance: AxiosInstance // 实例
  interceptors?: WQRequestInterface
  loading?: ILoadingInstance
  showLoading: boolean

  // constructor：类的构造器，传入基本的配置
  constructor(config: WQRequestConfig) {
    // 创建axios实例对象，保存到instance
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorsCatch
    )

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true, //蒙版
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)' //遮盖的背景颜色
          })
        }
        return res
      },
      (error) => {
        // 将loading移除
        this.loading?.close()
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (error) => {
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (error.response.status === 404) {
          console.log('错误信息404')
        }
        return error
      }
    )
  }

  request<T>(config: WQRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1. 单独的请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        // 对config进行转化再返回出去
        config = config.interceptors.requestInterceptor(config)
      }

      //2. 判断是否需要显示Loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1. 单独的请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // 对结果进行转化再赋值给res
            res = config.interceptors.responseInterceptor(res)
          }

          //2. 将showLoading设置为ture,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          //3. 将结果resolve返回出去
          resolve(res)
        })
        .catch((error) => {
          this.showLoading = DEFAULT_LOADING
          reject(error)
          return error
        })
    })
  }

  get<T>(config: WQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: WQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: WQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: WQRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default WQRequest
