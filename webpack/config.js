var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var sassParams = [
  'outputStyle=expanded',
  'includePaths[]=' + path.join(__dirname, '../app/common/styles'),
  'includePaths[]=' + path.join(__dirname, '../node_modules')
]

var config = {
  context: path.join(__dirname, '../app'),
  entry: {
    dashboard: './dashboard/dashboard.jsx'
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js(x|)?$/,
      include: path.join(__dirname, '../app'),
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      include: [
        path.join(__dirname, '../app'),
        path.join(__dirname, '../node_modules')
      ],
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?' + sassParams.join('&'))
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, '../app'),
        path.join(__dirname, '../node_modules')
      ],
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  postcss: [
    autoprefixer
  ],
  resolve: {
    root: path.join(__dirname, '../app'),
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

module.exports = config
