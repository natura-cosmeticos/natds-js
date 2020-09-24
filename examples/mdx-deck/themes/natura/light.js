import themes from "@naturacosmeticos/natds-themes";

const {
  color,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  typography,
} = themes.natura.light;

const defaultFont = `"${typography.fontFamily.primary}", "${typography.fontFamily.secondary}"`;

export const naturaLightDeckTheme = {
  colors: {
    background: color.background,
    link: color.primary,
    primary: color.primary,
    text: color.onBackground,
  },
  fonts: {
    body: defaultFont,
    heading: defaultFont,
    monospace: "monospace",
  },
  googleFont: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
  styles: {
    h1: heading1,
    h2: heading2,
    h3: heading3,
    h4: heading4,
    h5: heading5,
    h6: heading6,
  },
};

export default naturaLightDeckTheme;
