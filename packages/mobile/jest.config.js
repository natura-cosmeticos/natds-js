module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
};
