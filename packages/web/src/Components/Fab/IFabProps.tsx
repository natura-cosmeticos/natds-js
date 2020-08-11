import {FabProps} from "@material-ui/core/Fab";

export type IFabColor = "primary" | "secondary" | "light";
export type IFabSize = "small" | "medium" | "large";
export type IFabVariant = "round" | "extended";

export interface IFabProps extends Pick<FabProps,
  | "children"
  | "disabled"
  | "disableFocusRipple"
  | "href"
  | "size"
  | "variant"> {

  /**
   * @optional
   * The color of the component
   */
  color ?: IFabColor;
}

export const colors: Record<IFabColor, IFabColor> = {
  primary: "primary",
  secondary: "secondary",
  light: "light",
};

export const defaultProps = {
  color: colors.primary,
  disabled: false,
};

export const sizes: Record<IFabSize, IFabSize> = {
  small: "small",
  medium: "medium",
  large: "large",
};

export const variants: Record<IFabVariant, IFabVariant> = {
  round: "round",
  extended: "extended",
};
