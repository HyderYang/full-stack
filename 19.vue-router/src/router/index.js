import Vue from "vue";
import Router from 'vue-router';

import Index from '../components/index.vue';
import News from '../components/news.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
});
