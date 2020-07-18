/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  "coverageAnalysis": "off",
  "mutate": [
    "scripts/**/*.js",
    "!scripts/__tests__/**/*.js"
  ],
  "mutator": "javascript",
  "packageManager": "yarn",
  "reporters": [
    "html",
    "clear-text",
    "dashboard"
  ],
  "testRunner": "jest",
  "transpilers": []
};
