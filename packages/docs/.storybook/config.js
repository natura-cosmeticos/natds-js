import './fonts';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';
import { withTheme } from '../addons/theme/provider';

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: themes.light
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: [
    { name: 'light', value: '#fafafa' },
    { name: 'dark', value: '#242424' }
  ],
  knobs: {
    disableDebounce: true
  }
});

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withTheme);

const tokens = require.context('../src/tokens', true, /\.story.(ts|md)x?$/);
const web = require.context('../src/web', true, /\.story.(ts|md)x?$/);
const mobile = require.context('../src/mobile', true, /\.story.(ts|md)x?$/);

configure([tokens, web, mobile], module);
