process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const path = require('path');
const webpack = require('webpack');

let paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

const config = {
  bail: true,

  entry: {
    app: path.join(paths.src, 'index.js')
  },

  output: {
    filename: '[name].bundle.js',
    path: paths.dist
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: paths.appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          cacheDirectory: true,
        },
      }
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },        
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    }),
  ]
};

module.exports = config;