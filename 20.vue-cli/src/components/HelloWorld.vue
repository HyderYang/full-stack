<template>
  <div>

    {{$store.state}}

    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>1</td>
        <td>张三</td>
        <td>19</td>
      </tr>
      <tr>
        <td>2</td>
        <td>李四</td>
        <td>23</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style >
</style>
