<template>
  <div id="app">
    <ul>
      <router-link :to="{name: 'HelloWorld'}">列表</router-link>
      <router-link :to="{name: 'store'}">修改vuex数据</router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
