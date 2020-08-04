const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin");

const markdownRule = {
  test: /\.(md|mdx)$/,
  use: [
    {
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          require("@babel/preset-typescript").default,
          require("@babel/preset-react").default
        ],
        plugins: [
          ["@babel/plugin-transform-react-jsx", {
            "pragmaFrag": "React.Fragment"
          }]
        ]
      }
    },
    {
      loader: '@mdx-js/loader',
      options: {
        compilers: [createCompiler({})]
      }
    }
  ]
};

module.exports = { markdownRule }
