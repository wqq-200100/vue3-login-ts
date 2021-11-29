module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 可选链插件, 其他babel插件也是一样的安装方式
    '@babel/plugin-proposal-optional-chaining', // 可选链运算符 ?.
    '@babel/plugin-proposal-nullish-coalescing-operator' // 空值合并运算符 ??
    // [
    //   'import',
    //   {
    //     libraryName: 'element-plus',
    //     customStyleName: (name) => {
    //       return `element-plus/theme-chalk/${name}.css` // 按需自动引入
    //     }
    //   }
    // ]
  ]
}
