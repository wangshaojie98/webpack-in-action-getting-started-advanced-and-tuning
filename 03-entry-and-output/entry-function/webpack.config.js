const path = require('path')
const resolve = (pwd = '') => path.join(__dirname, pwd);

module.exports = {
  mode: 'development',
  context: resolve(), // 资源入口的前缀
  entry: () => ({
    index: ['lodash', './src/index.js'],
    about: './src/about.js'
  }),
  output: {
    filename: '[name].js',
    path: resolve('dist')
  }
}