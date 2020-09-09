import { AvatarProps as MaterialAvatarProps } from "@material-ui/core/Avatar/Avatar";
import { IAvatarSizes } from "@naturacosmeticos/natds-styles";

export type AvatarColor = "primary" | "secondary" | "default" | string;
export type AvatarSize = keyof IAvatarSizes;

/**
 * @deprecated `rounded` and `square` variants are deprecated since version 0.19.
 * They will be removed at version 1.0, when all Avatar variants will be `circle` by default.
 */
export type AvatarVariant = "circle" | "rounded" | "square";

export interface IAvatarProps extends Omit<MaterialAvatarProps, "variant"> {

  /**
   * The color of the Avatar, using the tokens from the current theme
   *
   * @default "default"
   * @optional
   * @type AvatarColors
   */
  color?: AvatarColor;

  /**
   * The possible sizes of the Avatar
   *
   * @default "standard"
   * @optional
   * @type AvatarSizes
   */
  size?: AvatarSize;

  /**
   * The shape of the avatar.
   *
   * @deprecated `variant` property is deprecated since 0.19.0.
   * It will be removed on 1.0 and all Avatar variants will be `circle` by default.
   */
  variant?: AvatarVariant;

}
