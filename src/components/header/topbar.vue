<!--
 Created by root on 2017/6/20.
 首页最顶部登录条
-->
<template>
  <div class="cp-topbar clearfix">
    <div class="container clearfix">
      <ul class="float-left" v-if="!hasLogin">
        <li class="login"><router-link to="/login">欢迎，请登录</router-link></li>
        <li><router-link to="/register">免费注册</a></router-link></li>
      </ul>
      <ul class="float-left" v-if="hasLogin">
        欢迎您，<li><router-link :to="'/account/'+username+'/index'">{{username}}</router-link></li>
        <li><a class="logout" @click="logout">退出登录</a></li>
      </ul>
      <ul class="float-right">
        <li><router-link :to="'/account/'+username+'/index'">账户中心</router-link></li>
        <li><router-link :to="'/account/'+username+'/order'">我的订单</router-link></li>
        <li><router-link :to="'/account/'+username+'/collection'">我的收藏</router-link></li>
        <li><router-link to="/join">商户入驻</router-link></li>
        <li class="hasSubmenu">
          <a href="javascript:void(0)">客户服务</a>
          <div class="submenu service">
            <div class="block block-top">
              <p class="title">客户</p>
              <ul>
                <li v-for="item in service" :class="item.index%2===0?'li-right':'li-left'" v-if="item.cate === 'user'">
                  <router-link to="/help">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
            <div class="block">
              <p class="title">商户</p>
              <ul>
                <li v-for="item in service" :class="item.index%2===0?'li-right':'li-left'" v-if="item.cate === 'seller'">
                  <router-link to="/help">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="http://www.365greenlife.com/index" target="_blank">中绿生活网</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import API from 'assets/config/API'
  const api = new API()
  const ERR_OK = 0
  export default{
    data() {
      return {
        service:[
          {index:1,cate:'user',title:'购物流程'},
          {index:2,cate:'user',title:'支付流程'},
          {index:3,cate:'user',title:'配送方式'},
          {index:4,cate:'user',title:'售后政策'},
          {index:5,cate:'user',title:'联系客服'},
          {index:6,cate:'user',title:'意见反馈'},
          {index:7,cate:'seller',title:'商家中心'},
          {index:8,cate:'seller',title:'商家成长'},
          {index:9,cate:'seller',title:'商家入驻'},
          {index:10,cate:'seller',title:'商家品控'},
          {index:11,cate:'seller',title:'商家规则'},
          {index:12,cate:'seller',title:'商家工具'}
        ],
        hasLogin:false,
        username:'请登录'
      }
    },
    created() {
      let ssid = localStorage.getItem('ssid');
      let username = localStorage.getItem('username');
      if(ssid && username){
        this.hasLogin = true;
        this.username = username;
      } else{
        this.hasLogin = false;
        this.username = null;
        localStorage.removeItem('ssid');
        localStorage.removeItem('username');
      }
    },
    methods:{
      logout:function () {
        var that = this;
        let params = {
          url:COMMON.action.logout,
          data:{}
        };
        api.post(params).then(function (response){
          if(response.code === ERR_OK){
            that.hasLogin = false;
            that.username = null;
            localStorage.removeItem('ssid');
            localStorage.removeItem('username');
            //广播
            COMMON.hub.$emit('logout', true);
            that.$router.push('/index');
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel='stylesheet/scss' scoped>
  @import 'src/assets/scss/style.scss';
  /*一级菜单*/
  .cp-topbar{
    width:100%;
    background: #f1f1f1;
    .logout{
      color: $error;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .container > ul > li{
    display: inline-block;
    position: relative;
    &:hover  i{
      transform:rotate(180deg);
    }
    &.hasSubmenu:hover{
      background: #fff;
      .submenu{
        display: block;
      }
    }
    & > a{
      padding:0 10px;
      height:32px;
      line-height:32px;
    }
  }
  a{
    display: block;
  }
  /*二级菜单*/
  .submenu{
    display: none;
    position: absolute;
    top:32px;
    right:0;
    padding:10px 10px 0;
    background: #fff;
    z-index:999;
    box-shadow: 1px 2px 1px rgba(0,0,0,.1),-1px 1px 1px rgba(0,0,0,.1);
    .block-top{
      margin-bottom:15px;
    }
    .title{
      margin-bottom:5px;
      font-weight:700;
    }
    a{
      margin-bottom:10px;
    }
  }
  .service ul{
    width:120px;
    li{
      display: inline-block;
      width:50px;
      &.li-left{
        margin-right:20px;
      }
    }
  }
</style>
