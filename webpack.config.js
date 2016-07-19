'use strict';

var path = require('path');

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
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
    // loaders: [
    // {
    //   test: /\.jsx?$/,
    //   exclude: /(node_modules|bower_components)/,
    //   loader: 'transform/cacheable?brfs',
    //   cacheable: true
    // }, {
    //   test: /\.jsx?$/,
    //   exclude: /(node_modules|bower_components)/,
    //   loader: 'transform/cacheable?envify',
    //   cacheable: true
    // },
    // {
    //   test: /\.jsx?$/,
    //   exclude: /(node_modules|bower_components)/,
    //   cacheable: true,
    //   loader: 'babel-loader',
    //   query: {
    //     stage: 0,
    //     retainLines: true,
    //     cacheDirectory: true
    //   }
    // }]
  }
};

// var path = require('path');

// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'bundle.js'
//   },
//   devtool: 'inline-source-map',
//   module: {
//     loaders: [
//       {
//         test: path.join(__dirname, 'src'),
//         loader: 'babel-loader'
//       }
//     ]
//   }
// };
