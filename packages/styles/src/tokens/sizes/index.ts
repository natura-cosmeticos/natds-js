/* eslint-disable sort-keys */
import theme, { Theme } from "@naturacosmeticos/natds-themes";
import { deprecatedSizes } from "./deprecatedSizes";
import { ISizes } from "./ISizes";

const { size }: Theme = theme.natura.light;

export const sizes : ISizes = {
  ...deprecatedSizes,
  ...size,
};
