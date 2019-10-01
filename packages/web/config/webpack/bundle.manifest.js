'use strict'

exports.setup = function() {
  return {
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      }
    }
  }
}
