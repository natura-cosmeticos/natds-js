const iconNameMapper = require("./iconNameMapper");

const getIconString = (metadata) => {
  const result = Object
    .keys(metadata)
    .map(iconNameMapper)
    .join("");

  return result;
};

module.exports = getIconString;
