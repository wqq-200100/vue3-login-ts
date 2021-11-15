import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'

import { globalRegister } from './global'
import './service'

import './service/axios-demo'

import router from './router'
import store from './store'
import wqRequest from '@/service'

const app = createApp(App)
// globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

// wqRequest.request({
//   url: 'home/multidate',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的response')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// wqRequest
//   .request<DataType>({
//     url: 'home/multidate',
//     method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
