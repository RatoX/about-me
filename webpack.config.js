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
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)\//,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.pug/,
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.(jpg|ico)$/,
        loader: 'file-loader',
        options: { name: 'images/[name].[ext]' },
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
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      cache: false,
      template: './templates/index.pug',
    })
  ],

  resolve: {
    modules: [
      path.join(__dirname, 'scripts'),
      'node_modules'
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};

module.exports = config;
