/**
 * Created by root on 2017/4/22.
 **/
import router from 'src/router/router'
import axios from 'axios'
import config from './config.js'
import { Message } from 'element-ui'
import { Notification } from 'element-ui'

class API {
  post(params) {
    config.data = params.data
    if(params.file){
      config.headers = {
        'Content-Type':'multipart/form-data'
      }
    }
    return axios.post(params.url,config.data,config)
  }
  info(msg){
    Message({
      type:'info',
      message:msg
    })
  }
  success(msg){
    Message({
      type:'success',
      message:msg
    })
  }
  warning(msg){
    Message({
      type:'warning',
      message:msg
    })
  }
  error(msg){
    Message({
      type:'error',
      message:msg
    })
  }
}

// 请求拦截
axios.interceptors.request.use(function (config) {
  //获取ssid并随请求发出
  var ssid = localStorage.getItem('ssid');
  if(ssid){
    // axios.defaults.headers.common['Authorization'] = ssid;
    config.headers.Authorization = ssid;
  }
  return config
}, function (error) {
  console.log(error)
  return Promise.reject(error)
});

// 响应拦截
axios.interceptors.response.use(function (response) {
  var data
  // IE9时response.data是undefined，因此需要用response.request.responseText来使用
  if(response.data == undefined){
    data = response.request.responseText
  }
  // 当data存在时就用data
  else{
    data = response.data
  }
  // 判断data不是Object时，解析成Object
  if(!(data instanceof Object)){
    data = JSON.parse(data)
  }
  // 登录注册操作时把header.authorization返回
  let login_pattern = new RegExp('login')
  let register_pattern = new RegExp('register')
  if(login_pattern.test(response.config.url) || register_pattern.test(response.config.url)){
    data.authorization = response.headers.authorization;
    if(data.authorization){
      axios.defaults.headers.common['Authorization'] = data.authorization;
    }
  }
  // 偏中后台项目可以统一在此处理请求失败，偏向用户体验的项目需要单独处理，避免过多错误提示
  // if(data.code && data.code !== 0){
  //   Notification({
  //     title: '提示',
  //     message: data.msg,
  //     type: 'warning'
  //   });
  // }
  // 会话超时，返回登陆页
  if(data.need_login === 1 || data.code == 1002){
    localStorage.removeItem('ssid')
    localStorage.removeItem('username')
  }
  return data
}, function (error) {
  return Promise.reject(error)
});

export default API
