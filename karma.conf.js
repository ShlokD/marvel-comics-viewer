// Karma configuration
// Generated on Fri Jul 27 2018 12:35:12 GMT-0700 (Pacific Daylight Time)
const path = require('path');

const karmaConf = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/chai/chai.js',
      'src/js/*.js',
      'tests/js/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      '*.css',
      '*.scss'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/*.js': ['webpack', 'sourcemap', 'eslint'],
      'tests/**/*.js': ['webpack', 'sourcemap', 'eslint']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['env']
            }
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.scss$/,
            loader: 'null-loader'
          },
          {
            test: /\.css$/,
            loader: 'null-loader'
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'nyan'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};

module.exports = karmaConf;
