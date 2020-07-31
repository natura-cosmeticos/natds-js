import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import StorybookTheme from "../../theme";
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {themes} from "@naturacosmeticos/natds-styles";

export const initialParams = {
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: StorybookTheme,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  theme: {
    themes,
  },
};
