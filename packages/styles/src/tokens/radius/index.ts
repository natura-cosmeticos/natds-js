/* eslint-disable sort-keys */
import { IRadius } from "./IRadius";

/**
 * @deprecated since 0.19.0.
 * Please use `borderRadius` directly from your theme
 */
export const radius: IRadius = {
  none: 0,

  /**
   * @todo refactor/move to `natds-themes`
   */
  circle: "50%",
  small: 2,
  medium: 4,
  large: 8,
};
