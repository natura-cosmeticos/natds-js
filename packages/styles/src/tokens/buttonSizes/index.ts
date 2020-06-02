import { IButtonSizes } from "./IButtonSizes";
import { sizes } from "../sizes";

export const buttonSizes: IButtonSizes = {
  small: {
    paddingTop: sizes.none,
    paddingRight: sizes.tiny,
    paddingBottom: sizes.none,
    paddingLeft: sizes.tiny,
    height: sizes.semi
  },
  medium: {
    paddingTop: sizes.none,
    paddingRight: 12,
    paddingBottom: sizes.none,
    paddingLeft: 12,
    height: sizes.semix
  },
  large: {
    paddingTop: sizes.none,
    paddingRight: sizes.small,
    paddingBottom: sizes.none,
    paddingLeft: sizes.small,
    height: sizes.medium
  }
};
