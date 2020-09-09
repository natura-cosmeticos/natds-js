/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("../../../jest.config");
const { displayName, name } = require("./package.json");

module.exports = {
  ...base,
  displayName,
  name,
};
