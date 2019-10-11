import { configure, addParameters } from '@storybook/react';

function mapCSSTokens(filename) {
  return {
    filename,
    content: cssReq(filename).default
  }
}

const stories = require.context('../stories', true, /\.tsx?$/);
const cssReq = require.context('!!raw-loader!../styles', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map(mapCSSTokens);

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles
    }
  }
});

configure(stories, module);
