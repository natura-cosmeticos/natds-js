#!/usr/bin/env node
const webfont = require('webfont').default;
const fs = require('fs');

const distMetada = './src/';
const distFont = './src/fonts/';
const files = './src/assets/cleaned/**/*.svg';
const fontName = 'natds-icons';
const types = ['eot', 'ttf', 'woff', 'woff2', 'svg'];

function createSwiftOutput(metadata) {
  const capitalizeWord = word => `${word[0].toUpperCase()}${word.slice(1)}`;

  const toCamelCase = word => word
    .split('-')
    .map((item, index) => index === 0 ? item : capitalizeWord(item))
    .join('')

  const toIosUnicode = (unicode) => `${unicode.replace('%u', '\\u{')}}`

  const formattedMetadataSwift = `
public enum Icon: String, CaseIterable {
  ${
    Object
      .keys(metadata)
      .map(iconName => `case ${toCamelCase(iconName)} = "${toIosUnicode(metadata[iconName])}"\n`)
      .join('')
    }
}
`
  fs.writeFile(distMetada + fontName + '.swift', formattedMetadataSwift, onError);
}

function onError(error) {
  if (error) console.log(error);
}

function onSuccess(result) {
  const { config: { fontName }, template, glyphsData } = result;
  const metadata = {};

  glyphsData.forEach(({ metadata: { name, unicode } }) => {
    const escapedUnicode = escape(unicode);
    Object.assign(metadata, { [name]: escapedUnicode });
  });

  fs.writeFile(distMetada + fontName + '.css', template, onError);
  const formattedMetadataJson = JSON.stringify(metadata, null, "\t") + "\n";
  fs.writeFile(distMetada + fontName + '.json', formattedMetadataJson, onError);

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const filename = distFont + fontName + '.' + element;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }

  createSwiftOutput(metadata);
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
