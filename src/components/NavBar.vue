<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
    <h2>Global Hello World!</h2>
  </div>
</template>

<script>
export default {
  name: 'GlobalHello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App, Global Hello World Page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
