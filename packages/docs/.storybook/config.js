import './fonts';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(withKnobs)
addDecorator(withA11y)

const tokens = require.context('../src/tokens', true, /\.tsx?$/);
const web = require.context('../src/web', true, /\.tsx?$/);
const mobile = require.context('../src/mobile', true, /\.tsx?$/);

configure([tokens, web, mobile], module);
