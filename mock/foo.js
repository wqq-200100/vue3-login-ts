const Mock = require('mockjs')

Mock.mock('/api/users/10', {
  returnCode: 0,
  data: {
    name: '@name',
    realname: '@name',
    password: '123456',
    cellphone: 13322223338,
    departmentId: 1,
    roleId: 1
  }
})

Mock.mock('/api/role1/menu', {
  returnCode: 0,
  data: [
    {
      children: [
        {
          children: null,
          id: 39,
          name: '核心技术',
          parentId: 38,
          sort: 106,
          type: 2,
          url: '/main/analysis/overview'
        },
        {
          children: null,
          id: 39,
          name: '商品统计',
          parentId: 39,
          sort: 106,
          type: 2,
          url: '/main/analysis/statistics'
        }
      ],
      icon: 'el-icon-monitor',
      id: 38,
      name: '系统总览',
      sort: 1,
      type: 1,
      url: 'main/analysis'
    },
    {
      children: [
        {
          children: null,
          id: 39,
          name: '用户管理',
          parentId: 40,
          sort: 107,
          type: 1,
          url: '/main/analysis/overview'
        },
        {
          children: null,
          id: 39,
          name: '部门管理',
          parentId: 38,
          sort: 107,
          type: 1,
          url: '/main/analysis/overview'
        },
        {
          children: null,
          id: 39,
          name: '菜单管理',
          parentId: 38,
          sort: 107,
          type: 1,
          url: '/main/analysis/overview'
        },
        {
          children: null,
          id: 39,
          name: '角色管理',
          parentId: 38,
          sort: 107,
          type: 1,
          url: '/main/analysis/overview'
        }
      ],
      icon: 'el-icon-monitor',
      id: 39,
      name: '系统管理',
      sort: 1,
      type: 1,
      url: 'main/analysis'
    }
  ]
})
