import axios from 'axios'
import config from './config'
/* eslint-disable */
axios.defaults.baseURL = config.BASE_URL;
axios.defaults.headers.common['Authorization'] = 'zzq';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: config.BASE_URL
});

// 在实例已创建后修改默认值
instance.defaults.headers.common['Authorization'] = "zzq";
// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;
// 为已知需要花费很长时间的请求覆写超时设置
// instance.get('/longRequest', {
//   timeout: 5000
// });

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default instance
