/**
 * （1）提供事件的异步调用；
 * （2）数据更改在mutation里面处理，不在action里面处理
 * Action 函数接受一个与 store 实例具有相同方法和属性的context对象，除了使用context.commit提交mutations，
 * 也可以使用context.getter和context.state来获取getter和state。但是context并不是state实例本身。
 * 分发action：store.dispatch('increment') ，Actions 支持同样的载荷(payload)方式和对象方式进行分发：
 * // 以载荷形式分发
 * store.dispatch('incrementAsync', {
 *    amount: 10
 * })
 *
 * // 以对象形式分发
 * store.dispatch({
 * type: 'incrementAsync',
 *    amount: 10
 * })
 */
import http from '@/api/http'
import config from '@/api/config'
import types from './mutation-types'
/* eslint-disable */
export default {
  [types.GET_WORDCLOUD](context){ //获取词云数据
    http.get(config.common.TOP_N_KEYWORD_URL+"/15").then((resp) => {
      context.commit(types.GET_WORDCLOUD, resp.data)
    }).catch( (e) => {
      console.log(e)
    });
  },
  getKeywordType:({commit}, params) =>{
    commit('getKeywordType',{params})
  },
  searchKeyword:({commit}, params) => commit('getWordCloud',{params}),
}
