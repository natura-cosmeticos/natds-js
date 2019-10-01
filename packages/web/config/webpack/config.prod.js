'use strict'

const merge = require('webpack-merge')

const cleaner = require('./bundle.cleaner')
const revision = require('./bundle.revision')
const minifier = require('./bundle.minifier')
// const stylesExtractor = require('./bundle.extractor.styles')
// const split = require('./bundle.split')
// const manifest = require('./bundle.manifest')
// const copyStatics = require('./bundle.copy.statics')

const sourceMapType = {
  devtool: 'none'
}

exports.setup = function(PATHS) {
  return merge(
    sourceMapType,
    cleaner.setup(PATHS),
    revision.setup(PATHS),
    minifier.setup(PATHS)
    // stylesExtractor.setup(PATHS),
    // split.setup(PATHS),
    // manifest.setup(PATHS),
    // copyStatics.setup(PATHS)
  )
}
