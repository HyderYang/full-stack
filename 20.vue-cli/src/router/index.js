import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/components/store'
import animate from '@/components/animate'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/modify',
      name: 'store',
      component: store
    },
    {
      path: '/animate',
      name: 'animate',
      component: animate
    }
  ]
})
