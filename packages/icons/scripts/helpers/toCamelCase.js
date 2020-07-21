const toCamelCaseMapper = require("./toCamelCaseMapper");

const toCamelCase = (word) => word
  .split("-")
  .map(toCamelCaseMapper)
  .join("");

module.exports = toCamelCase;
