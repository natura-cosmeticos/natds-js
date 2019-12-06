#!/usr/bin/env node
const webfont = require('webfont').default;
const fs = require('fs');

const output = './src/generated/';
const files = './src/assets/**/*.svg';
const fontName = 'natds-icons';
const types = ['eot', 'ttf', 'woff', 'woff2', 'svg'];

function onError(error) {
  if (error) throw error;
}

function onSuccess(result) {
  const { config: { fontName }, template, glyphsData } = result;
  const dist = output + fontName;
  const metadata = {};

  glyphsData.forEach(({ metadata: { name, unicode }, contents }) => {
    const escapedUnicode = escape(unicode);
    Object.assign(metadata, { [name]: (escapedUnicode) });
  });

  fs.writeFile(dist + '.css', template, onError);
  fs.writeFile(dist + '.json', JSON.stringify(metadata), onError);

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const filename = dist + '.' + element;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }
}

const config = {
  files,
  fontName,
  template: 'css'
};

webfont(config).then(onSuccess).catch(onError);
