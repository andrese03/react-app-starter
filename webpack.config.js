const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const friendlyErrorsPlugin = new FriendlyErrorsWebpackPlugin();

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  title: 'React App',
  inject: true,
  templateParameters: {
    //
  },
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: ['file-loader?name=[path][name].[ext]?[hash]'],
      },
    ],
  },
  devServer: {
    quiet: true,
  },
  plugins: [
    htmlPlugin,
    friendlyErrorsPlugin,
  ],
};
