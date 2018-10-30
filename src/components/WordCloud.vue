<template>
  <div class="word-cloud" :wordslength="fields.length">
    <div id="word-cloud" style="height: 250px;"></div>
    <!--
      写下面这个是为了主动的触发更新，其实传递过来更新了，但是整个词云图没有同步更新，这里主动去触发,
      使用上面的wordslength属性是为了达到一样的效果
    -->
    <!--<span style="display: none;">{{fields.length}}</span>-->
  </div>

</template>

<script>
/* eslint-disable */
import echarts from 'echarts'
import EChartsWordCloud from 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  props: {
    fields: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Kejso!',
    }
  },
  computed:{
    wordsInfo:function () {
      console.log("计算属性")
      console.log(this.wordsInfo)
      return this.fields;
    }
  },
  updated(){
    this.draw();
  },
  mounted () {
    this.draw();
  },
  methods: {
    draw(){
      var that = this;
      var fields = this.fields;
      var chart = echarts.init(document.getElementById('word-cloud'));
      chart.setOption({
        series: [{
          type: 'wordCloud',
          // The shape of the "cloud" to draw. Can be any polar equation represented as a
          // callback function, or a keyword present. Available presents are circle (default),
          // cardioid (apple or heart shape curve, the most known polar equation), diamond (
          // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

          shape: 'circle',

          // A silhouette image which the white area will be excluded from drawing texts.
          // The shape option will continue to apply as the shape of the cloud to grow.

          // maskImage: maskImage,

          // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
          // Default to be put in the center and has 75% x 80% size.

          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          right: null,
          bottom: null,

          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.

          sizeRange: [12, 60],

          // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

          rotationRange: [0, 1],
          rotationStep: 45,

          // size of the grid in pixels for marking the availability of the canvas
          // the larger the grid size, the bigger the gap between words.

          gridSize: 8,

          // set to true to allow word being draw partly outside of the canvas.
          // Allow word bigger than the size of the canvas to be drawn
          drawOutOfBound: false,

          // Global text style
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },

          // Data is an array. Each array item must have name and value property.
          data:fields
        }]
      });
      chart.on('click', function (params) {
        that.$emit('clickWordCloud',params.data);//在这里不能直接操作vuex的数据，得去给父组件传递消息
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
