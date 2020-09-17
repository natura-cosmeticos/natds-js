const developerStories = [
  "../docs/readme.stories.mdx",
  "../docs/troubleshooting.stories.mdx",
  "../docs/using-cdn.stories.mdx",
];

const exampleStories = [
  "../docs/examples/sign-in.stories.tsx",
];

const contributorStories = [
  "../docs/contributing.pt-br.stories.mdx", "../docs/component-folder.stories.mdx",
];

const utilitiesStories = [
  "../src/Components/Container/Container.stories.mdx",
  "../src/Components/CssBaseline/CssBaseline.stories.mdx",
  "../src/Components/GridContainer/GridContainer.stories.tsx",
  "../src/Components/GridItem/GridItem.stories.tsx",
  "../src/Components/ScopedCssBaseline/ScopedCssBaseline.stories.mdx",
  "../src/Components/Spacing/Spacing.stories.tsx",
  "../src/Components/Spacing/Spacing.margin.stories.tsx",
  "../src/Components/Spacing/Spacing.padding.stories.tsx",
];

module.exports = {
  addons: [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    },
    {
      name: "@storybook/addon-controls",
    },
    {
      name: "@storybook/addon-actions",
    },
    {
      name: "@storybook/addon-links",
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
  ],

  stories: [
    ...exampleStories,
    "../src/Components/AppBar/AppBar.stories.tsx",
    "../src/Components/Avatar/Avatar.stories.tsx",
    "../src/Components/Badge/Badge.stories.tsx",
    "../src/Components/Button/Button.stories.tsx",
    "../src/Components/Fab/Fab.stories.tsx",
    "../src/Components/Icon/Icon.stories.tsx",
    "../src/Components/IconButton/IconButton.stories.tsx",
    "../src/Components/Image/Image.stories.tsx",
    "../src/Components/Paper/Paper.stories.tsx",
    "../src/Components/Skeleton/Skeleton.stories.tsx",
    "../src/Components/Toolbar/Toolbar.stories.tsx",
    "../src/Components/Typography/Typography.stories.tsx",
    ...utilitiesStories,
    ...developerStories,
    ...contributorStories,
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !(/node_modules/u).test(prop.parent.fileName);
        }

        return true;
      },
    },
  },
};
