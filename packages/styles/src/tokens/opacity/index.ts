/* eslint-disable sort-keys */
import themes from "@naturacosmeticos/natds-themes";
import { IOpacity } from "./IOpacity";

const { opacity: naturaLightOpacity } = themes.natura.light;

export const opacity: IOpacity = {
  ...naturaLightOpacity,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.transparent` directly from a theme.
   */
  "00": naturaLightOpacity.transparent,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.lower` directly from a theme.
   */
  "04": naturaLightOpacity.lower,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.veryLow` directly from a theme.
   */
  "08": naturaLightOpacity.veryLow,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.low` directly from a theme.
   */
  12: naturaLightOpacity.low,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.mediumLow` directly from a theme.
   */
  16: naturaLightOpacity.mediumLow,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.disabledLow` directly from a theme.
   */
  24: naturaLightOpacity.disabledLow,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.disabled` directly from a theme.
   */
  32: naturaLightOpacity.disabled,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.medium` directly from a theme.
   */
  48: naturaLightOpacity.medium,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.mediumHigh` directly from a theme.
   */
  56: naturaLightOpacity.mediumHigh,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.high` directly from a theme.
   */
  64: naturaLightOpacity.high,

  /**
   * @deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.veryHigh` directly from a theme.
   */
  80: naturaLightOpacity.veryHigh,
};
