<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>

<script>
/* eslint-disable-next-line */
/* eslint-disable */

// 引入echarts
import echarts from 'echarts'

// // 引入基本模板
// import 'echarts/lib/echarts'
// // 引入柱状图组件
// import 'echarts/lib/chart/bar'
// // 引入提示框和title组件
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
export default {
  name: 'chart-demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>
