import Vue from 'vue'

export default Vue.component('child', {
  props: ['aaa'],
  data() {
    return {
      num: 0
    }
  },

  methods: {
    fn(){
      this.aaa.num++;
    }
  },

  template: `
  <div>
    子级: {{num}}
    <br>
    <button @click="fn()">父级+1</button>
  </div>
  `
});
