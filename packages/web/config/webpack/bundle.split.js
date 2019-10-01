'use strict'

exports.setup = function() {
  return {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true
          }
        }
      }
    }
  }
}
