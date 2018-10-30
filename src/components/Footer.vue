<template>
  <div class="footer" :style="{marginTop:marginTop+'px'}">
    <div style="padding-top:10px;padding-bottom: 15px;">
      <a target="_blank" :title="name" rel="nofollow noreferrer" :href="homepage">
        {{name}}技术支持
      </a>
      <span>&nbsp;|&nbsp;{{icp}}</span>
      <span class="links">
        &nbsp;|&nbsp;<a :title="feedback" target="_blank" href="/nav/linkpages/feedback" >{{feedback}}</a>
        &nbsp;|&nbsp;<a :title="privacy" target="_blank"  href="/nav/linkpages/privacy">{{privacy}}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      homepage: 'http://nstr.escience.net.cn',
      name: '国家科技资源共享服务工程技术研究中心',
      feedback: '信息反馈',
      privacy: '隐私权声明',
      icp: '京ICP备17004807号-3',
      marginTop: 0,
      marginFactor: 0
    }
  },
  mounted () {
    this.marginTop = document.documentElement.clientHeight * this.marginFactor
    var that = this
    window.onresize = function () {
      that.marginTop = document.documentElement.clientHeight * that.marginFactor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    background-color:#f5f5f5 !important;
    font-size:15px;
    color:black;
  }
  a{
    color:black;
    text-decoration: none;
  }
  .links{
    text-align: center;
    float:right;
    padding-right: 40px;
  }
</style>
