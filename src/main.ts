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
import { setupStore } from '@/store'

require('../mock')

const app = createApp(App)
// 注册element-plus/其他 globalRegister(app)
app.use(globalRegister)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
