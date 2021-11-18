// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名字是必传的',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    },
    {
      pattern: /^[a-z0-9]{5,10}$/, //正则规范
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传的',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
