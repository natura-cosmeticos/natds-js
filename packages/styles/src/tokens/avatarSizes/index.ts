import { IAvatarSizes } from "./IAvatarSizes";
import { sizes } from "../sizes";

export const avatarSizes: IAvatarSizes = {
  tiny: {
    size: sizes.standard,
    fontSize: ".625rem"
  },
  small: {
    size: sizes.semi,
    fontSize: ".875rem"
  },
  standard: {
    size: sizes.semix,
    fontSize: "1rem"
  },
  large: {
    size: sizes.medium,
    fontSize: "1rem"
  },
  huge: {
    size: sizes.largexx,
    fontSize: "1.5rem"
  }
};
