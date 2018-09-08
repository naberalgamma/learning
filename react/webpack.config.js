const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        { test: /\.jsx?/, exclude: /node_modules/, use: { loader: "babel-loader" } }
    ]
  }
};
