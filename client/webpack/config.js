var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var pkg = require('../../package.json')

module.exports = {
  context: path.join(__dirname, '../../client'),

  entry: 'app.jsx',

  output: {
    path: path.join(__dirname, '../../build'),
    publicPath: '/',
    filename: 'app-' + pkg.version + '.bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js(x|)?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, '../../client')
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(scss|css)$/,
      include: [
        path.join(__dirname, '../../client'),
        path.join(__dirname, '../../node_modules')
      ],
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
    }]
  },

  sassLoader: {
    includePaths: [
      path.join(__dirname, '../../client'),
      path.join(__dirname, '../../node_modules')
    ],
    outputStyle: 'expanded'
  },

  postcss: [
    autoprefixer
  ],

  resolve: {
    root: path.join(__dirname, '../../client'),
    extensions: ['', '.js', '.json', '.jsx']
  }
}

// Bootstrap Webpack Loaders from node_modules/bootstrap-sass
/*
config.module.loaders.push({
  test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: path.join(__dirname, '../node_modules/bootstrap-sass'), // Needed for Bootstrap Fonts
  loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
})
config.module.loaders.push({
  test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: path.join(__dirname, '../node_modules/bootstrap-sass'), // Needed for Bootstrap Fonts
  loader: 'file-loader?name=assets/fonts/[name].[ext]'
})
config.module.loaders.push({
  test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  include: path.join(__dirname, '../node_modules/bootstrap-sass'), // Needed for Bootstrap SVG Components
  loader: 'file-loader?name=assets/svg/[name].[ext]'
})
*/

// Image File Loader from app
/*
config.module.loaders.push({
  test: /\.(png|jpg|jpeg|gif)$/,
  include: path.join(__dirname, '../app'), // Images if any we need provided
  loader: 'file-loader?name=assets/images/[name].[ext]'
})
*/

