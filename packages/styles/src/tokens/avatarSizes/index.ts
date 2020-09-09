/* eslint-disable sort-keys */
import { IAvatarSizes } from "./IAvatarSizes";
import { sizes } from "../sizes";

/**
 * @todo move/refactor to natds-themes
 */
export const avatarSizes: IAvatarSizes = {
  tiny: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: ".625rem",
    size: sizes.standard,
  },
  small: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: ".875rem",
    size: sizes.semi,
  },
  standard: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: "1rem",
    size: sizes.semiX,
  },
  large: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: "1rem",
    size: sizes.medium,
  },
  huge: {

    /**
     * @todo move/refactor to natds-themes
     */
    fontSize: "1.5rem",
    size: sizes.largeXX,
  },
};
