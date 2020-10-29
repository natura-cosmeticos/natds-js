import { iconNames } from "@naturacosmeticos/natds-icons";
import { IIconSizes } from "@naturacosmeticos/natds-styles";
import { IconProps } from "@material-ui/core/Icon";

/**
 * @todo add support to color tokens from Natura & Co. themes
 */
export type IconColor =
  "default" |
  "error" |
  "inherit" |
  "primary" |
  "secondary";
export type IconName = keyof typeof iconNames;
export type IconSize = keyof IIconSizes;

export interface IIconProps extends Omit<IconProps, "children" | "fontSize" | "name"> {

  /**
   * @todo add support to color tokens from Natura & Co. themes
   * @type "default" | "error" | "inherit" | "primary" | "secondary"
   */
  color?: IconColor;

  /**
   * The Icon name
   *
   * @default "filled-default-mockup"
   * @required
   * @todo Deprecate `name` prop soon, because it messes with `name` attribute from HTML
   * @type IconName
   */
  name: IconName;

  /**
   * The `Icon` size. It is `standard` by default.
   *
   * @default "standard"
   * @optional
   * @todo Remove deprecated sizes from type enum
   * @type "micro" | "tiny" | "small" | "standard" | "medium" | "large" | "largeX" | "largeXX" | "huge" | "hugeX" | "hugeXX" | "largex" | "largexx" | "hugex" | "hugexx"
   */
  size?: IconSize;
}
