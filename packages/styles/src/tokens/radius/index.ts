/* eslint-disable sort-keys */
import themes from "@naturacosmeticos/natds-themes";
import { IRadius } from "./IRadius";

const { borderRadius } = themes.natura.light;

/**
 * @deprecated since 0.19.0.
 * Please use `borderRadius` directly from your theme
 */
export const radius: IRadius = {
  ...borderRadius,
  circle: "50%",
};
