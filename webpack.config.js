var path              = require('path');
    webpack           = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: {
    script: './scripts/index.js',
    style: './styles/index.scss',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)\//,
          loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
      {
        test: /\.(jpg|ico)$/,
        loader: 'file?name=images/[name].[ext]'
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'assets/img/logos/'),
        to: path.join(__dirname, 'dist/logos/'),
      },
      {
        from: path.join(__dirname, 'assets/img/perfil.jpg'),
        to: path.join(__dirname, 'dist/'),
      }
    ]),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, 'assets/img/perfil.jpg'),
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: 'pug-loader!./templates/index.pug',
    })
  ],

  resolve: {
    root: path.join(__dirname, 'scripts'),
    extensions: ['', '.js'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};

module.exports = config;
