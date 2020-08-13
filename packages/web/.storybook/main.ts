module.exports = {
  addons: [
    {
      name: "@storybook/addon-docs/register",
      options: { configureJSX: true },
    },
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-jest/register",
    "./.storybook/addons/theme/register.js",
    "./.storybook/addons/versions/register.js",
  ],
  stories: [
    "../src/README.mdx",
    "../src/Components/**/README.mdx",
    "../src/Components/**/index.story.tsx",
    "../src/Components/README.mdx",
    "../docs/*.mdx",
  ],
};
