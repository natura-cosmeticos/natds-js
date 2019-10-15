import { configure } from '@storybook/react';

const stories = require.context('../stories', true, /\.tsx?$/);

configure(stories, module);
