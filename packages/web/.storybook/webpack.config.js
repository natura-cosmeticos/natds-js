const {storyRule} = require("./rules/storyRule");
const {markdownRule} = require("./rules/markdownRule");
const {typescriptRule} = require("./rules/typescriptRule");

module.exports = ({config}) => {
  config.module.rules.push(storyRule);
  config.module.rules.push(markdownRule);
  config.module.rules.push(typescriptRule);
  config.resolve.extensions.push( '.js', '.jsx', '.md', '.mdx', '.ts', '.tsx');
  return config;
}
