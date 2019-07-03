import Vue from 'vue/dist/vue.esm'

Vue.component('cmp1', {
  props: [
    'name',
    'list'
  ],

  data() {
    return {
      a: 12,
      b: 13
    }
  },

  template: `
  <div>
    result={{a + b}}
    <br>
    姓名: {{name}}
    <br>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
  `
});
