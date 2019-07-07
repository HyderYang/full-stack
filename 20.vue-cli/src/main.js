// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

// vuex 挂载
Vue.use(Vuex);

const mod_a = {
  state: {
    a: 'mod_a'
  }
};

const mod_b = {
  state: {
    b: 'mod_b'
  }
};

// vuex声明store对象 (注意顺序 先挂载 再使用)
const store = new Vuex.Store({
  // 开发为true 声场为false
  // strict: true, // 严格模式 防止直接修改state
  strict: process.env != 'production',
  state: {
    a: 12, b: 5
  },
  mutations: {
    add (state, arg) {
      state.a += arg
    }
  },
  actions: {
    add (ctx, arg) {
      ctx.commit('add', arg)
    }
  },
  // 类似计算属性
  getters: {
    count(state){
      return state.a + state.b;
    }
  },
  // 拆分模块
  modules: {
    mod_a,
    mod_b
  },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
