/**
 * action
 * Created by leason on 2017/8/4.
 */
import Vue from 'vue'
import { Message } from 'element-ui'
//ajax请求action
let action = {
  //文件上传
  uploads:'/uploads/register'
};

//emit通知桥
let Hub = new Vue();



global.COMMON = {
  url:'http://127.0.0.1:8080',
  // url:'',
  action:action,
  hub:Hub
};
