'use strict'

exports.setup = function(PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: ['ts-loader'],
          include: [PATHS.src],
          exclude: /node_modules/
        }
      ]
    }
  }
}
