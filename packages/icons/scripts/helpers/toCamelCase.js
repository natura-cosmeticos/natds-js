// eslint-disable-next-line @typescript-eslint/no-var-requires
const toCamelCaseMapper = require("./toCamelCaseMapper");

const toCamelCase = (word) => word
  .split("-")
  .map(toCamelCaseMapper)
  .join("");

module.exports = toCamelCase;
