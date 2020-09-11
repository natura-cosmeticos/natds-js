/* eslint-disable sort-keys */
import { natura } from "@naturacosmeticos/natds-themes";
import { IFont } from "./IFont";

const { light: theme } = natura;

/**
 * @deprecated since 0.19. It will be removed at 1.0.
 * Please use typography tokens directly from the theme.
 */
export const fontSize = {
  h1: theme.heading1 as IFont,
  h2: theme.heading2 as IFont,
  h3: theme.heading3 as IFont,
  h4: theme.heading4 as IFont,
  h5: theme.heading5 as IFont,
  h6: theme.heading6 as IFont,
  subtitle1: theme.subtitle1 as IFont,
  subtitle2: theme.subtitle2 as IFont,
  body1: theme.body1 as IFont,
  body2: theme.body2 as IFont,
  button: theme.button.default as IFont,
  caption: theme.caption as IFont,
  overline: theme.overline as IFont,
};
