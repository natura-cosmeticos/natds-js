#!/usr/bin/env node
const webfont = require("webfont").default;
const fs = require("fs");

const config = {
  "files": "./src/assets/cleaned/**/*.svg",
  "fontHeight": 600,
  "fontName": "natds-icons",
  "normalize": true,
  "template": "css",
  "templateFontPath": "./fonts"
};

const distMetadata = "./src/";
const distFont = "./src/fonts/";
const types = [
  "eot",
  "ttf",
  "woff",
  "woff2",
  "svg"
];

const onError = (error) => {
  if (error) {
    console.log(error);
  }
};

const createSwiftOutput = (metadata) => {

  const FIRST_CHAR_INDEX = 0;
  const SECOND_CHAR_INDEX = 0;
  const capitalizeWord = (word) => `${word[FIRST_CHAR_INDEX].toUpperCase()}${word.slice(SECOND_CHAR_INDEX)}`;

  const toCamelCaseMapper = (item, index) => {
    if (index === FIRST_CHAR_INDEX) {
      return item;
    }

    return capitalizeWord(item);
  };

  const toCamelCase = (word) => word.
    split("-").
    map(toCamelCaseMapper).
    join("");

  const toIosUnicode = (unicode) => `${unicode.replace("%u", "\\u{")}}`;

  const formattedMetadataSwift = `
public enum Icon: String, CaseIterable {
  ${
  Object.
    keys(metadata).
    map((iconName) => `case ${toCamelCase(iconName)} = "${iconName}"\n`).
    join("")
}
}

extension Icon {
  var unicode: String {
      switch self {
      ${
  Object.
    keys(metadata).
    map((iconName) => `case .${toCamelCase(iconName)}: return "${toIosUnicode(metadata[iconName])}"\n`).
    join("")
}
      }
  }
}
`;

  fs.writeFile(`${distMetadata + config.fontName}.swift`, formattedMetadataSwift, onError);
};

const INDEX_INCREMENT = 1;

const onSuccess = (result) => {
  const { "config": { fontName }, template, glyphsData } = result;
  const metadata = {};

  glyphsData.forEach(({ "metadata": { name, unicode } }) => {
    const escapedUnicode = escape(unicode);

    Object.assign(metadata, { [name]: escapedUnicode });
  });

  fs.writeFile(`${distMetadata + fontName}.css`, template, onError);
  const formattedMetadataJson = `${JSON.stringify(metadata, null, "\t")}\n`;

  fs.writeFile(`${distMetadata + fontName}.json`, formattedMetadataJson, onError);

  for (let index = 0; index < types.length; index += INDEX_INCREMENT) {
    const element = types[index];
    const filename = `${distFont + fontName}.${element}`;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }

  createSwiftOutput(metadata);
};

webfont(config).then(onSuccess).
  catch(onError);
