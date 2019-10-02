'use strict'

const TerserPlugin = require('terser-webpack-plugin')

exports.setup = function(PATHS) {
  return {
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: true,
          cache: true,
          parallel: true,
          chunkFilter: ({ name }) =>  name !== 'vendor'
        })
      ]
    }
  }
}
