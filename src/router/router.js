import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 首页相关
const index = resolve => {require(['pages/index/index.vue'], resolve)}

const routes = [
  { path: '', component: index },
  { path: '/index', component: index },
  
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
