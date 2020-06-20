const fs = require('fs');
const path = require('path');
const version = process.argv[2];

configFilePath = path.resolve(__dirname, '..', '..', 'packages', 'docs', 'dist', 'versions_config.json');

const versionsConfig = require(configFilePath);
versionsConfig[0].versions = [version, ...versionsConfig[0].versions];

fs.writeFileSync(configFilePath, JSON.stringify(versionsConfig, null, 2));
