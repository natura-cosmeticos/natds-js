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
        'import/no-extraneous-dependencies': [1, { devDependencies: true }]
      }
    },
    {
      files: ['./packages/web/**', './packages/styles/**'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/no-var-requires': 1,
        'import/export': 1,
        'import/extensions': 1,
        'import/named': 1,
        'import/no-cycle': 1,
        'import/no-extraneous-dependencies': 1,
        'import/no-named-as-default': 1,
        'import/no-unresolved': 1,
        'import/prefer-default-export': 1,
        'jest/no-mocks-import': 1,
        'max-len': 0,
        'max-lines-per-function': 0,
        'max-nested-callbacks': 1,
        'no-shadow': 1,
        'no-unused-expressions': 1,
        'no-use-before-define': 1,
        'react/destructuring-assignment': 1,
        'react/jsx-closing-tag-location': 1,
        'react/jsx-filename-extension': 1,
        'react/jsx-props-no-spreading': 1,
        'react/no-array-index-key': 1,
        complexity: 1
      }
    },
    {
      files: ['./packages/react/**'],
      rules: {
        '@typescript-eslint/no-var-requires': 1,
        'import/no-named-as-default': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 1
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
