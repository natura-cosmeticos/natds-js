const nonStoryMarkdownRule = {
  test: /\.(md|mdx)$/,
  exclude: /\.(stories|story).(md|mdx)$/,
  use: [
    {
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          require("@babel/preset-typescript").default,
          require("@babel/preset-react").default
        ],
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    },
    {
      loader: '@mdx-js/loader'
    }
  ]
};

module.exports = { nonStoryMarkdownRule }
