'use strict'

const webpack = require('webpack')

exports.setup = function() {
  return {
    devServer: {
      noInfo: false,
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: process.env.PORT,
      host: process.env.HOST,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
