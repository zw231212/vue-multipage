/**
 * 事件具体实现，必须是同步操作。
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。mutation不能直接调用，而要通过相应的 type 调用相应的
 * store.commit方法：store.commit('increment')，mutation接受两个参数state和额外的参数payload(载荷)。
 * payload可以是一个对象。
 */
import types from './mutation-types'
/* eslint-disable */
let mutations = {};
//改变属性的操作能不能使用公共的方法？
// Object.keys(types).forEach((key) => {
//   let type = types[key];
//   mutations[type] = (state, payload) => {
//     state[type] = payload;
//   }
// });
// console.log(mutations)
export default {
  [types.GET_WORDCLOUD](state, payload){
    state["wordsCloud"] = payload;
  },
  [types.SEARCH_KEYWORD](state) {

  },
  [types.GET_KEYWORD_TYPE](state){

  },
  [types.CHANGE_KEYWORD](state, payload){//像这样的赋值其实可以使用公共的，但是为了使type有更直观的意义，暂时没像上面注释的那样去写
        state["keyword"] = payload
  },
  [types.CHANGE_CORE](state, payload){
    state["core"] = payload
  }

}
