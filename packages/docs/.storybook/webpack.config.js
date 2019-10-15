module.exports = ({ config }) => {
  config.module.rules
    .push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ]
    });

  config.module.rules
    .push({
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader" }
      ]
    });

  config.resolve.extensions.push('.ts', '.tsx', 'js', 'jsx');

  return config;
};
