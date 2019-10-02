const path = require('path')

exports.setup = function(root) {
  return {
    root,
    src: path.resolve(root, 'src'),
    node_modules: path.resolve(root, 'node_modules'),
    build: path.resolve(root, 'dist')
  }
}
