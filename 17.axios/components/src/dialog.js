import Vue from 'vue/dist/vue.esm'

export default Vue.component('mydialog', {
  data() {
    return {

    }
  },

  template: `
  <div>
    <slot name="title" ></slot>
    <slot />
  </div>
  `
})
