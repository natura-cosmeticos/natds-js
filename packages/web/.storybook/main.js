const componentStories = [
  "../src/Components/**/*.stories.tsx",
];

const welcomeStories = [
  "../docs/getting-started.stories.mdx",
  "../docs/api-pattern-guidelines.stories.mdx",
  "../docs/changelog.stories.mdx",
  "../docs/contributing.pt-br.stories.mdx",
  "../docs/troubleshooting.stories.mdx",
];

const exampleStories = [
  "../docs/examples/sign-in.stories.tsx",
];

const utilitiesStories = [
  "../src/Components/Container/Container.stories.tsx",
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
    ...welcomeStories,
    ...componentStories,
    ...utilitiesStories,
    ...exampleStories,
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
