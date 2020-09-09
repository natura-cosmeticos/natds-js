import { IDeprecatedIconSizes } from "./IDeprecatedIconSizes";

export interface IIconSizes extends IDeprecatedIconSizes {
  micro: number;
  tiny: number;
  small: number;
  standard: number;
  medium: number;
  large: number;

  /**
   * @since 0.19.0
   */
  largeX: number;

  /**
   * @since 0.19.0
   */
  largeXX: number;
  huge: number;

  /**
   * @since 0.19.0
   */
  hugeX: number;

  /**
   * @since 0.19.0
   */
  hugeXX: number;
}
