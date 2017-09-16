<!--
 Created by root on 2017/7/27.
-->
<template>
  <div class="page-index" id="pageIndex">
    <!--<banner></banner>-->
    <topbar></topbar>
    <!--<searchbar></searchbar>-->
    <!--<div class="navbar">-->
      <!--<ul class="container">-->
        <!--<li class="head"><i class="iconfont icon-icon_shangpinfenlei"></i>全部商品分类</li>-->
        <!--<li><router-link to="/news/1">农化服务</router-link></li>-->
        <!--<li><router-link to="/control">质保服务</router-link></li>-->
        <!--<li><router-link to="/cooperation">业界合作</router-link></li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<div class="slider">-->
      <!--<div class="banner">-->
        <!--<el-carousel arrow="always" height="500px">-->
          <!--<el-carousel-item>-->
            <!--<img src="/static/banner/index/home_banner4.png" alt="" class="banner">-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item>-->
            <!--<img src="/static/banner/index/home_banner3.png" alt="" class="banner">-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item>-->
            <!--<img src="/static/banner/index/home_banner1.png" alt="" class="banner">-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      <!--</div>-->
      <!--<div class="sidemenu" :style="{left:(left+92)+'px'}">-->
        <!--<sidemenu :nav="nav"></sidemenu>-->
      <!--</div>-->
      <!--<div class="rightbar" :style="{right:(left+91)+'px'}">-->
        <!--<div class="quicklink">-->
          <!--<ul>-->
            <!--<li><a href="http://www.moa.gov.cn/" target="_blank">中华人民共和国农业部</a></li>-->
            <!--<li><a href="http://www.greenfood.org.cn/" target="_blank">中国绿色食品发展中心</a></li>-->
            <!--<li><a href="http://www.greenfood.agri.cn/lsspxhpd/" target="_blank">中国绿色食品协会</a></li>-->
            <!--<li><a href="http://www.agri.cn/" target="_blank">中国农业信息网</a></li>-->
            <!--<li><a href="http://www.natesc.agri.cn/" target="_blank">全国农业技术推广服务中心</a></li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="head">-->
          <!--<template v-if="!login.hasLogin">-->
            <!--<img src="/static/icon/user.png" alt="">-->
            <!--<p> Hi~欢迎来到绿色生资网</p>-->
            <!--<router-link to="/login" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small">登录</router-link>-->
            <!--<router-link to="/register" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small is-plain">注册</router-link>-->
          <!--</template>-->
          <!--<template v-if="login.hasLogin">-->
            <!--<img src="/static/icon/user1.png" alt="">-->
            <!--<p>Hi，欢迎回来 <b>{{login.username}}</b></p>-->
            <!--<router-link :to="'/account/'+login.username+'/index'" class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small">个人中心</router-link>-->
            <!--<a class="el-button el-button&#45;&#45;primary el-button&#45;&#45;small is-plain" @click="$scrollTo(0)">随便逛逛</a>-->
          <!--</template>-->
        <!--</div>-->
        <!--<div class="body">-->
          <!--<ul class="nav clearfix">-->
            <!--<li @mouseover="tabChange(0)" :class="{active:rightbar_tab_active == 0}"><router-link to="/news/94">农业政策</router-link></li>-->
            <!--<li @mouseover="tabChange(1)" :class="{active:rightbar_tab_active == 1}"><router-link to="/news/102">农化小窗</router-link></li>-->
            <!--<li @mouseover="tabChange(2)" :class="{active:rightbar_tab_active == 2}"><router-link to="/news/112">农业技术</router-link></li>-->
          <!--</ul>-->
          <!--<ul class="content">-->
            <!--<ul v-show="rightbar_tab_active == 0">-->
              <!--<li v-for="item in news_t">-->
                <!--<router-link :to="{name:'newsDetail',params:{nid:item._id}}" class="ellipsis">{{item.title}}</router-link>-->
              <!--</li>-->
            <!--</ul>-->
            <!--<ul v-show="rightbar_tab_active == 1">-->
              <!--<li v-for="item in news_s">-->
                <!--<router-link :to="{name:'newsDetail',params:{nid:item._id}}" class="ellipsis">{{item.title}}</router-link>-->
              <!--</li>-->
            <!--</ul>-->
            <!--<ul v-show="rightbar_tab_active == 2">-->
              <!--<li v-for="item in news_h">-->
                <!--<router-link :to="{name:'newsDetail',params:{nid:item._id}}" class="ellipsis">{{item.title}}</router-link>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</ul>-->
        <!--</div>-->
        <!--&lt;!&ndash;<div class="foot clearfix">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="float-left">&ndash;&gt;-->
            <!--&lt;!&ndash;<h2>加入绿色生资网</h2>&ndash;&gt;-->
            <!--&lt;!&ndash;<p>共同打造品质农业</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="float-right">&ndash;&gt;-->
            <!--&lt;!&ndash;<router-link to="/join" class="el-button el-button&#45;&#45;primary" size="small">商户入驻</router-link>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</div>-->
    <!--</div>-->
    <!--<ul class="scroll-nav" :style="{left:(left+45)+'px'}" v-show="showScrollNav">-->
      <!--<li :class="{active:scrollPos == 0}" @click="$scrollTo(0)">热卖推荐</li>-->
      <!--<li :class="{active:scrollPos == 1}" @click="$scrollTo(1)">农资大牌</li>-->
      <!--<li v-for="(item,index) in nav" :key="item" :class="{active:scrollPos == (index+2)}" @click="$scrollTo(index+2)">{{item}}专区</li>-->
      <!--<li :class="{active:scrollPos == 9}" @click="$scrollTo(9)">合作伙伴</li>-->
      <!--<li @click="toTop">返回顶部</li>-->
    <!--</ul>-->
    <!--<div class="scroll-content" v-scroll-spy="scrollPos">-->
      <!--<div class="sale">-->
        <!--<div class="container">-->
          <!--<vtitle title="热卖推荐">-->
            <!--<div slot="right" class="selectbar float-right">-->
              <!--<ul>-->
                <!--<li v-for="(item,index) in nav_arr" :key="index" :class="{active:index==hot_index}" @click="getHots(item.id,index)">{{item.name}}</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</vtitle>-->
          <!--<div class="empty-warn" v-if="production_hot.length==0">-->
            <!--<p>暂无数据</p>-->
          <!--</div>-->
          <!--<div class="content clearfix" v-if="production_hot.length>0">-->
            <!--<div class="item" v-for="(item,index) in production_hot" :key="index" :class="[index<5?'top':'bottom']">-->
              <!--<product1 :data="item"></product1>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="brand">-->
        <!--<div class="container">-->
          <!--<vtitle title="农资大牌"></vtitle>-->
          <!--<div class="content clearfix">-->
            <!--<div class="left">-->
              <!--<div class="empty-warn" v-if="hot_brand.length == 0">-->
                <!--<p>暂无数据</p>-->
              <!--</div>-->
              <!--<div class="item float-left" v-for="(item,index) in hot_brand" v-if="index>=0&&index<9" :key="item._id">-->
                <!--<img :src="item.logo" :alt="item.name">-->
                <!--<div class="mask">-->
                  <!--<router-link :to="{name:'shop',params:{sid:item._id}}">进入店铺</router-link>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="right">-->
              <!--<img src="/static/index/nongyedapai.png">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<cateblock v-for="(item,index) in production_cate" :data="item" :key="index"></cateblock>-->
      <!--<div class="imglink">-->
        <!--<imglink></imglink>-->
      <!--</div>-->
    <!--</div>-->
    <!--<promise></promise>-->
    <!--<vfooter></vfooter>-->

    <h1>sjk </h1>
  </div>
</template>

<script>
  // cps
  import topbar from 'cps/header/topbar'
  //ajax&&api
  import API from 'assets/config/API'
  const api = new API()
  export default{
    components:{
      topbar
    },
    data() {
      return {

      }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style lang="scss" rel='stylesheet/scss' scoped>
  @import 'src/assets/scss/style.scss';

</style>
