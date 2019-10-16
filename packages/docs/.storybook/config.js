import { configure } from '@storybook/react';

const tokens = require.context('../src/tokens', true, /\.tsx?$/)
const web = require.context('../src/web', true, /\.tsx?$/)
const mobile = require.context('../src/mobile', true, /\.tsx?$/)

configure([tokens, web, mobile], module);
