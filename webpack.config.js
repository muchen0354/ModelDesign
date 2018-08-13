const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin') 

const config = {
  contentBase: path.join(__dirname,'./')
}

module.exports = {
  entry: {
    index: path.join(config.contentBase, './src/index')
  },
  output: {
    path: path.join(config.contentBase, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  },
  

  devServer: {
    port: '9000',
    open: true,
    contentBase: path.join(config.contentBase, './dist')
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(config.contentBase, 'index.html')
    }),

    new cleanWebpackPlugin(path.join(config.contentBase, './dist'))
  ]
}