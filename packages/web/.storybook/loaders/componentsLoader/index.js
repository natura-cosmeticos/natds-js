export const componentsLoader = require.context(
  '../../../src/Components',
  true,
  /(README\.md|index\.story\.ts)x?$/
);
