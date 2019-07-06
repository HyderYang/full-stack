<template>
  <div>
    <p>
      {{$store.state.a}}
    </p>
    <input type="button" value="修改" @click="fn">
  </div>
</template>

<script>
  export default {
    name: "store",
    methods:{
      fn() {
        // 可以直接调用 mutations
        // this.$store.commit('add', 5)

        this.$store.dispatch('add', 3);
      }
    }
  }
</script>

<style lang="less">

</style>
