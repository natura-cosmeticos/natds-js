const glob = require("glob");
const path = require("path");

const excludePatterns = [
  '.stories.',
  '.argTypes.',
  '.test.',
  '.styles.',
  '.props.',
  'index.ts',
  '__fixtures__',
  '__snapshots__',
  '__mocks__',
  'Template.tsx',
  'getFontSize.ts',
  'getColorProp.ts',
  'Skeleton',
  'CssBaseline',
]

const docs = [
  path.resolve(__dirname, './README.md'),
  path.resolve(__dirname, './CONTRIBUTING.md'),
]

module.exports = {
  components: () => {
    const components = glob
      .sync("packages/web/src/Components/Readme/readme.tsx")
      .filter(file => {
        const matchExcludedPattern = excludePatterns.find(pattern => file.includes(pattern))

        return !matchExcludedPattern;
      });

    return components;
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  usageMode: "expand",
  exampleMode: "hide",
  webpackConfig: {

    resolve: {
      // Add ".ts" and ".tsx" as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ],
    }
  }
};
