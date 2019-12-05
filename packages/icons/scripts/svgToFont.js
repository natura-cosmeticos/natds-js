const webfont = require('webfont').default;
const fs = require('fs');
const fontOutput = './fonts/';
const metadataOutput = './metadata/';

const files = 'assets/**/*.svg';
const fontName = 'natds-icons';
const types = ['eot', 'ttf', 'woff', 'woff2', 'svg'];

function onError(error) {
  if (error) throw error;
}

function onSuccess(result) {
  const { config: { fontName }, template, glyphsData } = result;
  const fontDist = fontOutput + fontName;
  const metadataDist = metadataOutput + fontName;
  const metadata = {};

  glyphsData.forEach(({ metadata: { name, unicode }, contents }) => {
    const escapedUnicode = escape(unicode);
    Object.assign(metadata, { [name]: (escapedUnicode) });
  });

  fs.writeFile(metadataDist + '.css', template, onError);
  fs.writeFile(metadataDist + '.json', JSON.stringify(metadata), onError);

  for (let index = 0; index < types.length; index++) {
    const element = types[index];
    const filename = fontDist + '.' + element;
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
