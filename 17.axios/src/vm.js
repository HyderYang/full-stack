import Vue from 'vue/dist/vue.esm'
import Axios from 'axios'

const vm = new Vue({
  el: '#div1',

  data: {
    name: '',
    age: 0
  },

  created() {

  },

  template: `
    <div>
      <label>名字: </label><span>{{name}}</span><br />
      <label>年龄: </label><span>{{age}}</span>  
    </div>
  `
});
