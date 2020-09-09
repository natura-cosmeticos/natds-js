/* eslint-disable import/prefer-default-export */
// import { naturaLightTheme } from "@naturacosmeticos/natds-react-storybook-themes";

import { ThemeProviderDecorator } from "./decorators/ThemeProviderDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  // docs: { theme: naturaLightTheme },
};

export const decorators = [ThemeProviderDecorator];

export const globalTypes = {
  theme: {
    defaultValue: "naturaLight",
    description: "Global theme for components",
    name: "Theme",
    toolbar: {
      items: [
        {
          right: "🌑",
          title: "Avon Dark",
          value: "avonDark",
        },
        {
          right: "☀️",
          title: "Avon Light",
          value: "avonLight",
        },
        {
          right: "🌑",
          title: "Natura Dark",
          value: "naturaDark",
        },
        {
          right: "☀️",
          title: "Natura Light",
          value: "naturaLight",
        },
        {
          right: "🌑",
          title: "The Body Shop Dark",
          value: "theBodyShopDark",
        },
        {
          right: "☀️",
          title: "The Body Shop Light",
          value: "theBodyShopLight",
        },
      ],
    },
  },
};
