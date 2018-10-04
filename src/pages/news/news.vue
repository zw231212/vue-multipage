<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="/">index Page</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'News'
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
