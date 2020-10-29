import * as React from "react";
import { ButtonGroupProps } from "@material-ui/core/ButtonGroup";

export type ButtonGroupColor = "default" | "primary" | "secondary";
export interface IButtonGroupProps extends ButtonGroupProps {

  /**
   * The content of the button group.
   *
   * @required
   * @type node
   */
  children: ButtonGroupProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [CSS API](https://material-ui.com/pt/api/button-group/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/pt/api/button-group/#css
   * @type object
   */
  classes?: ButtonGroupProps["classes"]

  /**
   * The color of the component.
   *
   * It supports those theme colors that make sense for this component.
   *
   * @default "default"
   * @optional
   * @todo Check if we should add "inherit" as color
   * @type "default" | "primary" | "secondary"
   */
  color?: ButtonGroupColor;

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   * If `true`, the buttons will be disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disabled?: ButtonGroupProps["disabled"]

  /**
   * If `true`, no elevation is used.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableElevation?: ButtonGroupProps["disableElevation"]

  /**
   * If true, the button keyboard focus ripple will be disabled.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableFocusRipple?: ButtonGroupProps["disableFocusRipple"]

  /**
   * If `true`, the button ripple effect will be disabled.
   *
   * @optional
   * @type bool
   */
  disableRipple?: ButtonGroupProps["disableRipple"]

  /**
   * If `true`, the buttons will take up the full width of its container.
   *
   * @default false
   * @optional
   * @todo Check if this variant should be kept on future versions
   * @type bool
   */
  fullWidth?: ButtonGroupProps["fullWidth"]

  /**
   * The group orientation (layout flow direction).
   *
   * @default "horizontal"
   * @optional
   * @todo Check if this variant should be kept in future versions.
   * @type "horizontal" | "vertical"
   */
  orientation?: ButtonGroupProps["orientation"]

  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   *
   * @default "medium"
   * @optional
   * @type "small" | "medium" | "large"
   */
  size?: ButtonGroupProps["size"]

  /**
   * The variant to use.
   *
   * @optional
   * @todo Check if "outlined" or "text" should be the default
   * @type "text" | "outlined" | "contained"
   */
  variant?: ButtonGroupProps["variant"]
}
