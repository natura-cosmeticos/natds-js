/* eslint-disable sort-keys */
import hexToRgba from "hex-to-rgba";
import { IElevation } from "./IElevation";

/**
 * Defines 16% opacity for use in color
 *
 * Opacities must be a multiple of 8.
 */
const shadowColorAlpha = 0.16;
const shadowColor = hexToRgba("#000000", shadowColorAlpha);

export const elevation: IElevation = {
  0: "none",
  1: `0 1px 1px 0 ${shadowColor}`,
  2: `0 2px 2px 0 ${shadowColor}`,
  3: `0 3px 4px 0 ${shadowColor}`,
  4: `0 4px 5px 0 ${shadowColor}`,
  6: `0 6px 10px 0 ${shadowColor}`,
  8: `0 8px 10px 0 ${shadowColor}`,
  9: `0 9px 12px 0 ${shadowColor}`,
  12: `0 12px 17px 0 ${shadowColor}`,
  16: `0 16px 24px 0 ${shadowColor}`,
  24: `0 24px 38px 0 ${shadowColor}`,
};
