const {fontsRule} = require("./rules/fontsRule");
const {imagesRule} = require("./rules/imagesRule");
const {sassRule} = require("./rules/sassRule");
const {scriptsRule} = require("./rules/scriptsRule");
const {storyRule} = require("./rules/storyRule");
const {nonStoryMarkdownRule} = require("./rules/nonStoryMarkdownRule");
const {markdownRule} = require("./rules/markdownRule");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = ({config}) => {
  config.module.rules = [];
  config.module.rules.push(fontsRule);
  config.module.rules.push(imagesRule);
  config.module.rules.push(sassRule);
  config.module.rules.push(scriptsRule);
  config.module.rules.push(storyRule);
  config.module.rules.push(markdownRule);
  // config.module.rules.push(nonStoryMarkdownRule);
  config.resolve.extensions.push( '.js', '.jsx', '.md', '.mdx', '.ts', '.tsx');
  config.resolve.plugins = [new TsconfigPathsPlugin()];
  return config;
}
