const fs = require("fs");
const path = require("path");

const VERSION_ARGUMENT_INDEX = 2;
const version = process.argv[VERSION_ARGUMENT_INDEX];

const configFilePath = path.resolve(__dirname, "..", "..", "packages", "docs", "dist", "versions_config.json");

console.info(`STORYBOOK Opening ${configFilePath}...`);

// eslint-disable-next-line import/no-dynamic-require
const versionsConfig = require(configFilePath);

const FIRST_INDEX = 0;
const VERSIONS_CONFIG_SPACES = 2;

console.info(`STORYBOOK Adding ${version} to versions list...`);
versionsConfig[FIRST_INDEX].versions = [
  version, ...versionsConfig[FIRST_INDEX].versions,
];

console.info("STORYBOOK Removing duplicate versions from versions list...");
const uniqueArrayCallback = (element, position) => versionsConfig[FIRST_INDEX].versions.indexOf(element) === position;

versionsConfig[FIRST_INDEX].versions = versionsConfig[FIRST_INDEX].versions.filter(uniqueArrayCallback);

console.info(`STORYBOOK Writing new versions list to ${configFilePath}...`);

/**
 * @todo fix: convert Storybook versions write file sync method to async
 */
// eslint-disable-next-line no-sync
fs.writeFileSync(configFilePath, JSON.stringify(versionsConfig, null, VERSIONS_CONFIG_SPACES));

console.info("STORYBOOK Done writing new versions");
