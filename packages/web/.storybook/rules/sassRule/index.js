const sassRule = {
  test: /\.s?css$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "sass-loader" }
  ]
};

module.exports = { sassRule }
