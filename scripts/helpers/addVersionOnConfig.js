const fs = require('fs');
const path = require('path');
const version = process.argv[2];

configFilePath = path.resolve(__dirname, '..', '..', 'packages', 'docs', 'dist', 'versions_config.json');

console.info(`Opening ${configFilePath}...`)
const versionsConfig = require(configFilePath);

console.info(`Adding ${version} to versions list...`)
versionsConfig[0].versions = [version, ...versionsConfig[0].versions];

console.info(`Removing duplicate versions from versions list...`)
const uniqueArrayCallback = (element, position) => versionsConfig[0].versions.indexOf(element) === position
versionsConfig[0].versions = versionsConfig[0].versions.filter(uniqueArrayCallback)

console.info(`Writing new versions list to ${configFilePath}...`)
fs.writeFileSync(configFilePath, JSON.stringify(versionsConfig, null, 2))

console.info('Done')
