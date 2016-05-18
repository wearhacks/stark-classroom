/* Sets up the development web server run by `npm start -s`
 * The development server is run by a browser-sync development server
 * running through other middleware to support hot reloading, etc.
 */

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

browserSync({
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
        noInfo: true
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback()
    ]
  },
  files: [
    'src/*.html'
  ]
});
