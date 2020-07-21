const toCamelCase = require("./toCamelCase");

const iconNameMapper = (iconName) => `case ${toCamelCase(iconName)} = "${iconName}"\n`;

module.exports = iconNameMapper;
