import Vue from 'vue';
import Parent from './components/parent';

const vm = new Vue({
  el: "#app",

  data: {

  },

  component: {
    Parent,
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
  </div>
  `
});
