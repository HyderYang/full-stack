import Vue from 'vue/dist/vue.esm'


const vm = new Vue({
  el: '#div1',

  data: {
    name: '',
    age: 0
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

  template: `
    <div>
      姓名: {{name}}
      年龄: {{age}}
    </div>
  `
});
