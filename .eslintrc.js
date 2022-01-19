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
  overrides: [
    {
      files: ['./packages/**/*.{ts,tsx,js}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'react/button-has-type': 1,
        'import/no-named-as-default': 0,
        'no-use-before-define': 0
      }
    },
    {
      files: ['./packages/web/**', './packages/styles/**'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 1,
        'import/export': 1,
        'import/extensions': 1,
        'import/named': 1,
        'import/no-cycle': 1,
        'import/prefer-default-export': 1,
        'jest/no-mocks-import': 1,
        'max-len': 0,
        'max-lines-per-function': 0,
        'max-nested-callbacks': 1,
        'no-shadow': 1,
        'no-unused-expressions': 1,
        'react/destructuring-assignment': 1,
        'react/jsx-closing-tag-location': 1,
        'react/no-array-index-key': 1,
        'import/no-unresolved': 0,
        complexity: 1
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['packages/']
      }
    },
    react: {
      linkComponents: ['Link'],
      pragma: 'React',
      version: '16.13.1'
    }
  }
}
