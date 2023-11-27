//axios二次封装
import axios from 'axios'

import { ElMessage } from 'element-plus'

let request = axios.create({
  //基础路径携带/api
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

//request实例添加请求拦截器
request.interceptors.request.use((config) => {
  //返回配置对象，headers属性请求头，经常给服务器端携带公共请求头

  return config
})

//响应拦截器,成功的拦截，失败的拦截
request.interceptors.response.use(
  (response) => {
    //简化数据
    console.log('res', response)

    return response.data
  },
  (error) => {
    //处理http网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      case 401:
        message = '未授权'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址出错'
        break
      default:
        message = '网络错误'
    }
    ElMessage.error(error.message || message)
    console.log('err', error)

    return Promise.reject(error)
  }
)

export default request
