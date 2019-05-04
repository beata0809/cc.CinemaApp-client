const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    publicPath: './',
  },
  mode: 'production',
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])],
});
