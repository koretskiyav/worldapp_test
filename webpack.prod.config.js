const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  eslint: {
    configFile: '.eslintrc',
    failOnWarning: false,
    failOnError: false,
  },
  module: {
    preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }],
    loaders: [{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }],
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
    ],
    extensions: ['', '.js'],
  },
};
