const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env){
  // antd 按需加载
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }
  ], config);

  // 装饰器语法
  config = injectBabelPlugin(
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    config
  );
  return config;
};
