import iconNames from "@naturacosmeticos/natds-icons/dist/natds-icons.json";
import { IIconSizes } from "@naturacosmeticos/natds-styles";
import { IconProps } from "@material-ui/core";

export type IconColor = "inherit" | "primary" | "secondary" | "default" | "error" | "disabled" | "action"
export type IconName = keyof typeof iconNames;

export interface IIconProps extends Omit<IconProps, "children" | "fontSize"> {

  /**
   * The icon name
   * @required
   */
  name: IconName;

  /**
   * The icon size
   *
   * @default "standard"
   */
  size?: keyof IIconSizes;
}
