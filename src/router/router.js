import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 首页相关
const index = resolve => {require(['pages/index/index.vue'], resolve)}
// const cooperation = resolve => {require(['pages/index/cooperation.vue'], resolve)}
// const control = resolve => {require(['pages/index/control.vue'], resolve)}
//
// // 登录相关
// const login = resolve => {require(['pages/login/login.vue'], resolve)}
// const register = resolve => {require(['pages/login/register.vue'], resolve)}
// const join = resolve => {require(['pages/login/join.vue'], resolve)}
// const cpregister = resolve => {require(['pages/login/cpregister.vue'], resolve)}
// const forgetpsw = resolve => {require(['pages/login/forgetPsw.vue'], resolve)}
//
//
// //新闻相关
// const news_list = resolve => {require(['pages/news/list.vue'], resolve)}
// const news_detail = resolve => {require(['pages/news/detail.vue'], resolve)}
// const news_about = resolve => {require(['pages/news/about.vue'], resolve)}
// const nlist = resolve => {require(['pages/news/children/list.vue'], resolve)}
// const ndetail = resolve => {require(['pages/news/children/detail.vue'], resolve)}
//
// // 店铺产品相关
// const shop = resolve => {require(['pages/shop/index.vue'], resolve)}
// const pro_detail = resolve => {require(['pages/product/detail.vue'], resolve)}
// const search = resolve => {require(['pages/product/search.vue'], resolve)}
// const shopcar = resolve => {require(['pages/product/shopcar.vue'], resolve)}
// const pay = resolve => {require(['pages/product/pay.vue'], resolve)}
//
// // 个人中心
// const account = resolve => {require(['pages/account/account.vue'], resolve)}
// const pindex = resolve => {require(['pages/account/children/index.vue'], resolve)}
// const porder = resolve => {require(['pages/account/children/order.vue'], resolve)}
// const pcollection = resolve => {require(['pages/account/children/collection.vue'], resolve)}

// 帮助中心
// const help = resolve => {require(['pages/help/help.vue'], resolve)}

const routes = [
  { path: '', component: index },
  { path: '/index', component: index },
  // { path: '/cooperation', component: cooperation },
  // { path: '/control', component: control },
  // { path: '/login', component: login },
  // { path: '/register', component: register },
  // { path: '/join', component: join },
  // { path: '/cpregister', component: cpregister },
  // { path: '/forgetpsw', component: forgetpsw },
  // { path: '/news/:newsType',name:'newsList', component: news_list },
  // { path:'/about',name:'newsAbout',component:news_about,
  //   children: [
  //     { path: '', component: nlist },
  //     { path: 'list/:listType', component: nlist },
  //     { path: 'detail/:newsId', component: ndetail },
  //   ]
  // },
  // { path: '/newsDetail/:nid', name:'newsDetail',component: news_detail },
  // { path: '/shop/:sid', name:'shop',component: shop },
  // { path: '/detail/:did', name:'detail',component: pro_detail },
  // { path: '/search', component: search },
  // { path: '/shopcar', component: shopcar },
  // {
  //   path: '/pay',
  //   component: pay,
  //   meta:{
  //     'requireAuth':true
  //   }
  // },
  // { path: '/account/:accountId', name:'account', component: account,
  //     meta:{
  //       'requireAuth':true
  //     },
  //     children: [
  //       { path: '', component: pindex },
  //       { path: 'index', component: pindex },
  //       { path: 'order', component: porder },
  //       { path: 'collection', component: pcollection }
  //     ]
  // },
  // { path: '/help', component: help }
]

const router = new VueRouter({
  mode: 'history',                                          //启用history模式，去除#(ie10以下不支持)
  history: true,                                            //启用HTML5 history模式
  saveScrollPosition:true,                                  //退操作的时候记住之前的滚动条位置
  scrollBehavior (to, from, savedPosition) {                //跳转新页面，滚动到最顶端
    return savedPosition || { x: 0, y: 0 }
  },
  routes: routes
})
/**
 * 路由拦截器
 * @to Arrive router info
 * @from leave router info
 * @next Function
 */
import { Notification } from 'element-ui'
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!localStorage.getItem('ssid')) {
      Notification({
        title: '提示',
        message: '您还未登录，请先登录！',
        type: 'warning'
      });
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
