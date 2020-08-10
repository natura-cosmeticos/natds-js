const storyRule = {
  test: /\.(stories|story).(ts|js)x?$/,
  exclude: [/node_modules/],
  loaders: [
    {
      loader: require.resolve('@storybook/source-loader'),
      options: { parser: 'typescript' }
    }
  ],
  enforce: 'pre'
};

module.exports = { storyRule };
