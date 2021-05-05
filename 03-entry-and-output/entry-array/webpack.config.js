const path = require('path')

function resolve(cwd='') {
  return path.join(__dirname, cwd)
}

module.exports = {
  mode: 'development',
  context: resolve(),
  entry: ['lodash', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  }
}