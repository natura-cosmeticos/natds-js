#!/usr/bin/env node

const shell = require('shelljs');
const NetlifyAPI = require('netlify');
const {
  exitWithMsg, buildBranchSiteName, buildMasterSiteName, findSiteByName, sitePrefix,
} = require('./helpers');

const authToken = process.env.NETLIFY_AUTH_TOKEN;

if (!authToken) {
  exitWithMsg('env var NETLIFY_AUTH_TOKEN not found', 1);
}

const { version } = require('../../package.json');

const siteDir = 'packages/docs/dist';
const client = new NetlifyAPI(authToken);
const currentBranch = process.env.BITRISE_GIT_BRANCH || shell.exec('git rev-parse --abbrev-ref HEAD').trim();

const deploy = async (site) => {
  const deployInfo = await client.deploy(site.site_id, siteDir);

  if (!deployInfo.deploy.url) {
    exitWithMsg('An error ocurred', 1);
  }

  shell.exec(`export NETLIFY_SITE_URL=${deployInfo.deploy.url}`);

  exitWithMsg(`All done! You can view your site in ${deployInfo.deploy.url}`);
};

const publishRelease = async (siteName) => {
  const site = await findSiteByName(client, siteName);

  if (site) {
    console.log(`Another version was found with ${siteName} name. Overwriting...`);

    deploy(site);
  } else {
    console.log(`Creating site ${siteName}...`);
    const newSite = await client.createSite({
      body: { name: siteName },
    });

    deploy(newSite);
  }
};

const init = async () => {
  console.log(`Deploying branch ${currentBranch} to netlify`);

  const siteName = currentBranch === 'master'
    ? buildMasterSiteName(version)
    : buildBranchSiteName(currentBranch);

  try {
    await publishRelease(siteName);

    if (currentBranch === 'master') {
      await publishRelease(sitePrefix);
    }
  } catch (error) {
    exitWithMsg(JSON.stringify(error, null, 2), 1);
  }
};

init();
