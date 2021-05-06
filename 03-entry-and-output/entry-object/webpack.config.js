const path = require('path')

function resolve(pwd='') {
  return path.join(__dirname, pwd)
}

module.exports = {
  mode: 'development',
  context: resolve(),
  entry: {
    index: ['lodash', './src/index.js'],
    lib: './src/about.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: resolve('dist')
  }
}