/* eslint-disable sort-keys */
import themes from "@naturacosmeticos/natds-themes";
import { IElevation } from "./IElevation";

const { elevation: naturaLightElevation } = themes.natura.light;

export const elevation: IElevation = {
  ...naturaLightElevation,

  /**
   * @deprecated elevation token `0` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `none` elevation token from a theme, like Natura light.
   */
  0: naturaLightElevation.none,

  /**
   * @deprecated elevation token `1` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `micro` elevation token from a theme, like Natura light.
   */
  1: naturaLightElevation.micro,

  /**
   * @deprecated elevation token `2` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `tiny` elevation token from a theme, like Natura light.
   */
  2: naturaLightElevation.tiny,

  /**
   * @deprecated elevation token `3` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `small` elevation token from a theme, like Natura light.
   */
  3: naturaLightElevation.small,

  /**
   * @deprecated elevation token `4` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `medium` elevation token from a theme, like Natura light.
   */
  4: naturaLightElevation.medium,

  /**
   * @deprecated elevation token `6` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `large` elevation token from a theme, like Natura light.
   */
  6: naturaLightElevation.large,

  /**
   * @deprecated elevation token `8` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `largeX` elevation token from a theme, like Natura light.
   */
  8: naturaLightElevation.largeX,

  /**
   * @deprecated elevation token `9` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `largeXX` elevation token from a theme, like Natura light.
   */
  9: naturaLightElevation.largeXX,

  /**
   * @deprecated elevation token `12` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `huge` elevation token from a theme, like Natura light.
   */
  12: naturaLightElevation.huge,

  /**
   * @deprecated elevation token `16` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `hugeX` elevation token from a theme, like Natura light.
   */
  16: naturaLightElevation.hugeX,

  /**
   * @deprecated elevation token `24` is deprecated since v0.20 and will be removed at v1.0.
   * Please use `hugeXX` elevation token from a theme, like Natura light.
   */
  24: naturaLightElevation.hugeXX,
};
