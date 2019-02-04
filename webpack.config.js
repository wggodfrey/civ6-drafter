const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/index.jsx'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'client/components/'),
      containers: path.resolve(__dirname, 'client/containers/'),
      actions: path.resolve(__dirname, 'client/actions/'),
      reducers: path.resolve(__dirname, 'client/reducers/'),
      store: path.resolve(__dirname, 'client/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, '/client'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
