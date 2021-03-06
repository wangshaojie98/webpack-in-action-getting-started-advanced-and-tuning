const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const resolve = (pwd = '') => path.join(__dirname, pwd)
module.exports = {
  mode: 'development',
  context: path.join(__dirname),
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]@[hash].js',
    // publicPath: "./" //相对dist的目录，也就是html所在的目录
    // publicPath: "/assets/" // 相对主机域名的目录比如http://127.0.0.1:5500-->http://127.0.0.1:5500/assets
    // publicPath: "http://cdn.com/" //直接http://cdn.com/（+文件名）
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'pageA.html',
      template: resolve('./pageA.html'),
      chunks: ['pageA']// 引入指定的pageA.js
    }),
    // new HtmlWebpackPlugin(
    //   {
    //   filename: 'pageA.html',
    //   template: resolve('./pageA.html'),
    //   chunks: ['pageA']// 引入指定的pageA.js
    // }
    // ),
    // new HtmlWebpackPlugin({
    //   filename: 'pageB.html',
    //   template: resolve('./pageB.html'),
    //   chunks: ['pageB'] // 引入指定的pageB.js
    // })
  ]
}