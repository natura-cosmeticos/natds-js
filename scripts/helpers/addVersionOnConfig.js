const version = process.argv[2];

const path = require('path');

configFilePath = path.resolve(__dirname, '..', '..', 'packages', 'docs', 'dist', 'versions_config.json');

const versionsConfig = require(configFilePath);

versionsConfig[0].versions = [`v${version}`, ...versionsConfig[0].versions];

const fs = require('fs');

fs.writeFileSync(configFilePath, JSON.stringify(versionsConfig, null, 2));
