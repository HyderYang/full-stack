import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Release from '@/pages/release';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/release',
      name: 'release',
      component: Release
    }
  ]
})
