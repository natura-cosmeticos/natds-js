const version = process.argv[2];

const alphaVersion = version.split('alpha');

if(alphaVersion.length > 1) {
  const alphaNumber = parseInt(alphaVersion[1].substring(1));

  console.log(`${alphaVersion[0]}alpha.${alphaNumber + 1}`);
} else {
  console.log(`${alphaVersion[0]}-alpha.0`);
}

