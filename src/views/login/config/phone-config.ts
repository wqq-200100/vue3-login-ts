export const rules = {
  num: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    },
    {
      pattern:
        /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8-9]))[0-9]{8}$/, //正则规范
      message: '请输入11位数字的手机号码',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    },
    {
      pattern: /^\d{4}$/, //正则规范
      message: '验证码必须是4位的数字',
      trigger: 'blur' //什么时候触发 blur:失去焦点触发
    }
  ]
}
