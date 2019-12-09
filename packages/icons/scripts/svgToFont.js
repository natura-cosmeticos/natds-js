#!/usr/bin/env node
const webfont = require('webfont').default;
const fs = require('fs');

const distMetada = './src/';
const distFont = './src/fonts/';
const files = './src/assets/**/*.svg';
const fontName = 'natds-icons';
const types = ['eot', 'ttf', 'woff', 'woff2', 'svg'];

function onError(error) {
  if (error) throw error;
}

function onSuccess(result) {
  const { config: { fontName }, template, glyphsData } = result;
  const metadata = {};

  glyphsData.forEach(({ metadata: { name, unicode }, contents }) => {
    const escapedUnicode = escape(unicode);
    Object.assign(metadata, { [name]: escapedUnicode });
  });

  fs.writeFile(distMetada + fontName + '.css', template, onError);
  fs.writeFile(distMetada + fontName + '.json', JSON.stringify(metadata), onError);

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const filename = distFont + fontName + '.' + element;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }
}

const config = {
  files,
  fontName,
  template: 'css',
  fontHeight: 600,
  normalize: true,
  templateFontPath: './fonts'
};

webfont(config).then(onSuccess).catch(onError);
