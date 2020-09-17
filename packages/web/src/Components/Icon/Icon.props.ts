import { iconNames } from "@naturacosmeticos/natds-icons";
import { IIconSizes } from "@naturacosmeticos/natds-styles";
import { IconProps } from "@material-ui/core";

export type IconColor = "inherit" | "primary" | "secondary" | "default" | "error" | "disabled" | "action"
export type IconName = keyof typeof iconNames;
export type IconSize = keyof IIconSizes;

export interface IIconProps extends Omit<IconProps, "children" | "fontSize" | "name"> {

  /**
   * The icon name.
   *
   * @required
   * @todo Deprecate `name` prop soon, because it messes with `name` attribute from HTML
   * @type IconName
   */
  name: IconName;

  /**
   * The icon size. It is `standard` by default.
   *
   * @optional
   * @type IconSize
   */
  size?: IconSize;
}
