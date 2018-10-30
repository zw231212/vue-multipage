/**
 * 提供state的计算调用与对外的信息暴露,state状态获取，你也可以把它看做Vuex的计算属性。
 * getters接受两个参数，state与getters
 */
/* eslint-disable */
export default {
  keyword: state => state.keyword,
  core: state => state.core,
  wordsCloud: state => state.wordsCloud,
  tags: state => state.tags,
}
