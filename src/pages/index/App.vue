<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row type="flex" justify="end">
          <el-col :span="6"><div></div></el-col>
          <el-col :span="6"><div></div></el-col>
          <el-col :span="6"><div></div>
            <el-button-group style="float: right;">
              <el-button>登录</el-button>
              <el-button>注册</el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="margin-top:5%;">
        <div>
              <img :src="logoImg"/>
        </div>
        <div style="margin-top:35px;">
          <el-row :gutter="20" justify="center">
            <el-col :span="4" :offset="6"></el-col>
            <el-col :span="12" :offset="6">
              <el-tabs v-model="core" @tab-click="handleClick">
                <el-tab-pane label="学者" name="people"></el-tab-pane>
                <el-tab-pane label="领域" name="field"></el-tab-pane>
                <el-tab-pane label="机构" name="organization"></el-tab-pane>
              </el-tabs>
              <el-input
                placeholder="请输入内容您要查询的内容"
                v-model="keyword"
                clearable  @change="search">
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
              </el-input>
              <div class="tags">
                <template v-for="tag in tagsInfo">
                  <el-button :key="tag.name" size="mini" v-on:click="tagClick(tag)" round>{{tag.name}}</el-button>
                </template>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <!--使用自己的组件，有些问题-->
            <word-cloud-component :fields="fields" v-on:clickWordCloud="getChildInfo"></word-cloud-component>
            <!--使用别人的组件-->
            <!--<vue-echart-wordcloud-->
            <!--:chart-content="fields"-->
            <!--:chart-width="800"-->
            <!--:chart-height="300"></vue-echart-wordcloud>-->
          </el-row>
        </div>
      </el-main>
    </el-container>
    <el-footer>
       <footer-component></footer-component>
    </el-footer>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable-next-line */
/* eslint-disable */
import Footer from '@/components/Footer'
import WordCloud from '@/components/WordCloud'
// import WordCloud from '@/components/ChartDemo'
import types from './store/mutation-types'
export default {
  name: 'App',
  data () {//此处的数据要么是和不变的
    return {
      logoImg: require('assets/show-logo.jpg'),
      core:this.$store.getters.core,
    }
  },
  mounted(){
    this.$store.dispatch(types.GET_WORDCLOUD)
  },
  computed:{
    fields(){
      return this.$store.getters.wordsCloud;
    },
    tagsInfo(){
      return this.$store.getters.tags;
    },
    keyword:function(){
      return this.$store.getters.keyword;
    },
  },
  components: {
    'FooterComponent': Footer,
    'WordCloudComponent': WordCloud
  },
  methods: {
    handleClick (tab, event) {
      this.$store.commit(types.CHANGE_CORE, tab.name);
    },
    tagClick (item, e) {
      this.$store.commit(types.CHANGE_CORE, item.type);
      this.$store.commit(types.CHANGE_KEYWORD, item.name);
    },
    search () {
      let keyword = this.$store.getters.keyword;
      let core =  this.$store.getters.core;
      if (!keyword) {
        return false
      }
      if (core) { // 指定了core的时候的查询

      } else { // 未指定core的时候的查询

      }
      console.log(keyword + '::' + core)
    },
    getChildInfo(info){
      this.$store.commit(types.CHANGE_KEYWORD, info.name);
    }
  },
  watch:{
    keyword:function(n,o){ //实现关键词变化的监控
      console.log(n)
      console.log(o)
    }
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
  .tags{
    cursor: pointer;
    margin-top: 5px;
  }
</style>
