import { IDeprecatedSizes } from "./IDeprecatedSizes";

export interface ISizes extends IDeprecatedSizes {
  none: number;
  micro: number;
  tiny: number;
  small: number;
  standard: number;
  semi: number;

  /**
   * @since 0.19.0
   */
  semiX: number;
  medium: number;

  /**
   * @since 0.19.0
   */
  mediumX: number;
  large: number;

  /**
   * @since 0.19.0
   */
  largeX: number;

  /**
   * @since 0.19.0
   */
  largeXX: number;

  /**
   * @since 0.19.0
   */
  largeXXX: number;
  huge: number;

  /**
   * @since 0.19.0
   */
  hugeX: number;

  /**
   * @since 0.19.0
   */
  hugeXX: number;

  /**
   * @since 0.19.0
   */
  hugeXXX: number;

  /**
   * @since 0.19.0
   */
  veryHuge: number;
}
