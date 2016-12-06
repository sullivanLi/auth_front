var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('style.css');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'main.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.sass$/,
        loader: extractCSS.extract(['css','sass'])
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
