import Vue from 'vue/dist/vue.esm'


const vm = new Vue({
  el: '#div1',

  data: {
    name: '',
    age: 0,
    a: 12,
    b: 23
  },

  async created() {
    // 发送数据
    let formdata = new FormData();
    formdata.append('a', 1);
    formdata.append('b', 2);

    const response = await fetch('data/sum.php', {
      method: 'post',
      body: formdata
    });

    const result = await response.json();

    console.log(result);

    const res = await fetch('./data/user.json');
    const data = await res.json();

    this.name = data.name;
    this.age = data.age;
  },

  methods: {
    async fn_submit(){
      const form = this.$refs['form1'];
      let formdata = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method,
        body: formdata
      });
      let result = await res.json();

      this.result = result
    }
  },

  template: `
    <div>
      <form ref="form1" @click.prevent="fn_submit()" action="./data/sum.php" method="post">
        <input type="text" v-model="a">
        <input type="text" v-model="b">
        <input type="submit" value="计算">
      </form>
    </div>
  `
});
