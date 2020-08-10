// eslint-disable-next-line @typescript-eslint/no-var-requires
const toCamelCase = require("./toCamelCase");

const iconNameMapper = (iconName) => `case ${toCamelCase(iconName)} = "${iconName}"\n`;

module.exports = iconNameMapper;
