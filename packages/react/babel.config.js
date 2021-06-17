const path = require('path')

const defaultAlias = {
  '@naturacosmeticos/natds-react': path.resolve(__dirname, './src/components')
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['babel-plugin-module-resolver', { alias: defaultAlias }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
}
