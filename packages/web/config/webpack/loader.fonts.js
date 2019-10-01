'use strict'

exports.setup = function(PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
          include: [PATHS.fonts],
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    }
  }
}
