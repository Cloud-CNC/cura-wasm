/**
 * @fileoverview Webpack config
 */

//Imports
const _ = require('lodash');
const EsmPlugin = require('@purtuga/esm-webpack-plugin');
const path = require('path');
const ThreadsPlugin = require('threads-plugin');

//Global build config
const globalConfig = {
  devServer: {
    compress: true,

    //Demo for the HTML, dist/CuraEngine for CuraEngine.wasm
    contentBase: ['./demo', './dist/CuraEngine'].map(dir => path.resolve(dir))
  },

  //Disable soruce maps in production
  devtool: process.env.NODE_ENV == 'production' ? undefined : 'inline-source-map',

  //Build the demo instead of the library when in demo mode
  entry: process.env.NODE_ENV == 'demo' ? './demo/index.js' : './src/index.js',

  //Use the environment (Demo is kinda like development)
  mode: process.env.NODE_ENV == 'demo' ? 'development' : process.env.NODE_ENV,
  module: {
    defaultRules: [
      {
        type: 'javascript/auto',
        resolve: {}
      },
      {
        test: /\.json$/i,
        type: 'json'
      },
    ],
    rules: [
      //Babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  useBuiltIns: 'usage'
                }
              ],
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new ThreadsPlugin({
      target: 'electron-node-worker'
    })
  ],
  output: {
    globalObject: 'globalThis',
    library: 'CuraWASM'
  }
};

//ES6 module build config
let es6Config = {
  output: {
    filename: 'main.js',
    libraryTarget: 'var',
    path: path.resolve('./dist/es6/')
  },
  target: 'web'
};
es6Config = _.merge(es6Config, globalConfig);
es6Config.plugins.push(new EsmPlugin());

//Node build config
let nodeConfig = {
  output: {
    filename: 'main.js',
    libraryTarget: 'umd',
    path: path.resolve('./dist/node/')
  },
  target: 'node'
};
nodeConfig = _.merge(nodeConfig, globalConfig);

//Export
module.exports = [es6Config, nodeConfig];