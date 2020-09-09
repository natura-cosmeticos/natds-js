// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("../../jest.config.base");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { displayName, name } = require("./package.json");

module.exports = {
  ...base,
  displayName,
  name,
  testMatch: ["<rootDir>/src/__tests__/**/*.spec.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
