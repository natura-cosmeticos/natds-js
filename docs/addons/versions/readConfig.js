let configFile = null;

const readConfig = (filename = 'versions_config.json') => (
  new Promise((resolve, reject) => {
    if (!window || !window.parent) {
      return reject('Window not found');
    }

    const url = window.parent.location;
    const origin = `${url.protocol}//${url.hostname}:${url.port}`;
    const path = `${origin}/${filename}`;

    return fetch(path).then((response) => {
      if (!response.ok) {
        return reject('Response not ok');
      }

      response.json().then(resolve);
    }).catch(() => {
      throw new Error('Error getting config');
    });
  })
);

export default readConfig;
