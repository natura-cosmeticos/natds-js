/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const KB = 1024;
const minSize = 30;
const maxSize = 1024;

const configOverrides = {
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: minSize * KB,
      maxSize: maxSize * KB,
    },
  },
  performance: {
    maxAssetSize: maxSize * KB,
  },
};

module.exports = ({ config }) => merge(config, configOverrides);
