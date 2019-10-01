'use strict'

const ExtractCssPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV === 'development'

exports.setup = function(PATHS) {
  const plugin = new ExtractCssPlugin({
    filename: '[name].[hash].css',
  })

  return {
    module: {
      rules: [
        {
          test: /\.styl/,
          include: PATHS.app,
          exclude: /node_modules/,
          use: [
            devMode ? 'style-loader' : ExtractCssPlugin.loader,
            'css-loader',
            'stylus-loader'
          ]
        },
        {
          test: /\.css$/,
          include: PATHS.app,
          exclude: /node_modules/,
          use: [
            devMode ? 'style-loader' : ExtractCssPlugin.loader,
            'css-loader'
          ]
        }
      ]
    },
    plugins: [ plugin ]
  }
}
