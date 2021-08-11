module.exports = {
  stories: [
    '../docs/getting-started.stories.mdx',
    '../docs/changelog.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-dark-mode'
  ]
}
