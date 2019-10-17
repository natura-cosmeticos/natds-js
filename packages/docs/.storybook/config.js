import { configure } from '@storybook/react';

const tokens = require.context('../stories/tokens', true, /\.tsx?$/)
const web = require.context('../stories/web', true, /\.tsx?$/)
const mobile = require.context('../stories/mobile', true, /\.tsx?$/)

configure([tokens, web, mobile], module);
