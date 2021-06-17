const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,

  entry: path.resolve(__dirname, './src/index.js'),

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/logo.svg',
    }),
  ],

  devServer: {
    contentBase: './dist',
    hot: true,
  },
}
