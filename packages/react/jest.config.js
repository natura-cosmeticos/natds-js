const base = require('../../jest.config.base.js')
const { displayName, name } = require('./package.json')

module.exports = {
  ...base,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.styles.ts',
    '!src/helpers/**'
  ],
  errorOnDeprecated: true,
  displayName,
  name,
  setupFilesAfterEnv: ['<rootDir>/setup.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx'
  }
}
