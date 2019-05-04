const path = require('path');
const merge = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [new ErrorOverlayPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
});
