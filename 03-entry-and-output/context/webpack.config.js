const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './src'), // 默认是npm run script所在的目录，不加这一行会报错
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}