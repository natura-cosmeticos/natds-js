const base = require('../../jest.config.base');

module.exports = {
  ...base,
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
