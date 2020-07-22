const fs = require("fs");
const path = require("path");
const prependVersionToArray = require("./prependVersionToArray");
const uniqueArray = require("./uniqueArray");

const VERSION_ARGUMENT_INDEX = 2;
const VERSIONS_CONFIG_SPACES = 2;
const newVersion = process.argv[VERSION_ARGUMENT_INDEX];

if(typeof newVersion === "undefined") {
  throw new Error("Please provide a version string")
}

const configFilePath = path.resolve(__dirname, "..", "..", "packages", "docs", "dist", "versions_config.json");

console.info(`STORYBOOK Opening ${configFilePath}...`);

// eslint-disable-next-line import/no-dynamic-require
const versionsConfig = require(configFilePath);
const [{versions}] = versionsConfig;

console.info(`STORYBOOK Adding ${newVersion} to versions list...`);
let updatedVersions = prependVersionToArray(newVersion, versions);

console.info("STORYBOOK Removing duplicate versions from versions list...");
updatedVersions = uniqueArray(updatedVersions);

const FIRST_INDEX = 0;

versionsConfig[FIRST_INDEX].versions = updatedVersions;

const data = JSON.stringify(versionsConfig, null, VERSIONS_CONFIG_SPACES);

(async () => {
  console.info(`STORYBOOK Writing new versions list to ${configFilePath}...`);
  await fs.writeFile(configFilePath, data, () => {
    console.info("STORYBOOK Done writing new versions");
  });
})();
