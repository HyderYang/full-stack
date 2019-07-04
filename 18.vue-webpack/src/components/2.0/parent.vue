<style lang="less">
  @bg: #ccc;

  .body{
    background: @bg;
  }
</style>

<template lang="html">
  <div class="body">
    2.0父级
    <Child />
  </div>
</template>

<script>
  import Child from './child.vue';

  export default {
    name: "",
    data() {
      return {

      }
    },

    components: {
      Child
    }
  }
</script>
