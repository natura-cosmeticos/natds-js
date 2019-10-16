import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const tokens = require.context('../src/tokens', true, /\.tsx?$/);
const web = require.context('../src/web', true, /\.tsx?$/);
const mobile = require.context('../src/mobile', true, /\.tsx?$/);

addDecorator(withKnobs)

configure([tokens, web, mobile], module);
