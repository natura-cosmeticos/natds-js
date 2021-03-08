const base = require("../../jest.config.base.js");
const { displayName, name } = require("./package.json");

module.exports = {
  ...base,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.stories.tsx"
  ],
  errorOnDeprecated: true,
  displayName,
  name,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
  },
};
