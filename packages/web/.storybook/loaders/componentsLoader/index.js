export const componentsLoader = require.context(
  '../../../src/Components',
  true,
  /README\.(ts|md)x?$/
);
