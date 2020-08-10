// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prependVersionToArray = require("./prependVersionToArray");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uniqueArray = require("./uniqueArray");

const VERSION_ARGUMENT_INDEX = 2;
const VERSIONS_CONFIG_SPACES = 2;
const newVersion = process.argv[VERSION_ARGUMENT_INDEX];

if (typeof newVersion === "undefined") {
  throw new Error("Please provide a version string");
}

const configFilePath = path.resolve(__dirname, "..", "..", "packages", "docs", "dist", "versions_config.json");

// eslint-disable-next-line no-console
console.info(`STORYBOOK Opening ${configFilePath}...`);

// eslint-disable-next-line import/no-dynamic-require,@typescript-eslint/no-var-requires
const versionsConfig = require(configFilePath);
const [{versions}] = versionsConfig;

// eslint-disable-next-line no-console
console.info(`STORYBOOK Adding ${newVersion} to versions list...`);
let updatedVersions = prependVersionToArray(newVersion, versions);

// eslint-disable-next-line no-console
console.info("STORYBOOK Removing duplicate versions from versions list...");
updatedVersions = uniqueArray(updatedVersions);

const FIRST_INDEX = 0;

versionsConfig[FIRST_INDEX].versions = updatedVersions;

const data = JSON.stringify(versionsConfig, null, VERSIONS_CONFIG_SPACES);

(async () => {
  // eslint-disable-next-line no-console
  console.info(`STORYBOOK Writing new versions list to ${configFilePath}...`);
  await fs.writeFile(configFilePath, data, () => {
    // eslint-disable-next-line no-console
    console.info("STORYBOOK Done writing new versions");
  });
})();
