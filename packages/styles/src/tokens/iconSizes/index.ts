/* eslint-disable sort-keys */
import { IIconSizes } from "./IIconSizes";
import { sizes } from "../sizes";

export const iconSizes: IIconSizes = {
  micro: sizes.small,
  tiny: sizes.standard,
  small: sizes.semi,
  standard: sizes.medium,
  medium: sizes.large,
  large: sizes.largeX,

  /**
   * @deprecated `largex` key is deprecated since version 0.19 and will be deleted in version 1.0.
   * In case you need `largeX` token, please use `largeX` (with capital X) instead of `largex`.
   */
  largex: sizes.huge,

  /**
   * @since 0.19.0
   */
  largeX: sizes.huge,

  /**
   * @deprecated `largexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
   * In case you need `largeXX` token, please use `largeXX` (with capital X) instead of `largexx`.
   */
  largexx: sizes.hugeX,

  /**
   * @since 0.19.0
   */
  largeXX: sizes.hugeX,
  huge: sizes.hugeXX,

  /**
   * @deprecated `hugex` key is deprecated since version 0.19 and will be deleted in version 1.0.
   * In case you need `hugeX` token, please use `hugeX` (with capital X) instead of `hugex`.
   */
  hugex: sizes.hugeXXX,

  /**
   * @since 0.19.0
   */
  hugeX: sizes.hugeXXX,

  /**
   * @deprecated `hugexx` key is deprecated since version 0.19 and will be deleted in version 1.0.
   * In case you need `hugeXX` token, please use `hugeXX` (with capital X) instead of `hugexx`.
   */
  hugexx: sizes.veryHuge,

  /**
   * @since 0.19.0
   */
  hugeXX: sizes.veryHuge,
};
