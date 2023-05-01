const base = require('../../jest.config.base.js')
const { displayName, name } = require('./package.json')

module.exports = {
  ...base,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.subcomponent.tsx',
    '!src/**/*.styles.ts',
    '!src/Templates/**',
    '!src/helpers/**'
  ],
  errorOnDeprecated: true,
  displayName,
  name,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  }
}
