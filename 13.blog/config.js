const path=require('path');

module.exports = {
  DB_HOST: 'localhost',
  DB_NAME: 'nodejs',
  DB_USER: 'root',
  DB_PASS: 'root',

  UPLOAD_DIR: path.resolve(__dirname, './static/upload'),

  HTTP_ROOT: 'http://localhost:8989',
};
