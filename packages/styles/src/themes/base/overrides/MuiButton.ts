import {buttonSizes} from "../../../tokens/buttonSizes";
import {fontSize} from "../../../tokens/fontSize";

export const MuiButton = {
  outlined: {
    padding: null,
  },
  root: {
    ...buttonSizes.medium,
    ...fontSize.subtitle2,
  },
  sizeLarge: {
    ...buttonSizes.large,
    ...fontSize.subtitle2,
  },
  sizeSmall: {
    ...buttonSizes.small,
    ...fontSize.subtitle2,
  },
  text: {
    padding: null,
  },
};
