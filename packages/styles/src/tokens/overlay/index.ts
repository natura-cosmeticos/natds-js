import themes from "@naturacosmeticos/natds-themes";
import { IOverlay } from "./IOverlay";

/**
 * @deprecated `overlay` is deprecated since v0.20 and will be removed at v1.0.
 * Please use `mediumHigh` opacity token from your theme.
 */
export const overlay: IOverlay = {
  solidBlack: themes.natura.light.opacity.mediumHigh,
};
