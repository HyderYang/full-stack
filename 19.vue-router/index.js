import Vue from "vue";
import App from './App.vue';
import router from './src/router';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);

new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  template: '<App />'
});
