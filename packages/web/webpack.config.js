'use strict'

const merge = require('webpack-merge')

const paths = require('./config/webpack/bundle.paths')
const common = require('./config/webpack/config.common')
const development = require('./config/webpack/config.dev')
const production = require('./config/webpack/config.prod')
const validate = require('webpack-validator')

const PATHS = paths.setup(__dirname)

module.exports = function() {
  const mode = process.env.NODE_ENV
  const productionMode = mode === 'production'
  const envConfig = productionMode ? production.setup(PATHS) : development.setup(PATHS)
  const commonConfig = common.setup(PATHS)

  return merge(
    commonConfig,
    envConfig,
    { mode }
  )
}
