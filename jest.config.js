const base = require("./jest.config.base.js");
const {displayName, name} = require("./package.json");

module.exports = {
  ...base,
  displayName,
  name,
  roots: ["<rootDir>/scripts"],
};
