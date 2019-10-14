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

  // config.module.rules
  //   .push({
  //     test: /\.css$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'typings-for-css-modules-loader',
  //         options: {
  //           modules: true,
  //           namedExport: true
  //         }
  //       }
  //     ]
  //   });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
