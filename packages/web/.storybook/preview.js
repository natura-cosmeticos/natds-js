import { ThemeProviderDecorator } from "./decorators/ThemeProviderDecorator";

export { globalTypes } from "./globalTypes";

export const decorators = [ThemeProviderDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};
