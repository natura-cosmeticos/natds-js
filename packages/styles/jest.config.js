module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  roots: ['<rootDir>/src'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
