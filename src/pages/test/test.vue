<template>
  <div id="app">
    <img :src="logoImg">
    <br />
    <img src="/static/404.png">
    <br />
    <a href="/news.html">news Page</a>
    <a href="/#/hello">Hello 子页面</a>
    <a href="/#/global/hello">全局Hello组件</a>
    <!--可以直接使用也可以如上面一般来使用-->
    <hello-child>Hello 子页面</hello-child>
    <router-view/>
  </div>
</template>

<script>
import HelloChild from './hello/hello'
export default {
  name: 'Test',
  data () {
    return {
      logoImg: require('assets/logo.png')
    }
  },
  components: {
    HelloChild
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
