import { avatarSizes } from "./tokens/avatarSizes";
import { buttonSizes } from "./tokens/buttonSizes";
import { colorTokens } from "./tokens/colors/themeBound";
import { elevation } from "./tokens/elevation";
import { fontSize } from "./tokens/fontSize";
import { iconSizes } from "./tokens/iconSizes";
import { natura } from "./tokens/colors/natura";
import { opacity } from "./tokens/opacity";
import { overlay } from "./tokens/overlay";
import { radius } from "./tokens/radius";
import { sizes } from "./tokens/sizes";
import { spacing } from "./tokens/spacing";

export default {
  avatarSizes,
  buttonSizes,

  /**
   * @deprecated `colorTokens` are deprecated since version v0.20 and will be removed on v1.0.
   * Please use `theme.${brand}.${mode}.color`
   */
  colorTokens,

  /**
   * @deprecated `colors` is deprecated since version v0.20 and will be removed on v1.0.
   * Please use `theme.natura.${mode}.color`
   */
  colors: { natura },
  elevation,
  fontSize,
  iconSizes,
  opacity,
  overlay,
  radius,
  sizes,
  spacing,
};
