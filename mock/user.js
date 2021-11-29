const Mock = require('mockjs')

Mock.mock('/api/login', {
  //输出数据
  data: {
    id: 10, //随机生成姓名
    token: '@name' //随机生成姓名}
  }
})
