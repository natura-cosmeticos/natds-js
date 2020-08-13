const typescriptRule = {
  test: /\.(?<tsExtensionRule>ts|tsx)$/,
  use: [
    {
      loader: require.resolve("ts-loader"),
      options: {
        configFile: require.resolve("../../tsconfig.json"),
        transpileOnly: false,
      },
    },
    {
      loader: require.resolve("react-docgen-typescript-loader"),
    },
  ],
};

module.exports = { typescriptRule };
