import { create } from "@storybook/theming/create";
import { themes } from "@naturacosmeticos/natds-styles"
import brandImage from "../assets/images/logo-natura.png"
import "../assets/images/favicon.png";
import {baseTheme} from "./baseTheme";

const { light: theme } = themes.natura;

export const naturaLightTheme = create({
  ...baseTheme,
  base: theme.palette.type,

  colorPrimary: theme.palette.primary.main,
  colorSecondary: theme.palette.secondary.main,

  // UI
  appBg: theme.palette.background.defaultContrastText,
  appContentBg: theme.palette.background.default,
  appBorderRadius: theme.shape.borderRadius,

  // Typography
  fontBase: theme.typography.fontFamily,
  fontCode: "\"Roboto Mono\", monospace",

  // Text colors
  textColor: theme.palette.background.paperContrastText,
  textInverseColor: theme.palette.background.paper,

  // Toolbar default and active colors
  barTextColor: theme.palette.background.default,
  barSelectedColor: theme.palette.primary.main,
  barBg: theme.palette.background.defaultContrastText,

  // Form colors
  inputBg: theme.palette.background.default,
  inputBorder: theme.palette.text.hint,
  inputTextColor: theme.palette.background.defaultContrastText,
  inputBorderRadius: theme.shape.borderRadius,

  // Brand
  brandImage
});
