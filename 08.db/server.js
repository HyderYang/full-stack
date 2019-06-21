const http = require('http');
const sql = require('mysql');

let db = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'travel'
});

db.query('select * from tab_category', (err, data) => {
  if (err) {
    console.log('错误');
  }else{
    console.log(data);
  }
}, () => {
    
});
