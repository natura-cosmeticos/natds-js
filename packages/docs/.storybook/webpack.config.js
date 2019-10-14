module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    'react-native': require.resolve('react-native-web'),
    '@storybook/react-native': require.resolve('@storybook/react')
  };
  return config;
};
