const path = require('path');

module.exports = function(env, argv){

  return {

    ...env.development ? require('./config/webpack.development') : require('./config/webpack.production'),

    entry: "./src/index.js",

    module: {

      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(eot|svg|woff|woff2)$/i,
          use: 'file-loader'
        }
      ]

    },

    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm'
      }
    }
  }
};
