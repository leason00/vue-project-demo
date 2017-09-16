/**
 * Created by root on 2017/4/22.
 **/
export default {
  // 请求方法同上
  method: 'post',

  // 基础url前缀
  baseURL: COMMON.url+'/api/xxx/v1',

  // 拦截处理请求数据
  transformRequest: [function (data) {
    data = JSON.stringify(data)
    return data;
  }],

  // 拦截处理响应数据
  transformResponse: [function (data) {
    return data;
  }],

  // 请求头信息
  headers: {
    'Content-Type':'application/json;charset=UTF-8'
  },

  //post参数
  data:{

  },

  //设置超时时间
  timeout: 10000,

  // 携带凭证
  withCredentials: false,

  //返回数据类型
  responseType: 'json'
}