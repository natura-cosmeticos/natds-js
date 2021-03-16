import ThemeDecorator from "./decorators/themeDecorator";

export { globalTypes } from "./globalTypes";
export const decorators = [ThemeDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'padded',
  backgrounds: { disable: true, grid: { disable: true } },
  viewport: { disable: true },
  grid: { disable: true }
}
