#!/usr/bin/env node
const fs = require('fs');
const SVGO = require('svgo');
const glob = require("glob")

const INPUT = "./src/assets/raw/**/*.svg";
const OUTPUT = "./src/assets/cleaned/";

const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true, },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: { noSpaceAfterFlags: false } },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: true },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: { noSpaceAfterFlags: false } },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill)' } }
  ]
});


function onError(err) {
  if (err) {
    console.log(err);
    throw err;
  }
}

function getName(path) {
  const parts = path.split('/');
  return parts[parts.length - 1];
}

function onFileReady(content, path) {
  svgo.optimize(content, { path }).then(function ({ data }) {
    const filename = getName(path);
    fs.writeFile(OUTPUT + filename, data, onError);
  });
}

function readFiles() {
  return glob(INPUT, function (error, filenames) {
    if (error) {
      console.error(error);
      throw error;
    }

    filenames.forEach(function (filepath) {
      fs.readFile(filepath, 'utf-8', function (error, content) {
        if (error) {
          console.error(error);
          throw error;
        }

        return onFileReady(content, filepath);
      });
    });
  });
}

readFiles();
