import { Opacity } from "@naturacosmeticos/natds-themes";

export interface IOpacity extends Opacity {

  /**
   * @deprecated `00` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.transparent` directly from a theme.
   */
  "00": number;

  /**
   * @deprecated `04` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.lower` directly from a theme.
   */
  "04": number;

  /**
   * @deprecated `08` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.veryLow` directly from a theme.
   */
  "08": number;

  /**
   * @deprecated `12` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.low` directly from a theme.
   */
  "12": number;

  /**
   * @deprecated `16` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.mediumLow` directly from a theme.
   */
  "16": number;

  /**
   * @deprecated `24` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.disabledLow` directly from a theme.
   */
  "24": number;

  /**
   * @deprecated `32` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.disabled` directly from a theme.
   */
  "32": number;

  /**
   * @deprecated `48` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.medium` directly from a theme.
   */
  "48": number;

  /**
   * @deprecated `56` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.mediumHigh` directly from a theme.
   */
  "56": number;

  /**
   * @deprecated `64` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.high` directly from a theme.
   */
  "64": number;

  /**
   * @deprecated `80` as opacity token name is deprecated since 0.19. It will be removed at 1.0.
   * Please use `opacity.veryHigh` directly from a theme.
   */
  "80": number;
}
