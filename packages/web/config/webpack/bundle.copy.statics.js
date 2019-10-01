'use strict'

const CopyWebpackPlugin = require('copy-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    plugins: [
      new CopyWebpackPlugin([
        { from: PATHS.public, to: '' }
      ])
    ]
  }
}
