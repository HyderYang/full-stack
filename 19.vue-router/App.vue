<template>
  <div>
    <router-link :to="{name: 'index'}">首页</router-link>
    <router-link :to="{name: 'news'}">新闻</router-link>

    <router-view />
  </div>
</template>

<script>
  export default {
    name: "",
    components: {
    }
  }
</script>

<style lang="less">

</style>
