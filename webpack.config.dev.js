process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const path = require('path');
const webpack = require('webpack');

let paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

const config = {
  entry: {
    app: path.join(paths.src, 'index.js')
  },

  output: {
    filename: '[name].bundle.js',
    path: paths.dist
  },

  devtool: 'eval',

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
    new webpack.NamedModulesPlugin()
  ],

  performance: {
    hints: false,
  }
};

module.exports = config;