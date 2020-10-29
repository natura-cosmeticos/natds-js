import { ButtonProps } from "@material-ui/core/Button";
import { PropTypes } from "@material-ui/core";
import * as React from "react";

export type ButtonColor = PropTypes.Color;
export type ButtonSize = "small" | "medium" | "large";
export type ButtonVariant = "text" | "outlined" | "contained";

export interface IButtonProps extends Omit<ButtonProps, "translate"> {

  /**
   * The content of the button
   *
   * @optional
   * @type node
   */
  children?: ButtonProps["children"]

  /**
   * Override or extend the styles applied to the component.
   *
   * See [Material Button CSS API](https://material-ui.com/api/button/#css) for more details.
   *
   * @optional
   * @see https://material-ui.com/api/button/#css
   * @type object
   */
  classes?: ButtonProps["classes"]

  /**
   * The color of the `Button` component. It supports those theme colors that make sense for this component.
   *
   * @default "default"
   * @optional
   * @type "default" | "inherit" | "primary" | "secondary"
   */
  color?: ButtonProps["color"]

  /**
   * The component used for the root node. Either a `string` to use a DOM element or a component.
   *
   * @default "button"
   * @optional
   * @type element
   */
  component?: React.ReactElement

  /**
   *
   * If `true`, the button will be disabled.
   *
   * @default false
   * @type bool
   */
  disabled?: ButtonProps["disabled"]

  /**
   * If `true`, no elevation is used.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableElevation?: ButtonProps["disableElevation"]

  /**
   * If `true`, the keyboard focus ripple will be disabled. `disableRipple` must also be `true`.
   *
   * @default false
   * @optional
   * @type bool
   */
  disableFocusRipple?: ButtonProps["disableFocusRipple"]

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   *
   * @optional
   * @type bool
   */
  disableRipple?: ButtonProps["disableRipple"]

  /**
   * Element placed after the children.
   *
   * @optional
   * @type node
   */
  endIcon?: ButtonProps["endIcon"]

  /**
   * If `true`, the `Button` will take up the full width of its container.
   *
   * @default false
   * @optional
   * @type bool
   */
  fullWidth?: ButtonProps["fullWidth"];

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   *
   * @optional
   * @type string
   */
  href?: ButtonProps["href"]

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   *
   * @todo check if "small" size is still on UI Specs
   * @type "small" | "medium" | "large"
   */
  size?: ButtonProps["size"]

  /**
   * Element placed before the children.
   *
   * @optional
   * @type node
   */
  startIcon?: ButtonProps["startIcon"]

  /**
   * The variant to use.
   *
   * @optional
   * @type "contained" | "outlined" | "text"
   */
  variant?: ButtonProps["variant"]
}
