const ejs = require('ejs');

ejs.renderFile('./template/1.ejs',
  {
    name: '张三',
    arr: [123,321,434]
  },
  (err, data) => {
    if (err) {
      console.log('错了', err);
    }else{
      console.log(data);
    }
  }
);
