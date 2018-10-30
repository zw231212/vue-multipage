// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router/index'
import store from './store/index'
import Vuex from 'vuex'
// import ECharts from 'vue-echarts/components/ECharts.vue'
import echartWordcloud from 'vue-echart-wordcloud'
/* eslint-disable */
Vue.use(Vuex) ;
Vue.config.productionTip = false;
Vue.use(ElementUI);

// 注册组件后即可使用
// Vue.component('v-chart', ECharts)
Vue.use(echartWordcloud);
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
});
