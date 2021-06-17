const path = require('path')

const defaultAlias = {
  '@naturacosmeticos/natds-react': path.resolve(__dirname, './src/components')
}

module.exports = {
  plugins: [
    ['babel-plugin-module-resolver', { alias: defaultAlias }]
  ],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
}
