<template>
  <div>
    <input type="button" value="显示隐藏" @click="b=!b">
    <hr>
<!--    <transition name="fadeDown">-->
<!--      <div class="box" v-if="b"></div>-->
<!--    </transition>-->
    <transition-group tag="ul" name="fadeUp" class="list">
      <li v-for="item,index in arr" @click="del(index)" :key="item">{{item}}</li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        b: true,
        arr: [1,2,3,4,5]
      }
    },
    methods: {
      del(index) {
       this.arr.splice(index, 1)
      }
    }
  }
</script>

<style scoped lang="less">
  .box {
    width: 200px;
    height: 200px;
    background: #ccc;
    animation-duration: 3s;
  }
  .list{
    li{
      width: 100px;
      height: 100px;
      float: left;
      background: #ccc;
      margin: 20px;
      list-style: none;
    }
  }
</style>
