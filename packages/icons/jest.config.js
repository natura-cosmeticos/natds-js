const base = require("../../jest.config.base");
const {displayName, name} = require("./package.json");

module.exports = {
  ...base,
  displayName,
  name,
  roots: ["<rootDir>/scripts", "<rootDir>/src"],
  testMatch: ["<rootDir>/**/*.test.js"],
};
