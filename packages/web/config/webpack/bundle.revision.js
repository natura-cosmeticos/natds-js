'use strict'

const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

exports.setup = function() {
  return {
    plugins: [
      new webpack.BannerPlugin({
        banner: new GitRevisionPlugin().version()
      })
    ]
  }
}
