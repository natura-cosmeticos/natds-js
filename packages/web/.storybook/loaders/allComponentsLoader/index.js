export const allComponentsLoader = require.context(
  '../src/all',
  true,
  /\.story.(ts|md)x?$/
);
