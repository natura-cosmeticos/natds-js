const base = require("../../jest.config.base.js");
const {displayName, name} = require("./package.json");

module.exports = {
  ...base,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  displayName,
  globalSetup: "./global-setup.js",
  moduleNameMapper: {
    "\\.(css|sass)$": "<rootDir>/config/test/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/test/fileMock.js",
  },
  name,
  setupFilesAfterEnv: [
    "<rootDir>/config/test/setupEnzyme.ts", "<rootDir>/config/test/setupChai.ts",
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
