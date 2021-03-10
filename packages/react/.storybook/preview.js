import ThemeDecorator from "./decorators/themeDecorator";

export { globalTypes } from "./globalTypes";

export const decorators = [ThemeDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'padded',
}
