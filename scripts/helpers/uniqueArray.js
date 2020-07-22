const uniqueArray = (versionsArray) => {
  let updatedArray = [...new Set(versionsArray)];
  updatedArray = updatedArray.filter((element) => element !== null);
  return updatedArray;
};

module.exports = uniqueArray;
