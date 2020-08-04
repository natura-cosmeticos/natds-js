const { naturaLightTheme } = require("../../themes/naturaLightTheme");
const { DocsPage, DocsContainer } = require('@storybook/addon-docs/blocks');
const {INITIAL_VIEWPORTS} = require("@storybook/addon-viewport");
const {themes} = require("@naturacosmeticos/natds-styles");

export const initialParams = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    enableShortcuts: true,
    isFullscreen: false,
    isToolshown: true,
    panelPosition: 'bottom',
    showNav: true,
    showPanel: true,
    sidebarAnimations: true,
    theme: naturaLightTheme,
  },
  theme: {
    themes,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
