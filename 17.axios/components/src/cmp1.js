import Vue from 'vue/dist/vue.esm'

const vm = new Vue({
  el: '#dom1',

  data: {

  },

  template: `
  <div>
    <cmp1></cmp1>
  </div>
  `,

  components: {
    cmp1: {
      data: () => {
        return {

        }
      },

      template: `
        <div>aaaa</div>
      `
    }
  }
});
