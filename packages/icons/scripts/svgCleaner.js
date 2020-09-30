#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const SVGO = require("svgo");
const glob = require("glob");

const INPUT = "./src/assets/raw/**/*.svg";
const OUTPUT = "./src/assets/cleaned/";

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
    { removeRasterImages: false },
    {
      mergePaths: {
        noSpaceAfterFlags: false,
      },
    },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: "(stroke|fill)" } },
  ],
});

const onError = (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
};

const getName = (path) => {
  const parts = path.split("/");

  // eslint-disable-next-line no-magic-numbers
  const LAST_INDEX = parts.length - 1;

  return parts[LAST_INDEX];
};

const onFileReady = (content, path) => {
  svgo.optimize(content, { path }).then(({ data }) => {
    const filename = getName(path);

    fs.writeFile(OUTPUT + filename, data, onError);
  });
};

const readFiles = () => glob(INPUT, (readFilesError, filenames) => {
  if (readFilesError) {
    // eslint-disable-next-line no-console
    console.error(readFilesError);
    throw readFilesError;
  }

  filenames.forEach((filepath) => {
    // eslint-disable-next-line no-shadow
    fs.readFile(filepath, "utf-8", (readFileError, content) => {
      if (readFileError) {
        // eslint-disable-next-line no-console
        console.error(readFileError);
        throw readFileError;
      }

      return onFileReady(content, filepath);
    });
  });
});

readFiles();
