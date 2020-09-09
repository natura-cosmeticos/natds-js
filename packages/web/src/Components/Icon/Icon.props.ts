import { iconNames } from "@naturacosmeticos/natds-icons";
import { IIconSizes } from "@naturacosmeticos/natds-styles";

export type IconName = keyof typeof iconNames;

export interface IIconProps {
  className?: string;

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
