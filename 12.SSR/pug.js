const pug = require('pug');

pug.renderFile('./template/1.pug',
  {
    pretty: true,
    paramH1: 'test param',
    users: [
      {name: 'a', age: 18},
      {name: 'c', age: 19},
      {name: 'b', age: 20}
    ]
  },
  (err, data) => {
    if(err){
      console.log('错误')
    }else{
      console.log(data);
    }
  }
);
