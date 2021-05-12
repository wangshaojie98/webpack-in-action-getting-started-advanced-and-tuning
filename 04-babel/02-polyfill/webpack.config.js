const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (pwd='') => path.join(__dirname, pwd);

module.exports = {
  mode: 'development',
  context: resolve(),
  entry: './main.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          configFile: resolve('.babelrc') // 配置babel文件路径
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
    })
  ]
}