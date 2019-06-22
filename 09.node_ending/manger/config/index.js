const process = require('process');

const mode = 'dev';

module.exports = {
  mode,
  ...(mode === 'dev' ? require('./config.dev') : require('./config.prod'))
};
