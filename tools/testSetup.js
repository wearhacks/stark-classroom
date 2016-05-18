/* Set environment to production while running tests.
 * Prevents babel dev config from being triggered, which includes hot
 * module reloading not desired while running tests.
 */

process.env.NODE_ENV = 'production';

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] =
require.extensions['.png'] =
require.extensions['.jpg'] = () => { return null; };

// Ensure transpiling of ES6 -> ES5 before tests run
require('babel-register')();
