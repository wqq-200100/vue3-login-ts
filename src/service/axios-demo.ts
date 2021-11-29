import axios from 'axios'

//1.axios的实例对象
// axios
//   .get('http://httpbin.org/get')
//   .then((res) => {
//     console.log(res)
//   })

//2.get请求，并传入参数
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: '清清',
//       age: 19
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
//
// //3.post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'hhhhhhhhhhhhhh',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

//promise本身是可以有类型的
// new promise<string>((resolve) => {
//   resolve('aaaa')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.axios配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000 //请求超时设置
// axios
//   .get('/get', {
//     params: {
//       name: '清清',
//       age: 19
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
//
// //post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'hhhhhhhhhhhhhh',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .all([axios.get('./get', { params: { name: 'qingiqng', age: 20 } }),
//               [axios.post('./post', { data: { name: 'qingiqng', age: 20 } })])
//   .then((res) => {
//     console.log(res[0]);
//     console.log(res[1]);
//   })

// 6.axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
// axios.interceptors.request.use(
//   (config) => {
//     // 想做的一些操作
//     // 1.给请求添加token
//     // 2.isLoading动画
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     return err
//   }
// )
//
// // fn1: 数据响应成功(服务器正常的返回了数据 20x)
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('服务器响应失败')
//     return err
//   }
// )
