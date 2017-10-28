const path = require('path');

let paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

const config = {
  entry: {
    app: path.join(paths.src, 'index.js')
  },

  devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: paths.dist
  }
};

module.exports = config;