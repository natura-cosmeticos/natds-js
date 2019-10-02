'use strict'

const merge = require('webpack-merge')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const loaderTypescript = require('./loader.typescript')

exports.setup = function(PATHS) {
  const common = {
    entry: { app: PATHS.src },
    output: {
      path: PATHS.build,
      filename: '[name].ts',
      publicPath: '/'
    },
    resolve: {
      modules: [
        PATHS.src,
        'node_modules'
      ],
      alias: {
        src: PATHS.src
      },
      extensions: [
        '.tsx',
        '.ts',
        '.js'
      ]
    },
    plugins: [new CaseSensitivePathsPlugin()]
  }

  return merge(
    common,
    loaderTypescript.setup(PATHS)
  )
}
