import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(withKnobs)

const tokens = require.context('../src/tokens', true, /\.tsx?$/);
const web = require.context('../src/web', true, /\.tsx?$/);
const mobile = require.context('../src/mobile', true, /\.tsx?$/);


configure([tokens, web, mobile], module);
