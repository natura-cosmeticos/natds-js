#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webfont = require("webfont").default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getIconString = require("./helpers/getIconString");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getUnicodeIconString = require("./helpers/getUnicodeIconString");

const config = {
  files: "./src/assets/cleaned/**/*.svg",
  fontHeight: 600,
  fontName: "natds-icons",
  normalize: true,
  template: "css",
  templateFontPath: "./fonts",
};

const distMetadata = "./src/";
const distFont = "./src/fonts/";
const types = [
  "eot",
  "ttf",
  "woff",
  "woff2",
  "svg",
];

const onError = (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

// @todo refactor(icons): refactor createSwiftOutput()
const createSwiftOutput = (metadata) => {
  const formattedMetadataSwift = `
public enum Icon: String, CaseIterable {
  ${getIconString(metadata)}
}

extension Icon {
  var unicode: String {
      switch self {
      ${getUnicodeIconString(metadata)}
      }
  }
}
`;

  fs.writeFile(`${distMetadata + config.fontName}.swift`, formattedMetadataSwift, onError);
};

const FIRST_INDEX = 0;
const INDEX_INCREMENT = 1;

// eslint-disable-next-line max-lines-per-function
const onSuccess = (result) => {
  const { config: { fontName }, template, glyphsData } = result;
  const metadata = {};

  glyphsData.forEach(({ metadata: { name, unicode } }) => {
    Object.assign(metadata, { [name]: escape(unicode) });
  });

  fs.writeFile(`${distMetadata + fontName}.css`, template, onError);
  const formattedMetadataJson = `${JSON.stringify(metadata, null, "\t")}\n`;

  fs.writeFile(`${distMetadata + fontName}.json`, formattedMetadataJson, onError);

  for (let index = FIRST_INDEX; index < types.length; index += INDEX_INCREMENT) {
    const element = types[index];
    const filename = `${distFont + fontName}.${element}`;
    const font = result[element];

    fs.writeFile(filename, font, onError);
  }

  createSwiftOutput(metadata);
};

webfont(config).then(onSuccess)
  .catch(onError);
