import Vue from 'vue';
import Parent from './components/parent';
import vueParent from './components/2.0/parent.vue'

const vm = new Vue({
  el: "#app",

  data: {

  },

  components: {
    Parent,
    vueParent
  },

  created() {
    console.log('created')
  },

  mounted() {
    console.log('mounted')
  },

  template: `
  <div>
    <parent />
    <hr>
    <vueParent />
  </div>
  `
});
