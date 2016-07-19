'use strict';

var path = require('path');
var APP_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './public/script.js'
  },
  devtool: 'source-map',
  // devtool: 'inline-source-map',
  stats: {
    colors: true,
    reasons: true,
    hash: false,
    modulesSort: 'name'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};
