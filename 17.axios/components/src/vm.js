import Vue from 'vue/dist/vue.esm'
import './cmp1'
import mydialog from './dialog'

const vm = new Vue({
  el: '#dom1',

  data: {
    type: 'cmp1'
  },

  template: `
    <div>
<!--  传值前加冒号可传递原值 不加冒号视为字符串  -->
      <cmp1 name="哈哈" :list="[1,2,3,4,5]"/>
      <hr>
<!--  动态添加组件 is确定哪个组件    -->
      <component :is="type"></component>
      <hr>
      
      <mydialog>
        <template slot="title" style="color: red;">具名插槽内容</template>
        <h1>hahah</h1>
        <h1>heheh</h1>
      </mydialog>
    </div>
  `
});

