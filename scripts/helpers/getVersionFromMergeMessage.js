const commitMessage = process.argv[2];

const commitPattern = /Merge pull request #(.+) from (.+?)\/(.+)$/;

const branchName = commitPattern.exec(commitMessage)[3];

if (branchName.includes("hotfix/")) {
  console.log("hotfix");
} else {
  const pattern = /v(.+)\.(.+)\.(.+)/;

  if (pattern.test(branchName)) {
    const res = pattern.exec(branchName);
    console.log(`${res[1]}.${res[2]}.${res[3]}`);
  } else {
    process.exit(0);
  }
}
