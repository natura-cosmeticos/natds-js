const fontsRule = {
  test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        context: '/',
        name: 'fonts/[name].[ext]'
      }
    }
  ]
};

module.exports = {fontsRule}
