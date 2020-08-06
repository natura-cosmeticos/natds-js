module.exports = {
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-jest/register'
    // './storybook/addons/theme/register.js',
    // './storybook/addons/versions/register.js',
  ],
  stories: [
    "../README.mdx",
    "../src/Components/**/README.mdx",
    "../src/Components/**/index.story.tsx"
  ]
}
