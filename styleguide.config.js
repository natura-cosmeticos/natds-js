/* eslint-disable */

const glob = require("glob");
const docGen = require("react-docgen-typescript");

const excludePatterns = [
  ".stories.",
  ".argTypes.",
  ".test.",
  ".styles.",
  ".props.",
  "index.ts",
  "__fixtures__",
  "__snapshots__",
  "__mocks__",
  "Template.tsx",
  "getFontSize.ts",
  "getColorProp.ts",
  "Skeleton",
  "CssBaseline",
];

const getComponents = () => glob
  .sync("packages/web/src/Components/**/*.{ts,tsx}")
  .filter((file) => {
    const matchExcludedPattern = excludePatterns
      .find((pattern) => file.includes(pattern));

    return !matchExcludedPattern;
  });

const propsParser = docGen.withDefaultConfig({
  savePropValueAsString: true,
}).parse;

module.exports = {

  propsParser,
  usageMode: "expand",
  exampleMode: "hide",
  styleguideDir: "build/props",
  pagePerSection: true,
  sections: [
    {
      name: "Getting Started",
      sections: [
        {
          name: "Read me",
          content: "README.md",
        },
        {
          name: "Icons",
          content: "packages/web/docs/icons.md",
        },
        {
          name: "Contributing",
          content: "CONTRIBUTING.md",
        },
        {
          name: "Troubleshooting",
          content: "TROUBLESHOOTING.md",
        },
      ],
      sectionDepth: 2,
    },
    {
      name: "Components",
      components: getComponents,
      sectionDepth: 1,
    },
  ],
  webpackConfig: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
