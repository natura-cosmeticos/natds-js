import tokens from "../../tokens";
import {sizes} from "../../tokens/sizes";
import {avatarSizes} from "../../tokens/avatarSizes";
import {buttonSizes} from "../../tokens/buttonSizes";
import {iconSizes} from "../../tokens/iconSizes";
import {spacing} from "../../tokens/spacing";
import {typography} from "../avon/typography";
import {fontSize} from "../../tokens/fontSize";
import {elevation} from "../../tokens/elevation";
import {overrides} from "./overrides";

export const baseTheme = {
  avatarSizes,
  buttonSizes,
  iconSizes,
  overrides,
  shape: {

    /**
     * @todo refactor badgeBorderRadius to get value from token.radius
     */
    badgeBorderRadius: 100,
    borderRadius: tokens.radius.medium,
  },
  shadows: elevation,
  sizes,
  spacing: spacing.spacing,
  typography: {
    ...fontSize,
    ...typography,
  },
};
