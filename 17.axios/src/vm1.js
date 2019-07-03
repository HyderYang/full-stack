import Vue from 'vue/dist/vue.esm'


const vm = new Vue({
  el: '#div1',

  data: {
    name: '',
    age: 0
  },

  template: `
    <div>
      姓名: {{name}}
      年龄: {{age}}
    </div>
  `
});
