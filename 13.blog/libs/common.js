const crypto = require('crypto');
const fs=require('fs');

module.exports = {
  md5(buffer) {
    const md5 = crypto.createHash('md5');
    md5.update(buffer);
    return md5.digest('hex');
  },

  unlink(path){
    return new Promise((resolve, reject)=>{
      fs.unlink(path, (err)=>{
        if(err){
          reject(err);
        }else{
          resolve();
        }
      });
    });
  },


};
