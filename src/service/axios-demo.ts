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
