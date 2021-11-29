// creatWebHashHistory:创建哈希历史记录。 适用于没有主机（例如 file://）的 Web 应用程序或无法配置服务器以处理任何 URL 的情况
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // 引入类型
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue') // 懒加载
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  // 去的路径是不是登录页，不是才判断
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    // 没有拿到token,跳到login
    if (!token) {
      return '/login'
    }
  }
})
export default router
