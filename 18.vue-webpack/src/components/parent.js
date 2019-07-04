import Vue from 'vue'
import Child from './child';

export default Vue.component('parent', {
  data() {
    return {
      num: 0
    }
  },

  methods: {
    fn(){
      this.$refs.c1.num++;
    }
  },

  template: `
  <div>
    <p>
      父级计数: {{num}}
    </p>
    <div>
      父级
      <button @click="fn()">+1</button>
    </div>
     <child ref="c1" :aaa="this"/>
  </div>
  `
});
