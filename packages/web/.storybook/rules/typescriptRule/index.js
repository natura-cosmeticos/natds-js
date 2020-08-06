const typescriptRule = {
  test: /\.(ts|tsx)$/,
  use: [
    {
      loader: require.resolve('ts-loader'),
      options: {
        configFile: require.resolve('../../tsconfig.json'),
        transpileOnly: true,
      },
    },
    {
      loader: require.resolve('react-docgen-typescript-loader'),
    },
  ],
};

module.exports = { typescriptRule };
