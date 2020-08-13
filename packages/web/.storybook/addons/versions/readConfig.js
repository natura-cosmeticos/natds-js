/* eslint-disable max-lines-per-function,no-promise-executor-return,@typescript-eslint/explicit-module-boundary-types */

// @todo refactor(docs): rewrite readConfig() function to avoid `no-promise-executor-return` errors
const readConfig = (filename = "versions_config.json") => new Promise((resolve, reject) => {
  if (!window || !window.parent) {
    // eslint-disable-next-line no-promise-executor-return
    return reject(new Error("Window not found"));
  }

  const url = window.parent.location;
  const origin = `${url.protocol}//${url.hostname}:${url.port}`;
  const path = `${origin}/${filename}`;

  // eslint-disable-next-line consistent-return
  return fetch(path).then((response) => {
    if (!response.ok) {
      return reject(new Error("Response not ok"));
    }

    response.json().then(resolve);
  })
    .catch(() => {
      throw new Error("Error getting config");
    });
});

export default readConfig;
