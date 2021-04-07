module.exports = {
  stories: [
    '../docs/getting-started.stories.mdx',
    '../docs/changelog.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    {
      name: '@storybook/addon-essentials',
    },
  ],
};
