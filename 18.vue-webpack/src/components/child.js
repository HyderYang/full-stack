import Vue from 'vue'

export default Vue.component('child', {
  data() {
    return {
      num: 0
    }
  },
  template: `
  <div>
    子级: {{num}}
  </div>
  `
});
