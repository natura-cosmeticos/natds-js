import ThemeDecorator from "./decorators/themeDecorator";
import { dark, light } from "./theme";

const viewportDS = {
  ["Extra small"]: {
    name: 'Extra small',
    styles: {
      width: '576px',
      height: '100vh'
    }
  },
  small: {
    name: 'Small',
    styles: {
      width: '768px',
      height: '100vh'
    }
  },
  Medium: {
    name: 'Medium',
    styles: {
      width: '1024px',
      height: '100vh'
    }
  },
  Large: {
    name: 'Large',
    styles: {
      width: '1280px',
      height: '100vh'
    }
  },
  ["Extra Large"]: {
    name: 'Extra Large',
    styles: {
      width: '1440px',
      height: '100vh'
    }
  },
  ["Extra extra Large"]: {
    name: 'Extra extra Large',
    styles: {
      width: '100%',
      height: '100vh'
    }
  },
}

export { globalTypes } from "./globalTypes";
export const decorators = [ThemeDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true, grid: { disable: true } },
  viewport: { 
    disable: false,
    viewports: viewportDS
  
  },
  darkMode: {
    dark,
    light
  }
}
