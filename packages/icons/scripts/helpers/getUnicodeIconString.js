const toCamelCase = require("./toCamelCase");
const toIosUnicode = require("./toIosUnicode");

const getUnicodeIconString = (metadata) => {
  const result = Object
    .keys(metadata)
    .map((iconName) => `case .${toCamelCase(iconName)}: return "${toIosUnicode(metadata[iconName])}"\n`)
    .join("");

  return result;
};

module.exports = getUnicodeIconString;
