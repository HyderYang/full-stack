const crypto = require('crypto');

module.exports = {
  md5(buffer) {
    const md5 = crypto.createHash('md5');
    md5.update(buffer);
    return md5.digest('hex');
  }
};
