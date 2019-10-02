'use strict'

const merge = require('webpack-merge')

const cleaner = require('./bundle.cleaner')
const revision = require('./bundle.revision')
const minifier = require('./bundle.minifier')

const sourceMapType = {
  devtool: 'none'
}

exports.setup = function(PATHS) {
  return merge(
    sourceMapType,
    cleaner.setup(PATHS),
    revision.setup(PATHS),
    minifier.setup(PATHS)
  )
}
