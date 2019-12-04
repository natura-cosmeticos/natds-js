module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/config/test/setupEnzyme.ts",
    "<rootDir>/config/test/setupChai.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
