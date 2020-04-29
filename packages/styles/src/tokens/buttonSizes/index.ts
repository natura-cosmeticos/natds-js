import { IButtonSizes } from "./IButtonSizes";
import { sizes } from "../sizes";

export const buttonSizes: IButtonSizes = {
  small: {
    paddingTop: sizes.tiny,
    paddingRight: sizes.tiny,
    paddingBottom: sizes.tiny,
    paddingLeft: sizes.tiny,
    minHeight: sizes.semi
  },
  medium: {
    paddingTop: 12,
    paddingRight: sizes.small,
    paddingBottom: 12,
    paddingLeft: sizes.small,
    minHeight: sizes.semix
  },
  large: {
    paddingTop: sizes.small,
    paddingRight: sizes.small,
    paddingBottom: sizes.small,
    paddingLeft: sizes.small,
    minHeight: sizes.medium
  }
};
