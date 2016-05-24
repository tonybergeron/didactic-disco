var webpack = require('webpack')
var base = require('./config')
var pkg = require('../package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    new ExtractTextPlugin('[name]-' + pkg.version + '.style.css'),
    // new webpack.optimize.DedupePlugin(), // Commented out due to causing issues in development with dependencies not being bundled correctly on rebuilds
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
  ],
  resolve: base.resolve
}

module.exports = config
