'use strict'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

exports.setup = function() {
  return {
    plugins: [
      new CleanWebpackPlugin({
        dry: true
      })
    ]
  }
}
