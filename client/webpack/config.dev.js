var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var base = require('./config')
var pkg = require('../../package.json')

var config = {
  context: base.context,
  entry: base.entry,
  output: {
    path: base.output.path,
    publicPath: pkg.devConfig.buildProxy + base.output.publicPath,
    filename: base.output.filename
  },
  cache: true,
  debug: true,
  watch: true,
  devtool: 'inline-source-map',
  module: base.module,
  plugins: [
    new ExtractTextPlugin('app-' + pkg.version + '.style.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
  ],
  resolve: base.resolve
}

module.exports = config
