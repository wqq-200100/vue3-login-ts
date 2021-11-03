// const path = require('path')
module.exports = {
  // 配置方式一：CLI提供的属性
  outputDir: './build',
  // 配置方式二：和webpack属性从完全一致，最后完成合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
// //配置方式三：
// chainWebpack: (config) => {
//   config.resolve.alias
//     .set('@', path.resolve(__dirname, 'src'))
//     .set('views', '@/views')
// }
// }
