/**
 * https://vuex.vuejs.org/zh/guide/
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import DEFAULT_DATA from './default-data'
/* eslint-disable */
Vue.use(Vuex);
//在生产不使用strict，在开发时候strict
const debug = process.env.NODE_ENV !== 'production';

const state = { //单一状态树
  keyword:'',
  core:'',
  tags:DEFAULT_DATA.tags,
  wordsCloud:DEFAULT_DATA.wordsCloud
};
//导出vuex对象树
export default new Vuex.Store({
  strict: debug,
  state,
  modules: {},
  getters,
  actions,
  mutations,
})
