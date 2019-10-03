module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/config/jest/setupEnzyme.ts"
  ],
}
