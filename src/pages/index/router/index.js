import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloChild from '../hello/hello'
import GlobalHello from '@/components/HelloWorld'

Vue.use(Router)
console.log(HelloWorld)
export default new Router({
  'mode': 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloChild
    },
    {
      path: '/global/hello',
      name: 'GlobalHello',
      component: GlobalHello
    }
  ]
})
