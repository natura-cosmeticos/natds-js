const javascriptRule = {
  test: /\.(js)x?$/,
    exclude: /node_modules/,
  use: [
  {
    loader: require.resolve("babel-loader"),
    options: {
      presets: [
        require("@babel/preset-typescript").default,
        require("@babel/preset-react").default
      ]
    }
  }
]
}

module.exports = { javascriptRule }
