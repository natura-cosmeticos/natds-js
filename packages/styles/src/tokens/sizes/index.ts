/* eslint-disable sort-keys */
import theme from "@naturacosmeticos/natds-themes";
import { ISizes } from "./ISizes";
import { deprecatedSizes } from "./deprecatedSizes";

const { size } : { size: ISizes } = theme.natura.light;

export const sizes : ISizes = {
  ...size,
  ...deprecatedSizes,
};
