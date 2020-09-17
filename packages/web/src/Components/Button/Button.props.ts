import { ButtonProps } from "@material-ui/core/Button";
import { PropTypes } from "@material-ui/core";

export type ButtonColor = PropTypes.Color;
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "text" | "outlined" | "contained";
export interface IButtonProps extends Omit<ButtonProps, "translate"> {
  fullWidth?: boolean;
}
