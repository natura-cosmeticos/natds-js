import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

addDecorator(withKnobs);

addDecorator(withA11y);

const tokens = require.context('../src/tokens', true, /\.story.(ts|md)x?$/);
const web = require.context('../src/web', true, /\.story.(ts|md)x?$/);
const mobile = require.context('../src/mobile', true, /\.story.(ts|md)x?$/);

configure([tokens, web, mobile], module);
