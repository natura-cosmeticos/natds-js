import { AvatarVariant } from "../Avatar.props";

/**
 * @deprecated variant is deprecated since 0.19.
 * It will be removed at version 1.0, when all Avatar variants will be `circle` by default.
 */
export const variants : Record<AvatarVariant, AvatarVariant> = {
  circle: "circle",

  /**
   * @deprecated `rounded` variant is deprecated since 0.19.
   * It will be removed at version 1.0, when all Avatar variants will be `circle` by default.
   */
  rounded: "rounded",

  /**
   * @deprecated `square` variant is deprecated since 0.19.
   * It will be removed at version 1.0, when all Avatar variants will be `circle` by default.
   */
  square: "square",
};
