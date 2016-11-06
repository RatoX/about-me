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
    vendor: []
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
        from: path.join(__dirname, 'assets/img/perfil.jpeg'),
        to: path.join(__dirname, 'dist/'),
      }
    ]),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, 'assets/img/perfil.jpeg'),
    }),
    new webpack.ProvidePlugin({
      I18n: 'i18n-js'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'templates/index.html.ejs'
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
