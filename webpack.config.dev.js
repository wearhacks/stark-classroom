import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      }, {
        test: /\.json$/,
        loader: "json"
      }, {
        test: /.eot(\?v=\d+.\d+.\d+)?$/,
        loader: "file"
      }, {
        test: /.(woff|woff2)$/,
        loader: "file-loader?prefix=font/&limit=5000"
      }, {
        test: /.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /.svg(\?v=\d+.\d+.\d+)?$/,
        loader: "file-loader?limit=10000&mimetype=image/svg+xml"
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['file']
      }, {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css?sourceMap', 'postcss']
      }
    ]
  },
  postcss: function () {
    return {
      plugins: [autoprefixer, precss]
    };
  }
};
