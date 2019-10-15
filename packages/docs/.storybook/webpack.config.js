const path = require('path');

module.exports = ({ config }) => {
  config.module.rules = [];

  config.module.rules.push({
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          context: '/',
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  });

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

  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: ['@babel/preset-react', '@babel/preset-flow'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }
    }
  });

  return config;
};
