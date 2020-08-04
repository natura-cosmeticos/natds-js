const imagesRule = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        context: '/',
        name: 'images/[name].[ext]'
      }
    }
  ]
}

module.exports = { imagesRule };
