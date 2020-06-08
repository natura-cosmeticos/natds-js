const base = require('../../jest.config.base.js')
const {displayName, name} = require('./package.json')

module.exports = {
  ...base,
  displayName,
  globalSetup: "./global-setup.js",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/test/fileMock.js",
    "\\.(css|sass)$": "<rootDir>/config/test/styleMock.js"
  },
  name,
  setupFilesAfterEnv: [
    "<rootDir>/config/test/setupEnzyme.ts",
    "<rootDir>/config/test/setupChai.ts"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  testMatch: [`<rootDir>/src/__tests__/**/*.spec.tsx`],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
}
