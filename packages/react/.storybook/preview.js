import ThemeDecorator from "./decorators/themeDecorator";
import { dark, light } from "./theme";

export { globalTypes } from "./globalTypes";
export const decorators = [ThemeDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true, grid: { disable: true } },
  viewport: { disable: true },
  darkMode: {
    dark,
    light
  }
}
