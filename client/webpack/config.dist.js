var webpack = require('webpack')
var base = require('./config')
var pkg = require('../../package.json')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

var config = {
  context: base.context,
  entry: base.entry,
  output: base.output,
  module: base.module,
  plugins: [
    new ExtractTextPlugin('app-' + pkg.version + '.style.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new CompressionPlugin()
  ],
  resolve: base.resolve
}

module.exports = config
