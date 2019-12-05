#!/usr/bin/env node
const JsonToTS = require('json-to-ts');
const fs = require('fs');
const inputFile = 'src/metadata/natds-icons.json';
const outputFile = 'src/metadata/natds-icons.json.d.ts';

function readJson(file) {
  try {
    const contents = fs.readFileSync(file).toString();
    return contents;
  }
  catch (error) {
    throw error;
  }
}

function writeInterface() {
  const contents = readJson(inputFile);
  try {
    JsonToTS(JSON.parse(contents), { rootName: 'INames' }).forEach(typeInterface => {
      fs.writeFile(outputFile, typeInterface, onError);
    });
  }
  catch (e) {
    throw error;
  }
}

function onError(error) {
  if (error) throw error;
}

writeInterface()
