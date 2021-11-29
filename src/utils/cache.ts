// 封装一个工具
class LocalCache {
  // 保存缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value)) // 保存键值对 JSON.stringify(value)：不管是什么类型 统一转换
  }

  // 获取缓存
  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value) // JSON.parse(value):把原来的字符串类型转换为对象
    }
  }

  // 删除某一个缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
