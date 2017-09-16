// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/router'

//全局配置文件
import 'assets/config/common'
import 'assets/config/regexp'
import 'assets/config/format'

Vue.config.productionTip = false
import 'assets/css/normalize.css'
import 'assets/css/base.css'

// element-ui
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'assets/element/index.css'

//楼层滚动
import Scrollspy from 'vue2-scrollspy'
Vue.use(Scrollspy)

// 兼容IE9
import promise from 'es6-promise'
promise.polyfill()

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
