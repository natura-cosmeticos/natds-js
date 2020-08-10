// eslint-disable-next-line @typescript-eslint/no-var-requires
const toCamelCase = require("./toCamelCase");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const toIosUnicode = require("./toIosUnicode");

const getUnicodeIconString = (metadata) => {
  const result = Object
    .keys(metadata)
    .map((iconName) => `case .${toCamelCase(iconName)}: return "${toIosUnicode(metadata[iconName])}"\n`)
    .join("");

  return result;
};

module.exports = getUnicodeIconString;
