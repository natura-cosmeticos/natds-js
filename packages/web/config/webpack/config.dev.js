'use strict'

const merge = require('webpack-merge')

const Jarvis = require('webpack-jarvis')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const server = require('./server')

const sourceMapType = {
  devtool: 'eval-source-map'
}

const plugins = {
  plugins: [
    new ErrorOverlayPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new Jarvis(),
    new DashboardPlugin()
  ]
}

exports.setup = function(PATHS) {
  return merge(
    sourceMapType,
    plugins,
    server.setup(PATHS)
  )
}
