/* eslint-disable sort-keys */
import { IButtonSizes } from "./IButtonSizes";
import { sizes } from "../sizes";

/**
 * Button size tokens are used by MuiButton override, for properties `root`, `sizeLarge`, `sizeSmall`
 */
export const buttonSizes: IButtonSizes = {
  small: {
    paddingTop: sizes.none,
    paddingRight: sizes.tiny,
    paddingBottom: sizes.none,
    paddingLeft: sizes.tiny,
    height: sizes.semi,
  },
  medium: {

    /**
     * @todo remove warning: 'semiX' should probably not be assigned to 'height'
     */
    height: sizes.semiX,
    paddingTop: sizes.none,
    paddingRight: sizes.small - sizes.micro,
    paddingBottom: sizes.none,
    paddingLeft: sizes.small - sizes.micro,
  },
  large: {
    paddingTop: sizes.none,
    paddingRight: sizes.small,
    paddingBottom: sizes.none,
    paddingLeft: sizes.small,
    height: sizes.medium,
  },
};
