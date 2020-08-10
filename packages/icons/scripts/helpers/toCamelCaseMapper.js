// eslint-disable-next-line @typescript-eslint/no-var-requires
const capitalizeWord = require("./capitalizeWord");

const toCamelCaseMapper = (item, index) => {

  const FIRST_WORD = 0;

  if (index === FIRST_WORD) {
    return item;
  }

  return capitalizeWord(item);
};

module.exports = toCamelCaseMapper;
