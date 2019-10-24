module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/jest/setup.js'],
};
