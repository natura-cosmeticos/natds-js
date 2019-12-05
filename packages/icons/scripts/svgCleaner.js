'use strict';

const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');

const dirname = "./assets/";

const svgo = new SVGO({
  plugins: [
    { cleanupAttrs: true },
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
    { removeRasterImages: true },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill)' }}
  ]
});

function onFileReady(filepath, content) {
  svgo.optimize(content, { path: filepath }).then(function ({ data }) {
    fs.writeFile(filepath, data, function(err) { if(err) throw err; });
  });
}

function readFiles(dirname, onFileReady) {
  return fs.readdir(dirname, function (err, filenames) {
    if (err) { throw err; }

    filenames.forEach(function (filename) {
      const filepath = dirname + filename;

      fs.readFile(filepath, 'utf-8', function (err, content) {
        if (err) { throw err; }

        return onFileReady(filepath, content);
      });
    });
  });
}

readFiles(dirname, onFileReady)
