const {fontsRule} = require("./rules/fontsRule");
const {imagesRule} = require("./rules/imagesRule");
const {sassRule} = require("./rules/sassRule");
const {javascriptRule} = require("./rules/javascriptRule");
const {storyRule} = require("./rules/storyRule");
const {markdownRule} = require("./rules/markdownRule");
const {typescriptRule} = require("./rules/typescriptRule");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({config}) => {
  // config.module.rules = [];
  // config.module.rules.push(fontsRule);
  // config.module.rules.push(imagesRule);
  // config.module.rules.push(sassRule);
  // config.module.rules.push(javascriptRule);
  config.module.rules.push(storyRule);
  config.module.rules.push(markdownRule);
  config.module.rules.push(typescriptRule);
  config.resolve.extensions.push( '.js', '.jsx', '.md', '.mdx', '.ts', '.tsx');
  return config;
}
