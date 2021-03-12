const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true
  },
  extends: [
    '@naturacosmeticos/eslint-config-natds/base',
    '@naturacosmeticos/eslint-config-natds/jest',
    '@naturacosmeticos/eslint-config-natds/react',
    '@naturacosmeticos/eslint-config-natds/typescript'
  ],
  overrides: [{
    files: ['./packages/web/**/*.{ts,tsx,js}'],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          packageDir: path.join(__dirname, 'packages', 'natds-icons')
        }
      ]
    }
  }],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: [
          'packages/'
        ]
      }
    },
    react: {
      linkComponents: ['Link'],
      pragma: 'React',
      version: '16.13.1'
    }
  }
}
