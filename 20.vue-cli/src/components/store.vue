<template>
  <div>
    <p>
      {{$store.state.a}}
    </p>
    <p>
      vuex的getter: {{$store.getters.count}}
      <input type="button" value="+10" @click="count+=5">
    </p>
    <input type="button" value="修改" @click="fn">

    <hr>

    <p>mapState.a: {{a}}</p>
    <p>mapState.b: {{b}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "store",
    methods:{
      fn() {
        // 可以直接调用 mutations
        // this.$store.commit('add', 5)

        this.$store.dispatch('add', 3);
      }
    },
    computed: {
      ...mapState(['a', 'b']),
      count: {
        get(){
          return this.$store.getters.count;
        },
        set(value){
          console.log(value)
        }
      }
    }
  }
</script>

<style lang="less">

</style>
