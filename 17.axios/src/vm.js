import Vue from 'vue/dist/vue.esm'
import Axios from 'axios'
import {stringify} from 'querystring'

const axios = Axios.create({
  transformRequest:[
    function (data) {
      return stringify(data)
    }
  ]
});

const vm = new Vue({
  el: '#div1',

  data: {
    name: '',
    age: 0,
    loaded: false,
  },

  async created() {
    // const {data} = await Axios.get('./data/user.json');
    await axios({
      url: './data/sum.php',
      method: 'post',
      data: {
        a:55,
        b:99,
      },
      // 覆盖 transformRequest 将发送数据进行转换
      // transformRequest: [
      //   function(data){
          // const arr = [];
          // for(let name in data){
          //   arr.push(`${name}=${data[name]}`)
          // }
          //
          // return arr.join('&')
          // return stringify(data);
        // }
      // ]
    });
    this.name = data.name;
    this.age = data.age;
    this.loaded = true;
  },

  template: `
    <div v-if="loaded">
      <label>名字: </label><span>{{name}}</span><br />
      <label>年龄: </label><span>{{age}}</span>  
    </div>
  `
});
