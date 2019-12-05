const webfont = require('webfont').default;
const fs = require('fs');
const output = './fonts/';

const files = 'assets/**/*.svg';
const fontName = 'NatDS-Icons';
const types = ['eot', 'ttf', 'woff', 'woff2', 'svg'];

function onError(error) {
  if (error) throw error;
}

function onSuccess(result) {
  const { config: { fontName } } = result;
  const filepath = output + fontName;

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const filename = filepath + '.' + element;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }
}

webfont({ files, fontName }).then(onSuccess).catch(onError);
