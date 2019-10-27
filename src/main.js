// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import '@/common/stylus/index.styl'

// 解决移动端点击时间延迟问题,fastclick使得decument下的点击事件都不延迟
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
